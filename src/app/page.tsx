"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMode } from "@/context/ModeContext";
import DevView from "@/components/dev/DevView";
import CyberView from "@/components/cyber/CyberView";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const { mode } = useMode();

  return (
    <main id="main-content" className="w-full flex-1 flex flex-col">
      <AnimatePresence mode="wait">
        {mode === "cyber" ? (
          <motion.div
            key="cyber-mode"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="w-full"
          >
            <CyberView />
          </motion.div>
        ) : (
          <motion.div
            key="dev-mode"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="w-full"
          >
            <DevView />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Shared High-Craft Editorial Footer */}
      <Footer />
    </main>
  );
}
