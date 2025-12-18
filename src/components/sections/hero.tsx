import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "../ui/button";
import { File, FileText, FileDown, FileSymlink, ClipboardPaste, ClipboardList, Github, Linkedin, Cpu } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { config } from "@/data/config";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <section id="hero" className={cn("relative w-full h-screen")}>
      <div className="grid md:grid-cols-12 h-full items-center px-4 sm:px-6">
        <div
          className={cn(
            "z-[2] col-span-12 md:col-span-5 pt-20 md:pt-0",
            "flex flex-col justify-center items-center md:items-start",
            "w-full md:pl-8 lg:pl-16 xl:pl-24"
          )}
        >
          {!isLoading && (
            <>
              <div className="w-full max-w-md md:max-w-none">
                <BlurIn delay={0.7}>
                  <p
                    className={cn(
                      "text-center md:text-left mt-2 sm:mt-4 font-thin text-base sm:text-lg md:text-xl",
                      "text-slate-500 dark:text-zinc-400",
                      "cursor-default font-display bg-clip-text"
                    )}
                  >
                    Hi, I am
                  </p>
                </BlurIn>
                <BlurIn delay={1}>
                  <h1
                    className={cn(
                      "font-thin text-white dark:text-white",
                      "text-center md:text-left",
                      "text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl",
                      "cursor-default text-edge-outline font-display leading-tight"
                    )}
                  >
                    {config.author.split(" ")[0]}
                    <br />
                    {config.author.split(" ")[1]}
                  </h1>
                </BlurIn>
                {/* <div className="md:block hidden bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 w-screen h-px animate-fade-right animate-glow" /> */}
                <BlurIn delay={1.2}>
                  <p
                    className={cn(
                      "text-center md:text-left mt-3 sm:mt-4 font-thin",
                      "text-sm sm:text-base md:text-lg lg:text-xl",
                      "text-slate-500 dark:text-zinc-400",
                      "cursor-default font-display bg-clip-text leading-relaxed",
                      "max-w-lg"
                    )}
                  >
                    Full Stack Developer | System Designer
                    <br />
                    AI/ML & Competitive Programming Enthusiast
                    <br />
                    Turning Ideas Into Impact
                  </p>
                </BlurIn>
              </div>
              <div className="mt-8 md:ml-2 flex flex-col gap-3">
                <Link
                  href={
                    "https://drive.google.com/file/d/1r6JbLXrohDQ5RaI3TBrM8o2H7O4svspX/view?usp=sharing"
                  }
                  target="_blank"
                  className="flex-1"
                >
                  <BoxReveal delay={2} width="100%" >
                    <Button className="flex items-center gap-2 w-full">
                      <FileText size={24} />
                      <p>Resume</p>
                    </Button>
                  </BoxReveal>
                </Link>
                <div className="md:self-start flex gap-3">
                  <Link href={"#contact"}>
                    <Button
                      variant={"outline"}
                      className="block w-full overflow-hidden"
                    >
                      Hire Me
                    </Button>
                  </Link>
                  <Link
                    href={config.social.github}
                    target="_blank"
                  >
                    <Button variant={"outline"}>
                      <SiGithub size={24} />
                    </Button>
                  </Link>
                  <Link
                    href={config.social.linkedin}
                    target="_blank"
                  >
                    <Button variant={"outline"}>
                      <SiLinkedin size={24} />
                    </Button>
                  </Link>
                  <Link
                    href={config.social.instagram}
                    target="_blank"
                  >
                    <Button variant={"outline"}>
                      <FaInstagram size={24} />
                    </Button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="col-span-12 md:col-span-4 flex items-center justify-center z-[2] mt-8 md:mt-0 -translate-y-[50px] md:translate-y-0 md:-translate-x-[175px]">
          <BlurIn delay={1.5}>
            <TechProfileImage />
          </BlurIn>
        </div>
      </div>
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </section>
  );
};

const TechProfileImage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    setMousePos({
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top,
    });
  };

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 800);
  };

  // Mask size - reduced to 50px as requested
  const maskSize = isHovered ? 50 : 0;

  return (
    <div
      ref={containerRef}
      className="relative group cursor-none no-cursor-invert touch-none"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="relative w-[320px] h-[320px] sm:w-[360px] sm:h-[360px] md:w-[450px] md:h-[450px] transition-all duration-300">

        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/20 via-blue-500/20 to-purple-600/20 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-3xl scale-110" />

        {/* Base Image (me.png) - High Quality */}
        <div className="relative w-full h-full rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden border-2 border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
          <Image
            src="/assets/me.png"
            alt="Aakash JS"
            fill
            className="object-cover"
            priority
            quality={100}
          />

          {/* Overlay Image (me1.png) revealed by mask */}
          <motion.div
            className="absolute inset-0 z-10 pointer-events-none overflow-hidden"
            animate={{
              clipPath: isHovered
                ? `circle(${maskSize}px at ${mousePos.x}px ${mousePos.y}px)`
                : `circle(0px at ${mousePos.x}px ${mousePos.y}px)`,
              WebkitClipPath: isHovered
                ? `circle(${maskSize}px at ${mousePos.x}px ${mousePos.y}px)`
                : `circle(0px at ${mousePos.x}px ${mousePos.y}px)`,
            }}
            transition={{ duration: 0 }}
          >
            <Image
              src="/assets/me1.png"
              alt="Aakash JS Active"
              fill
              className="object-cover"
              priority
              quality={100}
            />

            {/* Inner Hud Effect (Subtle glow in mask) */}
            <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay" />
          </motion.div>

          {/* Click Sync Wave */}
          {isClicked && (
            <motion.div
              initial={{ scale: 0, opacity: 1, border: "2px solid #60a5fa" }}
              animate={{ scale: 4, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute rounded-full z-30 pointer-events-none"
              style={{ left: mousePos.x, top: mousePos.y, width: 2, height: 2 }}
            />
          )}

          {/* Static Scanline Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] z-0 pointer-events-none bg-[length:100%_4px,3px_100%]" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
