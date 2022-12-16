import React, { forwardRef } from 'react';
const Navigation2 = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <polygon points="12 2 19 21 12 17 5 21 12 2" />
    </svg>
  );
});
Navigation2.displayName = 'Navigation2';
export default Navigation2;
