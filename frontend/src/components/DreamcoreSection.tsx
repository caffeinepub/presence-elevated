import React, { useEffect, useRef } from 'react';

const dreamcoreImages = [
    {
        src: '/assets/generated/dreamcore-swings.dim_480x480.jpg',
        alt: 'Empty swing set at twilight',
        caption: 'Empty swings at dusk — no wind, no children',
        span: 'col-span-1 row-span-2',
    },
    {
        src: '/assets/generated/dreamcore-corridor.dim_480x480.jpg',
        alt: 'Infinite soft pastel corridor',
        caption: 'The corridor that never ends',
        span: 'col-span-1',
    },
    {
        src: '/assets/generated/dreamcore-lake.dim_480x480.jpg',
        alt: 'Misty lake at dawn',
        caption: 'A lake you have never visited but remember',
        span: 'col-span-1',
    },
    {
        src: '/assets/generated/dreamcore-pool.dim_480x480.jpg',
        alt: 'Empty indoor swimming pool',
        caption: 'The pool after closing time, forever',
        span: 'col-span-1',
    },
];

const DreamcoreSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.section-fade-in').forEach((el, i) => {
                            setTimeout(() => el.classList.add('visible'), i * 130);
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="dreamcore"
            ref={sectionRef}
            className="relative py-24 lg:py-32 texture-grain overflow-hidden"
            style={{ background: 'oklch(0.10 0.01 95)' }}
        >
            {/* Soft pastel glow from center */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 70% 50% at 50% 50%, oklch(0.72 0.06 280 / 0.04) 0%, transparent 70%)',
                }}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left: Copy */}
                    <div className="space-y-6">
                        <div className="section-fade-in">
                            <span
                                className="font-mono text-xs tracking-[0.3em] uppercase"
                                style={{ color: 'oklch(0.72 0.06 280 / 0.8)' }}
                            >
                                // AESTHETIC REPORT
                            </span>
                            <h2
                                className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-3 leading-tight"
                                style={{ color: 'oklch(0.88 0.03 90)' }}
                            >
                                Dreamcore
                            </h2>
                        </div>

                        <div className="section-fade-in space-y-4">
                            <p className="font-sans text-sm leading-relaxed" style={{ color: 'oklch(0.55 0.03 90)' }}>
                                Dreamcore is the aesthetic of half-remembered places — spaces that feel deeply familiar
                                yet impossible to locate in memory. Empty playgrounds at dusk. Corridors that stretch
                                beyond reason. Pools with no swimmers. Skies in colors that don't exist in waking life.
                            </p>
                            <p className="font-sans text-sm leading-relaxed" style={{ color: 'oklch(0.55 0.03 90)' }}>
                                Where the Backrooms evoke dread, Dreamcore evokes a beautiful, aching melancholy.
                                These are the places you visit in sleep — the ones you can never quite return to.
                                They exist in the space between memory and imagination, between comfort and unease.
                            </p>
                        </div>

                        {/* Pull quote */}
                        <div
                            className="section-fade-in border-l-2 pl-6 py-2"
                            style={{ borderColor: 'oklch(0.72 0.06 280 / 0.5)' }}
                        >
                            <blockquote
                                className="font-serif text-xl sm:text-2xl leading-snug"
                                style={{ color: 'oklch(0.72 0.06 280)' }}
                            >
                                "A place you've been before, in a life you can't quite remember."
                            </blockquote>
                        </div>

                        <div className="section-fade-in space-y-3">
                            <p className="font-sans text-sm leading-relaxed" style={{ color: 'oklch(0.55 0.03 90)' }}>
                                The Dreamcore aesthetic emerged from the internet's collective unconscious — a shared
                                visual language for the uncanny, the nostalgic, and the surreal. It is the feeling
                                of a dream you can almost remember. The color of a sky you've never seen.
                            </p>
                        </div>

                        {/* Aesthetic tags */}
                        <div className="section-fade-in flex flex-wrap gap-2">
                            {['Liminal', 'Nostalgic', 'Surreal', 'Melancholic', 'Uncanny', 'Pastel'].map(tag => (
                                <span
                                    key={tag}
                                    className="font-mono text-xs px-3 py-1 border tracking-widest"
                                    style={{
                                        borderColor: 'oklch(0.72 0.06 280 / 0.3)',
                                        color: 'oklch(0.72 0.06 280 / 0.8)',
                                        background: 'oklch(0.72 0.06 280 / 0.05)',
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right: Image grid */}
                    <div className="section-fade-in">
                        <div className="grid grid-cols-2 gap-3">
                            {dreamcoreImages.map((img, i) => (
                                <div
                                    key={i}
                                    className="group relative overflow-hidden"
                                    style={{
                                        border: '1px solid oklch(0.72 0.06 280 / 0.15)',
                                        transitionDelay: `${i * 80}ms`,
                                    }}
                                    onMouseEnter={e => {
                                        (e.currentTarget as HTMLDivElement).style.borderColor = 'oklch(0.72 0.06 280 / 0.5)';
                                        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 20px oklch(0.72 0.06 280 / 0.2)';
                                    }}
                                    onMouseLeave={e => {
                                        (e.currentTarget as HTMLDivElement).style.borderColor = 'oklch(0.72 0.06 280 / 0.15)';
                                        (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                                    }}
                                >
                                    <div className="aspect-square overflow-hidden">
                                        <img
                                            src={img.src}
                                            alt={img.alt}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            style={{ filter: 'saturate(0.75) brightness(0.8)' }}
                                        />
                                    </div>
                                    {/* Caption overlay */}
                                    <div
                                        className="absolute bottom-0 left-0 right-0 px-3 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                                        style={{ background: 'oklch(0.07 0.006 95 / 0.9)' }}
                                    >
                                        <p className="font-mono text-xs" style={{ color: 'oklch(0.72 0.06 280 / 0.9)', fontSize: '0.6rem', letterSpacing: '0.05em' }}>
                                            {img.caption}
                                        </p>
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

export default DreamcoreSection;
