import React from "react";

type HeadingProps = {
  label: string;
  title: string;
  description: string;
};

const Sparkle = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M8 16C8 11.7645 4.23553 8 0 8C4.23553 8 8 4.23553 8 0C8 4.23553 11.7645 8 16 8C11.7645 8 8 11.7645 8 16Z"
      fill="#bc8737 "
    />
  </svg>
);

const Heading = ({ label, title, description }: HeadingProps) => {
  return (
    <div className="text-center px-4 md:px-16 lg:px-24 xl:px-24">
      
      {/* Top Label */}
      <div className="mb-3 flex items-center justify-center gap-2 text-xs font-medium tracking-widest text-primary-900 family-semibold ">
        <Sparkle />
        <span>{label.toUpperCase()}</span>
        <Sparkle />
      </div>

      {/* Main Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary-900 family-bold">
        {title}
      </h1>

      {/* Description */}
      <p className="mt-3 text-sm md:text-base text-primary-700 max-w-2xl mx-auto family-regular">
        {description}
      </p>
    </div>
  );
};

export default Heading;