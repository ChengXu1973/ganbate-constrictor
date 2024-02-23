<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps<{ progress: number }>()
const stage = computed(() => ~~(props.progress / 25));
const spin = computed(() => [5000, 4000, 3000, 2000, 1000][stage.value])
</script>

<template>
  <div class="flower">
    <div v-if="stage >= 4" class="light"></div>
    <div class="petals" :style="{ 'animation-duration': `${spin}ms` }">
      <img src="../assets/sunflower.png" alt="sun flower" />
    </div>
    <div class="face"></div>
    <div :class="['stage', `stage${stage}`]"></div>
  </div>
</template>

<style scoped>
.flower {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.petals {
  position: absolute;
  animation: rotate linear infinite;
  width: 200px;
  height: 200px;
}

img {
  width: 100%;
  height: 100%;
}

.light {
  background-image: url('../assets/light.png');
  background-size: contain;
  position: absolute;
  width: 600px;
  height: 600px;
  animation: rotate 3000ms linear infinite;
}

.face {
  background-image: url('../assets/face.png');
  background-size: contain;
  position: absolute;
  width: 90px;
  height: 90px;
}


.stage {
  background-size: contain;
  position: absolute;
  width: 100px;
  height: 100px;
}

.stage0 {
  background-image: url('../assets/stage0.png');
}

.stage1 {
  background-image: url('../assets/stage1.png');
}

.stage2 {
  background-image: url('../assets/stage2.png');
}

.stage3 {
  background-image: url('../assets/stage3.png');
}

.stage4,
.stage5 {
  background-image: url('../assets/stage4.png');
}

@keyframes rotate {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
