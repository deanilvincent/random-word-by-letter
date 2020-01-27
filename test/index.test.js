const assert = require("chai").assert

const app = require("../index")

describe("App", () => {
  it("App should work", () => {
    assert.isNotEmpty(app('b', 'a'))
  })
})