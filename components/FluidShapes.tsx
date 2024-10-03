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
  opacity: 0.7,
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

    const drawWave = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, color1);
      gradient.addColorStop(1, color2);

      ctx.fillStyle = gradient;
      ctx.beginPath();

      for (let x = 0; x < canvas.width; x++) {
        const y = Math.sin(x * 0.01 + time) * 50 + canvas.height / 2;
        ctx.lineTo(x, y);
      }

      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();
      ctx.fill();

      time += speed!;
      animationFrameId = requestAnimationFrame(drawWave);
    };

    const drawOrb = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.2;

      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
      gradient.addColorStop(0, color1);
      gradient.addColorStop(1, color2);

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fill();

      time += speed!;
      animationFrameId = requestAnimationFrame(drawOrb);
    };

    if (shapeType === 'wave') {
      drawWave();
    } else {
      drawOrb();
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [shapeType, color1, color2, speed, opacity]);

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