import React from "react";
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import * as Bundle from "../../dist/react-fi.js";

describe("Built ESM Bundle Verification", () => {
  it("exports icons and formatSize from built dist/react-fi.js", () => {
    expect(Bundle.FiActivity).toBeDefined();
    expect(Bundle.FiArrowRight).toBeDefined();
    expect(Bundle.formatSize).toBeDefined();
    expect(Bundle.formatSize("base")).toBe(16);
  });

  it("renders an icon from the built bundle into DOM", () => {
    const { container } = render(<Bundle.FiActivity size="lg" color="blue" />);
    const svg = container.querySelector("svg");
    expect(svg).toBeTruthy();
    expect(svg?.getAttribute("width")).toBe("18");
    expect(svg?.getAttribute("height")).toBe("18");
    expect(svg?.getAttribute("stroke")).toBe("blue");
  });
});
