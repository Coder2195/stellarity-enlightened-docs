import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Stellarity Enlightened",
	description: "Docs for the Stellarity Enlightened mod",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [{ text: "Docs", link: "/home" }],

		sidebar: [
			{
				text: "Introduction",
				items: [
					{ text: "Home", link: "/home" },
					{ text: "FAQ", link: "/faq" },
				],
			},
		],

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
});
