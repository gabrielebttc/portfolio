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
    title: "Construction Site Inspection Web App",
    description: 'This web application helps construction site inspectors in Italy automate and manage their "Giornale dei Lavori" efficiently.',
    tech: ["Vite", "React.js", "Node.js", "Express", "PostgreSQL", "Docker", "Nginx", "Typescript"],
    screens: ["/static/projects/construction_sites_managment_platform/0-1.jpg", "/static/projects/construction_sites_managment_platform/0.jpg", "/static/projects/construction_sites_managment_platform/1.jpg", "/static/projects/construction_sites_managment_platform/2.jpg", "/static/projects/construction_sites_managment_platform/3.jpg", "/static/projects/construction_sites_managment_platform/4.jpg", "/static/projects/construction_sites_managment_platform/5.jpg", "/static/projects/construction_sites_managment_platform/6.jpg", "/static/projects/construction_sites_managment_platform/7.jpg", "/static/projects/construction_sites_managment_platform/8.jpg", "/static/projects/construction_sites_managment_platform/9.jpg", "/static/projects/construction_sites_managment_platform/10.jpg"],
    link: "https://giornaledeilavori.gabrielebuttice.com"
  },
  {
    title: "Gym Managment Platform",
    description: "Designed to help fitness centers efficiently oversee customer information, course schedules, and subscription details.",
    tech: ["Vite", "React.js", "Node.js", "Express", "PostgreSQL", "Docker", "Nginx", "Typescript"],
        screens: ["/static/projects/gym_managment_platform/1.jpg", "/static/projects/gym_managment_platform/2.jpg", "/static/projects/gym_managment_platform/3.jpg", "/static/projects/gym_managment_platform/4.jpg", "/static/projects/gym_managment_platform/5.jpg", "/static/projects/gym_managment_platform/6.jpg"],
    link: "https://gestionalepalestra.gabrielebuttice.com"
  },
  {
    title: "IELTS Essay Platform",
    description: "Enables students to submit essays and get detailed feedback from teachers, including Stripe payments.",
    tech: ["Vite", "React.js", "Node.js", "Express", "PostgreSQL", "Stripe Api", "Docker", "Nginx", "Typescript"],
    screens: ["/static/projects/essay_platform/1.jpg", "/static/projects/essay_platform/2.jpg", "/static/projects/essay_platform/3.jpg", "/static/projects/essay_platform/4.jpg", "/static/projects/essay_platform/5.jpg", "/static/projects/essay_platform/6.jpg", "/static/projects/essay_platform/7.jpg"],
    link: "https://essayplatform.gabrielebuttice.com"
  }
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLElement>(null);
  const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [showContacts, setShowContacts] = useState(false);
  const [lightbox, setLightbox] = useState<{ images: string[]; currentIndex: number } | null>(null);

  const showNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!lightbox) return;
    setLightbox(prev => prev ? { ...prev, currentIndex: (prev.currentIndex + 1) % prev.images.length } : null);
  };

  const showPrevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!lightbox) return;
    setLightbox(prev => prev ? { ...prev, currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length } : null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === 'ArrowRight') {
        showNextImage();
      } else if (e.key === 'ArrowLeft') {
        showPrevImage();
      } else if (e.key === 'Escape') {
        setLightbox(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      containerRef.current.style.setProperty("--mouse-x", `${e.clientX}px`);
      containerRef.current.style.setProperty("--mouse-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToWorks = () => {
    worksRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scroll = (index: number, direction: "left" | "right") => {
    const el = scrollRefs.current[index];
    if (el) {
      const scrollAmount = 420;
      el.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div ref={containerRef} className="hero-container relative min-h-screen overflow-hidden bg-[#050505] text-white selection:bg-purple-500/30">
      
      {/* BACKGROUND DECORATIONS */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(168,85,247,0.12)_0%,transparent_50%)]" />
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-purple-900/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full"></div>
      </div>

      <main className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          
          <div className="flex flex-col justify-center lg:col-span-7 order-1">
            <header className="mb-4 overflow-hidden">
              <span className="inline-block animate-reveal text-sm font-bold tracking-[0.2em] text-purple-500 uppercase">
                Available for projects — 2026
              </span>
            </header>
            <h1 className="mb-6 text-5xl font-black leading-[1.1] tracking-tighter md:text-7xl lg:text-8xl">
              I’m <span className="text-gradient">Gabriele.</span>
            </h1>
            <p className="animate-fade-in text-2xl font-light leading-relaxed text-zinc-400 md:text-3xl max-w-2xl">
              I help businesses <span className="text-white font-medium">automate processes</span> and manage data with custom web applications.
            </p>
            
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-extra">
              <div className="relative">
                <button 
                  onClick={() => setShowContacts(!showContacts)}
                  className="group relative overflow-hidden rounded-full bg-white px-8 py-4 font-bold text-black transition-all hover:scale-105 active:scale-95"
                >
                  <span className="relative z-10">Contact me</span>
                  <div className="absolute inset-0 z-0 translate-y-full bg-purple-500 transition-transform group-hover:translate-y-0" />
                </button>

                {showContacts && (
                  <div className="absolute bottom-full left-0 mb-4 flex gap-3 animate-fade-in bg-zinc-900/90 p-3 rounded-2xl border border-zinc-700 backdrop-blur-xl z-50 shadow-2xl">
                    <a href="tel:+393668603910" className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl hover:bg-purple-500 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    </a>
                    <a href="https://wa.me/393668603910" target="_blank" className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl hover:bg-green-500 transition-colors">
                      <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/></svg>
                    </a>
                    <a href="mailto:gabriele.buttice.bttc@gmail.com" className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl hover:bg-blue-500 transition-colors">
                      <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 16 16"><path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/><path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/></svg>
                    </a>
                  </div>
                )}
              </div>

              <button 
                onClick={scrollToWorks}
                className="group rounded-full border border-zinc-700 px-8 py-4 font-bold transition-all hover:bg-zinc-800"
              >
                My past works ↓
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center lg:col-span-5 order-2">
            <div className="mb-6 w-full max-w-[380px] lg:hidden overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_40px,_black_calc(100%-40px),transparent_100%)]">
              <div className="flex animate-marquee-slow gap-8 py-2">
                {[...stack, ...stack].map((tech, i) => (
                  <img key={i} src={`https://cdn.simpleicons.org/${tech.icon}/${tech.color}`} className="h-5 w-5 opacity-70" alt={tech.name} />
                ))}
              </div>
            </div>

            <div className="relative aspect-square w-full max-w-[320px] md:max-w-[380px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <Image src="/static/foto_cv_white_bg.jpg" alt="Gabriele" fill className="object-cover" priority />
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-lg font-bold tracking-tight text-white">SaaS & Management Platforms Expert</p>
              <p className="text-sm text-zinc-500 uppercase tracking-widest mt-1">Full Stack Developer</p>
            </div>

            <div className="mt-8 w-full max-w-[380px] hidden lg:block overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_40px,_black_calc(100%-40px),transparent_100%)]">
              <div className="flex animate-marquee-slow gap-8 py-2">
                {[...stack, ...stack].map((tech, i) => (
                  <img key={i} src={`https://cdn.simpleicons.org/${tech.icon}/${tech.color}`} className="h-5 w-5 opacity-70" alt={tech.name} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* MY WORKS SECTION */}
      <section ref={worksRef} className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-12 text-4xl font-black tracking-tighter md:text-6xl">My Works</h2>
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, idx) => (
            <div key={idx} className="group grid grid-cols-1 gap-10 overflow-hidden rounded-[2.5rem] border border-zinc-800 bg-zinc-900/30 p-8 lg:grid-cols-2 lg:p-14 transition-all hover:border-zinc-700">
              <div className="flex flex-col justify-center">
                <h3 className="mb-4 text-3xl font-bold md:text-4xl leading-tight">{project.title}</h3>
                <p className="mb-8 text-lg leading-relaxed text-zinc-400">{project.description}</p>
                
                <div className="mb-8 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="rounded-md bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-zinc-400 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>

                {/* PROJECT LINK */}
                <a 
                  href={project.link} 
                  target="_blank" 
                  className="inline-flex items-center gap-2 text-white font-bold hover:text-purple-400 transition-colors group/link"
                >
                  View live project 
                  <svg className="w-5 h-5 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </a>
              </div>

              <div className="relative group/carousel">
                <div ref={(el) => { scrollRefs.current[idx] = el; }} className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory rounded-2xl">
                  {project.screens.map((screen, sIdx) => (
                    <button onClick={() => setLightbox({ images: project.screens, currentIndex: sIdx })} className="relative h-[300px] w-full shrink-0 snap-center overflow-hidden rounded-xl border border-zinc-800 shadow-2xl block cursor-zoom-in">
                      <Image src={screen} alt={`${project.title} ${sIdx}`} fill className="object-contain" loading="lazy" />
                    </button>
                  ))}
                </div>
                <button onClick={() => scroll(idx, "left")} className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 backdrop-blur-md border border-white/10 hover:bg-purple-600 transition-all z-20">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={() => scroll(idx, "right")} className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 backdrop-blur-md border border-white/10 hover:bg-purple-600 transition-all z-20">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div 
          onClick={() => setLightbox(null)} 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg animate-fade-in-fast"
        >
          <button 
            onClick={showPrevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 backdrop-blur-md border border-white/10 hover:bg-purple-600 transition-all z-20"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
          </button>
          
          <div className="relative w-[90vw] h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <Image 
              src={lightbox.images[lightbox.currentIndex]} 
              alt="Lightbox" 
              fill 
              className="object-contain"
            />
          </div>

          <button 
            onClick={showNextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 backdrop-blur-md border border-white/10 hover:bg-purple-600 transition-all z-20"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
          </button>

          <button 
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white text-4xl hover:text-purple-400 transition-colors"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
}