<template>
    <section>
        <h3>Counter: {{ count }}</h3>
        <h3>Square: {{ squareCount }}</h3>
        <div>
            <button class="btn" @click="mov('s')">+1</button>
            <button class="btn" @click="mov('r')">-1</button>
        </div>
    </section>
</template>

<script lang="ts" setup>
// import { computed, ref } from 'vue';
import { useCounter } from '../composables/useCounter';

interface Props {
    value?: number;
}
const props = defineProps<Props>()
const { count, squareCount } = useCounter(props.value ?? 5);

// const count = ref(props.value ?? 5);
// const squareCount = computed(() => count.value * count.value);

const mov = (type: string) => {
    if (type === 's') {
        count.value++;
    } else {
        count.value--;
    }
};
</script>

<style scoped>
.btn {
    @apply p-5 bg-blue-500 rounded mr-2 text-white cursor-pointer;
}
</style>