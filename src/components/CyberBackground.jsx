"use client";
import { useEffect, useRef } from "react";

export default function CyberBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Configuración base
    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    window.addEventListener("resize", setSize);

    // Sistema de trackeo del ratón (Interactividad premium)
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

    // Variables de la Red Neuronal
    const particles = [];
    // Calculamos cantidad de nodos dependiendo de la pantalla, pero con un límite para evitar lagueos en 4K
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
        initialVx: vx, // Guardamos la velocidad original para recuperar el movimiento
        initialVy: vy,
        size: Math.random() * 2 + 0.8 // Tamaño del nodo
      });
    }

    let animationId;

    const draw = () => {
      // Limpiamos la pantalla (Transparente para ver el bg.jpg de abajo)
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];

        // 1. Interactividad: Empuje (Repulsión) y Conexión con el Ratón
        if (mouse.x != null && mouse.y != null) {
          let dx = p.x - mouse.x;
          let dy = p.y - mouse.y;
          let dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            // Empuje suave pero firme (iman inverso)
            // El factor 0.8 controla qué tan fuerte es el "rebote"
            p.vx += (dx / dist) * force * 0.8;
            p.vy += (dy / dist) * force * 0.8;

            // Dibujar línea de conexión con el ratón (efecto neurona)
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 255, 65, ${force * 0.6})`;
            ctx.lineWidth = 1.2;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }

        // 2. Aplicamos fricción suave y recuperación de velocidad base (Requested)
        p.vx *= 0.97;
        p.vy *= 0.97;

        // Esto asegura que la partícula recupere su "vuelo natural" gradualmente
        p.vx += (p.initialVx - p.vx) * 0.03;
        p.vy += (p.initialVy - p.vy) * 0.03;

        // 3. Movimiento autónomo natural
        p.x += p.vx;
        p.y += p.vy;

        // Rebotes tipo billar en los bordes con reseteo de velocidad para evitar que se peguen
        if (p.x < 0 || p.x > canvas.width) {
          p.vx *= -1;
          p.initialVx *= -1;
        }
        if (p.y < 0 || p.y > canvas.height) {
          p.vy *= -1;
          p.initialVy *= -1;
        }

        // 1. Dibujar el Nodo (El punto)
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "#00FF41";
        // Añadimos brillo ligero a algunos
        if (p.size > 2) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = "#00FF41";
        }
        ctx.fill();
        ctx.shadowBlur = 0; // Reiniciar sombra para las líneas

        // 4. (La conexión con el ratón ahora se maneja arriba para unificar el bucle de fuerzas)

        // 3. Conexiones Neurales (Red Inteligente entre los demás nodos)
        for (let j = i + 1; j < particles.length; j++) {
          let p2 = particles[j];
          let dx = p.x - p2.x;
          let dy = p.y - p2.y;
          let dist = Math.sqrt(dx * dx + dy * dy);

          // Si están cerca, trazar una sinapsis neuronal
          if (dist < connectDistance) {
            const alpha = 1 - (dist / connectDistance);
            ctx.beginPath();
            // Opacidad baja para no saturar la vista
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
      {/* Capa de imagen de fondo muy opaca */}
      <div
        className="fixed inset-0 z-[-3] bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: "url('/img/bg.jpg')",
          opacity: 0.20,
          filter: "brightness(0.40)"
        }}
      />
      <canvas
        ref={canvasRef}
        // Pointer-events-none es crítico para que el canvas no bloquee los botones
        className="fixed inset-0 pointer-events-none z-[-2]"
      />
    </>
  );
}
