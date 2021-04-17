const Engineer = require("../lib/engineer");

describe("getGithub", () => {
    it("Should return the engineer's GitHub username", () => {

        let githubName = new Engineer();
        githubName.github = "samersaemeldahr";

        expect(githubName.getGithub()).toEqual("samersaemeldahr")
    })
})