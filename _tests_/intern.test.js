const Intern = require('../lib/intern')

describe("getSchool", () => {
    it("Should return the intern's school name", () => {
        let schoolName = new Intern();
        schoolName.school = "UMN"

        expect(schoolName.getSchool()).toEqual("UMN");
    })
})

describe("getRole", () => {
    it("Should return 'Intern'", () => {
        let position = new Intern("Intern");

        expect(position.getRole()).toEqual("Intern");
    })
})