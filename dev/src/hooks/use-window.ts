import { onMounted, onUnmounted, ref } from 'vue'

export function useWindow() {
    const width = ref(window.innerWidth)
    const heigth = ref(window.innerHeight)

    function update() {
        width.value = window.innerWidth
        heigth.value = window.innerHeight
    }

    onMounted(() => window.addEventListener('resize', update))
    onUnmounted(() => window.removeEventListener('resize', update))

    return { width, heigth }
}