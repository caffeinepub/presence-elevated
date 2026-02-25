import React, { useEffect, useRef } from 'react';

const WhatAreBackroomsSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.section-fade-in').forEach((el, i) => {
                            setTimeout(() => el.classList.add('visible'), i * 150);
                        });
                    }
                });
            },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="what-are-backrooms"
            ref={sectionRef}
            className="relative py-24 lg:py-32 texture-grain overflow-hidden"
            style={{ background: 'oklch(0.09 0.008 95)' }}
        >
            {/* Subtle fluorescent glow from top */}
            <div
                className="absolute inset-x-0 top-0 h-px animate-flicker"
                style={{ background: 'oklch(0.82 0.14 100 / 0.3)', boxShadow: '0 0 15px 2px oklch(0.82 0.14 100 / 0.2)' }}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: Image */}
                    <div className="section-fade-in order-2 lg:order-1">
                        <div
                            className="relative overflow-hidden"
                            style={{ border: '1px solid oklch(0.82 0.14 100 / 0.15)' }}
                        >
                            <img
                                src="/assets/generated/backrooms-hallway.dim_960x540.jpg"
                                alt="Endless fluorescent hallway of the Backrooms"
                                className="w-full h-auto block"
                                style={{ filter: 'saturate(0.7) brightness(0.85)' }}
                            />
                            {/* Scanline overlay */}
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, oklch(0.05 0.005 95 / 0.08) 2px, oklch(0.05 0.005 95 / 0.08) 4px)',
                                }}
                            />
                            {/* Corner markers */}
                            <div className="absolute top-2 left-2 w-4 h-4 border-t border-l" style={{ borderColor: 'oklch(0.82 0.14 100 / 0.5)' }} />
                            <div className="absolute top-2 right-2 w-4 h-4 border-t border-r" style={{ borderColor: 'oklch(0.82 0.14 100 / 0.5)' }} />
                            <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l" style={{ borderColor: 'oklch(0.82 0.14 100 / 0.5)' }} />
                            <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r" style={{ borderColor: 'oklch(0.82 0.14 100 / 0.5)' }} />
                            {/* Caption */}
                            <div
                                className="absolute bottom-0 left-0 right-0 px-4 py-2"
                                style={{ background: 'oklch(0.06 0.005 95 / 0.8)' }}
                            >
                                <p className="font-mono text-xs tracking-widest" style={{ color: 'oklch(0.82 0.14 100 / 0.7)' }}>
                                    LEVEL 0 — THE LOBBY — PHOTO RECOVERED
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Copy */}
                    <div className="order-1 lg:order-2 space-y-6">
                        <div className="section-fade-in">
                            <span
                                className="font-mono text-xs tracking-[0.3em] uppercase"
                                style={{ color: 'oklch(0.82 0.14 100 / 0.7)' }}
                            >
                                // CLASSIFIED DOCUMENT
                            </span>
                            <h2
                                className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-3 leading-tight"
                                style={{ color: 'oklch(0.88 0.03 90)' }}
                            >
                                What Are<br />The Backrooms?
                            </h2>
                        </div>

                        <div className="section-fade-in space-y-4">
                            <p className="font-sans text-sm leading-relaxed" style={{ color: 'oklch(0.55 0.03 90)' }}>
                                The Backrooms are an infinite network of liminal spaces — rooms and corridors that exist
                                outside the boundaries of our known reality. They are accessed by <em style={{ color: 'oklch(0.72 0.06 90)' }}>noclipping</em> out
                                of the physical world, slipping through the geometry of existence into something older and stranger.
                            </p>
                            <p className="font-sans text-sm leading-relaxed" style={{ color: 'oklch(0.55 0.03 90)' }}>
                                The most commonly reported entry point is Level 0: an endless expanse of yellow-carpeted
                                rooms bathed in the sickly glow of fluorescent lights. The air smells of damp carpet and
                                old wood. The hum never stops. There are no windows. There are no doors. There is only forward.
                            </p>
                        </div>

                        {/* Pull quote */}
                        <div
                            className="section-fade-in border-l-2 pl-6 py-2"
                            style={{ borderColor: 'oklch(0.82 0.14 100 / 0.5)' }}
                        >
                            <blockquote
                                className="font-serif text-xl sm:text-2xl leading-snug animate-flicker-text"
                                style={{ color: 'oklch(0.82 0.14 100)' }}
                            >
                                "No exits. No entities. Just you and the hum of fluorescent lights."
                            </blockquote>
                            <cite className="font-mono text-xs mt-3 block" style={{ color: 'oklch(0.42 0.02 90)' }}>
                                — SURVIVOR LOG #0047, DATE UNKNOWN
                            </cite>
                        </div>

                        <div className="section-fade-in">
                            <p className="font-sans text-sm leading-relaxed" style={{ color: 'oklch(0.55 0.03 90)' }}>
                                Thousands of levels have been catalogued. Some are survivable. Some are not.
                                The Backrooms do not care about you. They simply are — vast, indifferent, and eternal.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="section-fade-in grid grid-cols-3 gap-4 pt-2">
                            {[
                                { value: '∞', label: 'Levels' },
                                { value: '600+', label: 'Documented' },
                                { value: '0', label: 'Known Exits' },
                            ].map(stat => (
                                <div key={stat.label} className="text-center">
                                    <div
                                        className="font-mono text-2xl font-bold animate-flicker-text"
                                        style={{ color: 'oklch(0.82 0.14 100)' }}
                                    >
                                        {stat.value}
                                    </div>
                                    <div className="font-mono text-xs tracking-widest uppercase mt-1" style={{ color: 'oklch(0.42 0.02 90)' }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatAreBackroomsSection;
