import React from 'react';
import styled from 'styled-components';
import ClientOnlyFluidShapes from './ClientOnlyFluidShapes';
import { FluidShapesProps } from './FluidShapes';

const shapeConfigurations: FluidShapesProps[] = [
  {
    width: '100vw',
    height: '100vh',
    top: '0',
    left: '0',
    zIndex: -3,
    shapeType: 'wave',
    color1: 'rgba(147, 112, 219, 0.8)',  // Light purple
    color2: 'rgba(75, 0, 130, 0.8)',     // Indigo
    speed: 0.002,
    opacity: 0.5,
  },
  {
    width: '50vw',
    height: '50vh',
    top: '25vh',
    left: '25vw',
    zIndex: -2,
    shapeType: 'orb',
    color1: 'rgba(255, 182, 193, 0.8)',  // Light pink
    color2: 'rgba(255, 20, 147, 0.8)',   // Deep pink
    speed: 0.001,
    opacity: 0.6,
  },
  {
    width: '100vw',
    height: '50vh',
    top: '50vh',
    left: '0',
    zIndex: -1,
    shapeType: 'wave',
    color1: 'rgba(135, 206, 235, 0.8)',  // Sky blue
    color2: 'rgba(0, 0, 255, 0.8)',      // Blue
    speed: 0.003,
    opacity: 0.4,
  },
];

const ShapesManager: React.FC = () => {
  return (
    <ShapesContainer>
      {shapeConfigurations.map((config, index) => (
        <ClientOnlyFluidShapes key={index} {...config} />
      ))}
    </ShapesContainer>
  );
};

const ShapesContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  pointer-events: none;
`;

export default ShapesManager;