import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import { bebasNeue, jetbrainsMono, inter } from "@/lib/fonts";
import { siteConfig } from "@/data/site";
import { ModeProvider, Mode } from "@/context/ModeContext";
import { Providers } from "@/components/providers/Providers";
import Navbar from "@/components/Navbar";
import CommandPalette from "@/components/common/CommandPalette";
import PageTransition from "@/components/layout/PageTransition";
import ModeWipeCurtain from "@/components/layout/ModeWipeCurtain";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#141312",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.defaultTitle,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.fullName, url: siteConfig.siteUrl }],
  creator: siteConfig.fullName,
  publisher: siteConfig.fullName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    siteName: siteConfig.fullName,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.fullName} — ${siteConfig.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    creator: "@sumitkumargarsa",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const savedMode = cookieStore.get("forma_mode")?.value as Mode | undefined;
  const initialMode: Mode = savedMode === "cyber" ? "cyber" : "dev";

  // Schema.org Person JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.fullName,
    alternateName: siteConfig.monogram,
    image: `${siteConfig.siteUrl}${siteConfig.profileImage}`,
    jobTitle: siteConfig.role,
    url: siteConfig.siteUrl,
    sameAs: [
      siteConfig.socials.github,
      siteConfig.socials.linkedin,
      siteConfig.socials.twitter,
    ],
    knowsAbout: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Next.js",
      "TypeScript",
      "Cybersecurity",
      "Offensive Penetration Testing",
      "DevSecOps",
    ],
  };

  return (
    <html
      lang="en"
      data-mode={initialMode}
      data-scroll-behavior="smooth"
      className={`${bebasNeue.variable} ${jetbrainsMono.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[var(--bg)] text-[var(--text)] font-sans antialiased min-h-screen relative selection:bg-[var(--accent)] selection:text-[var(--bg)] transition-colors duration-400">
        {/* Skip to Content for Screen Readers & Keyboard Navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[1000] focus:px-4 focus:py-2 focus:bg-[var(--text)] focus:text-[var(--bg)] focus:font-mono focus:text-xs focus:rounded focus:outline-none"
        >
          Skip to main content
        </a>

        {/* Subtle Film Grain Texture Overlay */}
        <div className="film-grain-overlay" aria-hidden="true" />

        {/* Global Providers */}
        <ModeProvider initialMode={initialMode}>
          <Providers>
            <Navbar />
            <CommandPalette />
            <ModeWipeCurtain />
            <PageTransition>
              <div className="flex-1 flex flex-col">
                {children}
              </div>
            </PageTransition>
          </Providers>
        </ModeProvider>
      </body>
    </html>
  );
}
