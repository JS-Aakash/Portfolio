import type { Metadata } from "next";
import { Inter, Archivo_Black } from "next/font/google";
import "./globals.css";
import ElasticCursor from "@/components/ui/ElasticCursor";
import Particles from "@/components/Particles";
import Header from "@/components/header/header";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Footer from "@/components/footer/footer";
import Script from "next/script";
import Preloader from "@/components/preloader";
import Lightfall from "@/components/ui/Lightfall";

import { config } from "@/data/config";
import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: config.title,
  description: config.description.long,
  keywords: config.keywords,
  authors: [{ name: config.author }],
  openGraph: {
    title: config.title,
    description: config.description.short,
    url: config.site,
    images: [
      {
        url: config.ogImg,
        width: 800,
        height: 600,
        alt: "Portfolio preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: config.title,
    description: config.description.short,
    images: [config.ogImg],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${archivoBlack.variable} ${inter.className}`}>
      <head>
        <Script
          defer
          src={process.env.UMAMI_DOMAIN}
          data-website-id={process.env.UMAMI_SITE_ID}
        ></Script>
        {/* <Analytics /> */}
      </head>
      <body className="bg-[#030014] text-white min-h-[100dvh] overflow-x-hidden relative selection:bg-purple-500/30 selection:text-white">
        {/* Universal Lightfall WebGL Background from React Bits */}
        <div className="fixed inset-0 -z-30 w-full h-full pointer-events-none overflow-hidden">
          <Lightfall
            colors={['#8A2BE2', '#5227FF', '#FF007F', '#A6C8FF', '#00F0FF']}
            backgroundColor="#030014"
            speed={0.3}
            streakCount={2}
            streakWidth={0.65}
            streakLength={0.35}
            glow={0.3}
            density={0.75}
            twinkle={0.2}
            zoom={2.2}
            backgroundGlow={0.25}
            opacity={0.8}
            mouseInteraction={true}
            mouseStrength={0.5}
            mouseRadius={1.1}
          />
        </div>
        <Particles
          className="fixed inset-0 -z-20 animate-fade-in pointer-events-none"
          quantity={60}
        />
        <Preloader>
          <TooltipProvider>
            <Header />
            {children}
            <Footer />
          </TooltipProvider>
          <Toaster />
          <ElasticCursor />
        </Preloader>
      </body>
    </html>
  );
}
