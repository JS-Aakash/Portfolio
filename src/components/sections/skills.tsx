import Link from "next/link";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const SkillsSection = () => {
  const [tapped, setTapped] = useState(false);

  useEffect(() => {
    const handleInteraction = () => {
      setTapped(true);
    };

    window.addEventListener("keyboard-press", handleInteraction);

    return () => {
      window.removeEventListener("keyboard-press", handleInteraction);
    };
  }, []);

  return (
    <section
      id="skills"
      style={{
        position: "relative",
        width: "100%",
        height: "250vh",
        minHeight: "250vh",
        pointerEvents: "none",
        overflow: "visible",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          right: 0,
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          pointerEvents: "none",
          zIndex: 10,
        }}
        className="pt-10 sm:pt-14 md:pt-16 pb-12"
      >
        <Link href={"#skills"} className="pointer-events-auto">
          <h2
            className={cn(
              "bg-clip-text text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-center text-transparent font-display font-extrabold tracking-tight",
              "bg-gradient-to-b from-white via-white/95 to-slate-200 drop-shadow-[0_0_35px_rgba(255,255,255,0.6)]"
            )}
          >
            SKILLS
          </h2>
        </Link>

        {/* Mobile only hint - sticky at the bottom until key is tapped */}
        <div
          className={cn(
            "md:hidden transition-all duration-700 pb-8 pointer-events-auto",
            !tapped ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          )}
        >
          <p className="font-mono text-xs tracking-[0.25em] text-white/90 uppercase bg-black/60 backdrop-blur-md px-5 py-2.5 rounded-full border border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.25)] animate-pulse">
            Tap keys to reveal skills
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
