module.exports = {
    commitType: ["build", "ci", "docs",  "feat", "fix", "perf", "refactor", "style", "test", "chores"],
    questions: {
        commitType: {
            name: "commitType",
            message:"Select/Enter commit type: ",
            default: null,
        },
        commitModule: {
            name: "commitModule", 
            message: "Enter your module you are working on: ",
            default: null,
        },
        commitMessage: {
            name: "commitMessage", 
            message: "Enter your commit message: ",
            default: null,
        },
        ticketNo: { 
            name: "ticketNo",
            message: "Enter your ticket number: ",
            default: ""
        }
    }
}