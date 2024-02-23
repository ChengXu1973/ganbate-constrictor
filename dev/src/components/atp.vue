<script setup lang="ts">
import { onMounted, ref } from 'vue';

defineProps<{ addScore: Function }>()

const pos = ref({ x: 0, y: 0 })
const ts = ref(0)

onMounted(() => {
    update()
})

function update() {
    if (performance.now() > ts.value) {
        ts.value = performance.now() + 1000
        const x = Math.max(0, window.innerWidth - 60) * Math.random()
        const y = Math.max(0, window.innerHeight - 60) * Math.random()
        pos.value = { x, y }
    }
    requestAnimationFrame(() => update())
}
</script>

<template>
    <div :style="{ left: pos.x + 'px', top: pos.y + 'px' }" class="atp" @click="() => addScore(pos)">ATP</div>
</template>

<style scoped>
.atp {
    position: fixed;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border-radius: 100%;
    color: #fff;
    font-size: 22px;
    background: radial-gradient(rgba(237, 119, 112, 0.2), rgb(237, 119, 112, 1));
}
</style>
