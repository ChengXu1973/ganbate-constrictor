<script setup lang="ts">
import Bg from './components/bg.vue';
import Bubbles from './components/bubbles.vue';
import ChrysanthemumFlower from './components/chrysanthemum-flower.vue';
import Result from './components/result.vue';
import { useProgress } from './hooks/use-progress';
import { useScore } from './hooks/use-score';

const { progress, playing, gg, start } = useProgress()
const { score, addScore, reset } = useScore()

function startGame() {
  reset()
  start()
}
</script>

<template>
  <div class="scene">
    <bg />
    <chrysanthemum-flower :progress="progress" />
    <div class="score">阔约能量 {{ score }}</div>
    <bubbles :add-score="addScore" :playing="playing" />
    <result v-show="gg" :score="score" />
    <div v-if="!playing" class="start" @click="startGame">憋住</div>
  </div>
</template>

<style scoped>
* {
  cursor: pointer;
  user-select: none;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
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
  bottom: 10vh;
  width: 120px;
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  background-color: rgb(247, 147, 41);
  border-radius: 5px;
  text-align: center;
  color: #fff;
}

.score {
  position: fixed;
  left: 20px;
  top: 20px;
  color: rgb(247, 147, 41);
  font-size: 18px;
}
</style>
