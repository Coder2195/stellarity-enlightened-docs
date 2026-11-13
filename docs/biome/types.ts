export interface Biome {
	attributes: Attributes;
	carvers: Carver[];
	downfall: number;
	effects: Effects;
	features: Array<string[]>;
	has_precipitation: boolean;
	temperature: number;
	temperature_modifier?: string;
}

export interface Attributes {
	"minecraft:audio/ambient_sounds": MinecraftAudioAmbientSounds;
	"minecraft:gameplay/creature_world_gen_spawn_probability"?: number;
	"minecraft:gameplay/natural_mob_spawns": MinecraftGameplayNaturalMobSpawns;
	"minecraft:visual/ambient_light_color": MinecraftVisualAmbientLightColor;
	"minecraft:visual/fog_color": MinecraftVisualFogColor;
	"minecraft:visual/sky_color": MinecraftVisualSkyColor;
	"minecraft:visual/water_fog_color": string;
	"minecraft:gameplay/surface_slime_spawn_chance"?: number;
	"minecraft:visual/ambient_particles"?: MinecraftVisualAmbientParticle[];
}

export interface MinecraftAudioAmbientSounds {
	additions: Additions;
	loop: Loop;
	mood: Mood;
}

export interface Additions {
	sound: SoundClass | string;
	tick_chance: number;
}

export interface SoundClass {
	sound_id: string;
}

export type Loop =
	| "stellarity:ambient.the_end.heavenly_grim"
	| "stellarity:ambient.the_end.dark"
	| "stellarity:ambient.the_end.heavenly_blessed"
	| "stellarity:ambient.the_end.dark_calm";

export interface Mood {
	block_search_extent: number;
	offset: number;
	sound: SoundClass | string;
	tick_delay: number;
}

export interface MinecraftGameplayNaturalMobSpawns {
	argument: Argument;
	modifier: Modifier;
}

export interface Argument {
	spawn_costs: SpawnCosts;
	spawns_by_category: SpawnsByCategory;
}

export interface SpawnCosts {
	"minecraft:enderman"?: MinecraftEnderman;
	"stellarity:voided_skeleton"?: MinecraftEnderman;
	"stellarity:voided_zombie"?: MinecraftEnderman;
	"minecraft:phantom"?: MinecraftEnderman;
	"minecraft:magma_cube"?: MinecraftEnderman;
	"stellarity:voided_silverfish"?: MinecraftEnderman;
	"stellarity:pixie"?: MinecraftEnderman;
}

export interface MinecraftEnderman {
	charge: number;
	energy_budget: number;
}

export interface SpawnsByCategory {
	creature?: Ambient[];
	monster?: Monster[];
	ambient?: Ambient[];
}

export interface Ambient {
	type: string;
	count: CountClass;
	weight: number;
}

export interface CountClass {
	type: Type;
	max_inclusive: number;
	min_inclusive: number;
}

export type Type = "minecraft:uniform";

export interface Monster {
	type: string;
	count: CountClass | number;
	weight: number;
}

export type Modifier = "overlay";

export type MinecraftVisualAmbientLightColor = "#3f473f" | "#3f472f";

export interface MinecraftVisualAmbientParticle {
	particle: Particle;
	probability: number;
}

export interface Particle {
	type: string;
}

export type MinecraftVisualFogColor = "#000000" | "#c0d8ff";

export type MinecraftVisualSkyColor = "#000000" | "#78a7ff" | "#7ba4ff";

export type Carver = "stellarity:ravine" | "stellarity:crack";

export interface Effects {
	foliage_color: string;
	grass_color: string;
	water_color: string;
}
