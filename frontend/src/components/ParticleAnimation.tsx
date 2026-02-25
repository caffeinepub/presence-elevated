import React, { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    size: number;
    speedY: number;
    speedX: number;
    opacity: number;
    life: number;
    maxLife: number;
}

const ParticleAnimation: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animFrameRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const createParticle = (): Particle => ({
            x: Math.random() * canvas.width,
            y: canvas.height + 10,
            size: Math.random() * 2 + 0.5,
            speedY: -(Math.random() * 0.6 + 0.2),
            speedX: (Math.random() - 0.5) * 0.3,
            opacity: 0,
            life: 0,
            maxLife: Math.random() * 200 + 150,
        });

        // Initialize particles
        for (let i = 0; i < 30; i++) {
            const p = createParticle();
            p.y = Math.random() * canvas.height;
            p.life = Math.random() * p.maxLife;
            particlesRef.current.push(p);
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particlesRef.current.forEach((p, i) => {
                p.life++;
                p.x += p.speedX;
                p.y += p.speedY;

                const progress = p.life / p.maxLife;
                if (progress < 0.1) {
                    p.opacity = progress / 0.1;
                } else if (progress > 0.8) {
                    p.opacity = (1 - progress) / 0.2;
                } else {
                    p.opacity = 1;
                }

                // Gold/violet particle colors
                const isGold = i % 3 === 0;
                const r = isGold ? 201 : 123;
                const g = isGold ? 168 : 79;
                const b = isGold ? 76 : 166;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.opacity * 0.5})`;
                ctx.fill();

                if (p.life >= p.maxLife || p.y < -10) {
                    particlesRef.current[i] = createParticle();
                }
            });

            animFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animFrameRef.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 0.6 }}
        />
    );
};

export default ParticleAnimation;
