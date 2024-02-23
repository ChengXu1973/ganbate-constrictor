<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{ score: number }>()
const title = ref("惊天骗菊")

watch(props, (p) => {
    if (p.score === 0) {
        title.value = "惊天骗菊"
    }
    else if (p.score <= 10) {
        title.value = "雏菊"
    }
    else if (p.score <= 20) {
        title.value = "铜墙铁菊"
    }
    else if (p.score <= 30) {
        title.value = "金菊"
    }
    else {
        title.value = "顾全大菊"
    }
})
</script>

<template>
    <div class="result">
        <div class="desc">收缩等级<br />
            <span class="title">{{ title }}</span>
        </div>
    </div>
</template>

<style scoped>
.result {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.2);
    text-align: center;
}

.desc {
    color: #fff;
    font-size: 22px;
}

.title {
    font-size: 28px;
}
</style>
