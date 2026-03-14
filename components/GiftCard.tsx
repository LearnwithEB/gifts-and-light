"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

type Resource = { name: string; url: string; freeType: string; icon: string };

interface GiftCardProps {
    title: string;
    subtitle: string;
    icon: string;
    iconBg: string;
    steps: string[];
    resources: Resource[];
    faithTitle: string;
    faithBody: string;
    faithVerse: string;
}

export function GiftCard({
    title,
    subtitle,
    icon,
    iconBg,
    steps,
    resources,
    faithTitle,
    faithBody,
    faithVerse,
}: GiftCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            layout
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
                "glass-card rounded-[24px] overflow-hidden cursor-pointer transition-all duration-300",
                isOpen ? "border-gold/50 shadow-[0_0_30px_-5px_#f5b94226]" : "hover:border-gold/30 hover:-translate-y-1"
            )}
        >
            <div className="flex items-center gap-4 p-5 sm:p-6">
                <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0 backdrop-blur-md border border-white/5"
                    style={{ background: iconBg }}
                >
                    {icon}
                </div>
                <div className="flex-1">
                    <h3 className="font-serif text-xl sm:text-2xl text-warm mb-1 [font-family:var(--font-playfair)] tracking-wide">
                        {title}
                    </h3>
                    <p className="text-xs sm:text-sm text-light-text font-medium">{subtitle}</p>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-light-text/60"
                >
                    <ChevronDown className="w-6 h-6" />
                </motion.div>
            </div>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                    >
                        <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-card-border/50">
                            {/* Career Pathway */}
                            <div className="mb-6">
                                <p className="text-[10px] sm:text-xs tracking-[0.15em] uppercase text-gold mb-3 font-semibold">
                                    Career Pathway
                                </p>
                                <ul className="space-y-2">
                                    {steps.map((step, idx) => (
                                        <li key={idx} className="relative pl-5 text-sm sm:text-[15px] text-light-text/90 leading-relaxed">
                                            <span className="absolute left-0 top-[2px] text-amber text-xs">→</span>
                                            {step}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Free Resources */}
                            <div className="mb-6">
                                <p className="text-[10px] sm:text-xs tracking-[0.15em] uppercase text-gold mb-3 font-semibold">
                                    Free Resources
                                </p>
                                <div className="flex flex-col gap-2">
                                    {resources.map((res, idx) => (
                                        <a
                                            key={idx}
                                            href={res.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="group flex items-center gap-3 bg-white/[0.03] hover:bg-white/[0.06] border border-transparent hover:border-gold/30 rounded-xl p-3 sm:px-4 sm:py-3 transition-all"
                                        >
                                            <span className="text-lg">{res.icon}</span>
                                            <span className="flex-1 text-sm text-warm/90 group-hover:text-warm transition-colors">{res.name}</span>
                                            <span className="text-[10px] font-semibold bg-gold/15 text-gold px-2 py-0.5 rounded-full border border-gold/20">
                                                {res.freeType}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Faith Block */}
                            <div className="bg-faith/[0.06] border border-faith/20 rounded-2xl p-5 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-faith/40"></div>
                                <div className="text-[10px] sm:text-xs tracking-[0.15em] uppercase text-faith mb-2 font-semibold flex items-center gap-2">
                                    <span className="text-faith/70">✦</span> {faithTitle}
                                </div>
                                <p className="text-sm text-[#a8d8d8] leading-relaxed mb-4">
                                    {faithBody}
                                </p>
                                <div className="text-xs italic text-faith/80 border-t border-faith/10 pt-3">
                                    {faithVerse}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
