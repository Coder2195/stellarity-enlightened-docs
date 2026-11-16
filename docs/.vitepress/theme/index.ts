import DefaultTheme from "vitepress/theme";
import "./theme.css";

import ImageViewerP from "@miletorix/vitepress-image-viewer";
import "@miletorix/vitepress-image-viewer/style.css";
import type { AppContext } from "vue";

export default {
	extends: DefaultTheme,
	enhanceApp(ctx: AppContext) {
		ImageViewerP(ctx.app, {});
	},
};
