import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import HeroIllustration from 'components/HeroIllustation';
import OverTitle from 'components/OverTitle';
import { media } from 'utils/media';

export default function Hero() {
  return (
    <HeroWrapper>
      <Contents>
        <CustomOverTitle>Next-Generation Autonomous AI Agents</CustomOverTitle>
        <Heading>Revolutionize Your Business with Cutting-Edge AI</Heading>
        <Description>
          Harness the power of adaptive, intelligent agents that seamlessly integrate into your operations, 
          driving innovation and efficiency across industries. From collaborative learning to neuro-symbolic 
          reasoning, our AI solutions are at the forefront of technological advancement.
        </Description>
        <CustomButtonGroup>
          <NextLink href="/contact" passHref>
            <CustomButton>
              Request a Demo <span>&rarr;</span>
            </CustomButton>
          </NextLink>
          <NextLink href="#features" passHref>
            <CustomButton transparent>
              Explore Capabilities <span>&rarr;</span>
            </CustomButton>
          </NextLink>
        </CustomButtonGroup>
      </Contents>
      <ImageContainer>
        <HeroIllustration />
      </ImageContainer>
    </HeroWrapper>
  );
}

const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;
  padding: 4rem; // Increased padding from 3rem to 4rem
  border-radius: 1.5rem;
  background: rgba(var(--cardBackground), 0.8);
  backdrop-filter: blur(15px);
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  text-align: center;

  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: 0 0.75rem 2.5rem rgba(0, 0, 0, 0.15);
  }

  ${media('<=desktop')} {
    max-width: 100%;
    padding: 3rem; // Adjusted padding for desktop view
  }

  ${media('<=tablet')} {
    padding: 2rem; // Adjusted padding for tablet view
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 2rem;
  justify-content: center;

  ${media('<=tablet')} {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;

  svg {
    max-width: 40rem;
  }

  ${media('<=desktop')} {
    margin-top: 2rem;
    margin-left: 0;
    svg {
      max-width: 80%;
    }
  }

  ${media('<=tablet')} {
    svg {
      max-width: 100%;
    }
  }
`;

const Description = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: rgba(var(--text), 0.85);

  ${media('<=desktop')} {
    font-size: 1.4rem;
  }

  ${media('<=tablet')} {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
  color: rgb(var(--primary));
  line-height: 1.5; // Added line-height for better spacing

  ${media('<=tablet')} {
    margin-bottom: 1.5rem;
  }
`;

const Heading = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 2.5rem;
  letter-spacing: -0.03em;
  color: rgba(var(--text), 0.85);

  ${media('<=tablet')} {
    font-size: 3.2rem;
    margin-bottom: 2rem;
  }

  ${media('<=phone')} {
    font-size: 2.8rem;
    margin-bottom: 1.5rem;
  }
`;

const CustomButton = styled(Button)`
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  ${media('<=tablet')} {
    width: 100%;
  }
`;
