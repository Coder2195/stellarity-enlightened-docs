<script setup lang="ts">

import { useData } from 'vitepress';
import { data as biomes } from './biome.data';
import { computed } from "vue";

const { params } = useData(); 
const biome = computed(() => biomes[params.value?.biome])

</script>


# {{ $params?.title }} {#title}

Temperature: {{ biome.temperature }} 
