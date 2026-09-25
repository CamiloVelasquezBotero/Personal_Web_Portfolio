"use client";
import { useEffect, useRef } from "react";

export default function CyberBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Base configuration
    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    window.addEventListener("resize", setSize);

    // Mouse tracking system (Interactive repulsion)
    let mouse = { x: null, y: null, radius: 180 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    // Neural Network variables
    const particles = [];
    // Calculate number of nodes according to screen size, capped to avoid lag on 4K
    const particleCount = Math.min(250, Math.floor((canvas.width * canvas.height) / 11000));
    const connectDistance = 130;

    for (let i = 0; i < particleCount; i++) {
      const vx = (Math.random() - 0.5) * 1.2;
      const vy = (Math.random() - 0.5) * 1.2;
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: vx,
        vy: vy,
        initialVx: vx, // Save original velocity to restore movement
        initialVy: vy,
        size: Math.random() * 2 + 0.8 // Node size
      });
    }

    let animationId;

    const draw = () => {
      // Clear canvas (transparent to show background behind)
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];

        // 1. Interactivity: Mouse push (repulsion) and connection
        if (mouse.x != null && mouse.y != null) {
          let dx = p.x - mouse.x;
          let dy = p.y - mouse.y;
          let dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            // Smooth repulsion
            p.vx += (dx / dist) * force * 0.8;
            p.vy += (dy / dist) * force * 0.8;

            // Draw connection line to mouse (neural effect)
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 255, 65, ${force * 0.6})`;
            ctx.lineWidth = 1.2;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }

        // 2. Smooth friction and base speed recovery
        p.vx *= 0.97;
        p.vy *= 0.97;

        // Restore natural velocity gradually
        p.vx += (p.initialVx - p.vx) * 0.03;
        p.vy += (p.initialVy - p.vy) * 0.03;

        // 3. Natural autonomous movement
        p.x += p.vx;
        p.y += p.vy;

        // Boundary bounce
        if (p.x < 0 || p.x > canvas.width) {
          p.vx *= -1;
          p.initialVx *= -1;
        }
        if (p.y < 0 || p.y > canvas.height) {
          p.vy *= -1;
          p.initialVy *= -1;
        }

        // 1. Draw node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "#00FF41";
        if (p.size > 2) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = "#00FF41";
        }
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow for lines

        // 3. Neural connections between nodes
        for (let j = i + 1; j < particles.length; j++) {
          let p2 = particles[j];
          let dx = p.x - p2.x;
          let dy = p.y - p2.y;
          let dist = Math.sqrt(dx * dx + dy * dy);

          // Draw synapse if within range
          if (dist < connectDistance) {
            const alpha = 1 - (dist / connectDistance);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 255, 65, ${alpha * 0.4})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", setSize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      {/* Background image overlay */}
      <div
        className="fixed inset-0 z-[-3] bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: "url('/img/bg.webp')",
          opacity: 0.20,
          filter: "brightness(0.40)"
        }}
      />
      <canvas
        ref={canvasRef}
        // pointer-events-none ensures canvas does not block button clicks
        className="fixed inset-0 pointer-events-none z-[-2]"
      />
    </>
  );
}
