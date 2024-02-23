<script setup lang="ts">
import { ref, watch } from 'vue';
import Adp from './adp.vue';
import Atp from './atp.vue';

interface IPos {
    x: number;
    y: number;
}

const props = defineProps<{ playing: boolean, addScore: Function }>()
const adps = ref<(IPos & { ts: number })[]>([])

watch(props, () => {
    adps.value = []
})

function click(pos: IPos) {
    adps.value.push({ ...pos, ts: performance.now() + 1000 })
    props.addScore()
}
</script>

<template>
    <div class="bubbles" v-show="playing">
        <adp v-for="b in adps" :key="b.ts" :x="b.x" :y="b.y" />
        <atp :add-score="(pos: IPos) => click(pos)" />
    </div>
</template>

<style scoped>
.bubbles {
    position: absolute;
}
</style>
