<template>
    <section>
        <h3>Counter: {{ count }}</h3>
        <h3>Square: {{ squareCount }}</h3>
        <div>
            <button @click="count++">+1</button>
            <button @click="count--">-1</button>
        </div>
    </section>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useCounter } from '../composables/useCounter';
export default defineComponent({
    props: {
        value: { type: Number, required: true },
    },
    setup(props) {
        const { count, squareCount } = useCounter(props.value);
        // const counter = ref(props.value);
        // const squareCounter = computed(() => counter.value * counter.value);
        return {
            count, squareCount,
        };
    },
});
</script>
