
'use client';
import { useEffect, useRef } from 'react';

export default function RainBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker.register('/sw.js').catch(console.error);
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    const drops = [...Array(400)].map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      l: Math.random() * 1 + 8,
      xs: -4 + Math.random() * 4 + 2,
      ys: Math.random() * 10 + 10,
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = 'rgba(255,255,255,0.08)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let d of drops) {
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x + d.l * d.xs, d.y + d.l * d.ys);
      }
      ctx.stroke();
      move();
    }

    function move() {
      for (let d of drops) {
        d.x += d.xs;
        d.y += d.ys;
        if (d.x > width || d.y > height) {
          d.x = Math.random() * width;
          d.y = -20;
        }
      }
    }
    let animId: number;
    function animate() {
      animId = requestAnimationFrame(animate);
      draw();
    }
    animate();
    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
    />
  );
}
