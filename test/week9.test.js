const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
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

describe("getComplementaryDNA", () => {
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


describe("isItPrime", () => {
    test("returns true for numbers only divisible by 1 and itself", () => {
        expect(isItPrime(2)).toBe(true);
        expect(isItPrime(3)).toBe(true);
        expect(isItPrime(7)).toBe(true);
        expect(isItPrime(555365387)).toBe(true);
    });

    test("returns false for decimal numbers, primes must be integers", () => {
        expect(isItPrime(3.1)).toBe(false);
    });

    test("1 is not a prime number", () => {
        expect(isItPrime(1)).toBe(false);
    });

    test("negative integers cannot be primes", () => {
        expect(isItPrime(-3)).toBe(false);
    });

    test("input must be a number not a string of a number", () => {
        expect(isItPrime("3")).toBe(false);
    });

});

describe("createMatrix", () => {
    test("returns 3x3 matrix of arrays with string input and n=3", () => {
        expect(createMatrix(3, "string")).toEqual([["string", "string", "string"], ["string", "string", "string"], ["string", "string", "string"]]);
    });

    test("returns 2x2 matrix of arrays with number input and n=2", () => {
        expect(createMatrix(2, 17)).toEqual([[17, 17], [17, 17]]);
    });

    test("returns 4x4 matrix of arrays with boolean input and n=4", () => {
        expect(createMatrix(4, false)).toEqual([[false, false, false, false], [false, false, false, false], [false, false, false, false], [false, false, false, false]])
    });

    test("returns a single array when n=1", () => {
        expect(createMatrix(1, "foo")).toEqual(["foo"]);
    });

    test("returns empty array when n < 1", () => {
        expect(createMatrix(-3, "foo")).toEqual([]);
    });

});

describe("areWeCovered", () => {
    test("returns false when no staff", () => {
        expect(areWeCovered([], "Monday")).toBe(false);
        expect(areWeCovered([], "Tuesday")).toBe(false);
        expect(areWeCovered([], "Wednesday")).toBe(false);
        expect(areWeCovered([], "Thursday")).toBe(false);
        expect(areWeCovered([], "Friday")).toBe(false);
        expect(areWeCovered([], "Saturday")).toBe(false);
        expect(areWeCovered([], "Sunday")).toBe(false);
    });
    
    test("returns false when <3 staff", () => {
        const staff = [
            {name: "Lizzie", rota: ["Monday", "Tuesday", "Wednesday"]},
            {name: "Rob", rota: ["Monday", "Tuesday", "Wednesday"]},
            {name: "Steven", rota: ["Monday", "Tuesday", "Wednesday"]},
            {name: "Andy", rota: ["Monday", "Tuesday", "Wednesday"]}
    ]
        expect(areWeCovered(staff, "Thursday")).toBe(false);
        expect(areWeCovered(staff, "Friday")).toBe(false);
        expect(areWeCovered(staff, "Saturday")).toBe(false);
        expect(areWeCovered(staff, "Sunday")).toBe(false);

    });

    test("returns true when =3 staff", () => {
        const staff = [
            {name: "Lizzie", rota: ["Monday", "Tuesday", "Wednesday"]},
            {name: "Rob", rota: ["Monday", "Tuesday", "Wednesday"]},
            {name: "Steven", rota: ["Monday", "Tuesday", "Wednesday"]}
    ]
        expect(areWeCovered(staff, "Monday")).toBe(true);
        expect(areWeCovered(staff, "Tuesday")).toBe(true);
        expect(areWeCovered(staff, "Wednesday")).toBe(true);
  
    });

    test("returns true when >3 staff", () => {
        const staff = [
            {name: "Lizzie", rota: ["Monday", "Tuesday", "Wednesday"]},
            {name: "Rob", rota: ["Monday", "Tuesday", "Wednesday"]},
            {name: "Steven", rota: ["Monday", "Tuesday", "Wednesday"]},
            {name: "Andy", rota: ["Monday", "Tuesday", "Wednesday"]}
    ]
        expect(areWeCovered(staff, "Monday")).toBe(true);
        expect(areWeCovered(staff, "Tuesday")).toBe(true);
        expect(areWeCovered(staff, "Wednesday")).toBe(true);
  
    });

    test("returns true when >3 staff and day in lower or mixed case", () => {
        const staff = [
            {name: "Lizzie", rota: ["Monday", "Tuesday", "Wednesday"]},
            {name: "Rob", rota: ["Monday", "Tuesday", "Wednesday"]},
            {name: "Steven", rota: ["Monday", "Tuesday", "Wednesday"]},
            {name: "Andy", rota: ["Monday", "Tuesday", "Wednesday"]}
    ]
        expect(areWeCovered(staff, "monday")).toBe(true);
        expect(areWeCovered(staff, "TueSday")).toBe(true);
        expect(areWeCovered(staff, "wednesDAy")).toBe(true);
  
    });

    test("returns 'please make sure you enter a day' when >3 staff and day is not a day string", () => {
        const staff = [
            {name: "Lizzie", rota: ["Monday", "Tuesday", "Wednesday"]},
            {name: "Rob", rota: ["Monday", "Tuesday", "Wednesday"]},
            {name: "Steven", rota: ["Monday", "Tuesday", "Wednesday"]},
            {name: "Andy", rota: ["Monday", "Tuesday", "Wednesday"]}
    ]
        expect(areWeCovered(staff, "Caturday")).toBe('please make sure you enter a day');
        expect(areWeCovered(staff, "frank")).toBe('please make sure you enter a day');
        expect(areWeCovered(staff, "dsafjlkjljdsf")).toBe('please make sure you enter a day');
  
    });


})