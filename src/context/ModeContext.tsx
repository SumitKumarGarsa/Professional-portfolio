"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import Cookies from "js-cookie";

export type Mode = "dev" | "cyber";

interface ModeContextType {
  mode: Mode;
  isDev: boolean;
  isCyber: boolean;
  isWiping: boolean;
  toggleMode: () => void;
  setMode: (mode: Mode) => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export const COOKIE_NAME = "forma_mode";

export function ModeProvider({
  children,
  initialMode = "dev",
}: {
  children: React.ReactNode;
  initialMode?: Mode;
}) {
  const [mode, setModeState] = useState<Mode>(initialMode);
  const [isWiping, setIsWiping] = useState(false);

  // Synchronize DOM attributes, metadata & URL param
  const syncDomAndUrl = useCallback((targetMode: Mode) => {
    if (typeof window === "undefined") return;

    // 1. Set data-mode on root <html>
    document.documentElement.setAttribute("data-mode", targetMode);

    // 2. Persist in cookie (1 year max age)
    Cookies.set(COOKIE_NAME, targetMode, { expires: 365, path: "/" });

    // 3. Update URL query parameter without full reload
    const url = new URL(window.location.href);
    url.searchParams.set("mode", targetMode);
    window.history.replaceState({}, "", url.toString());

    // 4. Update browser theme-color meta tag
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute("content", targetMode === "cyber" ? "#04080C" : "#141312");
    }
  }, []);

  const setMode = useCallback(
    (newMode: Mode) => {
      if (newMode !== "dev" && newMode !== "cyber") return;
      if (newMode === mode) return;

      // Trigger 700ms wipe curtain transition
      setIsWiping(true);
      setTimeout(() => {
        setModeState(newMode);
        syncDomAndUrl(newMode);
      }, 340);

      setTimeout(() => {
        setIsWiping(false);
      }, 700);
    },
    [mode, syncDomAndUrl]
  );

  const toggleMode = useCallback(() => {
    const next = mode === "dev" ? "cyber" : "dev";
    setMode(next);
  }, [mode, setMode]);

  // On mount: Check URL parameter priority > Cookie > initialMode
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlMode = urlParams.get("mode") as Mode | null;

    if (urlMode === "dev" || urlMode === "cyber") {
      setModeState(urlMode);
      syncDomAndUrl(urlMode);
    } else {
      const savedCookie = Cookies.get(COOKIE_NAME) as Mode | undefined;
      if (savedCookie === "dev" || savedCookie === "cyber") {
        setModeState(savedCookie);
        syncDomAndUrl(savedCookie);
      } else {
        syncDomAndUrl(initialMode);
      }
    }

    // Handle browser back / forward navigation
    const handlePopState = () => {
      const currentParams = new URLSearchParams(window.location.search);
      const popMode = currentParams.get("mode") as Mode | null;
      if (popMode === "dev" || popMode === "cyber") {
        setModeState(popMode);
        document.documentElement.setAttribute("data-mode", popMode);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [initialMode, syncDomAndUrl]);

  return (
    <ModeContext.Provider
      value={{
        mode,
        isDev: mode === "dev",
        isCyber: mode === "cyber",
        isWiping,
        toggleMode,
        setMode,
      }}
    >
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error("useMode must be used within a ModeProvider");
  }
  return context;
}
