<script setup lang="ts">

import { useData } from 'vitepress';
import { data as biomes } from './biome.data';
import { computed } from "vue";

const { params } = useData(); 
const biome = computed(() => biomes[params.value?.biome])

</script>


# {{ $params?.title }} {#title}

<img :src="biome.image" :alt="`Preview of the ${ $params?.title }`" />

Temperature: {{ biome.temperature }} 

Downfall: {{ biome.downfall }}

Has Precipitation: {{ biome.has_precipitation  ? "Yes" : "No" }}
