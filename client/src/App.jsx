import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ModeProvider, useMode } from "@/context/ModeContext";
import Navbar from "@/components/navbar/Navbar";
import DevView from "@/components/dev/DevView";
import CyberView from "@/components/cybersec/CyberView";
import CyberMatrixBg from "@/components/cybersec/CyberMatrixBg";

function PortfolioContent() {
  const { mode, isDev, isCybersec } = useMode();

  return (
    <div className="min-h-screen bg-bg text-text theme-transition relative">
      {/* Background patterns per mode */}
      {isCybersec && <CyberMatrixBg />}
      {isDev && <div className="fixed inset-0 dev-paper-pattern pointer-events-none opacity-60 z-0" />}

      {/* STICKY GLASSMORPHISM NAVBAR WITH THE MODE TOGGLE */}
      <Navbar />

      {/* MAIN CONTENT AREA WITH ANIMATEPRESENCE MODE SWAP */}
      <main id="main-content" className="relative z-10 pt-20 sm:pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {isDev ? (
            <motion.div
              key="dev-portfolio"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <DevView />
            </motion.div>
          ) : (
            <motion.div
              key="cybersec-portfolio"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <CyberView />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <ModeProvider>
      <PortfolioContent />
    </ModeProvider>
  );
}
