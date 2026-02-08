"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const stack = [
  { name: "React", icon: "react", color: "61DAFB" },
  { name: "TypeScript", icon: "typescript", color: "3178C6" },
  { name: "Next.js", icon: "nextdotjs", color: "ffffff" },
  { name: "Node.js", icon: "nodedotjs", color: "339933" },
  { name: "Express", icon: "express", color: "ffffff" },
  { name: "PostgreSQL", icon: "postgresql", color: "4169E1" },
  { name: "Docker", icon: "docker", color: "2496ED" },
  { name: "Nginx", icon: "nginx", color: "009639" },
];

const projects = [
  {
    title: "IELTS Essay Platform",
    description: "SaaS per la correzione automatizzata di temi con feedback AI e sistema di revisione in tempo reale stile GitHub.",
    tech: ["Next.js", "PostgreSQL", "Node.js"],
    screens: ["/projects/ielts-1.jpg", "/projects/ielts-2.jpg", "/projects/ielts-3.jpg"]
  },
  {
    title: "Stripe Billing Dashboard",
    description: "Gestione flussi di pagamento complessi e abbonamenti per freelancer, ottimizzando la riconciliazione dati.",
    tech: ["React", "Express", "Stripe API"],
    screens: ["/projects/stripe-1.jpg", "/projects/stripe-2.jpg"]
  },
  {
    title: "SaaS Management System",
    description: "Piattaforma gestionale per l'automazione dei processi aziendali e monitoraggio dati in tempo reale.",
    tech: ["TypeScript", "Docker", "Nginx"],
    screens: ["/projects/saas-1.jpg", "/projects/saas-2.jpg"]
  }
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      // Usiamo clientX e clientY per ottenere la posizione esatta rispetto alla finestra
      const x = e.clientX;
      const y = e.clientY;
      
      containerRef.current.style.setProperty("--mouse-x", `${x}px`);
      containerRef.current.style.setProperty("--mouse-y", `${y}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scroll = (index: number, direction: "left" | "right") => {
    const el = scrollRefs.current[index];
    if (el) {
      const scrollAmount = 420; 
      el.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div ref={containerRef} className="hero-container relative min-h-screen overflow-hidden bg-[#050505] text-white selection:bg-purple-500/30">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(160,32,240,0.15)_0%,transparent_50%)]" />
      
      {/* HERO SECTION - Ridotto py da 20 a 10 */}
      <main className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-center px-6 py-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col justify-center lg:col-span-7">
            <header className="mb-4 overflow-hidden">
              <span className="inline-block animate-reveal text-sm font-bold tracking-[0.2em] text-purple-500 uppercase">
                Available for projects — 2026
              </span>
            </header>
            <h1 className="mb-6 text-5xl font-black leading-[1.1] tracking-tighter md:text-7xl lg:text-8xl">
              I’m <span className="text-gradient">Gabriele.</span>
            </h1>
            <div className="space-y-6 max-w-2xl">
              <p className="animate-fade-in text-2xl font-light leading-relaxed text-zinc-400 md:text-3xl">
                I help businesses and freelancers <span className="text-white font-medium">automate processes</span> and manage data with custom web applications.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 animate-fade-in-extra">
              <button className="group relative overflow-hidden rounded-full bg-white px-8 py-4 font-bold text-black transition-all hover:scale-105">
                <span className="relative z-10">Contact me</span>
                <div className="absolute inset-0 z-0 translate-y-full bg-purple-500 transition-transform group-hover:translate-y-0" />
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center lg:col-span-5">
            <div className="relative aspect-square w-full max-w-[380px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <Image src="/static/foto_cv_white_bg.jpg" alt="Gabriele" fill className="object-cover" priority />
            </div>
            <div className="mt-6 text-center">
              <p className="text-lg font-bold tracking-tight text-white">SaaS & Management Platforms Expert</p>
              <p className="text-sm text-zinc-500 uppercase tracking-widest mt-1">Full Stack Developer</p>
            </div>
            <div className="mt-6 w-full max-w-[380px] overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_40px,_black_calc(100%-40px),transparent_100%)]">
              <div className="flex animate-marquee-slow gap-8 py-2">
                {[...stack, ...stack].map((tech, i) => (
                  <img key={i} src={`https://cdn.simpleicons.org/${tech.icon}/${tech.color}`} className="h-5 w-5 opacity-70" alt={tech.name} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* MY WORKS SECTION - Ridotto py da 32 a 12 */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-12">
        <h2 className="mb-10 text-4xl font-black tracking-tighter md:text-6xl">My Works</h2>
        <div className="grid grid-cols-1 gap-10">
          {projects.map((project, idx) => (
            <div key={idx} className="group grid grid-cols-1 gap-8 overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-900/20 p-8 lg:grid-cols-2 lg:p-12">
              <div className="flex flex-col justify-center">
                <h3 className="mb-4 text-3xl font-bold md:text-4xl">{project.title}</h3>
                <p className="mb-8 text-lg leading-relaxed text-zinc-400">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((t) => (
                    <span key={t} className="rounded-full bg-purple-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-purple-400 border border-purple-500/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* CAROUSEL MANUALE */}
              <div className="relative group/carousel">
                <div 
                  ref={(el) => { scrollRefs.current[idx] = el; }}
                  className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory rounded-xl"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {project.screens.map((screen, sIdx) => (
                    <div key={sIdx} className="relative h-[250px] w-full shrink-0 snap-center overflow-hidden rounded-lg border border-zinc-700">
                      <Image 
                        src={screen} 
                        alt={`${project.title} ${sIdx}`} 
                        fill 
                        className="object-cover" 
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
                
                {/* FRECCE */}
                <button 
                  onClick={() => scroll(idx, "left")}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 backdrop-blur-md border border-white/10 hover:bg-purple-500 transition-colors z-20"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button 
                  onClick={() => scroll(idx, "right")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 backdrop-blur-md border border-white/10 hover:bg-purple-500 transition-colors z-20"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER STACK */}
      <section className="relative z-10 w-full border-y border-zinc-800 bg-black/50 py-10 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-6">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">Technical Ecosystem</span>
          <div className="group flex overflow-hidden p-2 [--gap:4rem] [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="flex animate-marquee shrink-0 items-center justify-around gap-[var(--gap)] px-[var(--gap)]">
              {[...stack, ...stack].map((tech, i) => (
                <div key={i} className="flex items-center gap-3 text-zinc-400 transition-colors hover:text-white">
                  <img src={`https://cdn.simpleicons.org/${tech.icon}/${tech.color}`} alt={tech.name} className="h-7 w-7" />
                  <span className="text-xl font-bold tracking-tighter">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}