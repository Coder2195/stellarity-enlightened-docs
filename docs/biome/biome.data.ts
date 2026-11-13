import { readFileSync } from "node:fs";
import { defineLoader } from "vitepress";
import type { BiomeExtended, BiomeExtension } from "./types";

const BIOME_EXTENSIONS: Record<string, BiomeExtension> = {
	"end-barrens": {
		image:
			"https://cdn.modrinth.com/data/45WspQ04/images/8b81d6b9aa97656f4f7ef0be0b74271b91734403.png",
	},
	"end-midlands": {
		image:
			"https://cdn.modrinth.com/data/45WspQ04/images/baa6c165a066b48e7075f334065bd9a2c3b0a027.png",
	},
	"end-highlands": {
		image:
			"https://cdn.modrinth.com/data/45WspQ04/images/fdec27d30360a798c1f80044c605d65ed2ca27e6.png",
	},
	"amethyst-forest": {
		image:
			"https://cdn.modrinth.com/data/45WspQ04/images/31ca10c366dac10b882a61da9f1f9d1a056a23ce.png",
	},
	"ashfall-deltas": {
		image:
			"https://cdn.modrinth.com/data/45WspQ04/images/632661a4752db04d9b3d0018df0570df0a83940d.png",
	},
	"crystal-crags": {
		image:
			"https://cdn.modrinth.com/data/45WspQ04/images/7df014abdaf5526ace8263b3b93f7fbbd9c26159.png",
	},
	"end-shrubland": {
		image:
			"https://cdn.modrinth.com/data/45WspQ04/images/21a12fe819f7c8b6fe6aecbb683bddc43aad2165.png",
	},
	"end-wilds": {
		image:
			"https://cdn.modrinth.com/data/45WspQ04/images/56de8f97754d82a6094ae80c3d119cbe054e7164.png",
	},
	"ender-wastes": {
		image:
			"https://cdn.modrinth.com/data/45WspQ04/images/0a6ff5d9a8af1d76c5e8664b826a74f05c4ac162.png",
	},
	"fiery-hills": {
		image:
			"https://cdn.modrinth.com/data/45WspQ04/images/3c015482326cb3efba22f409f2f6ed42fb0638cc.png",
	},
	"flesh-tundra": {
		image:
			"https://cdn.modrinth.com/data/45WspQ04/images/d66ec61098c465212efa8272a3194743fba50c1c.png",
	},
	"frosted-valley": {
		image:
			"https://cdn.modrinth.com/data/45WspQ04/images/980789411e9f359cac1306efb1f0877d962912e0.png",
	},
	"frozen-marsh": {
		image:
			"https://cdn.modrinth.com/data/45WspQ04/images/bb72f09a974e2547f45185bbba48f2d721f84599.png",
	},
	"frozen-shrubland": {
		image:
			"https://cdn.modrinth.com/data/45WspQ04/images/c722dc65218a33a1ebd6f7e5cbd09e673061de05.png",
	},
	"frozen-spikes": {
		image:
			"https://cdn.modrinth.com/data/45WspQ04/images/f77dcc051ef570c8eaead25078f4c9d700cadcc4.png",
	},
	"hallowed-tundra": {
		image:
			"https://cdn.modrinth.com/data/45WspQ04/images/3f4a3be8e480bc49ff2e338fb8a603e9a8e1cb95.png",
	},
	"prismarine-forest": {
		image:
			"https://cdn.modrinth.com/data/45WspQ04/images/6725c59bb2653ef561355e7b65de9e07b78653de.png",
	},
	"prismatic-dunes": {
		image:
			"https://cdn.modrinth.com/data/45WspQ04/images/8e19d8b71cfd620756f59ba8bbb92bc991c359c3.png",
	},
	"the-hallow": {
		image:
			"https://cdn.modrinth.com/data/45WspQ04/images/ca7f137817eb03b66aaf4e61641cc27d2020a516.png",
	},
	"the-nest": {
		image:
			"https://cdn.modrinth.com/data/45WspQ04/images/0509bab16403aa9ba0777362c31a1fa46585b12f.png",
	},
	"warped-marsh": {
		image:
			"https://cdn.modrinth.com/data/45WspQ04/images/9cc55aa4bdcc262d52f32edd60a2f4d4ca560a1e.png",
	},
};

declare const data: Record<string, BiomeExtended>;

export { data };

export default defineLoader({
	watch: ["../public/mod-data/data/stellarity/worldgen/biome/**.json"],
	async load(filePaths): Promise<Record<string, BiomeExtended>> {
		const map: Record<string, BiomeExtended> = {};
		for (const filePath of filePaths) {
			const key = (filePath.split("/").at(-1) || "")
				.replace("_", "-")
				.replace(".json", "");
			map[key] = {
				...JSON.parse(readFileSync(filePath, "utf-8")),
				...BIOME_EXTENSIONS[key],
			};
		}

		return map;
	},
});
