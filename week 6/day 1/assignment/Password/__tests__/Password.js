const { password } = require("../index")
describe("Password", function () {
    test("Length", () => {
        expect(password("Vis")).toBe("Enter 6 Digits characters");
    })

    test("Upper Case", () => {
        expect(password("vishal")).toBe("Must have upper case letter");
    })

    test("Lower Case", () => {
        expect(password("VISHAL")).toBe("Must have lower case letter");
    })

    test("Number", () => {
        expect(password("Vishal")).toBe("Minimum 1 Number Required");
    })

    test("Symbol", () => {
        expect(password("Vishal1718")).toBe("Must have special symbol");
    })

    test("Password is Correct", () => {
        expect(password("Vishal@1718")).toBe("Password is Correct");
    })

    test("Cant start with special symbol", () => {
        expect(password("@Vishal1718")).toBe("Cant start with special symbol");
    })

    test("Cant start with Numbers", () => {
        expect(password("1718@Vishal")).toBe("Cant start with Numbers");
    })

    test("Cant use two special charactors", () => {
        expect(password("Vishal@17@18")).toBe("Cant use two special charactors");
    })
    
    test( "Cant put Empty space", () => {
        expect(password("Visha @1718")).toBe( "Cant put Empty space");
    })
   
})