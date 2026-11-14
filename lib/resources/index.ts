import {
	BlockDefinition,
	type BlockDefinitionProvider,
	type BlockFlagsProvider,
	BlockModel,
	type BlockModelProvider,
	type BlockPropertiesProvider,
	Identifier,
	ItemModel,
	type ItemModelProvider,
	type ItemRendererResources,
	type NbtTag,
	type Resources,
	TextureAtlas,
	type TextureAtlasProvider,
} from "deepslate";
import jszip from "jszip";
import blocks from "./blocks.json";

const opaque = new Set(blocks.opaque);

/** stolen from misode */
export class ResourceManager
	implements
		BlockModelProvider,
		BlockDefinitionProvider,
		BlockFlagsProvider,
		TextureAtlasProvider,
		BlockPropertiesProvider,
		ItemRendererResources,
		ItemModelProvider,
		Resources
{
	private blockDefinitions: { [id: string]: BlockDefinition } = {};
	private blockModels: { [id: string]: BlockModel } = {};
	private itemModels: { [id: string]: ItemModel } = {};
	private textures: { [id: string]: Blob } = {};
	private textureAltas: TextureAtlas = TextureAtlas.empty();
	private blocks: Record<
		string,
		{
			default: Record<string, string>;
			properties: Record<string, string[]>;
		}
	> = {};

	public async generateAltas() {
		this.textureAltas = await TextureAtlas.fromBlobs(this.textures);
	}

	public async loadFromZip(url: string) {
		const assetsBuffer = await (await fetch(url)).arrayBuffer();
		const assets = await jszip.loadAsync(assetsBuffer);
		for (const namespace of ["minecraft", "stellarity"]) {
			await this.loadFromFolderJson(
				assets.folder(`${namespace}/models`)!,
				async (id, data) => {
					this.blockModels[new Identifier(namespace, id).toString()] =
						BlockModel.fromJson(data);
				},
			);
			await this.loadFromFolderJson(
				assets.folder(`${namespace}/blockstates`)!,
				async (id, data) => {
					this.blockDefinitions[new Identifier(namespace, id).toString()] =
						BlockDefinition.fromJson(data);
				},
			);
			await this.loadFromFolderPng(
				assets.folder(`${namespace}/textures/`)!,
				async (id, data) => {
					this.textures[new Identifier(namespace, id).toString()] = data;
				},
			);
			await this.loadFromFolderJson(
				assets.folder(`${namespace}/items/`)!,
				async (id, data) => {
					this.itemModels[new Identifier(namespace, id).toString()] =
						ItemModel.fromJson(data.model);
				},
			);
		}

		this.generateAltas();
	}

	private loadFromFolderJson(
		folder: jszip,
		callback: (id: string, data: any) => Promise<void>,
	) {
		const promises: Promise<void>[] = [];
		folder.forEach((path, file) => {
			if (file.dir || !path.endsWith(".json")) return;
			const id = path.replace(/\.json$/, "");
			promises.push(
				file.async("text").then((data) => callback(id, JSON.parse(data))),
			);
		});
		return Promise.all(promises);
	}

	private loadFromFolderPng(
		folder: jszip,
		callback: (id: string, data: Blob) => Promise<void>,
	) {
		const promises: Promise<void>[] = [];
		folder.forEach((path, file) => {
			if (file.dir || !path.endsWith(".png")) return;
			const id = path.replace(/\.png$/, "");
			promises.push(file.async("blob").then((data) => callback(id, data)));
		});
		return Promise.all(promises);
	}

	public getBlockModel(id: Identifier | string): BlockModel | null {
		return this.blockModels[id.toString()];
	}
	public getBlockDefinition(id: Identifier | string) {
		return this.blockDefinitions[id.toString()];
	}
	public getBlockFlags(id: Identifier | string) {
		return {
			opaque: opaque.has(id.toString()),
		};
	}
	public getTextureAtlas(): ImageData {
		return this.textureAltas.getTextureAtlas();
	}
	public getTextureUV(id: Identifier) {
		return this.textureAltas.getTextureUV(id);
	}
	public getPixelSize?(): number {
		// idk?
		return this.textureAltas.getPixelSize();
	}
	public getBlockProperties(
		id: Identifier | string,
	): Record<string, string[]> | null {
		return this.blocks[id.toString()]?.properties ?? null;
	}
	public getDefaultBlockProperties(
		id: Identifier | string,
	): Record<string, string> | null {
		return this.blocks[id.toString()]?.default ?? null;
	}

	public getItemModel(id: Identifier | string): ItemModel | null {
		return this.itemModels[id.toString()];
	}

	public getItemComponents(id: Identifier | string): Map<string, NbtTag> {
		return new Map();
	}
}
