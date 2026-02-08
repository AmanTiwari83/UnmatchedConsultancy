"use client";

import React, { useState } from "react";
import { IoChatbubbleEllipsesSharp, IoClose } from "react-icons/io5";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import AnimatedButton from "./common/AnimatedButton";
import Alert from "./common/Alert";

/* ---------------- Validation ---------------- */
const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNo: yup
    .string()
    .required("Phone number is required")
    .matches(/^[6-9]\d{9}$/, "Enter valid 10-digit number"),
  message: yup.string().min(5).required("Message is required"),
});

const QuickMessage = () => {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [alert, setAlert] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleQuickMessage = async (data: any) => {
    try {
      await axios.post("/api/quick-chat", data);
      // toast.success("Your message has been sent! We’ll get back to you shortly.");
       setAlert({ type: "success", message: "Your message has been sent! We’ll get back to you shortly." });
      reset();
      setOpen(false);
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
      {/* Floating Chat Button */}
      <button
        onClick={() => setOpen((p) => !p)}
        className="
          fixed bottom-4 right-4 sm:bottom-6 sm:right-6
          z-50 h-14 w-14 rounded-full
          bg-gradient-to-tr from-primary-800 to-primary-900
          shadow-2xl hover:scale-110 transition-all duration-300
        "
      >
        <IoChatbubbleEllipsesSharp className="text-2xl text-white mx-auto" />
      </button>

      {/* Popup Overlay */}
      {open && (
        <div
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            sm:items-end sm:justify-end
            px-4 sm:px-0
          "
          onClick={() => setOpen(false)} // 👈 click anywhere closes
        >
          {/* Card */}
          <div
            onClick={(e) => e.stopPropagation()} // 👈 prevents close inside
            className="
              bg-white
              w-full max-w-sm sm:w-[380px] md:w-[420px]
              rounded-3xl
              shadow-[0_25px_70px_rgba(0,0,0,0.25)]
              overflow-hidden
              sm:mb-24 sm:mr-6
              animate-chatOpen
            "
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-800 to-primary-900 text-white px-5 py-4 flex justify-between items-center">
              <div>
                <h4 className="font-semibold text-sm sm:text-base">
                  Hi there 👋
                </h4>
                <p className="text-[11px] sm:text-xs opacity-90">
                  We usually reply within minutes
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="hover:rotate-90 transition"
              >
                <IoClose size={20} />
              </button>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit(handleQuickMessage)}
              className="p-4 sm:p-5 space-y-3 sm:space-y-4"
            >
              {[
                { name: "name" as const, placeholder: "Your Name" },
                { name: "email" as const, placeholder: "Email Address" },
                { name: "phoneNo" as const, placeholder: "Phone Number" },
              ].map((field) => (
                <div key={field.name}>
                  <input
                    {...register(field.name)}
                    placeholder={field.placeholder}
                    className="
                      w-full rounded-xl border border-gray-200
                      px-4 py-3 sm:py-2.5 text-sm
                      focus:ring-2 focus:ring-primary-500
                      outline-none transition
                    "
                  />
                  {errors[field.name] && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors[field.name]?.message as string}
                    </p>
                  )}
                </div>
              ))}

              <div>
                <textarea
                  {...register("message")}
                  rows={3}
                  placeholder="How can we help you?"
                  className="
                    w-full rounded-xl border border-gray-200
                    px-4 py-3 sm:py-2.5 text-sm resize-none
                    focus:ring-2 focus:ring-primary-500
                    outline-none transition
                  "
                />
                {errors.message && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <AnimatedButton
                type="submit"
                disabled={isSubmitting}
                title={isSubmitting ? "Submitting..." : "Submit"}
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default QuickMessage;
