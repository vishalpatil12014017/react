const { Calculator } = require("../index")
describe("Tax Calculator", function () {
    test("Below 2.5 Lakh", () => {
        expect(Calculator(240000)).toBe(0);
    })

    test("Below 5 Lakh", () => {
        expect(Calculator(300000)).toBe(15000);
    })

    test("Below 10 Lakh", () => {
        expect(Calculator(600000)).toBe(84000);
    })

    test("10 Lakh & Above 10 Lakh", () => {
        expect(Calculator(1200000)).toBe(345000);
    })

    test("Below Zero", () => {
        expect(Calculator(-1)).toBe("Invalid Input");
    })

    test("For Non Number Input", () => {
        expect(Calculator({})).toBe("Invalid Input");
    })
})