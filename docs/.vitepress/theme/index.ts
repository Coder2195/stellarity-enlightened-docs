import DefaultTheme from "vitepress/theme";
import "./theme.css";

import ImageViewerP from "@davidingplus/vitepress-image-viewer";
import "@davidingplus/vitepress-image-viewer/style.css";
import type { AppContext } from "vue";

export default {
	extends: DefaultTheme,
	enhanceApp(ctx: AppContext) {
		ImageViewerP(ctx.app);
	},
};
