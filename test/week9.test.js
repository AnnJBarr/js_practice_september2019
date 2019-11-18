const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA
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

describe("isValidDNA", () => {
    test("returns true if string only contains C, G, T, A", () => {
        expect(isValidDNA("CGTAGCAATCG")).toBe(true);
        expect(isValidDNA("GTAC")).toBe(true);
        expect(isValidDNA("TAGCACTG")).toBe(true);
        expect(isValidDNA("AGTCAGTCAGTC")).toBe(true);
    });

    test("returns false if string contains any other characters", () => {
        expect(isValidDNA("CGBAGHGAJ")).toBe(false);
        expect(isValidDNA("S")).toBe(false);
        expect(isValidDNA("CDEF")).toBe(false)
    });

    test("returns true even if characters lower or mixed case", () => {
        expect(isValidDNA("cgtacgta")).toBe(true);
        expect(isValidDNA("cGTAagttcc")).toBe(true);
    });

});

describe.only("getComplementaryDNA", () => {
    test("returns DNA pairs - T always pairs with A, and C always pairs with G", () => {
        expect(getComplementaryDNA("CGTAGCAATCG")).toBe("GCATCGTTAGC");
        expect(getComplementaryDNA("GTAC")).toBe("CATG");
        expect(getComplementaryDNA("TAGCACTG")).toBe("ATCGTGAC");
    });

    test("returns 'your input wasn't valid DNA' if input string contains characters other than CTGA", () => {
        expect(getComplementaryDNA("CGBAGHGAJ")).toBe("your input wasn't valid DNA");
    });

    test("returns upper case pairs even if input string is lowe or mixed case", () => {
        expect(getComplementaryDNA("cgtacgta")).toBe("GCATGCAT");
        expect(getComplementaryDNA("cGTAagttcc")).toBe("GCATTCAAGG");
    });

});