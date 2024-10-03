import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Federated Learning',
    description:
      'Our AI agents leverage federated learning techniques, enabling collaborative model training across decentralized devices while preserving data privacy and reducing latency.',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Explainable AI (XAI)',
    description:
      'Implement transparent decision-making processes with our XAI-enabled agents, fostering trust and enabling compliance with regulatory requirements in critical applications.',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Transfer Learning',
    description:
      'Utilize pre-trained models and adapt them to specific tasks, significantly reducing training time and data requirements while improving performance across diverse domains.',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Reinforcement Learning',
    description:
      'Employ advanced RL algorithms for optimal decision-making in complex, dynamic environments, enabling autonomous agents to learn and adapt in real-time.',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Quantum-Inspired Algorithms',
    description:
      'Harness the power of quantum-inspired algorithms to solve complex optimization problems, offering unprecedented computational efficiency for large-scale AI applications.',
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Neuro-Symbolic AI',
    description:
      'Combine neural networks with symbolic reasoning to create AI agents capable of both data-driven learning and logical inference, enhancing interpretability and generalization.',
  },
  {
    imageUrl: '/grid-icons/asset-7.svg',
    title: 'Adaptive Swarm Intelligence',
    description:
      'Implement distributed problem-solving with our swarm-based AI agents, enabling emergent collective intelligence for tackling complex, multi-faceted challenges.',
  },
  {
    imageUrl: '/grid-icons/asset-8.svg',
    title: 'Generative Adversarial Networks',
    description:
      'Utilize state-of-the-art GANs for creating synthetic data, enhancing privacy, and generating realistic scenarios for robust AI agent training and testing.',
  },
  {
    imageUrl: '/grid-icons/asset-9.svg',
    title: 'Continual Learning',
    description:
      'Employ advanced techniques to mitigate catastrophic forgetting, allowing our AI agents to continuously learn and adapt to new information without losing previously acquired knowledge.',
  },
];

export default function Features() {
  return (
    <FeaturesWrapper className="content-area">
      <SectionTitle>Cutting-Edge AI Capabilities</SectionTitle>
      <Description>
        Our autonomous AI agents leverage the most advanced techniques in artificial intelligence, 
        pushing the boundaries of what's possible in machine learning and cognitive computing.
      </Description>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <AnimatedBasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </FeaturesWrapper>
  );
}

const FeaturesWrapper = styled(Container)`
  border-radius: 2.5rem;
  padding: 6rem;
  box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 1.5rem 5rem rgba(0, 0, 0, 0.15);
  }
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;

const Description = styled.div`
  font-size: 1.8rem;
  color: rgba(var(--text), 0.8);
  text-align: center;
  max-width: 60%;
  margin: 0 auto 5rem;

  ${media('<=tablet')} {
    max-width: 80%;
  }

  ${media('<=phone')} {
    max-width: 100%;
  }
`;

const AnimatedBasicCard = styled(BasicCard)`
  transition: all 0.3s ease-in-out;
  background: rgba(var(--cardBackground), 0.8);
  backdrop-filter: blur(10px);
  border-radius: 2rem;
  padding: 3rem;

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
  }
`;
