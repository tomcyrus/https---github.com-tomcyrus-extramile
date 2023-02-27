import React from 'react';

const Logo = ({ isWhite, ...props }) => {
  return (
    <svg
    width={82}
    height={76}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M50.835 57.248a25.876 25.876 0 10-27.693 1.219M18.955 75l17.634-23.056 14.854 13.76 23.01-21.233"
      stroke="#384E22"
      strokeWidth={3}
    />
    <path
      d="M80.468 50.213l-12.03-10.571h12.03v10.57z"
      stroke="#384E22"
      strokeWidth={2}
    />
    <path
      d="M29.246 44.943V21.67H43.29v2.5H32.064v7.864h10.5v2.5h-10.5v7.909h11.41v2.5H29.245z"
      fill="#384E22"
    />
  </svg>
  );
};

export default Logo;
