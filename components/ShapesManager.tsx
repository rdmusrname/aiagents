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
    color1: 'rgba(147, 112, 219, 0.7)',  // Light purple (more opaque)
    color2: 'rgba(75, 0, 130, 0.7)',     // Indigo (more opaque)
    color3: 'rgba(218, 112, 214, 0.7)',  // Orchid (more opaque)
    speed: 0.003, // Slightly increased speed
    opacity: 0.8, // Increased opacity
  },
  {
    width: '50vw',
    height: '50vh',
    top: '25vh',
    left: '25vw',
    zIndex: -2,
    shapeType: 'orb',
    color1: 'rgba(255, 105, 180, 0.7)',  // Hot pink (more opaque)
    color2: 'rgba(255, 20, 147, 0.7)',   // Deep pink (more opaque)
    color3: 'rgba(255, 0, 255, 0.7)',    // Magenta (more opaque)
    speed: 0.002, // Slightly increased speed
    opacity: 0.85, // Increased opacity
  },
  {
    width: '100vw',
    height: '50vh',
    top: '50vh',
    left: '0',
    zIndex: -1,
    shapeType: 'wave',
    color1: 'rgba(0, 191, 255, 0.7)',    // Deep sky blue (more opaque)
    color2: 'rgba(0, 0, 255, 0.7)',      // Blue (more opaque)
    color3: 'rgba(65, 105, 225, 0.7)',   // Royal blue (more opaque)
    speed: 0.004, // Slightly increased speed
    opacity: 0.75, // Increased opacity
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