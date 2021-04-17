const Engineer = require("../lib/engineer");

describe("getGithub", () => {
    it("Should return the engineer's GitHub username", () => {

        let githubName = new Engineer();
        githubName.github = "samersaemeldahr";

        expect(githubName.getGithub()).toEqual("samersaemeldahr")
    })
})

describe("getRole", () => {
    it("Should return 'engineer'", () => {
        let position = new Engineer("Engineer");

        expect(position.getRole()).toEqual("Engineer");
    })
})