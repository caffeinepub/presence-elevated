import React, { useState, useEffect, useRef } from 'react';

const CORRECT_CODE = '2112';
const SESSION_KEY = 'backrooms_access_granted';

const CodeEntryGate: React.FC = () => {
    const [unlocked, setUnlocked] = useState<boolean>(() => {
        return sessionStorage.getItem(SESSION_KEY) === 'true';
    });
    const [code, setCode] = useState('');
    const [error, setError] = useState(false);
    const [glitching, setGlitching] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!unlocked && inputRef.current) {
            inputRef.current.focus();
        }
    }, [unlocked]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (code === CORRECT_CODE) {
            sessionStorage.setItem(SESSION_KEY, 'true');
            setUnlocked(true);
        } else {
            setError(true);
            setGlitching(true);
            setCode('');
            setTimeout(() => setGlitching(false), 600);
            if (inputRef.current) inputRef.current.focus();
        }
    };

    if (unlocked) return null;

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
            style={{ background: 'oklch(0.04 0.005 95)' }}
        >
            {/* Grain texture overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                    backgroundSize: '180px 180px',
                }}
            />

            {/* Scanlines */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, oklch(0.04 0.005 95 / 0.35) 2px, oklch(0.04 0.005 95 / 0.35) 4px)',
                }}
            />

            {/* Fluorescent top/bottom lines */}
            <div
                className="absolute inset-x-0 top-0 h-px animate-flicker"
                style={{ background: 'oklch(0.82 0.14 100 / 0.5)', boxShadow: '0 0 12px 2px oklch(0.82 0.14 100 / 0.3)' }}
            />
            <div
                className="absolute inset-x-0 bottom-0 h-px animate-flicker"
                style={{ background: 'oklch(0.82 0.14 100 / 0.5)', boxShadow: '0 0 12px 2px oklch(0.82 0.14 100 / 0.3)' }}
            />

            {/* Gate panel */}
            <div className="relative w-full max-w-sm mx-4 sm:mx-auto flex flex-col items-center gap-6">
                {/* Top label */}
                <div className="text-center">
                    <p
                        className="font-mono text-xs tracking-[0.35em] uppercase mb-3"
                        style={{ color: 'oklch(0.82 0.14 100 / 0.55)' }}
                    >
                        // RESTRICTED ACCESS
                    </p>
                    <h1
                        className="font-serif text-3xl sm:text-4xl tracking-wide animate-flickerText"
                        style={{ color: 'oklch(0.88 0.03 90)' }}
                    >
                        Into The Backrooms
                    </h1>
                    <p
                        className="font-mono text-xs mt-3 tracking-widest"
                        style={{ color: 'oklch(0.48 0.02 90)' }}
                    >
                        AUTHORIZATION REQUIRED
                    </p>
                </div>

                {/* Divider */}
                <div
                    className="w-full h-px"
                    style={{ background: 'oklch(0.82 0.14 100 / 0.2)', boxShadow: '0 0 8px 1px oklch(0.82 0.14 100 / 0.1)' }}
                />

                {/* Form */}
                <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-4">
                    <label
                        htmlFor="access-code"
                        className="font-mono text-sm tracking-[0.2em] uppercase"
                        style={{ color: 'oklch(0.72 0.08 100)' }}
                    >
                        Enter Access Code
                    </label>

                    <input
                        ref={inputRef}
                        id="access-code"
                        type="password"
                        inputMode="numeric"
                        maxLength={8}
                        value={code}
                        onChange={e => {
                            setCode(e.target.value);
                            setError(false);
                        }}
                        autoComplete="off"
                        className="w-full max-w-[220px] text-center font-mono text-2xl tracking-[0.5em] py-3 px-4 outline-none transition-all duration-200"
                        style={{
                            background: 'oklch(0.08 0.008 95)',
                            border: error
                                ? '1px solid oklch(0.55 0.18 25)'
                                : '1px solid oklch(0.82 0.14 100 / 0.35)',
                            color: 'oklch(0.88 0.03 90)',
                            boxShadow: error
                                ? '0 0 12px oklch(0.55 0.18 25 / 0.4), inset 0 0 8px oklch(0.55 0.18 25 / 0.1)'
                                : '0 0 12px oklch(0.82 0.14 100 / 0.1), inset 0 0 8px oklch(0.82 0.14 100 / 0.05)',
                            caretColor: 'oklch(0.82 0.14 100)',
                        }}
                        placeholder="_ _ _ _"
                    />

                    {/* Error message */}
                    <div className="h-5 flex items-center justify-center">
                        {error && (
                            <p
                                className={`font-mono text-xs tracking-[0.25em] uppercase ${glitching ? 'gate-glitch' : ''}`}
                                style={{ color: 'oklch(0.62 0.18 25)' }}
                            >
                                ⚠ ACCESS DENIED
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="font-mono text-sm tracking-[0.25em] uppercase px-8 py-3 transition-all duration-200 hover:scale-105 active:scale-95"
                        style={{
                            background: 'transparent',
                            border: '1px solid oklch(0.82 0.14 100 / 0.5)',
                            color: 'oklch(0.82 0.14 100)',
                            boxShadow: '0 0 16px oklch(0.82 0.14 100 / 0.15)',
                        }}
                        onMouseEnter={e => {
                            (e.currentTarget as HTMLButtonElement).style.background = 'oklch(0.82 0.14 100 / 0.08)';
                            (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 24px oklch(0.82 0.14 100 / 0.3)';
                        }}
                        onMouseLeave={e => {
                            (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                            (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 16px oklch(0.82 0.14 100 / 0.15)';
                        }}
                    >
                        SUBMIT
                    </button>
                </form>

                {/* Bottom label */}
                <div
                    className="w-full h-px"
                    style={{ background: 'oklch(0.82 0.14 100 / 0.2)', boxShadow: '0 0 8px 1px oklch(0.82 0.14 100 / 0.1)' }}
                />
                <p
                    className="font-mono text-xs text-center"
                    style={{ color: 'oklch(0.32 0.02 90)', letterSpacing: '0.05em' }}
                >
                    UNAUTHORIZED ACCESS IS PROHIBITED
                </p>
            </div>

            <style>{`
                @keyframes gate-glitch-anim {
                    0%   { opacity: 1; transform: translateX(0); }
                    10%  { opacity: 0; transform: translateX(-4px); }
                    20%  { opacity: 1; transform: translateX(4px); }
                    30%  { opacity: 0; transform: translateX(-3px); }
                    40%  { opacity: 1; transform: translateX(3px); }
                    50%  { opacity: 0; transform: translateX(-2px); }
                    60%  { opacity: 1; transform: translateX(2px); }
                    70%  { opacity: 0.5; transform: translateX(-1px); }
                    80%  { opacity: 1; transform: translateX(1px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
                .gate-glitch {
                    animation: gate-glitch-anim 0.6s ease-in-out;
                }
            `}</style>
        </div>
    );
};

export default CodeEntryGate;
