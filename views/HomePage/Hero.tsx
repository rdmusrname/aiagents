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
      <Contents className="content-area">
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

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;
  padding: 6rem;
  border-radius: 2.5rem;
  box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 1.5rem 5rem rgba(0, 0, 0, 0.15);
  }

  ${media('<=desktop')} {
    max-width: 100%;
    padding: 3rem;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;

  svg {
    max-width: 45rem;
  }

  ${media('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
    svg {
      max-width: 80%;
    }
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: rgba(var(--text), 0.85);

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
  color: rgb(var(--primary));
`;

const Heading = styled.h1`
  font-size: 5.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;
  color: rgba(var(--text), 0.85);

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;

const CustomButton = styled(Button)`
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;
