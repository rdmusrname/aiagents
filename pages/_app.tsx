import { AppProps } from 'next/dist/shared/lib/router/router';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import React, { PropsWithChildren, useEffect } from 'react';
import styled from 'styled-components';

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import GlobalStyles from 'components/GlobalStyles';
import Navbar from 'components/Navbar';
import NavigationDrawer from 'components/NavigationDrawer';
import NewsletterModal from 'components/NewsletterModal';
import ShapesManager from 'components/ShapesManager';
import WaveCta from 'components/WaveCta';
import { NewsletterModalContextProvider, useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { NavItems } from 'types';

const navItems: NavItems = [
  { title: 'Blog', href: '/blog' },
  { title: 'Contact', href: '/contact' },
  { title: 'About', href: '/about' },
  { title: 'Privacy', href: '/privacy-policy' },
  { title: 'Sign up', href: '/sign-up', outlined: true },
];

const TinaCMS = dynamic(() => import('tinacms'), { ssr: false, loading: () => <div>Loading TinaCMS...</div> });
const TinaEditProvider = dynamic(() => import('tinacms/dist/edit-state').then((mod) => mod.TinaEditProvider), { ssr: false, loading: () => <div>Loading TinaEditProvider...</div> });

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Check for user's color scheme preference or previously set theme
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('theme');
    
    const setInitialTheme = () => {
      if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
      } else if (darkModeMediaQuery.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
      }
    };

    setInitialTheme();

    const handleChange = (e: MediaQueryListEvent) => {
      if (!savedTheme) {
        document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
      }
    };

    darkModeMediaQuery.addListener(handleChange);
    return () => darkModeMediaQuery.removeListener(handleChange);
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <ShapesManager />
      <Providers>
        <AppContainer>
          <Navbar items={navItems} />
          <ContentWrapper>
            <TinaEditProvider
              editMode={
                <TinaCMS
                  query={pageProps.query}
                  variables={pageProps.variables}
                  data={pageProps.data}
                  isLocalClient={!process.env.NEXT_PUBLIC_TINA_CLIENT_ID}
                  branch={process.env.NEXT_PUBLIC_EDIT_BRANCH}
                  clientId={process.env.NEXT_PUBLIC_TINA_CLIENT_ID}
                  {...pageProps}
                >
                  {(livePageProps: any) => <Component {...livePageProps} />}
                </TinaCMS>
              }
            >
              <Component {...pageProps} />
            </TinaEditProvider>
          </ContentWrapper>
          <WaveCta />
          <SimpleFooter />
        </AppContainer>
        <Modals />
      </Providers>
    </>
  );
}

function Providers<T>({ children }: PropsWithChildren<T>) {
  return (
    <NewsletterModalContextProvider>
      <NavigationDrawer items={navItems}>{children}</NavigationDrawer>
    </NewsletterModalContextProvider>
  );
}

function Modals() {
  const { isModalOpened, setIsModalOpened } = useNewsletterModalContext();
  if (!isModalOpened) {
    return null;
  }
  return <NewsletterModal onClose={() => setIsModalOpened(false)} />;
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
`;

const ContentWrapper = styled.div`
  flex: 1;
  position: relative;
  background-color: rgba(var(--background), 0.1);
  backdrop-filter: blur(10px);
  z-index: 1;
`;

const StyledSimpleFooter = styled.footer`
  background-color: rgba(var(--background), 0.8);
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
  color: rgba(var(--text), 0.7);
  border-top: 1px solid rgba(var(--text), 0.1);

  a {
    color: rgba(var(--primary), 1);
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: rgba(var(--primary), 0.8);
    }
  }
`;

function SimpleFooter() {
  return (
    <StyledSimpleFooter>
      <p>&copy; {new Date().getFullYear()} AIAgents. All rights reserved.</p>
      <p>
        <Link href="/privacy-policy">
          <a>Privacy Policy</a>
        </Link>{' '}
        |{' '}
        <Link href="/terms-of-service">
          <a>Terms of Service</a>
        </Link>
      </p>
    </StyledSimpleFooter>
  );
}

export default MyApp;
