import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { label: 'The Backrooms', href: '#what-are-backrooms' },
    { label: 'Levels', href: '#levels' },
    { label: 'Dreamcore', href: '#dreamcore' },
    { label: 'Survival Guide', href: '#survival-guide' },
];

const NavBar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setMenuOpen(false);
        const id = href.replace('#', '');
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header
            className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
            style={{
                background: scrolled ? 'oklch(0.07 0.006 95 / 0.96)' : 'transparent',
                borderBottom: scrolled ? '1px solid oklch(0.22 0.015 90 / 0.6)' : '1px solid transparent',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
            }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14 lg:h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div
                            className="w-6 h-6 flex items-center justify-center animate-flicker"
                            style={{
                                background: 'oklch(0.82 0.14 100)',
                                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                            }}
                        />
                        <span
                            className="font-mono text-sm font-semibold tracking-widest uppercase"
                            style={{ color: 'oklch(0.82 0.14 100)', letterSpacing: '0.15em' }}
                        >
                            Into The Backrooms
                        </span>
                    </div>

                    {/* Desktop nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map(link => (
                            <button
                                key={link.label}
                                onClick={() => handleNavClick(link.href)}
                                className="font-mono text-xs font-medium tracking-widest uppercase transition-colors duration-200"
                                style={{ color: 'oklch(0.55 0.03 90)' }}
                                onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.color = 'oklch(0.82 0.14 100)'}
                                onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.color = 'oklch(0.55 0.03 90)'}
                            >
                                {link.label}
                            </button>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center">
                        <button
                            onClick={() => handleNavClick('#what-are-backrooms')}
                            className="px-4 py-2 font-mono font-semibold text-xs tracking-widest uppercase transition-all duration-300 border"
                            style={{
                                borderColor: 'oklch(0.82 0.14 100 / 0.5)',
                                color: 'oklch(0.82 0.14 100)',
                                background: 'oklch(0.82 0.14 100 / 0.06)',
                            }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLButtonElement).style.background = 'oklch(0.82 0.14 100 / 0.15)';
                                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 15px oklch(0.82 0.14 100 / 0.3)';
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLButtonElement).style.background = 'oklch(0.82 0.14 100 / 0.06)';
                                (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
                            }}
                        >
                            Explore
                        </button>
                    </div>

                    {/* Mobile menu toggle */}
                    <button
                        className="lg:hidden p-2 transition-colors duration-200"
                        style={{ color: 'oklch(0.72 0.03 90)' }}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div
                    className="lg:hidden border-t"
                    style={{
                        background: 'oklch(0.07 0.006 95 / 0.98)',
                        borderColor: 'oklch(0.22 0.015 90)',
                        backdropFilter: 'blur(12px)',
                    }}
                >
                    <div className="container mx-auto px-4 py-4 space-y-1">
                        {navLinks.map(link => (
                            <button
                                key={link.label}
                                onClick={() => handleNavClick(link.href)}
                                className="block w-full text-left px-4 py-3 font-mono text-xs font-medium tracking-widest uppercase transition-colors duration-200"
                                style={{ color: 'oklch(0.62 0.03 90)' }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLButtonElement).style.background = 'oklch(0.14 0.01 90)';
                                    (e.currentTarget as HTMLButtonElement).style.color = 'oklch(0.82 0.14 100)';
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                                    (e.currentTarget as HTMLButtonElement).style.color = 'oklch(0.62 0.03 90)';
                                }}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default NavBar;
