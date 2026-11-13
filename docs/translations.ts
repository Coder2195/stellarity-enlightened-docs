import { readFileSync } from "node:fs";

export const EN_US: Record<string, string> = JSON.parse(
	readFileSync(
		"docs/public/mod-data/assets/stellarity/lang/en_us.json",
		"utf-8",
	),
);
