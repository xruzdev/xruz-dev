"use client";
//fill = "#E84432",
export const XruzLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      id="logo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 224 130"
      className={className}
    >
      <polyline
        points="15 15 115 115 165 65"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="30"
      />
      <line
        x1="15"
        y1="115"
        x2="115"
        y2="15"
        fill="none"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="30"
      />
      <circle cx="189.5" cy="40.5" r="14.5" />
    </svg>
  );
};
