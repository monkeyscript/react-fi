const formatSize = (size) => {
  switch (size) {
    case "xs":
      return 12;
    case "sm":
      return 14;
    case "base":
      return 16;
    case "lg":
      return 18;
    case "xl":
      return 20;
    case "2xl":
      return 24;
    case "3xl":
      return 30;
    case "4xl":
      return 36;
    case "5xl":
      return 48;
    case "6xl":
      return 60;
    case "7xl":
      return 72;
    case "8xl":
      return 96;
    case "9xl":
      return 128;
    default:
      return size;
  }
};

export default formatSize;
