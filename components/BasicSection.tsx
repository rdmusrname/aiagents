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
      <ImageContainer reversed={reversed}>
        <Image src={imageUrl} alt={title} />
      </ImageContainer>
      <ContentContainer className="content-area">
        <CustomOverTitle>{overTitle}</CustomOverTitle>
        <Title>{title}</Title>
        <RichText>{children}</RichText>
      </ContentContainer>
    </BasicSectionWrapper>
  );
}

const BasicSectionWrapper = styled(Container)<{ reversed?: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: ${(p) => (p.reversed ? 'row-reverse' : 'row')};
  margin: 7.5rem 0;
  
  ${media('<=desktop')} {
    flex-direction: column;
  }
`;

const ContentContainer = styled.div`
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

const Title = styled.h2`
  font-size: 4.6rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;
  color: rgba(var(--text), 0.85);

  ${media('<=tablet')} {
    font-size: 3.6rem;
    margin-bottom: 2rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
  color: rgb(var(--primary));
`;

const ImageContainer = styled.div<{ reversed?: boolean }>`
  flex: 1;
  margin: ${(p) => (p.reversed ? '0 0 0 5rem' : '0 5rem 0 0')};
  display: flex;
  justify-content: center;
  align-items: center;

  ${media('<=desktop')} {
    margin: 0 0 5rem 0;
    width: 100%;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 2.5rem;
  box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 1.5rem 5rem rgba(0, 0, 0, 0.15);
  }
`;
