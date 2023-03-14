import React from 'react';

const Logo = ({ isWhite, ...props }) => {
  return (
    <svg
    width={53}
    height={51}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M35.98 40.52a18.314 18.314 0 10-19.6.862"
      stroke="#384E22"
      strokeWidth={2.5}
    />
    <path
      d="M12.117 49.045l13.848-11.54 9.81 9.81 10.385-8.656"
      stroke="#384E22"
      strokeWidth={2}
    />
    <path
      d="M44.445 35.322l-1.987-.105 1.424 1.39 6.241 6.092 1.187 1.157.086-1.655.301-5.749.04-.749-.75-.04-6.542-.341z"
      stroke="#384E22"
      strokeWidth={1.5}
    />
    <path
      d="M20.402 28.924v-16h9.656v1.719h-7.719v5.406h7.219v1.719h-7.219v5.437h7.844v1.72h-9.781z"
      fill="#384E22"
    />
  </svg>
  );
};

export default Logo;
