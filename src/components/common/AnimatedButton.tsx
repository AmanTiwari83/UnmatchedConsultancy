const AnimatedButton = ({
  title,
  type = "button",
  disabled = false,
}: {
  title: string;
  type?: "button" | "submit";
  disabled?: boolean;
}) => {
  return (
    <div className="flex justify-center w-full">
      <button
        type={type}
        disabled={disabled}
        className="
          group relative inline-flex items-center
          overflow-hidden rounded-full
          disabled:opacity-60
          w-full max-w-xs
          sm:max-w-sm md:max-w-md
          px-4 py-3
        "
      >
        {/* Base background */}
        <span className="absolute inset-0 bg-primary-900" />

        {/* Hover overlay */}
        <span
          className="
            absolute inset-0 bg-secondary-600
            translate-x-[-100%] group-hover:translate-x-0
            transition-transform duration-300 ease-out
            will-change-transform pointer-events-none
          "
        />

        {/* Content */}
        <span className="relative z-10 flex items-center justify-center w-full text-white font-medium whitespace-nowrap">
          <span className="text-center">{title}</span>
        </span>
      </button>
    </div>
  );
};

export default AnimatedButton;
