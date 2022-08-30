const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UC-Berkeley";
  const e = new Intern("Ruth Beka", 1, "rbeka@gmail.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Ruth Beka", 1, "rbeka@gmail.com", "UC-Berkeley", testValue);
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UC-Berkeley";
  const e = new Intern("Ruth Beka", 1, "rbeka@gmail.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});