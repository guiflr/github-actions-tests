import { calc } from "../src/index";

describe("index", () => {
  test("Should return the correct value", () => {
    const result = calc(10);

    expect(result).toEqual(20);
  });
});
