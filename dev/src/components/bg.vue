<template>
    <div class="bg"></div>
</template>

<style scoped>
.bg {
    opacity: 0.12;
    position: absolute;
    width: 200%;
    height: 200vh;
    background-image: url('../assets/shit.png');
    background-repeat: repeat;
    background-size: 80px;
    animation: move 5000ms linear infinite;
    z-index: -999;
}

@keyframes move {
    from {
        left: -80px;
        top: 0;
    }

    to {
        left: 0px;
        top: -80px;
    }
}
</style>
