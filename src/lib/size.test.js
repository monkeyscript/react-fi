import formatSize from "./size";
import { expect, describe, it } from "vitest";

describe("formatSize", () => {
  // Returns correct size for "xs"
  it('should return 12 when size is "xs"', () => {
    expect(formatSize("xs")).toBe(12);
  });

  // Returns correct size for "base"
  it('should return 16 when size is "base"', () => {
    expect(formatSize("base")).toBe(16);
  });

  // Returns correct size for "9xl"
  it('should return 128 when size is "9xl"', () => {
    expect(formatSize("9xl")).toBe(128);
  });

  // Throws error for invalid size input
  it("should throw an error for invalid size input", () => {
    expect(() => formatSize({})).toThrow("Invalid size input");
    expect(() => formatSize([])).toThrow("Invalid size input");
    expect(() => formatSize(true)).toThrow("Invalid size input");
  });

  // Returns input size for unknown size string
  it("should return input size when size is unknown size string", () => {
    expect(formatSize("unknown")).toBe("unknown");
  });

  // Returns input size for number input
  it("should return input size when size is number input", () => {
    expect(formatSize(10)).toBe(10);
    expect(formatSize(20)).toBe(20);
  });
});
