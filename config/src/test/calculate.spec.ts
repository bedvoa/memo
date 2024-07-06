const calculate = (a: number, b: number) => a + b;

describe("calculate", () => {
  it("should add two numbers", () => {
    expect(calculate(1, 2)).toBe(3);
  });
});
