import { ref, computed } from "vue";

export const useCounter = (initialValue: number) => {

    const count = ref(initialValue);
    const squareCount = computed(() => count.value * count.value);

    return { count, squareCount }
} 