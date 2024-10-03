import React from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';
import Container from './Container';
import OverTitle from './OverTitle';
import RichText from './RichText';

interface BasicSectionProps {
  imageUrl: string;
  title: string;
  overTitle: string;
  reversed?: boolean;
  children: React.ReactNode;
}

export default function BasicSection({ imageUrl, title, overTitle, reversed, children }: BasicSectionProps) {
  return (
    <BasicSectionWrapper reversed={reversed}>
      <ContentContainer className="content-area">
        <CustomOverTitle>{overTitle}</CustomOverTitle>
        <Title>{title}</Title>
        <RichText>{children}</RichText>
      </ContentContainer>
      <ImageContainer reversed={reversed}>
        <Image src={imageUrl} alt={title} />
      </ImageContainer>
    </BasicSectionWrapper>
  );
}

const BasicSectionWrapper = styled(Container)<{ reversed?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${(p) => (p.reversed ? 'row-reverse' : 'row')};
  margin: 5rem auto;
  max-width: 1200px;
  
  ${media('<=desktop')} {
    flex-direction: column;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  max-width: 55%;
  padding: 3rem;
  border-radius: 2rem;
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
    padding: 2rem;
    margin-bottom: 2rem;
  }
`;

const Title = styled.h2`
  font-size: 3.6rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 3rem;
  letter-spacing: -0.03em;
  color: rgba(var(--text), 0.85);

  ${media('<=tablet')} {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
  color: rgb(var(--primary));
`;

const ImageContainer = styled.div<{ reversed?: boolean }>`
  flex: 1;
  max-width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media('<=desktop')} {
    max-width: 100%;
    width: 100%;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 2rem;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0.75rem 2.5rem rgba(0, 0, 0, 0.15);
  }
`;
