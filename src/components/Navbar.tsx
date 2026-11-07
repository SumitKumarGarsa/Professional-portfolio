"use client";

import React, { useRef } from "react";
import Header from "./layout/Header";
import FullscreenMenu from "./layout/FullscreenMenu";
import { useNavigation } from "./providers/Providers";

export default function Navbar() {
  const { isMenuOpen, setIsMenuOpen, toggleMenu, closeMenu } = useNavigation();
  const triggerButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Header
        isMenuOpen={isMenuOpen}
        onToggleMenu={toggleMenu}
        triggerButtonRef={triggerButtonRef}
      />
      <FullscreenMenu
        isOpen={isMenuOpen}
        onClose={closeMenu}
        triggerButtonRef={triggerButtonRef}
      />
    </>
  );
}
