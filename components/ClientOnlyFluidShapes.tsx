import dynamic from 'next/dynamic';
import React from 'react';
import { FluidShapesProps } from './FluidShapes';

const FluidShapes = dynamic(() => import('./FluidShapes'), { ssr: false });

const ClientOnlyFluidShapes: React.FC<FluidShapesProps> = (props) => {
  return <FluidShapes {...props} />;
};

export default ClientOnlyFluidShapes;