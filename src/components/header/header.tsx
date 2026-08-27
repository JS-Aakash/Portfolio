"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { config } from "@/data/config";
import { links } from "./config";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "../ui/button";

interface HeaderProps {
  loader?: boolean;
}

const Header = ({ loader }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(window.location.hash || "");
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: loader ? 3.5 : 0.2,
        duration: 0.6,
        ease: "easeOut",
      }}
      className="absolute top-0 left-0 right-0 z-50 bg-transparent py-4 sm:py-6"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-center relative">
        {/* Desktop Centered Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 bg-white/[0.05] backdrop-blur-xl px-4 py-2 rounded-full border border-white/10 shadow-lg shadow-black/20">
          {links.map((link) => {
            const isHome = link.href === "/";
            const targetHash = isHome ? "" : link.href.replace("/", "");
            const isCurrentActive = isHome ? !activeSection : activeSection === targetHash;

            return (
              <Link
                key={link.title}
                href={link.href}
                className={cn(
                  "relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200",
                  isCurrentActive
                    ? "text-white bg-white/15 shadow-sm"
                    : "text-zinc-300 hover:text-white hover:bg-white/10"
                )}
              >
                {link.title}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Centered Hamburger Toggle Button */}
        <div className="flex md:hidden items-center justify-center w-full">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] hover:bg-white/10 border border-white/10 text-zinc-200 transition-colors backdrop-blur-xl shadow-lg focus:outline-none"
          >
            <span className="text-xs font-medium text-zinc-200">
              {isOpen ? "Close Menu" : "Navigation"}
            </span>
            {isOpen ? (
              <X className="w-4 h-4 text-white transition-transform duration-200 rotate-90" />
            ) : (
              <Menu className="w-4 h-4 text-white transition-transform duration-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#030014]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl mt-4"
          >
            <div className="px-6 py-6 space-y-2 flex flex-col max-w-md mx-auto">
              {links.map((link, idx) => (
                <Link
                  key={link.title}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl text-zinc-200 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/5 transition-all text-sm font-medium"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[10px] text-purple-400 font-mono">0{idx + 1}</span>
                    <span>{link.title}</span>
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-purple-400 opacity-60" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
