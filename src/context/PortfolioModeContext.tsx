"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type PortfolioMode = "mern" | "cyber";

interface PortfolioModeContextType {
  mode: PortfolioMode;
  toggleMode: () => void;
  setMode: (mode: PortfolioMode) => void;
}

const PortfolioModeContext = createContext<PortfolioModeContextType | undefined>(undefined);

export function PortfolioModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<PortfolioMode>("mern");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio_mode") as PortfolioMode | null;
    if (saved === "mern" || saved === "cyber") {
      setModeState(saved);
    }
  }, []);

  const setMode = (newMode: PortfolioMode) => {
    setModeState(newMode);
    localStorage.setItem("portfolio_mode", newMode);
  };

  const toggleMode = () => {
    const next = mode === "mern" ? "cyber" : "mern";
    setMode(next);
  };

  return (
    <PortfolioModeContext.Provider value={{ mode, toggleMode, setMode }}>
      <div
        className={`transition-colors duration-500 min-h-screen ${
          mode === "cyber"
            ? "bg-[#090C10] text-[#E2E8F0] selection:bg-[#00F59B] selection:text-[#090C10]"
            : "bg-[#F4EFEA] text-[#141311] selection:bg-[#141311] selection:text-[#F4EFEA]"
        }`}
      >
        {children}
      </div>
    </PortfolioModeContext.Provider>
  );
}

export function usePortfolioMode() {
  const context = useContext(PortfolioModeContext);
  if (!context) {
    throw new Error("usePortfolioMode must be used within a PortfolioModeProvider");
  }
  return context;
}
