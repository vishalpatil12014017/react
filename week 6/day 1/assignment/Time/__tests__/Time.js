
const {time}=require("../index")
describe("Time",function () {
    test("Time in Miliseconds",function () {
        expect(time(1)).toBe("1 Milisecond")
    })
    test("Time in Seconds",function () {
        expect(time(5200)).toBe("5 Seconds")
    })
    test("Time in Minutes",function () {
        expect(time(60000)).toBe("1 Minute")
    })
    test("Time in Minutes",function () {
        expect(time(180000)).toBe("3 Minutes")
    })
    test("Time in Minutes and Second",function () {
        expect(time(200000)).toBe("3 Minutes 20 Seconds")
    })
    test("Time in Minutes",function () {
        expect(time(1800000)).toBe("30 Minutes")
    })
    test("Time in Minutes and Second",function () {
        expect(time(2000000)).toBe("33 Minutes 20 Seconds")
    })
    test("Time in Hours",function () {
        expect(time(3600000)).toBe("1 Hours")
    })
})