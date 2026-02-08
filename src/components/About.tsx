"use client";

import Image from "next/image";
import Heading from "./common/Heading";
import { usePathname } from "next/navigation";
import Button from "./common/Button";
import { motion, type Variants } from "framer-motion";
import { toast } from "react-toastify";

/* ------------------ Animations ------------------ */

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const contentVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
  },
};

const floatCardVariants: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut", delay: 0.3 },
  },
};

/* ------------------ Component ------------------ */

const About = () => {
  const pathname = usePathname();

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="relative py-12 bg-gray-50 overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-50 via-white to-secondary-50" />

      <Heading
        label="Know Us Better"
        title="About Us"
        description="Providing expert accounting, taxation, and advisory services."
      />

{/* MAIN GRID */}
<div
  className="
    mx-auto mt-16 grid max-w-7xl
    grid-cols-1 xl:grid-cols-2
    gap-10 px-4 md:px-16 lg:px-24
    items-stretch
    xl:min-h-[460px]
  "
>
  {/* ---------------- LEFT : IMAGE ---------------- */}
  <motion.div
    variants={imageVariants}
    className="relative h-full w-full"
  >
    {/* Glow */}
    <div className="absolute -inset-4 rounded-3xl bg-primary-200/40 blur-2xl opacity-70" />

    {/* Image container fills height */}
    <div className="relative h-full min-h-[280px] xl:min-h-full w-full rounded-3xl overflow-hidden shadow-2xl">
      <Image
        src="/images/about/about-2.avif"
        alt="Unmatched Consultancy Team"
        fill
        priority
        className="object-cover"
      />

      {/* Floating Trust Card */}
      <motion.div
        variants={floatCardVariants}
        className="absolute bottom-5 left-5 hidden md:flex items-center gap-3 rounded-xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur"
      >
        <div className="flex -space-x-3">
          {[
            "/images/about/user-1.png",
            "/images/about/user-2.png",
            "/images/about/user-3.png",
          ].map((src, i) => (
            <Image
              key={i}
              src={src}
              alt="Team member"
              width={34}
              height={34}
              className="rounded-full border-2 border-white"
            />
          ))}
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-800 text-xs text-white border-2 border-white">
            20+
          </div>
        </div>
        <p className="text-sm font-medium text-primary-900">
          Trusted professionals
        </p>
      </motion.div>
    </div>
  </motion.div>

  {/* ---------------- RIGHT : CONTENT ---------------- */}
  <motion.div
    variants={contentVariants}
    className="
      flex h-full w-full flex-col
      justify-center text-slate-800
    "
  >
    {/* Label */}
    <span className="w-fit rounded-full bg-secondary-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-secondary-700">
        Who We Are ?
    </span>

    {/* Heading */}
    <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight text-gray-900">
      We help businesses grow with
      <span className="text-primary-700"> clarity & confidence</span>
    </h2>

    {/* Description */}
    <p className="mt-5 text-base leading-relaxed text-gray-600">
      Unmatched Consultancy is a trusted business advisory and financial
      services firm helping startups, entrepreneurs, and established
      organizations scale with confidence.
    </p>

    <p className="mt-4 text-base leading-relaxed text-gray-600">
      From statutory compliance to growth-driven strategy, we simplify
      complex processes and deliver solutions tailored to your business
      goals.
    </p>

    {/* Highlights */}
    <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
      {[
        "20+ Industry Experts",
        "Startup & Enterprise Focus",
        "Compliance Made Simple",
        "Growth-Oriented Strategy",
      ].map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-sm"
        >
          <span className="h-2 w-2 rounded-full bg-primary-600" />
          <span className="font-medium text-gray-700">{item}</span>
        </div>
      ))}
    </div>

    {/* CTA */}
    <div className="mt-8">
      {pathname !== "/about" ? (
        <Button title="Know more" href="/about" />
      ) : (
        <Button title="Back to home" href="/" />
      )}
    </div>
  </motion.div>
</div>
    </motion.section>
  );
};

export default About;