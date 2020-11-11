import request from "supertest";
import { expect } from "chai";

import createServer from "server";
const app = createServer();

describe("auth routes", function () {
  it("/auth responds with 200", function (done) {
    request(app).get("/auth").expect(200, done);
  });
});
