import React, { useState } from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Adaptive Learning',
    description:
      'Our AI agents continuously learn and adapt to your specific business needs, ensuring optimal performance and efficiency.',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Seamless Integration',
    description:
      'Easily integrate our AI solutions into your existing systems and workflows without disrupting your operations.',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Real-time Analytics',
    description:
      'Get instant insights and actionable data to make informed decisions and stay ahead of the competition.',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Natural Language Processing',
    description:
      'Our AI agents understand and communicate in natural language, making human-AI collaboration intuitive and efficient.',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Predictive Modeling',
    description:
      'Leverage advanced algorithms to forecast trends, anticipate challenges, and seize opportunities before they arise.',
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Autonomous Decision Making',
    description:
      'Empower your AI agents to make intelligent decisions independently, freeing up your team to focus on strategic tasks.',
  },
];

export default function FeaturesGallery() {
  const [currentFeature, setCurrentFeature] = useState(0);

  return (
    <FeaturesGalleryWrapper className="content-area">
      <Content>
        <OverTitle>Unleash the Power of AI</OverTitle>
        <SectionTitle>Cutting-Edge Features</SectionTitle>
      </Content>
      <GalleryWrapper>
        <FeatureGrid>
          {FEATURES.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              selected={i === currentFeature}
              onClick={() => setCurrentFeature(i)}
            >
              <FeatureImageWrapper>
                <FeatureImage src={feature.imageUrl} alt={feature.title} />
              </FeatureImageWrapper>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeatureGrid>
      </GalleryWrapper>
    </FeaturesGalleryWrapper>
  );
}

const FeaturesGalleryWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  padding: 6rem;
  border-radius: 2.5rem;
  box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 1.5rem 5rem rgba(0, 0, 0, 0.15);
  }
`;

const Content = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 5.2rem;
  font-weight: bold;
  line-height: 1.1;
  letter-spacing: -0.03em;
  text-align: center;
  margin-bottom: 4rem;
  color: rgba(var(--text), 0.85);

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;

const GalleryWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  
  ${media('<=desktop')} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media('<=tablet')} {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3rem;
  background: rgba(var(--cardBackground), 0.8);
  backdrop-filter: blur(10px);
  border-radius: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  ${(p) =>
    p.selected &&
    `
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  `}

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const FeatureImageWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 8rem;
  height: 8rem;
  margin-bottom: 2rem;
`;

const FeatureImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const FeatureTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: rgba(var(--text), 0.85);
`;

const FeatureDescription = styled.p`
  font-size: 1.6rem;
  color: rgba(var(--text), 0.7);
  line-height: 1.5;
`;
