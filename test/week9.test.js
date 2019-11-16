const {
    sumMultiples
} = require("../challenges/week9");

describe("sumMultiples", () => {
    test("returns error if no array provided", () => {
        expect(() => {
            sumMultiples();
        }).toThrow("arr is required");
    });

    test("returns sum of any numbers in array which are multiples of 3 or 5", () => {
        expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
        expect(sumMultiples([5, 3, 7, 8, 1, 2])).toBe(8);
        expect(sumMultiples([11, 13, 7, 8, 1, 2])).toBe(0);
    });

    test("copes with decimal numbers", () => {
        expect(sumMultiples([5, 3, 7, 8.6, 1, 10.5])).toBe(8);
    });

});