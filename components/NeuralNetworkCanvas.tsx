import React, { useRef, useEffect } from 'react';

interface CanvasProps {
    theme: string;
}

const NeuralNetworkCanvas: React.FC<CanvasProps> = ({ theme }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouse = useRef({
        x: null as number | null,
        y: null as number | null,
        radius: 150
    });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        let animationFrameId: number;
        let particles: Particle[] = [];
        
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();

        const handleMouseMove = (event: MouseEvent) => {
            mouse.current.x = event.clientX;
            mouse.current.y = event.clientY;
        };

        const handleMouseLeave = () => {
            mouse.current.x = null;
            mouse.current.y = null;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);


        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;

            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 2 + 1;
                this.speedX = Math.random() * 0.4 - 0.2;
                this.speedY = Math.random() * 0.4 - 0.2;
            }

            update() {
                // Wall collision
                if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
                if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
                
                // Mouse interaction - repel
                if (mouse.current.x !== null && mouse.current.y !== null) {
                    const dx = mouse.current.x - this.x;
                    const dy = mouse.current.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouse.current.radius) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const maxDistance = mouse.current.radius;
                        const force = (maxDistance - distance) / maxDistance;
                        this.x -= forceDirectionX * force * 1.5;
                        this.y -= forceDirectionY * force * 1.5;
                    }
                }

                this.x += this.speedX;
                this.y += this.speedY;
            }

            draw(particleColor: string, particleHighlightColor: string) {
                if (!ctx) return;
                let currentSize = this.size;
                let currentColor = particleColor;

                 if (mouse.current.x !== null && mouse.current.y !== null) {
                    const dx = mouse.current.x - this.x;
                    const dy = mouse.current.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouse.current.radius) {
                        currentSize = this.size * 2.5;
                        currentColor = particleHighlightColor;
                    }
                }
                
                ctx.fillStyle = currentColor;
                ctx.beginPath();
                ctx.arc(this.x, this.y, currentSize, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            const numberOfParticles = (canvas.width * canvas.height) / 15000;
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height));
            }
        };

        const connect = (lineColor: string, mouseLineColor: string) => {
            if (!ctx) return;
            // Particle to particle connections
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    const distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x)) +
                                   ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
                    
                    if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                        const opacityValue = 1 - (distance / 20000);
                        ctx.strokeStyle = lineColor.replace('${opacityValue}', String(opacityValue));
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }

            // Mouse to particle connections
            if (mouse.current.x !== null && mouse.current.y !== null) {
                 for (let i = 0; i < particles.length; i++) {
                    const dx = mouse.current.x - particles[i].x;
                    const dy = mouse.current.y - particles[i].y;
                    const distance = Math.sqrt(dx*dx + dy*dy);
                    if(distance < mouse.current.radius * 1.5) {
                        const opacityValue = 1 - (distance / (mouse.current.radius * 1.5));
                        ctx.strokeStyle = mouseLineColor.replace('${opacityValue}', String(opacityValue));
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(mouse.current.x, mouse.current.y);
                        ctx.lineTo(particles[i].x, particles[i].y);
                        ctx.stroke();
                    }
                 }
            }
        };

        const animate = () => {
            if (!ctx) return;
            
            const isDark = theme === 'dark';
            const particleColor = isDark ? '#f5f5f4' : '#855d51'; // stone-100 / primary
            const particleHighlightColor = '#a98b80'; // primary-light (accent color)
            const lineColor = isDark ? 'rgba(245, 245, 244, ${opacityValue})' : 'rgba(133, 93, 81, ${opacityValue})';
            const mouseLineColor = 'rgba(169, 139, 128, ${opacityValue})'; // primary-light
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                particle.update();
                particle.draw(particleColor, particleHighlightColor);
            });
            connect(lineColor, mouseLineColor);
            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        const handleResize = () => {
            resizeCanvas();
            init();
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [theme]);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full opacity-30 dark:opacity-40" />;
};

export default NeuralNetworkCanvas;