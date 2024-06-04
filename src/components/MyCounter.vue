<template>
    <section>
        <h3>Counter: {{ counter }}</h3>
        <h3 data-testid="square-label">Square: {{ squareCounter }}</h3>
        <div>
            <button class="btn" @click="counter++">+1</button>
            <button data-testid="btn-decrement" class="btn" @click="counter--">-1</button>
        </div>
    </section>
</template>

<script lang="ts" setup>

import { useCounter } from '../composables/useCounter';

interface Props {
    value?: number;
}
const props = defineProps<Props>()
const { counter, squareCounter } = useCounter(props.value ?? 5);

const mov = (type: string) => {
    if (type === 's') {
        counter.value++;
    } else {
        counter.value--;
    }
};
</script>

<style scoped>
.btn {
    @apply p-5 bg-blue-500 rounded mr-2 text-white cursor-pointer;
}
</style>