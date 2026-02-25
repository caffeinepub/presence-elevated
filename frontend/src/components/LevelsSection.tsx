import React, { useEffect, useRef } from 'react';

interface Level {
    id: string;
    name: string;
    subtitle: string;
    description: string;
    image: string;
    glowColor: string;
    borderColor: string;
    labelColor: string;
    tag: string;
}

const levels: Level[] = [
    {
        id: 'level-0',
        name: 'Level 0',
        subtitle: 'The Lobby',
        description: 'Infinite yellow-carpeted rooms stretching in every direction. Fluorescent lights flicker overhead. The hum is constant. The carpet is always slightly damp. You are always alone here.',
        image: '/assets/generated/level-0-lobby.dim_480x480.jpg',
        glowColor: 'oklch(0.82 0.14 100 / 0.5)',
        borderColor: 'oklch(0.82 0.14 100 / 0.3)',
        labelColor: 'oklch(0.82 0.14 100)',
        tag: 'DANGER: LOW',
    },
    {
        id: 'level-1',
        name: 'Level 1',
        subtitle: 'Habitable Zone',
        description: 'Vast concrete warehouses with industrial shelving and scattered supplies. Pipes run along the ceiling. Water drips somewhere in the dark. Entities have been reported. Stay in the light.',
        image: '/assets/generated/level-1-habitable.dim_480x480.jpg',
        glowColor: 'oklch(0.65 0.04 90 / 0.5)',
        borderColor: 'oklch(0.65 0.04 90 / 0.3)',
        labelColor: 'oklch(0.72 0.03 90)',
        tag: 'DANGER: MODERATE',
    },
    {
        id: 'level-false',
        name: 'Level !',
        subtitle: 'The False Level',
        description: 'A dreamcore distortion of reality. Pastel walls bleed into each other. Gravity is inconsistent. Objects float. The colors are beautiful and wrong. Time does not pass normally here.',
        image: '/assets/generated/level-false-pastel.dim_480x480.jpg',
        glowColor: 'oklch(0.72 0.06 280 / 0.5)',
        borderColor: 'oklch(0.72 0.06 280 / 0.3)',
        labelColor: 'oklch(0.72 0.06 280)',
        tag: 'DANGER: UNKNOWN',
    },
    {
        id: 'level-poolrooms',
        name: 'The Poolrooms',
        subtitle: 'Flooded Iridescence',
        description: 'Interconnected rooms filled with warm, shallow water. Sunlight filters through frosted glass from no discernible source. The silence is almost peaceful. Almost. Do not go deeper.',
        image: '/assets/generated/level-poolrooms.dim_480x480.jpg',
        glowColor: 'oklch(0.72 0.06 195 / 0.5)',
        borderColor: 'oklch(0.72 0.06 195 / 0.3)',
        labelColor: 'oklch(0.72 0.06 195)',
        tag: 'DANGER: VARIABLE',
    },
];

const LevelsSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.section-fade-in').forEach((el, i) => {
                            setTimeout(() => el.classList.add('visible'), i * 120);
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
            id="levels"
            ref={sectionRef}
            className="relative py-24 lg:py-32 texture-grain overflow-hidden"
            style={{ background: 'oklch(0.07 0.006 95)' }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 section-fade-in">
                    <span
                        className="font-mono text-xs tracking-[0.3em] uppercase"
                        style={{ color: 'oklch(0.82 0.14 100 / 0.7)' }}
                    >
                        // LEVEL CATALOGUE
                    </span>
                    <h2
                        className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-3"
                        style={{ color: 'oklch(0.88 0.03 90)' }}
                    >
                        Known Levels
                    </h2>
                    <p
                        className="font-sans text-sm mt-4 max-w-xl mx-auto"
                        style={{ color: 'oklch(0.48 0.02 90)' }}
                    >
                        Over 600 levels have been documented by survivors. These are among the most frequently encountered.
                        Approach with caution. Knowledge is your only weapon.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    {levels.map((level, index) => (
                        <LevelCard key={level.id} level={level} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const LevelCard: React.FC<{ level: Level; index: number }> = ({ level, index }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={cardRef}
            className="section-fade-in group relative overflow-hidden cursor-default transition-all duration-400"
            style={{
                border: `1px solid ${level.borderColor}`,
                transitionDelay: `${index * 80}ms`,
            }}
            onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 30px ${level.glowColor}, 0 0 80px ${level.glowColor.replace('0.5', '0.15')}`;
                (e.currentTarget as HTMLDivElement).style.borderColor = level.labelColor;
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLDivElement).style.borderColor = level.borderColor;
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
            }}
        >
            {/* Image */}
            <div className="relative overflow-hidden aspect-square">
                <img
                    src={level.image}
                    alt={`${level.name} — ${level.subtitle}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: 'saturate(0.6) brightness(0.75)' }}
                />
                {/* Scanlines */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, oklch(0.05 0.005 95 / 0.06) 3px, oklch(0.05 0.005 95 / 0.06) 6px)',
                    }}
                />
                {/* Gradient overlay */}
                <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, oklch(0.07 0.006 95) 0%, transparent 60%)' }}
                />
                {/* Danger tag */}
                <div
                    className="absolute top-2 right-2 px-2 py-0.5"
                    style={{
                        background: 'oklch(0.06 0.005 95 / 0.85)',
                        border: `1px solid ${level.borderColor}`,
                    }}
                >
                    <span className="font-mono text-xs" style={{ color: level.labelColor, fontSize: '0.6rem', letterSpacing: '0.1em' }}>
                        {level.tag}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div
                className="p-4"
                style={{ background: 'oklch(0.09 0.008 95)' }}
            >
                <div className="flex items-baseline gap-2 mb-1">
                    <span
                        className="font-mono text-xs tracking-widest uppercase"
                        style={{ color: level.labelColor }}
                    >
                        {level.name}
                    </span>
                </div>
                <h3
                    className="font-serif text-lg leading-tight mb-2"
                    style={{ color: 'oklch(0.85 0.02 90)' }}
                >
                    {level.subtitle}
                </h3>
                <p
                    className="font-sans text-xs leading-relaxed"
                    style={{ color: 'oklch(0.48 0.02 90)' }}
                >
                    {level.description}
                </p>
            </div>
        </div>
    );
};

export default LevelsSection;
