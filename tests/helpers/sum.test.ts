import { describe, expect, test } from 'vitest'
import { addArray, sum } from '../../src/helpers/sum'

describe('Sum function tests', () => {
    test('adds 1 + 2 to equal 3', () => {
        //Arrange
        const a = 1;
        const b = 2;
        //Act
        const result = sum(a, b);
        //Assert
        expect(result).toBe(a + b)
    })
});

describe('Array tests', () => {

    test('Given int array, will result 55', () => {
        //Arrange
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        //Act
        const rest = addArray(array);

        //Assert

        expect(rest).toBe(55);
    })

    test('Given empty array, will result 0', () => {
        //Arrange
        const array = [];

        //Act
        const rest = addArray(array);

        //Assert

        expect(rest).toBe(0);
    })
});