import React, { forwardRef } from 'react';
const Bluetooth = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5" />
    </svg>
  );
});
Bluetooth.displayName = 'Bluetooth';
export default Bluetooth;
