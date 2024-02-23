<script setup lang="ts">
import ChrysanthemumFlower from './components/chrysanthemum-flower.vue';
import { useProgress } from './hooks/use-progress';

const { progress, start } = useProgress()
</script>

<template>
  <div class="scene">
    <chrysanthemum-flower :progress="progress" />
    <div class="start" @click="start">start</div>
  </div>
</template>

<style scoped>
* {
  cursor: pointer;
  user-select: none;
}

.scene {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.start {
  position: fixed;
  left: 10px;
  top: 10px;
}
</style>
