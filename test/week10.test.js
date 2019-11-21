const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB
} = require("../challenges/week10");


describe("sumDigits", () => {
    test("returns null if input is a string, boolean or array", () => {
        expect(sumDigits("123")).toBe(null);
        expect(sumDigits([1, 2, 3])).toBe(null);
        expect(sumDigits(true)).toBe(null);
    });

    test("returns sum of digits in a number", () => {
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(49)).toBe(13);
        expect(sumDigits(3)).toBe(3);
        expect(sumDigits(65879)).toBe(35)
    });

    test("returns sum of digits in a decimal number", () => {
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

    test("returns error message if start > end with positive step or end > start and negative step", () => {
        expect(createRange(10, 1, 2)).toBe("it is not possible to create a range with these parameters");
        expect(createRange(1, 10, -2)).toBe("it is not possible to create a range with these parameters");
    });

    test("returns error message if step called with value 0", () => {
        expect(createRange(10, 1, 0)).toBe("it is not possible to create a range with these parameters");
    });
});

describe("getScreentimeAlertList", () => {
    test("returns username if user has screen time > 100 minutes", () => {
        const users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                ]
            },
        ]
        expect(getScreentimeAlertList(users, "2019-05-02")).toEqual(["beth_1234"]);
    });
    test("returns empty array if no users exceed screen time limit", () => {
        const users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                ]
            },
        ]
        expect(getScreentimeAlertList(users, "2019-06-14")).toEqual([]);   
    });
    test("returns array of all usernames where user has screen time > 100 minutes", () => {
        const users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-06-14", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 31, whatsApp: 31, facebook: 31, safari: 31 } },
                ]
            },
        ]
        expect(getScreentimeAlertList(users, "2019-06-14")).toEqual(["beth_1234", "sam_j_1989"]);
    });
})

describe("hextoRGB", () => {
    test("returns rgb() output when input string #", () => {
        expect(hexToRGB("#000000")).toBe("rgb(0,0,0)");
        expect(hexToRGB("#FFFFFF")).toBe("rgb(255,255,255)");
        expect(hexToRGB("#AAEEC1")).toBe("rgb(170,238,193)");
    });

    test("deals with hex string in lower or mixed case", () => {
        expect(hexToRGB("#ffffff")).toBe("rgb(255,255,255)");
        expect(hexToRGB("#AaEEc1")).toBe("rgb(170,238,193)");
    });

    test("deals with hex string without leading #", () => {
        expect(hexToRGB("FFFFFF")).toBe("your hex string is not in the correct format");
    });
});