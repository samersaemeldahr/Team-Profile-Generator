const Manager = require('../lib/manager')

describe("officeNumber", () => {
    it("Should return the manager's office number", () => {
        let call = new Manager();
        call.officeNumber = 1231231234;

        expect(call.getOfficeNumber()).toEqual(1231231234);
    })
})

describe("getRole", () => {
    it("Should return 'Manager'", () => {
        let position = new Manager("Manager");

        expect(position.getRole()).toEqual("Manager");
    })
})