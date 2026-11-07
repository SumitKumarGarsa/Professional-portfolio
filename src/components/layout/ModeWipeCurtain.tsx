"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMode } from "@/context/ModeContext";

export default function ModeWipeCurtain() {
  const { isWiping, mode } = useMode();

  return (
    <AnimatePresence>
      {isWiping && (
        <motion.div
          key="mode-wipe-curtain"
          initial={{ scaleY: 0, transformOrigin: "bottom" }}
          animate={{
            scaleY: [0, 1, 1, 0],
            transformOrigin: ["bottom", "bottom", "top", "top"],
          }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.7,
            times: [0, 0.45, 0.55, 1],
            ease: [0.76, 0, 0.24, 1],
          }}
          className={`fixed inset-0 z-[100] pointer-events-none flex items-center justify-center ${
            mode === "cyber" ? "bg-[#04080C]" : "bg-[#141312]"
          }`}
          aria-hidden="true"
        >
          {/* Subtle accent line traversing the screen */}
          <div
            className={`w-full h-[2px] absolute top-1/2 -translate-y-1/2 opacity-70 ${
              mode === "cyber"
                ? "bg-[#00E58A] shadow-[0_0_20px_#00E58A]"
                : "bg-[#FF6A1A] shadow-[0_0_20px_#FF6A1A]"
            }`}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
