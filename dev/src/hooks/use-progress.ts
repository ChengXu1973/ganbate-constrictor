import { ref } from 'vue';

export function useProgress() {
    const progress = ref(0)
    const startTime = ref(-1)
    const roundTime = 10 * 1000
    const playing = ref(false)
    const gg = ref(false)

    function start() {
        progress.value = 0
        startTime.value = Date.now()
        playing.value = true
        gg.value = false
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
            playing.value = false
            gg.value = true
        } else {
            requestAnimationFrame(() => {
                tick()
            })
        }
    }

    return { progress, playing, gg, start }
}