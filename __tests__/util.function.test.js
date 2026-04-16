const lookUpObj = require("../db/seeds/util.function");

describe("lookUpObj", () => {
  test("lookUpObj returns an empty object", () => {
    expect(lookUpObj()).toEqual({});
  });
  test("should return the newkey and newvalue as an object with new key & value", () => {
    const person = [
      { name: "neville", age: 35 },
      { name: "rose", age: 35 },
    ];
    expect(lookUpObj(person, "neville", 35)).toEqual({ neville: 35 });
  });
});
