import Link from "next/link";

const SecondaryButton = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link
      href={href}
      className="
        group relative inline-flex overflow-hidden rounded-full
        border border-secondary-600
      "
    >
      {/* Hover overlay */}
      <span
        className="
          absolute inset-0 z-0
          bg-primary-900
          -translate-x-full
          transition-transform duration-300 ease-out
          group-hover:translate-x-0
        "
      />

      {/* Content */}
      <span
        className="
          relative z-10 inline-flex items-center gap-3
          px-6 py-3
          sm:px-10
          font-medium
          text-secondary-600
          whitespace-nowrap
          transition-colors duration-300
          group-hover:text-white
        "
      >
        {title}
        <svg width="14" height="14" viewBox="0 0 13 12" fill="none">
          <path
            d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
            fill="currentColor"
          />
        </svg>
      </span>
    </Link>
  );
};

export default SecondaryButton;