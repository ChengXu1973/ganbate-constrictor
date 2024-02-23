<script setup lang="ts">
import Bg from './components/bg.vue';
import ChrysanthemumFlower from './components/chrysanthemum-flower.vue';
import { useProgress } from './hooks/use-progress';

const { progress, playing, start } = useProgress()
</script>

<template>
  <div class="scene">
    <bg />
    <chrysanthemum-flower :progress="progress" />
    <div v-if="!playing" class="start" @click="start">GO</div>
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
  position: relative;
  overflow: hidden;
}

.start {
  position: fixed;
  left: 10px;
  top: 10px;
}
</style>
