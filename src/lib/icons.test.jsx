import React, { createRef } from "react";
import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { FiActivity, FiArrowRight, FiCheck, formatSize } from "./index";

afterEach(() => {
  cleanup();
});

describe("Icon Components", () => {
  it("renders with default props (size 24, currentColor, strokeWidth 2)", () => {
    const { container } = render(<FiActivity data-testid="icon" />);
    const svg = container.querySelector("svg");
    expect(svg).toBeTruthy();
    expect(svg?.getAttribute("width")).toBe("24");
    expect(svg?.getAttribute("height")).toBe("24");
    expect(svg?.getAttribute("stroke")).toBe("currentColor");
    expect(svg?.getAttribute("stroke-width")).toBe("2");
    expect(svg?.getAttribute("viewBox")).toBe("0 0 24 24");
  });

  it("applies Tailwind preset size string correctly", () => {
    const { container: c1 } = render(<FiActivity size="xs" />);
    const svg1 = c1.querySelector("svg");
    expect(svg1?.getAttribute("width")).toBe("12");
    expect(svg1?.getAttribute("height")).toBe("12");

    const { container: c2 } = render(<FiArrowRight size="lg" />);
    const svg2 = c2.querySelector("svg");
    expect(svg2?.getAttribute("width")).toBe("18");
    expect(svg2?.getAttribute("height")).toBe("18");

    const { container: c3 } = render(<FiCheck size="9xl" />);
    const svg3 = c3.querySelector("svg");
    expect(svg3?.getAttribute("width")).toBe("128");
    expect(svg3?.getAttribute("height")).toBe("128");
  });

  it("applies custom number and string sizes", () => {
    const { container: c1 } = render(<FiActivity size={48} />);
    const svg1 = c1.querySelector("svg");
    expect(svg1?.getAttribute("width")).toBe("48");
    expect(svg1?.getAttribute("height")).toBe("48");

    const { container: c2 } = render(<FiActivity size="2.5rem" />);
    const svg2 = c2.querySelector("svg");
    expect(svg2?.getAttribute("width")).toBe("2.5rem");
    expect(svg2?.getAttribute("height")).toBe("2.5rem");
  });

  it("forwards ref to the underlying SVG element", () => {
    const ref = createRef();
    render(<FiActivity ref={ref} />);
    expect(ref.current).toBeInstanceOf(window.SVGElement);
    expect(ref.current?.tagName.toLowerCase()).toBe("svg");
  });

  it("passes arbitrary SVG and accessibility attributes (aria-*, role, className)", () => {
    const { container } = render(
      <FiActivity
        role="img"
        aria-label="Activity tracker"
        className="custom-icon-class"
        strokeWidth={3}
        color="#ff0000"
      />
    );
    const svg = container.querySelector("svg");
    expect(svg?.getAttribute("role")).toBe("img");
    expect(svg?.getAttribute("aria-label")).toBe("Activity tracker");
    expect(svg?.getAttribute("class")).toBe("custom-icon-class");
    expect(svg?.getAttribute("stroke-width")).toBe("3");
    expect(svg?.getAttribute("stroke")).toBe("#ff0000");
  });

  it("exports formatSize utility function", () => {
    expect(formatSize).toBeDefined();
    expect(formatSize("base")).toBe(16);
    expect(formatSize(32)).toBe(32);
  });
});
