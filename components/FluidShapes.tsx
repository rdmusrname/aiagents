import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

export interface FluidShapesProps {
  width?: string;
  height?: string;
  top?: string;
  left?: string;
  zIndex?: number;
  shapeType: 'wave' | 'orb';
  color1: string;
  color2: string;
  color3: string;
  speed?: number;
  opacity?: number;
}

const defaultProps: Partial<FluidShapesProps> = {
  width: '100vw',
  height: '100vh',
  top: '0',
  left: '0',
  zIndex: -1,
  speed: 0.002,
  opacity: 0.9,
  color3: '#8A2BE2', // Default third color (violet)
};

const FluidShapes: React.FC<FluidShapesProps> = (props) => {
  const {
    width,
    height,
    top,
    left,
    zIndex,
    shapeType,
    color1,
    color2,
    color3,
    speed,
    opacity,
  } = { ...defaultProps, ...props };

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationFrameId: number;
    let time = 0;

    // Simplified noise function
    const noise = (x: number, y: number, z: number) => {
      return Math.sin(x * 10 + z) * Math.cos(y * 10 + z) * 0.5 + 0.5;
    };

    const createComplexGradient = (x: number, y: number, radius: number) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, color1);
      gradient.addColorStop(0.3, color2);
      gradient.addColorStop(0.6, color3);
      gradient.addColorStop(1, color1);
      return gradient;
    };

    const drawWave = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = createComplexGradient(canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2);
      ctx.fillStyle = gradient;

      ctx.beginPath();
      for (let x = 0; x <= canvas.width; x += 20) {
        const y = canvas.height / 2 + Math.sin(x * 0.01 + time) * 50 + noise(x * 0.005, time, 0) * 50;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();
      ctx.fill();

      time += speed!;
    };

    const drawOrb = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.3;

      const gradient = createComplexGradient(centerX, centerY, radius);
      ctx.fillStyle = gradient;

      ctx.beginPath();
      for (let angle = 0; angle < Math.PI * 2; angle += 0.1) {
        const x = centerX + Math.cos(angle) * (radius + noise(angle, time, 0) * 20);
        const y = centerY + Math.sin(angle) * (radius + noise(angle, time, 0) * 20);
        if (angle === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.fill();

      time += speed!;
    };

    const animate = () => {
      if (shapeType === 'wave') {
        drawWave();
      } else {
        drawOrb();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [shapeType, color1, color2, color3, speed, opacity]);

  return <StyledCanvas ref={canvasRef} width={width} height={height} top={top} left={left} zIndex={zIndex} opacity={opacity} />;
};

const StyledCanvas = styled.canvas<Partial<FluidShapesProps>>`
  position: fixed;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  z-index: ${(props) => props.zIndex};
  opacity: ${(props) => props.opacity};
  pointer-events: none;
`;

export default FluidShapes;