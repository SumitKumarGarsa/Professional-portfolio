"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface NavigationContextType {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  toggleMenu: () => void;
  closeMenu: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within Providers");
  }
  return context;
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  // Close menu on route change or Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        closeMenu();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <NavigationContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        toggleMenu,
        closeMenu,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}
