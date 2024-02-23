<script setup lang="ts">
defineProps<{ x: number, y: number }>()
</script>

<template>
    <div class="hydrolytic" :style="{ left: x + 'px', top: y + 'px' }">
        <!-- <div class="p">P</div> -->
        <div class="adp">ADP</div>
    </div>
</template>

<style scoped>
.hydrolytic {
    position: fixed;
    animation: show .5s forwards;
}

.hydrolytic div {
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 100%;
    color: #fff;
    font-size: 20px;
    animation: show 1s forwards;
}

.adp {
    background: radial-gradient(rgba(128, 212, 250, 0.2), rgb(128, 212, 250, 1));
}

@keyframes show {
    0% {
        opacity: 0;
        scale: 0;
    }

    20% {
        opacity: 1;
        scale: 1;
    }

    50% {
        opacity: 1;
        scale: 2.5;
    }

    100% {
        opacity: 0;
        scale: 5;
    }
}
</style>
