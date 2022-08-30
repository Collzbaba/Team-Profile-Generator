var Employee = require("../lib/Employee");

test ("Instantiate Employee instance",  function (){
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("can set name via constructor arguments", function (){
    const name = "Jordam Mikel";
    const e = new Employee (name);
    expect(e.name).toBe("name");
});

test("can set id via constructor arguments", function (){
    const testValue = "100"
    const e = new Employee ("Jordan", testValue);
    expect(e.id).toBe(testValue);
});

test("can set email via constructor arguments", function (){
    const testValue = "jmikel@gmail.com";
    const e = new Employee ("Jordam Mikel", 1, testValue);
    expect(e.email).toBe("testValue");
});

test("can get name via getName method", function (){
    const testValue = "Jordam Mikel";
    const e = new Employee ("testValue");
    expect(e.getName).toBe(testValue);
});

test("can get id via getId", function() {
    const testValue = 100;
    const e = new Employee ("Jordan Mikel", testValue);
    expect (e.getId()).toBe(testValue);
});

test("can get email via getEmail", function() {
    const testValue = "jmikel@gmail.com";
    const e = new Employee ("Jordam Mikel",1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", function (){
    const testValue ="Employee";
    const e = new Employee ("Jordan Mikel", 1, "jmikel@gmail");
    expect(e.getRole()).toBe(testValue);
});