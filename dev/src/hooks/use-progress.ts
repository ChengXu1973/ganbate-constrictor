import { ref } from 'vue';

export function useProgress() {
    const progress = ref(0)
    const startTime = ref(-1)
    const roundTime = 10 * 1000;

    function start() {
        progress.value = 0
        startTime.value = Date.now()
        tick()
    }

    function tick() {
        if (startTime.value !== -1) {
            progress.value = ~~(100 * (Math.min(
                roundTime,
                Date.now() - startTime.value
            ) / roundTime))
        }
        if (progress.value >= 100) {
            startTime.value = -1
            console.log('end')
        } else {
            requestAnimationFrame(() => {
                tick()
            })
        }
    }

    return { progress, start }
}