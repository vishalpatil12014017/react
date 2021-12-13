const { storage } = require("../index")
describe("Memory Converter", function () {
    test("Zero Bytes", () => {
        expect(storage(0)).toBe("0 Bytes");
    })

    test("Bytes", () => {
        expect(storage(1000)).toBe("1000 Bytes");
    })

    test("Below 10 kb", () => {
        expect(storage(10000)).toBe("9.766 Kb");
    })

    test("More Then 100 Kb", () => {
        expect(storage(1000000)).toBe("976.563 Kb");
    })

    test("Mb", () => {
        expect(storage(100000000)).toBe("95.367 Mb");
    })
    test("Gb", () => {
        expect(storage(1000000000000)).toBe("931.323 Gb");
    })
})