"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useDragControls } from "framer-motion";
import { Skill } from "@/data/constants";
import { useMediaQuery } from "@/hooks/use-media-query";
import Image from "next/image";

interface FallingSkillInstance extends Skill {
    uniqueId: number;
}

export const FallingSkills = () => {
    const [activeSkills, setActiveSkills] = useState<FallingSkillInstance[]>([]);
    const isMobile = useMediaQuery("(max-width: 768px)");

    useEffect(() => {
        if (!isMobile) return;

        const handlePress = (e: any) => {
            const skill = e.detail as Skill;
            if (!skill) return;

            const newSkill: FallingSkillInstance = {
                ...skill,
                uniqueId: Date.now() + Math.random(),
            };

            setActiveSkills((prev) => [...prev, newSkill]);
        };

        window.addEventListener("keyboard-press", handlePress);
        return () => window.removeEventListener("keyboard-press", handlePress);
    }, [isMobile]);

    const removeSkill = (uid: number) => {
        setActiveSkills((prev) => prev.filter((s) => s.uniqueId !== uid));
    };

    if (!isMobile) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
            <AnimatePresence>
                {activeSkills.map((skill) => (
                    <FallingSkillItem
                        key={skill.uniqueId}
                        skill={skill}
                        onRemove={() => removeSkill(skill.uniqueId)}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
};

const FallingSkillItem = ({
    skill,
    onRemove,
}: {
    skill: FallingSkillInstance;
    onRemove: () => void;
}) => {
    const [isTossed, setIsTossed] = useState(false);

    // Initial random position at top
    const initialX = Math.random() * (typeof window !== "undefined" ? window.innerWidth - 100 : 200) + 50;

    return (
        <motion.div
            initial={{ y: -100, x: initialX, rotate: Math.random() * 360, opacity: 0 }}
            animate={{ y: typeof window !== "undefined" ? window.innerHeight - 150 : 500, opacity: 1 }}
            exit={{ scale: 0, opacity: 0, transition: { duration: 0.2 } }}
            drag
            dragConstraints={{ left: -1000, right: 1000, top: -1000, bottom: 1000 }}
            onDragEnd={(_, info) => {
                // If speed is high, consider it tossed
                const velocity = Math.sqrt(Math.pow(info.velocity.x, 2) + Math.pow(info.velocity.y, 2));
                if (velocity > 500) {
                    setIsTossed(true);
                    onRemove();
                }
            }}
            className="absolute pointer-events-auto touch-none"
            style={{ cursor: "grab" }}
            whileDrag={{ scale: 1.1, cursor: "grabbing" }}
        >
            <div
                className="relative group p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl flex flex-col items-center gap-2"
                style={{ borderColor: `${skill.color}40` }}
            >
                <div className="w-12 h-12 relative">
                    <Image
                        src={skill.icon || "/assets/placeholder.svg"}
                        alt={skill.label}
                        fill
                        className="object-contain"
                    />
                </div>
                <span className="text-white text-[10px] font-bold tracking-widest uppercase opacity-80">
                    {skill.label}
                </span>

                {/* Shine effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
            </div>
        </motion.div>
    );
};
