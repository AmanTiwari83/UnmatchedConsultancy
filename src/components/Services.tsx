"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import { servicesData } from "../data/services-data";
import Heading from "./common/Heading";
import ServiceCard from "./common/ServiceCard";

type ServiceProp = {
  limit?: number;
};

/* ------------------ Animations ------------------ */

const sectionVariants: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

/* ------------------ Component ------------------ */

export default function Services({ limit }: ServiceProp) {
  const pathname = usePathname();

  const visibleServices = limit
    ? servicesData.slice(0, limit)
    : servicesData;

  const isServicesPage = pathname === "/services";

  return (
    <motion.section
      className=" px-4 md:px-16 lg:px-24 xl:px-32 py-12 bg-gray-50"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Heading */}
      <motion.div variants={cardVariants}>
        <Heading
          label="Service"
          title="What we Offer"
          description="Expert accounting, taxation, and advisory services designed to help businesses grow with clarity and confidence."
        />
      </motion.div>

      {/* Cards */}
      <motion.div
        className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {visibleServices.map((service) => (
          <motion.div key={service.id} variants={cardVariants}>
            <Link href={`/services/${service.id}`} className="block h-full">
              <ServiceCard {...service} />
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Services Button (hidden on /services) */}
      {!isServicesPage && (
        <div className="flex mt-10 justify-center">
          <Link
            href="/services"
            className="
              group inline-flex items-center gap-3
              rounded-full
              bg-primary-900
              px-8 py-3
              text-base font-semibold text-white
              shadow-lg shadow-primary-900/30
              transition-all duration-300 ease-out
              hover:bg-secondary-600
              hover:shadow-secondary-700/40
            "
          >
            View All Services

            {/* Arrow */}
            <div
              className="
                inline-flex h-9 w-9 items-center justify-center
                rounded-full
                bg-white/20 text-white
                transition-all duration-300 ease-out
                group-hover:translate-x-1
                group-hover:-translate-y-1
                group-hover:bg-white/30
              "
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 13 12"
                fill="none"
                className="rotate-[-45deg]"
              >
                <path
                  d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </Link>
        </div>
      )}
    </motion.section>
  );
}
