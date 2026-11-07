import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

const ModeContext = createContext(undefined);

const STORAGE_KEY = "skg_portfolio_mode";

export function ModeProvider({ children }) {
  // 1. Initial State resolution: URL Param > localStorage > Default 'dev'
  const [mode, setModeState] = useState(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const urlMode = urlParams.get("mode");
      if (urlMode === "dev" || urlMode === "cybersec") {
        return urlMode;
      }
      const savedMode = localStorage.getItem(STORAGE_KEY);
      if (savedMode === "dev" || savedMode === "cybersec") {
        return savedMode;
      }
    }
    return "dev";
  });

  // 2. Synchronize DOM Attributes, Title, Meta Tags & URL
  const updateMetadataAndDom = useCallback((currentMode) => {
    if (typeof window === "undefined") return;

    // A. Set data-theme on root HTML element
    document.documentElement.setAttribute("data-theme", currentMode);

    // B. Sync theme-color meta tag for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", currentMode === "cybersec" ? "#0A0D0B" : "#F6F1E7");
    }

    // C. Dynamic Title & Descriptions
    if (currentMode === "cybersec") {
      document.title = "Sumit Kumar Garsa | Cybersecurity Engineer & Offensive Security Researcher";
      
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          "content",
          "Offensive security research, penetration testing, DevSecOps pipeline automation, and zero-trust cloud security by Sumit Kumar Garsa."
        );
      }

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute("content", "Sumit Kumar Garsa | Cybersecurity Engineer & Threat Researcher");
      }
    } else {
      document.title = "Sumit Kumar Garsa | Senior MERN Stack Developer & API Architect";
      
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          "content",
          "Production MERN stack architecture, high-throughput Node.js microservices, and sub-100ms React 18 interfaces by Sumit Kumar Garsa."
        );
      }

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute("content", "Sumit Kumar Garsa | Senior MERN Stack Developer");
      }
    }

    // D. Sync URL query parameter without page refresh
    const url = new URL(window.location.href);
    url.searchParams.set("mode", currentMode);
    window.history.replaceState({}, "", url.toString());

    // E. Save to localStorage
    try {
      localStorage.setItem(STORAGE_KEY, currentMode);
    } catch (e) {
      console.warn("localStorage write disabled or failed:", e);
    }
  }, []);

  // 3. Mode Switch Handler (Includes Smooth Scroll Reset as Specified)
  const setMode = useCallback((newMode, shouldScroll = true) => {
    if (newMode !== "dev" && newMode !== "cybersec") return;
    
    setModeState(newMode);
    updateMetadataAndDom(newMode);

    if (shouldScroll && typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [updateMetadataAndDom]);

  const toggleMode = useCallback(() => {
    const nextMode = mode === "dev" ? "cybersec" : "dev";
    setMode(nextMode, true);
  }, [mode, setMode]);

  // 4. On Mount: Apply Theme & Listen to Browser Popstate
  useEffect(() => {
    updateMetadataAndDom(mode);

    const handlePopState = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const urlMode = urlParams.get("mode");
      if (urlMode === "dev" || urlMode === "cybersec") {
        setMode(urlMode, false);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [mode, updateMetadataAndDom, setMode]);

  const value = {
    mode,
    isDev: mode === "dev",
    isCybersec: mode === "cybersec",
    setMode,
    toggleMode,
  };

  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
}

export function useMode() {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error("useMode must be used within a ModeProvider");
  }
  return context;
}
