import { useCounter } from "@/composables/useCounter";

describe(`useCounter tests`, () => {

    test(`initializes counter with default value`, () => {
        const { counter, squareCounter } = useCounter();
        expect(counter.value).toBe(5);
        expect(squareCounter.value).toBe(25);
    })

    test(`initializes counter with provided initial value`, () => {
        const initialValue = 10;
        const { counter } = useCounter(initialValue);
        expect(counter.value).toBe(initialValue);
    })


    test(`increments the counter`, () => {
        const { counter, squareCounter } = useCounter();
        counter.value++;
        expect(counter.value).toBe(6);
        expect(squareCounter.value).toBe(36);
    })
})