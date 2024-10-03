import styled from 'styled-components';
import Container from 'components/Container';
import { EnvVars } from 'env';
import { media } from 'utils/media';

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <BottomBar>
          <Copyright>&copy; Copyright 2023 {EnvVars.SITE_NAME}</Copyright>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  padding-top: 10rem;
  padding-bottom: 4rem;
  background: rgb(var(--secondary));
  color: rgb(var(--textSecondary));
`;

const Copyright = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

const BottomBar = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;
