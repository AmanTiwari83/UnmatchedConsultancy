"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AlertProps {
  type: "success" | "error";
  message: string;
  open: boolean;
  onClose: () => void;
}

export default function Alert({ type, message, open, onClose }: AlertProps) {
  const bgColor = type === "success" ? "bg-primary-900" : "bg-red-600";
  const icon = type === "success" ? " " : " ";

  // Auto-close after 3 seconds
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer); // cleanup if unmounted
    }
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 max-w-md w-full ${bgColor} text-white rounded-lg shadow-lg p-4 flex items-start gap-3`}
        >
          <span className="text-xl">{icon}</span>
          <p className="text-sm flex-1">{message}</p>
          <button
            onClick={onClose}
            className="ml-2 text-white/70 hover:text-white transition font-bold"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}