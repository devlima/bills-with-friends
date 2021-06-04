import { transformRGBA } from "./index";

describe("LoginOptions", () => {
  it("should return right value", () => {
    expect(transformRGBA("rgb(0,0,0)", 0.1)).toBe("rgba(0,0,0,0.1)");
  });

  it("should return right value with opacity as string", () => {
    expect(transformRGBA("rgb(0,0,0)", "0.1")).toBe("rgba(0,0,0,0.1)");
  });
});
