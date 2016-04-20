var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../app");
var should = chai.should();

chai.use(chaiHttp);

describe("Complexes", () => {
    it("should list ALL complexes on /api/complex GET");
});
