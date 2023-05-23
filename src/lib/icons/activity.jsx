import React, { forwardRef } from "react";
import formatSize from "../size";
const Activity = forwardRef(
  ({ color = "currentColor", size = 24, ...rest }, ref) => {
    const formattedSize = formatSize(size);
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={formattedSize}
        height={formattedSize}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...rest}
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    );
  }
);
Activity.displayName = "Activity";
export default Activity;
