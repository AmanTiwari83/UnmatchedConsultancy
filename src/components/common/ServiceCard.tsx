// import Link from "next/link";

// const ServiceCard = ({ id, icon: Icon, title, description }) => {
//   return (
//     <article
//       className="
//         group relative h-full overflow-hidden rounded-2xl
//         bg-secondary-300 p-8
//         transition-all duration-300
//       "
//     >
//       {/* Hover background overlay */}
//       <div
//         className="
//           absolute inset-0 z-0
//           bg-primary-700
//           translate-y-full
//           transition-transform duration-300 ease-out
//           group-hover:translate-y-0
//         "
//       />

//       {/* Bottom shape – default */}
//       <img
//         src="https://techtro-wp.qzency.com/wp-content/uploads/2025/01/item-shape.png"
//         alt=""
//         aria-hidden
//         className="
//           absolute bottom-0 right-0 z-0 w-40
//           transition-opacity duration-300
//           group-hover:opacity-0
//         "
//       />

//       {/* Bottom shape – hover */}
//       <img
//         src="https://techtro-wp.qzency.com/wp-content/uploads/2025/01/item-shape-2.png"
//         alt=""
//         aria-hidden
//         className="
//           absolute bottom-0 right-0 z-0 w-40
//           opacity-0 transition-opacity duration-300
//           group-hover:opacity-100
//         "
//       />

//       {/* Content */}
//       <div className="relative z-10">
//         {/* Icon */}
//         <div
//           className="
//             mb-6 inline-flex h-16 w-16 items-center justify-center
//             rounded-2xl bg-white/80
//             text-primary-700
//             transition-all duration-300
//             group-hover:bg-white/20
//             group-hover:text-white
//           "
//         >
//           <Icon className="text-2xl" />
//         </div>

//         {/* Title */}
//         <h3
//           className="
//             text-xl font-semibold text-slate-900
//             transition-colors duration-300
//             group-hover:text-white
//           "
//         >
//           {title}
//         </h3>

//         {/* Description */}
//         <p
//           className="
//             mt-3 text-sm leading-relaxed text-slate-600
//             transition-colors duration-300
//             group-hover:text-white/90
//           "
//         >
//           {description}
//         </p>

//         {/* Arrow link (default primary → secondary on hover) */}
//         {/* <Link
//           href={`/services/${id}`}
//           aria-label={`View ${title}`}
//           className="
//             absolute bottom-6 right-6
//             flex h-11 w-11 items-center justify-center
//             rounded-full
//             bg-primary-700 text-white
//             shadow-md
//             transition-all duration-300 ease-out
//             group-hover:bg-secondary-500
//             group-hover:scale-110
//           "
//         >
//           →
//         </Link> */}
//       </div>
//     </article>
//   );
// };

// export default ServiceCard;


import Link from "next/link";

const ServiceCard = ({ id, icon: Icon, title, description }: { id: string; icon: any; title: string; description: string }) => {
  return (
    <article
      className="
        group relative h-full overflow-hidden rounded-2xl
        bg-primary-700 md:p-8 p-5
        transition-all duration-300
      "
    >
      {/* Hover background overlay (secondary comes on hover) */}
      <div
        className="
          absolute inset-0 z-0
          bg-secondary-300
          translate-y-full
          transition-transform duration-300 ease-out
          group-hover:translate-y-0
        "
      />

      {/* Bottom shape – DEFAULT (hover version earlier) */}
      <img
        src="https://techtro-wp.qzency.com/wp-content/uploads/2025/01/item-shape-2.png"
        alt=""
        aria-hidden
        className="
          absolute bottom-0 right-0 z-0 w-40
          transition-opacity duration-300
          group-hover:opacity-0
        "
      />

      {/* Bottom shape – ON HOVER (default earlier) */}
      <img
        src="https://techtro-wp.qzency.com/wp-content/uploads/2025/01/item-shape.png"
        alt=""
        aria-hidden
        className="
          absolute bottom-0 right-0 z-0 w-40
          opacity-0 transition-opacity duration-300
          group-hover:opacity-100
        "
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div
          className="
            mb-6 inline-flex h-16 w-16 items-center justify-center
            rounded-2xl bg-white/20
            text-white
            transition-all duration-300
            group-hover:bg-white/80
            group-hover:text-primary-700
          "
        >
          <Icon className="text-2xl" />
        </div>

        {/* Title */}
        <h3
          className="
            text-xl font-semibold text-white
            transition-colors duration-300
            group-hover:text-slate-900
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-3 text-sm leading-relaxed text-white/90
            transition-colors duration-300
            group-hover:text-slate-600
          "
        >
          {description}
        </p>
      </div>
    </article>
  );
};

export default ServiceCard;
