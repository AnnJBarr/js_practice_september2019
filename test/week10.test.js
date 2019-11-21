const { 
    sumDigits,
    createRange
} = require("../challenges/week10");


describe("sumDigits", () => {
    test("returns null if input is a string, boolean or array", () => {
        expect(sumDigits("123")).toBe(null);
        expect(sumDigits([1, 2, 3])).toBe(null);
        expect(sumDigits(true)).toBe(null);
    });
    
    test("returns sum of digits in a number", ()=> {
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(49)).toBe(13);
        expect(sumDigits(3)).toBe(3);
        expect(sumDigits(65879)).toBe(35)
    });

    test("returns sum of digits in a decimal number", ()=> {
        expect(sumDigits(12.3)).toBe(6);
        expect(sumDigits(49.0)).toBe(13);
        expect(sumDigits(658.79)).toBe(35)
    });
});


describe("createRange", () => {
    test("returns sequential count if no step defined", () => {
        expect(createRange(1, 5)).toEqual([1, 2, 3, 4, 5]);
    });

    //deals with step
    test("returns sequential count if step defined", () => {
        expect(createRange(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
    });

    //deals with negative numbers
    test("returns sequential count if start is a negtative number", () => {
        expect(createRange(-10, 0, 2)).toEqual([-10, -8, -6, -4, -2, 0]);
    });

    //deals with negative step and counts backwards
    test("returns sequential count if step defined", () => {
        expect(createRange(10, 1, -2)).toEqual([10, 8, 6, 4, 2]);
    });

    //deals with decimals in start finish
    test("returns sequential count if decimal start", () => {
        expect(createRange(1.7, 10, 2)).toEqual([1.7, 3.7, 5.7, 7.7, 9.7]);
    });

    test("returns sequential count if decimal end", () => {
        expect(createRange(1.7, 11.7, 2)).toEqual([1.7, 3.7, 5.7, 7.7, 9.7, 11.7]);
    });

    //deals with decimals in step
    test("returns sequential count if decimal step", () => {
        expect(createRange(1, 10, 2.7)).toEqual([1, 3.7, 6.4, 9.1]);
    });

    test("returns error message if start > end with positive step", () => {
        expect(createRange(10, 1, 2)).toBe("it is not possible to create a range with these parameters")
    })
})