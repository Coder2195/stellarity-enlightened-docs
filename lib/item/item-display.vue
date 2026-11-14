<script setup lang="ts">
import { Identifier, ItemRenderer, ItemStack, NbtString } from "deepslate";
import { onMounted, useTemplateRef } from "vue";
import { ITEMS } from "../constants";
import { ResourceManager } from "../resources";

const input = useTemplateRef<HTMLCanvasElement>("canvas");
const props = defineProps<{
	itemId?: string;
}>();

onMounted(async () => {
	const gl = input.value?.getContext("webgl2", {
		preserveDrawingBuffer: true,
	});
	if (!gl) return;

	const resources = new ResourceManager();

	await resources.loadFromZip("mod-data/assets.zip");

	const itemId = Identifier.parse(
		props.itemId || ITEMS[Math.floor(Math.random() * ITEMS.length)],
	);
	const item = new ItemStack(
		itemId,
		2,
		new Map(
			Object.entries({
				"minecraft:item_model": new NbtString(itemId.toString()),
			}),
		),
	);
	const itemRenderer = new ItemRenderer(gl, item, resources, {
		display_context: "gui",
	});

	gl.clearColor(0, 0, 0, 0);
	itemRenderer.drawItem();
});
</script>

<template>
  <canvas ref="canvas" width="512px" height="512px"></canvas>
</template>