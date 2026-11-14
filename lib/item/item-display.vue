<script setup lang="ts">
import { Identifier, ItemRenderer, ItemStack } from "deepslate";
import { onMounted, useTemplateRef } from "vue";
import { ResourceManager } from "../resources";

const input = useTemplateRef<HTMLCanvasElement>("canvas");

onMounted(async () => {
	const ctx = input.value?.getContext("webgl");
	if (!ctx) return;

	const resources = new ResourceManager();

	await resources.loadFromZip("mod-data/assets.zip");

	const itemRenderer = new ItemRenderer(
		ctx,
		new ItemStack(new Identifier("minecraft", "dirt"), 1),
		resources,
		{ display_context: "gui" },
	);

	itemRenderer.setViewport(0, 0, 500, 500);
	itemRenderer.drawItem();
	console.log(itemRenderer);
	console.log(resources);
	console.log(
		resources
			.getItemModel("minecraft:dirt")
			?.getMesh(
				new ItemStack(new Identifier("minecraft", "dirt"), 1),
				resources,
				{ display_context: "gui" },
			),
	);
});
</script>

<template>
  <canvas ref="canvas" width="512px" height="512px"></canvas>
</template>