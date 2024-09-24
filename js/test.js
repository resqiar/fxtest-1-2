const { ValidatePassword, FindPairs } = require("./main");

describe("ValidatePassword", () => {
    test("should return true for valid passwords", () => {
        expect(ValidatePassword("Fxmedia12345678@")).toBe(true);
        expect(ValidatePassword("AnotherSecurePwd$567")).toBe(true);
        expect(ValidatePassword("SuperP@ssphrase123")).toBe(true);
        expect(ValidatePassword("SuperTax!MoreThan3n0ugh")).toBe(true);
    });

    test("should return false for passwords shorter than 15 characters", () => {
        expect(ValidatePassword("ShortPwd1!")).toBe(false);
        expect(ValidatePassword("!@123xA")).toBe(false);
    });

    test("should return false for passwords with less than 2 conditions met", () => {
        expect(ValidatePassword("lowercaseonly")).toBe(false);
        expect(ValidatePassword("UPPERCASEONLY")).toBe(false);
        expect(ValidatePassword("1234567890123456789012345")).toBe(false);
    });

    test("should return true for passwords with exactly 2 conditions met", () => {
        expect(ValidatePassword("lowercaseandUPPERCASE")).toBe(true);
        expect(ValidatePassword("lowercaseand!@#$%^&")).toBe(true);
        expect(ValidatePassword("lowercaseand123456")).toBe(true);
        expect(ValidatePassword("UPPERCASEAND!@#$%^&")).toBe(true);
        expect(ValidatePassword("UPPERCASEAND123456")).toBe(true);
    });

    test("should handle edge cases", () => {
        expect(ValidatePassword("")).toBe(false);
        expect(ValidatePassword("                                               a")).toBe(false);
    });
})

describe("FindPairs", () => {
    test("should return an empty array when input array is empty", () => {
        expect(FindPairs([], 100)).toEqual([]);
    });

    test("should return pairs indices that sums up to the target value", () => {
        const arr = [1, 2, 3, 4, 5];
        let target = 5;
        let expected = [[0, 3], [1, 2]];
        expect(FindPairs(arr, target)).toEqual(expected);

        target = 6;
        expected = [[0, 4], [1, 3]];
        expect(FindPairs(arr, target)).toEqual(expected);
    });


    test("should also handle negative numbers", () => {
        const arr = [-1, -2, -3, -4, -5];
        const target = -5;
        const expected = [[0, 3], [1, 2]];
        expect(FindPairs(arr, target)).toEqual(expected);
    });

    test("should return empty array if no pairs found", () => {
        const arr = [1, 2, 3, 4, 5];
        const target = 99;
        expect(FindPairs(arr, target)).toEqual([]);
    });
});
