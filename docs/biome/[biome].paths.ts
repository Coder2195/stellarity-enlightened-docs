import { readFileSync } from "node:fs";
import { defineRoutes } from "vitepress";
import { EN_US } from "../translations";

export default defineRoutes({
	watch: ["../public/mod-data/data/stellarity/worldgen/biome/**.json"],
	paths(watchedFiles) {
		return watchedFiles.map((biomeFile) => {
			const biome = (biomeFile.split("/").at(-1) || "").replace(".json", "");

			const kebabBiome = biome.replace("_", "-");

			return {
				params: {
					biome: kebabBiome,
					title: EN_US[`biome.stellarity.${biome.replace("-", "_")}`],
					data: JSON.parse(readFileSync(biomeFile, "utf-8")),
				},
			};
		});
	},
	transformPageData(pageData, ctx) {},
});
