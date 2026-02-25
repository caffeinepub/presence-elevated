import React, { useEffect, useRef } from 'react';

const tips = [
    {
        number: '01',
        title: 'Stay calm and do not run',
        body: 'Panic accelerates disorientation. The Backrooms respond to fear. Breathe. Walk at a measured pace. Running has never led anyone to an exit — only deeper in.',
    },
    {
        number: '02',
        title: 'Follow the hum of electricity',
        body: 'Electrical hum indicates active infrastructure. Active infrastructure indicates proximity to higher levels with more resources. Move toward the sound, not away from it.',
    },
    {
        number: '03',
        title: 'Avoid wet areas — they attract entities',
        body: 'Moisture in the Backrooms is anomalous. Where there is water, there are things that live in it. The Poolrooms are beautiful. They are also dangerous. Do not linger.',
    },
    {
        number: '04',
        title: 'Document everything you find',
        body: 'Notes, maps, markings on walls. Your documentation may save the next person. The collective knowledge of survivors is the only map we have. Add to it.',
    },
    {
        number: '05',
        title: 'Remember: most levels are survivable',
        body: 'The Backrooms are vast but not uniformly hostile. Most levels have been traversed. Most entities can be avoided. You are not the first. You will not be the last. Keep moving.',
    },
];

const SurvivalGuideSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.section-fade-in').forEach((el, i) => {
                            setTimeout(() => el.classList.add('visible'), i * 100);
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
            id="survival-guide"
            ref={sectionRef}
            className="relative py-24 lg:py-32 overflow-hidden"
            style={{ background: 'oklch(0.09 0.008 95)' }}
        >
            {/* Fluorescent line */}
            <div
                className="absolute inset-x-0 top-0 h-px animate-flicker"
                style={{ background: 'oklch(0.82 0.14 100 / 0.25)', boxShadow: '0 0 10px 1px oklch(0.82 0.14 100 / 0.15)' }}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 section-fade-in">
                    <span
                        className="font-mono text-xs tracking-[0.3em] uppercase"
                        style={{ color: 'oklch(0.82 0.14 100 / 0.7)' }}
                    >
                        // EMERGENCY PROTOCOL
                    </span>
                    <h2
                        className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-3"
                        style={{ color: 'oklch(0.88 0.03 90)' }}
                    >
                        Survival Guide
                    </h2>
                    <p
                        className="font-sans text-sm mt-4 max-w-lg mx-auto"
                        style={{ color: 'oklch(0.48 0.02 90)' }}
                    >
                        Compiled from survivor accounts. Accuracy not guaranteed. The Backrooms do not follow rules.
                        These are observations, not promises.
                    </p>
                </div>

                {/* Document container */}
                <div className="max-w-3xl mx-auto section-fade-in">
                    <div
                        className="relative p-8 sm:p-12"
                        style={{
                            background: 'oklch(0.82 0.04 90)',
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                            backgroundSize: '200px 200px',
                            border: '1px solid oklch(0.65 0.04 90)',
                            boxShadow: '0 20px 60px oklch(0.04 0.005 95 / 0.6), inset 0 0 60px oklch(0.75 0.04 90 / 0.3)',
                        }}
                    >
                        {/* Distressed edges */}
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 60%, oklch(0.65 0.04 90 / 0.4) 100%)',
                            }}
                        />

                        {/* Document header */}
                        <div className="relative text-center mb-8 pb-6" style={{ borderBottom: '1px solid oklch(0.62 0.04 90)' }}>
                            <p
                                className="font-mono text-xs tracking-[0.3em] uppercase mb-2"
                                style={{ color: 'oklch(0.42 0.03 90)' }}
                            >
                                BACKROOMS SURVIVAL PROTOCOL — DOCUMENT 7-B
                            </p>
                            <h3
                                className="font-serif text-2xl"
                                style={{ color: 'oklch(0.22 0.02 90)' }}
                            >
                                If You Are Reading This, You Are Already Inside
                            </h3>
                            <p
                                className="font-mono text-xs mt-2"
                                style={{ color: 'oklch(0.48 0.03 90)' }}
                            >
                                CLASSIFICATION: OPEN — DISTRIBUTE FREELY
                            </p>
                        </div>

                        {/* Tips */}
                        <div className="relative space-y-6">
                            {tips.map((tip, i) => (
                                <div
                                    key={tip.number}
                                    className="section-fade-in flex gap-5"
                                    style={{ transitionDelay: `${i * 80}ms` }}
                                >
                                    <div
                                        className="font-mono text-3xl font-bold flex-shrink-0 leading-none mt-1"
                                        style={{ color: 'oklch(0.62 0.04 90)', opacity: 0.5 }}
                                    >
                                        {tip.number}
                                    </div>
                                    <div>
                                        <h4
                                            className="font-mono text-sm font-bold tracking-wide mb-1.5 uppercase"
                                            style={{ color: 'oklch(0.22 0.02 90)' }}
                                        >
                                            {tip.title}
                                        </h4>
                                        <p
                                            className="font-mono text-xs leading-relaxed"
                                            style={{ color: 'oklch(0.38 0.02 90)', lineHeight: '1.8' }}
                                        >
                                            {tip.body}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Document footer */}
                        <div
                            className="relative mt-8 pt-6 text-center"
                            style={{ borderTop: '1px solid oklch(0.62 0.04 90)' }}
                        >
                            <p
                                className="font-mono text-xs"
                                style={{ color: 'oklch(0.48 0.03 90)' }}
                            >
                                — END OF DOCUMENT — GOOD LUCK — YOU WILL NEED IT —
                            </p>
                            <p
                                className="font-mono text-xs mt-1"
                                style={{ color: 'oklch(0.58 0.03 90)', fontSize: '0.6rem', letterSpacing: '0.1em' }}
                            >
                                PAGE 1 OF ∞
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SurvivalGuideSection;
