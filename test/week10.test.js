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

    //deals with decimals in start finish

    //deals with decimals in step
})