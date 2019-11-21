const { 
    sumDigits
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
        expect(sumDigits(65879)).toB(35)
    });

    //deal with decimal numbers

})