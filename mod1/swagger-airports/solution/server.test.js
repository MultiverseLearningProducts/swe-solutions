const app = require("./server"); // Link to your server file
const request = require("supertest");

describe("GET /airports", function () {
  it("responds with application/json", function (done) {
    request(app)
      .get("/airports")
      .set("Accept", "application/json")
      .expect("Content-Type", "application/json; charset=utf-8", done);
  });

  it("responds with status code 200", function (done) {
    request(app).get("/airports").expect(200, done);
  });
});
