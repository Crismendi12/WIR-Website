import { useRef, useEffect } from 'react';

/**
 * TechGrid - A 3D animated grid with flowing data particles
 * More industrial/technical than starfield
 */
export function TechGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrame: number;
    let time = 0;

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Grid parameters
    const gridSize = 80;
    const perspective = 600;
    
    // Data particles flowing through grid
    interface Particle {
      x: number;
      y: number;
      z: number;
      speedX: number;
      speedY: number;
      speedZ: number;
      life: number;
      maxLife: number;
    }
    
    const particles: Particle[] = [];
    
    // Create initial particles
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 2000,
        y: (Math.random() - 0.5) * 2000,
        z: Math.random() * 1500,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        speedZ: -1 - Math.random() * 2,
        life: Math.random(),
        maxLife: 0.8 + Math.random() * 0.2,
      });
    }

    const animate = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      
      // Clear with fade trail for light background
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.fillRect(0, 0, w, h);
      
      time += 0.006;
      
      // Center point
      const cx = w / 2;
      const cy = h / 2;
      
      // Draw 3D perspective grid
      ctx.strokeStyle = 'rgba(28, 23, 255, 0.08)';
      ctx.lineWidth = 0.5;
      
      const gridDepth = 8;
      const gridWidth = 15;
      
      for (let d = 0; d < gridDepth; d++) {
        const z = 200 + d * 200 + (time * 40) % 200;
        const scale = perspective / (perspective + z);
        
        // Horizontal lines
        for (let i = -gridWidth; i <= gridWidth; i++) {
          const y1 = i * gridSize;
          const x1 = -gridWidth * gridSize;
          const x2 = gridWidth * gridSize;
          
          const sx1 = cx + x1 * scale;
          const sy1 = cy + y1 * scale;
          const sx2 = cx + x2 * scale;
          const sy2 = cy + y1 * scale;
          
          if (sy1 < h + 100 && sy1 > -100) {
            ctx.beginPath();
            ctx.moveTo(sx1, sy1);
            ctx.lineTo(sx2, sy2);
            ctx.strokeStyle = `rgba(28, 23, 255, ${0.06 * (1 - z / 2000)})`;
            ctx.stroke();
          }
        }
        
        // Vertical lines
        for (let i = -gridWidth; i <= gridWidth; i++) {
          const x1 = i * gridSize;
          const y1 = -gridWidth * gridSize;
          const y2 = gridWidth * gridSize;
          
          const sx1 = cx + x1 * scale;
          const sy1 = cy + y1 * scale;
          const sx2 = cx + x1 * scale;
          const sy2 = cy + y2 * scale;
          
          if (sy1 < h + 100 && sy2 > -100) {
            ctx.beginPath();
            ctx.moveTo(sx1, sy1);
            ctx.lineTo(sx2, sy2);
            ctx.strokeStyle = `rgba(28, 23, 255, ${0.06 * (1 - z / 2000)})`;
            ctx.stroke();
          }
        }
      }
      
      // Update and draw particles (data flowing through grid)
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        
        // Update position
        p.x += p.speedX;
        p.y += p.speedY;
        p.z += p.speedZ;
        p.life += 0.005;
        
        // Reset particle if too close or dead
        if (p.z < 50 || p.life > p.maxLife) {
          p.x = (Math.random() - 0.5) * 2000;
          p.y = (Math.random() - 0.5) * 2000;
          p.z = 1500 + Math.random() * 500;
          p.speedX = (Math.random() - 0.5) * 0.5;
          p.speedY = (Math.random() - 0.5) * 0.5;
          p.speedZ = -1 - Math.random() * 2;
          p.life = 0;
          p.maxLife = 0.8 + Math.random() * 0.2;
        }
        
        // Project to 2D
        const scale = perspective / (perspective + p.z);
        const x2d = cx + p.x * scale;
        const y2d = cy + p.y * scale;
        
        if (x2d > -50 && x2d < w + 50 && y2d > -50 && y2d < h + 50) {
          const size = (1 - p.z / 2000) * 3;
          const alpha = (1 - p.life / p.maxLife) * (1 - p.z / 2000) * 0.6;
          
          // Particle glow - adjusted for light mode
          const gradient = ctx.createRadialGradient(x2d, y2d, 0, x2d, y2d, size * 4);
          gradient.addColorStop(0, `rgba(249, 179, 54, ${alpha * 0.5})`);
          gradient.addColorStop(0.5, `rgba(164, 79, 152, ${alpha * 0.3})`);
          gradient.addColorStop(1, 'rgba(249, 179, 54, 0)');
          
          ctx.beginPath();
          ctx.arc(x2d, y2d, size * 4, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
          
          // Particle core
          ctx.beginPath();
          ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(238, 125, 72, ${alpha})`;
          ctx.fill();
          
          // Particle trail
          const trailLength = 20;
          const trailX = x2d - (p.speedX * trailLength * scale);
          const trailY = y2d - (p.speedY * trailLength * scale);
          
          const trailGrad = ctx.createLinearGradient(trailX, trailY, x2d, y2d);
          trailGrad.addColorStop(0, 'rgba(164, 79, 152, 0)');
          trailGrad.addColorStop(1, `rgba(164, 79, 152, ${alpha * 0.4})`);
          
          ctx.beginPath();
          ctx.moveTo(trailX, trailY);
          ctx.lineTo(x2d, y2d);
          ctx.strokeStyle = trailGrad;
          ctx.lineWidth = size * 0.5;
          ctx.stroke();
        }
      }
      
      animFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}