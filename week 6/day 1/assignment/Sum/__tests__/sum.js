
const {sum}=require("../index")
describe("Addition",function () {
    test("Addition of two positive numbers",function () {
        expect(sum(1,2)).toBe(3)
    })
    test("Addition of two negative numbers",function () {
        expect(sum(-1,-2)).toBe(-3)
    })
    test("Addition of negative & positive numbers",function () {
        expect(sum(-1,2)).toBe(1)
    })
    test("Addition of positive & negative numbers",function () {
        expect(sum(1,-2)).toBe(-1)
    })
})