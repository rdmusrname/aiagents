import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { AppProps } from 'next/dist/shared/lib/router/router';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { ColorModeScript } from 'nextjs-color-mode';
import React, { PropsWithChildren } from 'react';

import Footer from 'components/Footer';
import GlobalStyles from 'components/GlobalStyles';
import Navbar from 'components/Navbar';
import NavigationDrawer from 'components/NavigationDrawer';
import NewsletterModal from 'components/NewsletterModal';
import WaveCta from 'components/WaveCta';
import { NewsletterModalContextProvider, useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { NavItems } from 'types';
import { EnvVars } from 'env';
import ShapesManager from 'components/ShapesManager';
import styled from 'styled-components';

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
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <ColorModeScript />
      <GlobalStyles />
      <ShapesManager />
      <Providers>
        <AppContainer>
          <Navbar items={navItems} />
          <ContentWrapper>
            {typeof window !== 'undefined' && (
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
            )}
            {typeof window === 'undefined' && <Component {...pageProps} />}
          </ContentWrapper>
          <WaveCta />
          <Footer />
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
  position: relative;
  overflow-x: hidden;
`;

const ContentWrapper = styled.div`
  position: relative;
  background-color: rgba(var(--background), 0.3);
  backdrop-filter: blur(5px);
  min-height: 100vh;
  z-index: 1;
`;

export default MyApp;
