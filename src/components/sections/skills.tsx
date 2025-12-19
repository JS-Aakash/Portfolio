import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";

const SkillsSection = () => {
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const handleInteraction = () => {
      setShowHint(false);
    };

    window.addEventListener("keydown", handleInteraction);
    window.addEventListener("click", handleInteraction);

    return () => {
      window.removeEventListener("keydown", handleInteraction);
      window.removeEventListener("click", handleInteraction);
    };
  }, []);

  return (
    <section id="skills" className="w-full h-[120dvh] md:h-[150dvh]">
      <div className="top-16 sticky mb-20 md:mb-96">
        <Link href={"#skills"}>
          <BoxReveal width="100%">
            <h2
              className={cn(
                "bg-clip-text text-4xl text-center text-transparent md:text-7xl",
                "bg-gradient-to-b from-white/90 to-white/60",
                "dark:bg-gradient-to-b dark:from-white/90 dark:to-white/60"
              )}
            >
              SKILLS
            </h2>
          </BoxReveal>
        </Link>
        <div className={`transition-opacity duration-500 ${showHint ? "opacity-100" : "opacity-0"}`}>
          <p className="mx-auto mt-4 line-clamp-4 max-w-3xl font-normal text-base text-center text-neutral-300">
            (HINT: Press a key)
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
