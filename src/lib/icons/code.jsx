import React, { forwardRef } from 'react';
const Code = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
});
Code.displayName = 'Code';
export default Code;
