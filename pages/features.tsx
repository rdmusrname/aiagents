import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import YoutubeVideo from 'components/YoutubeVideo';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Adaptive Learning Algorithms',
    description:
      'Our AI agents utilize advanced machine learning techniques to continuously improve their performance, adapting to new data and evolving business needs.',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Natural Language Processing',
    description:
      'Enhance human-AI collaboration with our sophisticated NLP capabilities, enabling intuitive interactions and seamless communication.',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Predictive Analytics',
    description:
      'Leverage the power of data with our AI agents ability to forecast trends, identify patterns, and provide actionable insights for informed decision-making.',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Computer Vision',
    description:
      'Unlock new possibilities with our state-of-the-art computer vision technology, enabling advanced image and video analysis across various applications.',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Seamless Integration',
    description:
      'Our AI agents are designed to integrate effortlessly with your existing systems and workflows, ensuring a smooth transition and minimal disruption.',
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'User-Centric Design',
    description:
      'Experience AI that puts users first, with intuitive interfaces and transparent processes that build trust and enhance adoption across your organization.',
  },
  {
    imageUrl: '/grid-icons/asset-7.svg',
    title: 'Real-Time Processing',
    description:
      'Stay ahead of the curve with our AI agents ability to process and analyze data in real-time, enabling swift responses to changing conditions.',
  },
  {
    imageUrl: '/grid-icons/asset-8.svg',
    title: 'Multi-Industry Applications',
    description:
      'From healthcare to finance, retail to manufacturing, our versatile AI agents are ready to revolutionize processes across diverse sectors.',
  },
  {
    imageUrl: '/grid-icons/asset-9.svg',
    title: 'Scalable Solutions',
    description:
      'Grow with confidence using our scalable AI infrastructure, designed to handle increasing data volumes and complexity as your business expands.',
  },
];

export default function FeaturesPage() {
  return (
    <Page title="AI Agent Features" description="Discover the cutting-edge capabilities of our autonomous AI agents, designed to revolutionize industries and enhance user experiences.">
      <Wrapper>
        <SectionTitle>Autonomous AI Agents: The Future of Business</SectionTitle>
        <YoutubeVideo url="https://www.youtube.com/watch?v=BggrpKfqh1c" />
        <VideoNote>Note: Please replace this video URL with a relevant AIAgents.biz introduction or demo video.</VideoNote>
        <CustomAutofitGrid>
          {FEATURES.map((singleFeature, idx) => (
            <BasicCard key={singleFeature.title} {...singleFeature} />
          ))}
        </CustomAutofitGrid>
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 10rem;
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

const VideoNote = styled.p`
  text-align: center;
  font-style: italic;
  opacity: 0.8;
`;
