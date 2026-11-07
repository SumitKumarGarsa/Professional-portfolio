/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class", '[data-theme="cybersec"]'],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-card": "var(--surface-card)",
        text: "var(--text)",
        muted: "var(--muted)",
        border: "var(--border)",
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        "code-bg": "var(--code-bg)",
      },
      fontFamily: {
        sans: ["Inter", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "'IBM Plex Mono'", "monospace"],
        display: ["'Bebas Neue'", "Oswald", "sans-serif"],
      },
      boxShadow: {
        "toggle-inner": "inset 0 1px 3px rgba(0, 0, 0, 0.08)",
        "cyber-glow": "0 0 18px rgba(0, 255, 156, 0.45)",
        "cyber-glow-lg": "0 0 30px rgba(0, 255, 156, 0.6)",
        "dev-glow": "0 0 20px rgba(255, 106, 26, 0.3)",
      },
      animation: {
        "matrix-fade": "matrixFade 2s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "terminal-blink": "terminalBlink 1s step-start infinite",
      },
      keyframes: {
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        terminalBlink: {
          "0%, 50%": { opacity: "1" },
          "50.1%, 100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
