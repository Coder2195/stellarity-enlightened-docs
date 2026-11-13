import { defineConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";
import type { VitePressSidebarOptions } from "vitepress-sidebar/types";

// https://vitepress.dev/reference/site-config

const sidebarConfig: VitePressSidebarOptions = {
	documentRootPath: "/pages",
	collapsed: false,
	capitalizeFirst: true,
};

export default defineConfig(
	withSidebar(
		{
			title: "Stellarity Enlightened",
			description: "Docs for the Stellarity Enlightened mod",
			themeConfig: {
				// https://vitepress.dev/reference/default-theme-config
				nav: [{ text: "Docs", link: "/home" }],

				socialLinks: [
					{
						icon: "github",
						link: "https://github.com/coder2195/stellarity-enlightened",
					},
					{
						icon: "modrinth",
						link: "https://modrinth.com/mod/stellarity-enlightened",
					},
					{
						icon: "curseforge",
						link: "https://www.curseforge.com/minecraft/mc-mods/stellarity-enlightened",
					},
				],
			},
		},
		sidebarConfig,
	),
);
