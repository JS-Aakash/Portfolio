"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Award, Calendar } from "lucide-react";
import certifications, { Certification } from "@/data/certifications";
import { cn } from "@/lib/utils";

const CertificationsSection = () => {
    return (
        <section id="certifications" className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6">
            <Link href={"#certifications"}>
                <h2
                    className={cn(
                        "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-10 md:pt-16",
                        "bg-gradient-to-b from-white/90 to-white/60",
                        "dark:bg-gradient-to-b dark:from-white/90 dark:to-white/60 mb-8 md:mb-12"
                    )}
                >
                    CERTIFICATIONS
                </h2>
            </Link>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 pb-16">
                {certifications.map((cert) => (
                    <CertificationCard key={cert.id} certification={cert} />
                ))}
            </div>
        </section>
    );
};

const CertificationCard = ({ certification }: { certification: Certification }) => {
    return (
        <div
            className={cn(
                "group relative overflow-hidden rounded-xl",
                "bg-white/10 dark:bg-black/40 backdrop-blur-md",
                "border border-gray-300/30 dark:border-white/20",
                "hover:border-purple-500/50 dark:hover:border-purple-400/50",
                "transition-all duration-300 ease-in-out",
                "hover:shadow-2xl hover:shadow-purple-500/20 dark:hover:shadow-purple-400/30",
                "hover:-translate-y-1",
                "flex flex-col h-full"
            )}
        >
            {/* Certificate Image */}
            <div className="relative w-full h-72 overflow-hidden bg-gray-200 dark:bg-gray-800">
                <Image
                    src={certification.certificateImage}
                    alt={certification.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    quality={95}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Award Icon Badge */}
                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-white/30 dark:bg-black/40 backdrop-blur-md border border-white/40">
                    <Award className="w-4 h-4 text-yellow-400 drop-shadow-md" />
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow p-4 z-10">
                {/* Title */}
                <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-gray-100 line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {certification.title}
                </h3>

                {/* Issuer */}
                <p className="text-xs text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                    <span className="font-semibold bg-purple-100/50 dark:bg-purple-900/40 px-2 py-0.5 rounded text-purple-800 dark:text-purple-200">
                        {certification.issuer}
                    </span>
                </p>

                {/* Date */}
                <div className="mb-3">
                    <div className="flex items-center gap-2 text-[10px] font-medium text-gray-700 dark:text-gray-300">
                        <Calendar className="w-3.5 h-3.5 text-purple-500" />
                        <span>Issued {certification.issueDate}</span>
                    </div>
                </div>

                {/* Credential Link */}
                {certification.credentialUrl && (
                    <Link
                        href={certification.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                            "mt-auto inline-flex items-center gap-2 text-xs font-bold",
                            "text-purple-600 dark:text-purple-400",
                            "hover:text-purple-700 dark:hover:text-purple-300",
                            "transition-colors group/link underline-offset-4 hover:underline"
                        )}
                    >
                        View Credential
                        <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </Link>
                )}
            </div>

            {/* Hover Gradient Border Effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border-2 border-purple-500/30">
            </div>
        </div>
    );
};

export default CertificationsSection;
