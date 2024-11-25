"use client";
//fill = "#E84432",

export const XruzLogo = ({
  className,
  id,
}: {
  className?: string;
  id?: string;
}) => {
  return (
    <svg
      id={id}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 224 130"
      className={className}
    >
      <path
        d="M15 15 L115 115 L165 65"
        fill="none"
        strokeWidth="30"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 115 L115 15"
        fill="none"
        strokeWidth="30"
        strokeLinecap="round"
      />
      <circle cx="189.5" cy="40.5" r="14.5" />
    </svg>
  );
};
