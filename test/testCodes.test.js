const TestCodesLib = require("../src/TestCodesLib");

describe("Test CodeLib", ()=>{
    it("should square  each number in the array and passed it total sum", ()=>{
        expect(TestCodesLib.squareSum([1,2])).toBe(5);
        expect(TestCodesLib.squareSum([0,3,4,5])).toBe(50)
        expect(TestCodesLib.squareSum([])).toBe(0);
    })

    it("should replace string 0 with O, 5 with S and  1 with I", ()=>{
        expect(TestCodesLib.correct("L0ND0N")).toBe("LONDON");
       expect(TestCodesLib.correct("5KYE")).toBe("SKYE");
       expect(TestCodesLib.correct("1NDOM1E")).toBe("INDOMIE");
    })

    //should return vowel counts in a string e.g alaba will return 3 vowel count

})