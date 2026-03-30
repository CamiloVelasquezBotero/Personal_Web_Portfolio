"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BootLoader from "@/components/BootLoader";
import CyberBackground from "@/components/CyberBackground";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <CyberBackground />
      {!isLoaded && <BootLoader onComplete={() => setIsLoaded(true)} />}
      
      <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} relative z-0`}>
        <main className="flex min-h-screen flex-col items-center justify-between pb-10">
          <Header />
          <Hero />
          <div className="w-full max-w-6xl px-4 flex flex-col gap-32 mt-20">
            <About />
            <Certificates />
            <Contact />
          </div>
          <Footer />
        </main>
        <ScrollToTop />
      </div>
    </>
  );
}
