/**
 * Formats the size based on predefined values.
 * @param {number|string} size - The size to be formatted.
 * @returns {number} - The formatted size.
 */

const formatSize = (size) => {
  const sizeLookup = {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    "2xl": 24,
    "3xl": 30,
    "4xl": 36,
    "5xl": 48,
    "6xl": 60,
    "7xl": 72,
    "8xl": 96,
    "9xl": 128,
  };

  if (typeof size !== "string" && typeof size !== "number") {
    throw new Error("Invalid size input");
  }

  return sizeLookup[size] || size;
};

export default formatSize;
