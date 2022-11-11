
// Numbers

test("this part describes what the test should look out for, such as 4 + 5 = 9", ()=>{
    const a = 4;
    const b = 5;
    expect(a+b).toBe(9)
    expect(a/b).not.toBe(6)
})

test("this part describes what the test should look out for, such as 12 / 2 = 6", ()=>{
    const a = 12;
    const b = 2;
    expect(a/b).toBe(6)
})

test("this part describes what the test should look out for, such as 6 * 7 = 42", ()=>{
    const a = 6;
    const b = 7;
    expect(a*b).toBe(42)
})

// Using Describe, 'test' can be replaced with 'it'
describe("Using describe", ()=>{
    it("Checking undefined", ()=>{
        const num = undefined;
        expect(num).toBeUndefined()
        expect(num).not.toBeDefined()
        expect(num).not.toBeNull()
        expect(num).toBeFalsy()
        expect(num).not.toBeTruthy()
    })
    
    it("this part describes what the test should look out for, such as 4 + 5 = 9", ()=>{
        const a = 4;
        const b = 5;
        expect(a+b).toBe(9)
        expect(a/b).not.toBe(6)
    })

    it("this part describes what the test should look out for, such as 12 / 2 = 6", ()=>{
        const a = 12;
        const b = 2;
        expect(a/b).toBe(6)
    })

    it("this part describes what the test should look out for, such as 6 * 7 = 42", ()=>{
        const a = 6;
        const b = 7;
        expect(a*b).toBe(42)
    })

    it("this part describes what the test should look out for, such as inequality", ()=>{
        const a = 2;
        const b = 5;
        const c = 6;
        expect(a*b).toEqual(10)
        expect(c-a).toBeLessThanOrEqual(5)
        expect(a+b).toEqual(7)
        expect(c*b).toBeGreaterThan(29)
        expect(c/a).toEqual(3)
    })
})