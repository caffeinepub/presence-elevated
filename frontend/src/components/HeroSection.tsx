import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const el = titleRef.current;
        if (!el) return;
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        const t = setTimeout(() => {
            el.style.transition = 'opacity 1.2s ease-out, transform 1.2s ease-out';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 300);
        return () => clearTimeout(t);
    }, []);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden texture-grain"
            style={{ background: 'oklch(0.07 0.006 95)' }}
        >
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/assets/generated/backrooms-hero-bg.dim_1920x1080.jpg')",
                    opacity: 0.35,
                }}
            />

            {/* Dark vignette overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 30%, oklch(0.05 0.005 95 / 0.85) 100%)',
                }}
            />

            {/* Top and bottom gradient fades */}
            <div
                className="absolute inset-x-0 top-0 h-32 pointer-events-none"
                style={{ background: 'linear-gradient(to bottom, oklch(0.07 0.006 95), transparent)' }}
            />
            <div
                className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
                style={{ background: 'linear-gradient(to top, oklch(0.07 0.006 95), transparent)' }}
            />

            {/* Flickering fluorescent light bar at top */}
            <div
                className="absolute top-0 left-0 right-0 h-0.5 animate-flicker"
                style={{ background: 'oklch(0.82 0.14 100 / 0.6)', boxShadow: '0 0 20px 4px oklch(0.82 0.14 100 / 0.4)' }}
            />

            {/* Content */}
            <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
                {/* Warning label */}
                <div className="inline-flex items-center gap-3 mb-8">
                    <div className="h-px w-12" style={{ background: 'oklch(0.82 0.14 100 / 0.5)' }} />
                    <span
                        className="font-mono text-xs tracking-[0.3em] uppercase animate-flicker-text"
                        style={{ color: 'oklch(0.82 0.14 100)' }}
                    >
                        ⚠ LEVEL 0 — ENTRY DETECTED
                    </span>
                    <div className="h-px w-12" style={{ background: 'oklch(0.82 0.14 100 / 0.5)' }} />
                </div>

                {/* Main headline */}
                <h1
                    ref={titleRef}
                    className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
                    style={{
                        color: 'oklch(0.88 0.03 90)',
                        textShadow: '0 0 40px oklch(0.82 0.14 100 / 0.2)',
                    }}
                >
                    You Weren't Supposed<br />
                    <span
                        className="animate-flicker-text"
                        style={{ color: 'oklch(0.82 0.14 100)' }}
                    >
                        to Find This
                    </span>
                </h1>

                {/* Subheadline */}
                <p
                    className="font-sans text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
                    style={{ color: 'oklch(0.58 0.03 90)' }}
                >
                    Welcome to the Backrooms — infinite liminal space beyond the boundaries of reality.
                    You have noclipped out of the world. There is no exit. Only the hum.
                </p>

                {/* CTA */}
                <button
                    onClick={() => scrollToSection('what-are-backrooms')}
                    className="group inline-flex items-center gap-3 px-8 py-4 font-mono text-sm tracking-widest uppercase transition-all duration-300 border animate-pulse-glow"
                    style={{
                        borderColor: 'oklch(0.82 0.14 100 / 0.6)',
                        color: 'oklch(0.82 0.14 100)',
                        background: 'oklch(0.82 0.14 100 / 0.08)',
                    }}
                    onMouseEnter={e => {
                        (e.currentTarget as HTMLButtonElement).style.background = 'oklch(0.82 0.14 100 / 0.18)';
                        (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 30px oklch(0.82 0.14 100 / 0.4), 0 0 80px oklch(0.82 0.14 100 / 0.15)';
                    }}
                    onMouseLeave={e => {
                        (e.currentTarget as HTMLButtonElement).style.background = 'oklch(0.82 0.14 100 / 0.08)';
                        (e.currentTarget as HTMLButtonElement).style.boxShadow = '';
                    }}
                >
                    Enter
                    <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform duration-300" />
                </button>

                {/* Coordinates */}
                <p
                    className="font-mono text-xs mt-8 tracking-widest"
                    style={{ color: 'oklch(0.35 0.02 90)' }}
                >
                    COORDINATES: 0.000°N, 0.000°E — REALITY INDEX: NULL
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
