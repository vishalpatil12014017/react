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
    test("More Then 10 kb Less Than 100 Kb", () => {
        expect(storage(100000)).toBe("97.656 Kb");
    })

    test("More Then 100 Kb", () => {
        expect(storage(1000000)).toBe("976.563 Kb");
    })
    test("More Then 1 Mb", () => {
        expect(storage(10000000)).toBe("9.537 Mb");
    })

    test("More Then 10 Mb", () => {
        expect(storage(100000000)).toBe("95.367 Mb");
    })
    test("More Then 100 Mb", () => {
        expect(storage(1000000000)).toBe("953.674 Mb");
    })
    test("Gb", () => {
        expect(storage(1000000000000)).toBe("931.323 Gb");
    })
    test("1 Gb", () => {
        expect(storage(1000000000000)).toBe("931.323 Gb");
    })
})