const Employee = require("../lib/employee.js");


describe("getName", () => {
    it("Should return the employee's name", () => {

        let person = new Employee("John");
        // person.name = "John";

        expect(person.getName()).toEqual("John")
    })
})

describe("getId", () => {
    it("Should return the ID number", () => {
        let number = new Employee("John", parseInt("43"))

        expect(number.getId()).toEqual(43)
    })
})

describe("getEmail", () => {
    it("Should return an Email address", () => {
        let address = new Employee("John", parseInt("43"), "test@test.com");

        expect(address.getEmail()).toEqual("test@test.com");
    })
})

describe("getRole", () => {
    it("Should return 'employee'", () => {
        let position = new Employee("Employee");

        expect(position.getRole()).toEqual("Employee");
    })
})