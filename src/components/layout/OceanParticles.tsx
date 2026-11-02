"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  radius: number;
  baseRadius: number;
  vx: number;
  vy: number;
  alpha: number;
  baseAlpha: number;
  color: string;
  type: "plankton" | "bubble";
  pulseSpeed: number;
  pulsePhase: number;
}

export default function OceanParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Mouse tracking for light / scatter effect
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 120,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    // Click to release breath of bubbles
    const handleClick = (e: MouseEvent) => {
      for (let i = 0; i < 12; i++) {
        const radius = Math.random() * 4 + 2;
        particles.push({
          x: e.clientX + (Math.random() - 0.5) * 30,
          y: e.clientY + (Math.random() - 0.5) * 20,
          radius,
          baseRadius: radius,
          vx: (Math.random() - 0.5) * 1.5,
          vy: -(Math.random() * 2 + 1.2), // rises upward
          alpha: Math.random() * 0.5 + 0.4,
          baseAlpha: 0.6,
          color: "rgba(223, 246, 245, ",
          type: "bubble",
          pulseSpeed: 0.05,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("click", handleClick);

    // Initialize ambient plankton & bubbles
    const count = Math.min(Math.floor((width * height) / 16000), 75);
    const particles: Particle[] = [];

    const colors = [
      "rgba(45, 212, 191, ", // Teal
      "rgba(249, 115, 22, ", // Orange ember
      "rgba(56, 189, 248, ", // Sky blue
      "rgba(255, 255, 255, ", // Pure white glimmer
    ];

    for (let i = 0; i < count; i++) {
      const isBubble = Math.random() > 0.65;
      const radius = isBubble ? Math.random() * 3 + 1.5 : Math.random() * 2 + 0.8;
      const baseAlpha = Math.random() * 0.45 + 0.15;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius,
        baseRadius: radius,
        vx: (Math.random() - 0.5) * 0.4,
        vy: isBubble ? -(Math.random() * 0.5 + 0.3) : (Math.random() - 0.5) * 0.25,
        alpha: baseAlpha,
        baseAlpha,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: isBubble ? "bubble" : "plankton",
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.03;
      ctx.clearRect(0, 0, width, height);

      // Render ambient subtle caustic light cone at mouse position
      if (mouse.x > 0 && mouse.y > 0) {
        const glowGradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          160
        );
        glowGradient.addColorStop(0, "rgba(45, 212, 191, 0.06)");
        glowGradient.addColorStop(0.5, "rgba(0, 91, 150, 0.025)");
        glowGradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 160, 0, Math.PI * 2);
        ctx.fill();
      }

      // Render particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // Motion update
        p.x += p.vx;
        p.y += p.vy;

        // Mouse avoidance/scatter
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius && mouse.x > 0) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x += (dx / dist) * force * 3;
          p.y += (dy / dist) * force * 3;
        }

        // Pulse alpha
        p.alpha =
          p.baseAlpha + Math.sin(time * 2 + p.pulsePhase) * (p.baseAlpha * 0.4);

        // Wrap around boundaries
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        } else if (p.y > height + 10) {
          p.y = -10;
          p.x = Math.random() * width;
        }

        if (p.x < -10) p.x = width + 10;
        else if (p.x > width + 10) p.x = -10;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        if (p.type === "bubble") {
          // Hollow bubble with thin glowing ring
          ctx.strokeStyle = `${p.color}${p.alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Tiny inner shine dot
          ctx.beginPath();
          ctx.arc(
            p.x - p.radius * 0.3,
            p.y - p.radius * 0.3,
            p.radius * 0.25,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 1.2})`;
          ctx.fill();
        } else {
          // Bioluminescent plankton dot
          ctx.fillStyle = `${p.color}${p.alpha})`;
          ctx.fill();

          // Soft glow halo
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.alpha * 0.25})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-20 transition-opacity duration-700"
      aria-hidden="true"
    />
  );
}

