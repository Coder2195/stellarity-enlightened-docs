import { defineRoutes } from "vitepress";
import { EN_US } from "../translations";

export default defineRoutes({
	watch: ["../public/mod-data/data/stellarity/worldgen/biome/**.json"],
	paths(watchedFiles) {
		return watchedFiles.map((biomeFile) => {
			const biome = (biomeFile.split("/").at(-1) || "")
				.replace(".json", "")
				.replace("_", "-");

			return {
				params: { biome },
			};
		});
	},
	transformPageData(pageData, ctx) {
		pageData.frontmatter.title = pageData.title =
			EN_US[`biome.stellarity.${pageData.params?.biome.replace("-", "_")}`];
	},
});
