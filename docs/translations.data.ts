import { defineLoader } from "vitepress";
import { EN_US } from "./translations";

declare const data: Record<string, string>;

export { data };

export default defineLoader({
	async load(): Promise<Record<string, string>> {
		return EN_US;
	},
});
