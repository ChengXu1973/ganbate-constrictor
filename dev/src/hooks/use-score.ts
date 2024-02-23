import { ref } from "vue";

export function useScore() {
    const score = ref(0)

    function addScore() {
        score.value++
    }

    function reset() {
        score.value = 0
    }

    return { score, addScore, reset }
}