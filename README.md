# React-FI

[![npm](https://img.shields.io/npm/v/react-fi.svg)](https://www.npmjs.com/package/react-fi)
[![CI](https://github.com/monkeyscript/react-fi/actions/workflows/ci.yml/badge.svg)](https://github.com/monkeyscript/react-fi/actions/workflows/ci.yml)
[![License](https://img.shields.io/npm/l/react-fi.svg)](https://github.com/monkeyscript/react-fi/blob/main/LICENSE)
[![React 18 & 19 Compatible](https://img.shields.io/badge/React-18%20%7C%2019-61dafb.svg)](https://react.dev)

A modern, tree-shakeable React library for [Feather icons](https://feathericons.com/) with native TypeScript support, Tailwind-compatible size presets, `ref` forwarding, and full compatibility with React 18, React 19, and Next.js (App Router / React Server Components).

🚀 **[Browse Live Icon Explorer](https://monkeyscript.github.io/react-fi/)**

---

## Features

- ⚡ **React 18 & 19 Ready:** Fully compatible with React 18 and React 19.
- 🎯 **TypeScript First:** Comprehensive typings with IDE autocomplete for Tailwind size presets.
- 🪶 **Tree-Shakeable:** Bundled with `"sideEffects": false` in ESM and CommonJS — bundle only the icons you use.
- 🔗 **Ref Forwarding:** All icons forward their `ref` to the underlying `SVGSVGElement`.
- 🌐 **Next.js & SSR Ready:** Preconfigured with `'use client'` directive for seamless use in Next.js App Router and client components.
- 🎨 **Tailwind Size Presets:** Use familiar Tailwind sizes (`xs`, `sm`, `base`, `lg`, `xl`, `2xl`, etc.) or custom numbers/strings.

---

## Installation

```bash
npm install react-fi
# or
yarn add react-fi
# or
pnpm add react-fi
```

---

## Usage

### Basic Usage

```jsx
import React from "react";
import { FiActivity, FiArrowRight } from "react-fi";

export default function App() {
  return (
    <div>
      <FiActivity />
      <FiArrowRight color="#3b82f6" size="lg" />
    </div>
  );
}
```

### Ref Forwarding & Accessibility

All SVG attributes (including `ref`, `role`, `aria-*`, `className`, and `style`) are forwarded to the underlying `<svg>` element:

```tsx
import React, { useRef } from "react";
import { FiCheck } from "react-fi";

export default function StatusBadge() {
  const svgRef = useRef<SVGSVGElement>(null);

  return (
    <FiCheck
      ref={svgRef}
      role="img"
      aria-label="Operation completed successfully"
      className="text-green-500 hover:scale-110 transition-transform"
      strokeWidth={2.5}
    />
  );
}
```

### Customizing Props

Each SVG attribute is customizable:

| Prop Name | Type | Default Value | Description |
| :--- | :--- | :--- | :--- |
| `size` | `IconSize` (`number \| string`) | `24` | Size in pixels or Tailwind preset (`'xs'`, `'sm'`, `'lg'`, etc.) |
| `color` | `string` | `'currentColor'` | SVG stroke color |
| `strokeWidth` | `number \| string` | `2` | Stroke width |
| `fill` | `string` | `'none'` | SVG fill color |
| `strokeLinecap` | `string` | `'round'` | Stroke line cap |
| `strokeLinejoin` | `string` | `'round'` | Stroke line join |

---

## Size Presets

Predefined Tailwind CSS font-size presets map directly to standard pixel values:

| Preset | Pixel Size |
| :--- | :--- |
| `'xs'` | 12px |
| `'sm'` | 14px |
| `'base'` | 16px |
| `'lg'` | 18px |
| `'xl'` | 20px |
| `'2xl'` | 24px |
| `'3xl'` | 30px |
| `'4xl'` | 36px |
| `'5xl'` | 48px |
| `'6xl'` | 60px |
| `'7xl'` | 72px |
| `'8xl'` | 96px |
| `'9xl'` | 128px |

```jsx
<FiActivity size="lg" /> // Same as size={18}
<FiActivity size="2xl" /> // Same as size={24}
<FiActivity size={48} /> // Custom number
<FiActivity size="2.5rem" /> // Custom string
```

---

## Utility Export

The `formatSize` utility function is exported for use in custom icon wrappers:

```javascript
import { formatSize } from "react-fi";

const size = formatSize("lg"); // 18
```

---

## Issues & Contributions

For bug reports or feature requests, please open an issue on [GitHub Issues](https://github.com/monkeyscript/react-fi/issues). Contributions are welcome!

---

## License

[Apache-2.0](https://github.com/monkeyscript/react-fi/blob/main/LICENSE) © [MonkeyScript](https://github.com/monkeyscript)
