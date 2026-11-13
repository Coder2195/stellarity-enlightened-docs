import { readFileSync } from "node:fs";
import { defineLoader } from "vitepress";
import type { BiomeExtended } from "./types";

declare const data: Record<string, BiomeExtended>;

export { data };

export default defineLoader({
	watch: ["../public/mod-data/data/stellarity/worldgen/biome/**.json"],
	async load(filePaths): Promise<Record<string, BiomeExtended>> {
		const map: Record<string, BiomeExtended> = {};
		for (const filePath of filePaths) {
			map[
				(filePath.split("/").at(-1) || "")
					.replace("_", "-")
					.replace(".json", "")
			] = JSON.parse(readFileSync(filePath, "utf-8"));
		}
		return map;
	},
});
