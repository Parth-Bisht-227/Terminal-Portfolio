import React, { useEffect, useRef } from 'react';

const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let drops: number[] = [];
    const fontSize = 12;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const numCols = Math.floor(canvas.width / fontSize) + 1;
      // Stagger drops starting above the screen
      drops = Array.from({ length: numCols }, () => Math.floor(Math.random() * -100));
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    let lastTime = 0;
    const interval = 55; // slow-to-medium speed (50-60ms)

    const draw = (time: number) => {
      animationFrameId = requestAnimationFrame(draw);

      if (time - lastTime < interval) return;
      lastTime = time;

      // Draw semi-transparent background to create standard fade trail effect
      ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;
      ctx.textBaseline = 'top';

      for (let i = 0; i < drops.length; i++) {
        const x = i * fontSize;

        // Draw the character behind the head in green
        const prevY = (drops[i] - 1) * fontSize;
        if (prevY >= 0 && prevY < canvas.height) {
          ctx.fillStyle = '#39FF14';
          const char = Math.random() > 0.5 ? '1' : '0';
          ctx.fillText(char, x, prevY);
        }

        // Draw the leading character at the head in bright cyan
        const currY = drops[i] * fontSize;
        if (currY >= 0 && currY < canvas.height) {
          ctx.fillStyle = '#00F0FF';
          const char = Math.random() > 0.5 ? '1' : '0';
          ctx.fillText(char, x, currY);
        }

        // Increment drop row, reset if it goes past screen base randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        } else {
          drops[i]++;
        }
      }
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        opacity: 0.2, // 0.2 opacity via CSS as requested
        pointerEvents: 'none',
      }}
    />
  );
};

export default MatrixRain;
