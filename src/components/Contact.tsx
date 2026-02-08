"use client";

import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import Heading from "./common/Heading";
import { motion, Variants, easeInOut, easeOut } from "framer-motion";
import AnimatedButton from "./common/AnimatedButton";
import { useState } from "react";
import Alert from "./common/Alert";

/* ---------------- Schema ---------------- */

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phoneNo: yup
    .string()
    .required("Phone number is required")
    .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  message: yup.string().required(),
});

type ContactFormData = yup.InferType<typeof schema>;

/* ---------------- Animations ---------------- */

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeInOut }, // ✅ fixed
  },
};

/* ---------------- Component ---------------- */

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: yupResolver(schema),
  });
  const [alert, setAlert] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleContact = async (data: ContactFormData) => {
    try {
      await axios.post("/api/contact", data);
      // toast.success("Thank you for reaching out! We’ll get back to you soon.");
      setAlert({ type: "success", message: "Your message has been sent! We’ll get back to you shortly." });
      reset();
    } catch {
      // toast.error("⚠️ Oops! Something went wrong. Please try again later.");
      setAlert({ type: "error", message: "⚠️ Oops! Something went wrong. Please try again later." });
    }
  };

  return (
    <>
       {alert && (
        <Alert
          open={!!alert}
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert(null)}
        />
      )}

    <section className="relative overflow-hidden bg-gray-50 py-12 md:py-20">
      <Heading
        label="Contact"
        title="Get In Touch"
        description="Get in touch with our experts for accounting, taxation, compliance, and business advisory support."
      />

      {/* Brand glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-900/20 blur-[220px]" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-14 px-4 md:grid-cols-2 md:gap-20 md:px-16 lg:px-24"
      >
        {/* -------- Animated Divider (desktop only) -------- */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: easeOut }} // ✅ fixed
          className="
            pointer-events-none absolute
            left-1/2 top-10 hidden h-[80%] w-px
            -translate-x-1/2
            bg-gradient-to-b
            from-transparent via-primary-900/30 to-transparent
            md:block
          "
        />

        {/* ---------------- LEFT ---------------- */}
        <motion.div
          variants={fadeUp}
          className="relative flex flex-col items-center text-center md:items-start md:text-left"
        >
          {/* Soft background wash */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary-900/5 via-transparent to-transparent" />

          {/* Trust pill */}
          <div className="flex items-center gap-2 rounded-full border border-primary-900/30 bg-white px-3 py-1 text-xs shadow-sm">
            <div className="flex">
              <img src="/images/about/user-1.png" className="h-7 w-7 rounded-full border border-primary-900" />
              <img src="/images/about/user-2.png" className="h-7 w-7 -translate-x-2 rounded-full border border-primary-900" />
              <img src="/images/about/user-3.png" className="h-7 w-7 -translate-x-4 rounded-full border border-primary-900" />
            </div>
            <span className="-translate-x-2 text-primary-900">
              Trusted by 5k+ businesses
            </span>
          </div>

          <h2 className="mt-6 max-w-xl bg-gradient-to-r from-primary-900 to-primary-500 bg-clip-text text-3xl font-semibold text-transparent md:text-5xl">
            Get expert business advice today
          </h2>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-700">
            Reach out to Unmatched Consultancy for accounting, taxation,
            compliance, and strategic guidance — built for long-term growth.
          </p>

          {/* Feature list */}
          <div className="mt-10 grid w-full max-w-md gap-4 sm:grid-cols-2">
            {[
              { title: "Expert Consultants", desc: "20+ professionals" },
              { title: "Fast Response", desc: "Replies within 24 hours" },
              { title: "Pan-India Support", desc: "India & abroad" },
              { title: "Compliance First", desc: "Zero-error process" },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-white/80 p-4 backdrop-blur"
              >
                <h4 className="text-sm font-semibold text-primary-900">
                  {item.title}
                </h4>
                <p className="mt-1 text-xs text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ---------------- FORM ---------------- */}
        <motion.div
          variants={fadeUp}
          className="
            w-full max-w-lg
            rounded-2xl bg-white
            p-6 md:p-8
            shadow-2xl
            ring-1 ring-primary-900/10
          "
        >
          <form
            onSubmit={handleSubmit(handleContact)}
            className="space-y-5"
            suppressHydrationWarning
          >
            {/* Name */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Name
              </label>
              <input
                {...register("name")}
                placeholder="Eden Johnson"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20"
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                {...register("email")}
                placeholder="eden@example.com"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Phone
              </label>
              <input
                {...register("phoneNo")}
                placeholder="9876XXXXXX"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20"
              />
              {errors.phoneNo && (
                <p className="mt-1 text-xs text-red-500">{errors.phoneNo.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea
                {...register("message")}
                rows={4}
                placeholder="Write your message here..."
                className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20"
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
              )}
            </div>

            {/* Footer */}
            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xs text-xs text-slate-600">
                By submitting, you agree to our{" "}
                <span className="font-medium text-slate-800">Terms</span> &{" "}
                <span className="font-medium text-slate-800">Privacy Policy</span>.
              </p>

              <AnimatedButton
                type="submit"
                disabled={isSubmitting}
                title={isSubmitting ? "Submitting..." : "Submit"}
              />
            </div>
          </form>
        </motion.div>
      </motion.div>
    </section>
    </>
  );
}