import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
    const year = new Date().getFullYear();
    const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'into-the-backrooms');

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer
            className="relative py-16 texture-grain"
            style={{
                background: 'oklch(0.06 0.005 95)',
                borderTop: '1px solid oklch(0.18 0.01 90)',
            }}
        >
            {/* Fluorescent top line */}
            <div
                className="absolute inset-x-0 top-0 h-px animate-flicker"
                style={{ background: 'oklch(0.82 0.14 100 / 0.2)', boxShadow: '0 0 8px 1px oklch(0.82 0.14 100 / 0.1)' }}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div
                                className="w-5 h-5 animate-flicker"
                                style={{
                                    background: 'oklch(0.82 0.14 100)',
                                    clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                                }}
                            />
                            <span
                                className="font-mono text-sm font-semibold tracking-widest uppercase"
                                style={{ color: 'oklch(0.82 0.14 100)' }}
                            >
                                Into The Backrooms
                            </span>
                        </div>
                        <p
                            className="font-mono text-xs leading-relaxed max-w-xs"
                            style={{ color: 'oklch(0.42 0.02 90)', lineHeight: '1.8' }}
                        >
                            The walls are not what they seem.
                        </p>
                        <p
                            className="font-mono text-xs mt-4 leading-relaxed max-w-xs"
                            style={{ color: 'oklch(0.35 0.015 90)', lineHeight: '1.8', fontSize: '0.65rem' }}
                        >
                            This site is a fan-made creative project inspired by the Backrooms and Dreamcore internet aesthetics.
                            All content is fictional. No actual liminal spaces were harmed in the making of this website.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4
                            className="font-mono text-xs font-semibold tracking-[0.25em] uppercase mb-4 animate-flicker-text"
                            style={{ color: 'oklch(0.82 0.14 100 / 0.8)' }}
                        >
                            // Navigate
                        </h4>
                        <ul className="space-y-2">
                            {[
                                { label: 'The Backrooms', id: 'what-are-backrooms' },
                                { label: 'Known Levels', id: 'levels' },
                                { label: 'Dreamcore', id: 'dreamcore' },
                                { label: 'Survival Guide', id: 'survival-guide' },
                            ].map(item => (
                                <li key={item.id}>
                                    <button
                                        onClick={() => scrollToSection(item.id)}
                                        className="font-mono text-xs transition-colors duration-200 tracking-wide"
                                        style={{ color: 'oklch(0.42 0.02 90)' }}
                                        onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.color = 'oklch(0.82 0.14 100)'}
                                        onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.color = 'oklch(0.42 0.02 90)'}
                                    >
                                        &gt; {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Status */}
                    <div>
                        <h4
                            className="font-mono text-xs font-semibold tracking-[0.25em] uppercase mb-4"
                            style={{ color: 'oklch(0.82 0.14 100 / 0.8)' }}
                        >
                            // System Status
                        </h4>
                        <ul className="space-y-2">
                            {[
                                { label: 'Reality Index', value: 'NULL' },
                                { label: 'Exit Found', value: 'NO' },
                                { label: 'Entities Nearby', value: 'UNKNOWN' },
                                { label: 'Fluorescent Hum', value: 'ACTIVE' },
                                { label: 'Levels Mapped', value: '600+' },
                            ].map(item => (
                                <li key={item.label} className="flex items-center justify-between gap-4">
                                    <span className="font-mono text-xs" style={{ color: 'oklch(0.38 0.015 90)', fontSize: '0.65rem' }}>
                                        {item.label}
                                    </span>
                                    <span
                                        className="font-mono text-xs"
                                        style={{
                                            color: item.value === 'ACTIVE' ? 'oklch(0.82 0.14 100)' : 'oklch(0.48 0.02 90)',
                                            fontSize: '0.65rem',
                                        }}
                                    >
                                        {item.value}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
                    style={{ borderTop: '1px solid oklch(0.16 0.01 90)' }}
                >
                    <p className="font-mono text-xs" style={{ color: 'oklch(0.32 0.015 90)', fontSize: '0.65rem' }}>
                        © {year} Into The Backrooms. Fan project. Not affiliated with any official Backrooms media.
                    </p>
                    <p className="font-mono text-xs flex items-center gap-1.5" style={{ color: 'oklch(0.32 0.015 90)', fontSize: '0.65rem' }}>
                        Built with{' '}
                        <Heart size={10} fill="oklch(0.82 0.14 100)" style={{ color: 'oklch(0.82 0.14 100)' }} />
                        {' '}using{' '}
                        <a
                            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors duration-200"
                            style={{ color: 'oklch(0.82 0.14 100)' }}
                            onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'oklch(0.90 0.16 102)'}
                            onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'oklch(0.82 0.14 100)'}
                        >
                            caffeine.ai
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
