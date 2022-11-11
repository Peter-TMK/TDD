const { sum, deleteByAwards } = require("../utils/helper")


let example = []
console.log(example, "before running all functions")
beforeAll(()=>{
    example = ["dance", "merry", "joyful"]
    console.log(example, "Running Before All")
})

beforeEach(()=>{
    console.log("Running Before Each")
})

afterEach(()=>{
    console.log("Running After Each")
})

afterAll(()=>{
    example = []
    console.log(example, "Running After All")
})


// Numbers

test("this part describes what the test should look out for, such as 4 + 5 = 9", ()=>{
    let a = 4;
    let b = 5;
    expect(a+b).toBe(9)
    expect(a/b).not.toBe(6)
})

test("this part describes what the test should look out for, such as 12 / 2 = 6", ()=>{
    let a = 12;
    let b = 2;
    expect(a/b).toBe(6)
})

test("this part describes what the test should look out for, such as 6 * 7 = 42", ()=>{
    let a = 6;
    let b = 7;
    expect(a*b).toBe(42)
})

// Using Describe, 'test' can be replaced with 'it'
describe("Using describe", ()=>{
    it("Checking undefined", ()=>{
        let num = undefined;
        expect(num).toBeUndefined()
        expect(num).not.toBeDefined()
        expect(num).not.toBeNull()
        expect(num).toBeFalsy()
        expect(num).not.toBeTruthy()
    })
    
    it("this part describes what the test should look out for, such as 4 + 5 = 9", ()=>{
        let a = 4;
        let b = 5;
        expect(a+b).toBe(9)
        expect(a/b).not.toBe(6)
    })

    it("this part describes what the test should look out for, such as 12 / 2 = 6", ()=>{
        let a = 12;
        let b = 2;
        expect(a/b).toBe(6)
    })

    it("this part describes what the test should look out for, such as 6 * 7 = 42", ()=>{
        let a = 6;
        let b = 7;
        expect(a*b).toBe(42)
    })

    it("this part describes what the test should look out for, such as inequality", ()=>{
        let a = 2;
        let b = 5;
        let c = 6;
        expect(a*b).toEqual(10)
        expect(c-a).toBeLessThanOrEqual(5)
        expect(a+b).toEqual(7)
        expect(c*b).toBeGreaterThan(29)
        expect(c/a).toEqual(3)
    })
})


// Strings
describe("String testing", ()=>{
    it("should match for characters", ()=>{
        let word = "SuperTest";
        expect(word).toMatch('S')
        expect(word).toMatch('S')
        expect(word).toMatch(/S/i)
        expect(word).not.toMatch('y')
        expect(word).toMatch(/test/i)
    })
})


// Array
describe("Array testing", ()=>{
    it("should match characters", ()=>{
        const fruits = ["cherry","Tangerine","orange","mango","pear","pawpaw"]
        expect(fruits).toContain('cherry')
        expect(fruits).not.toContain('apple')
        expect(fruits).toContain("Tangerine")
    })
})


// Array and Object Equality
// toBe() tests primitive type equality
// toEqual() tests reference type equality

describe("Reference type equality", ()=>{
    const player = {
        firstname: "Tiger"
    }
    player["lastname"] = "Woods"
    player["age"] = 45

    it("should return a palyer object with lastname as 'Woods'", ()=>{
        expect(player).toEqual({
            firstname: "Tiger",
            lastname: "Woods",
            age: 45
        })
    })

    it("should return player with firstname, lastname and age keys", ()=>{
        expect(player).toEqual(
            expect.objectContaining({
                firstname: expect.any(String),
                lastname: expect.any(String),
                age: expect.any(Number)
            })
        )
    })

    it("Array equality", ()=>{
        const cars = [
            "Toyota",
            "Benz",
            "Ford"
        ]

        cars.push("Honda");

        expect(cars).toEqual([
            "Toyota",
            "Benz",
            "Ford",
            "Honda"
        ]);
        expect(cars).toEqual(expect.arrayContaining(["Benz"]));

        const carsInObjectArray = [
            {
                driver: "Tenq",
                awards: 7
            },
            {
                driver: "Timmy",
                awards: 5
            },
            {
                driver: "Bronson",
                awards: 9
            }
        ]

        carsInObjectArray.push(
            {
                driver: "Andrei",
                awards: 4,
                age: 49
            }
        )
        expect(carsInObjectArray).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    driver: expect.any(String),
                    awards: expect.any(Number),
                    age: expect.any(Number)
                })
            ])
        )
    })
})

describe("Arithmetic operations", ()=>{
    it("Calculate the sum of 4 and 11 to give 15", ()=>{
        expect(sum(4,11)).toBe(15)
    })

    it("delete some drivers by their awards", ()=>{
        let player = [
            {
                driver: "Tenq",
                awards: 7
            },
            {
                driver: "Timmy",
                awards: 5
            },
            {
                driver: "Bronson",
                awards: 9
            }
        ]

        expect(deleteByAwards(player, 5)).toEqual([
            {
                driver: "Tenq",
                awards: 7
            },
            {
                driver: "Bronson",
                awards: 9
            },
        ])
        expect(deleteByAwards(player, 5).length).toBe(2)
    })
})