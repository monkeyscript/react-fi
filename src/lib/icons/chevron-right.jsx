import React, { forwardRef } from 'react';
import formatSize from '../size';
const ChevronRight = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
});
ChevronRight.displayName = 'ChevronRight';
export default ChevronRight;
