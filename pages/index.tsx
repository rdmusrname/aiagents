import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Hero from 'views/HomePage/Hero';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import { media } from 'utils/media';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="AIAgents.biz: Revolutionize your business with cutting-edge autonomous AI agents. Our adaptive, user-centric solutions drive innovation and efficiency across industries, from healthcare to finance, manufacturing to retail."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <BasicSection imageUrl="/demo-illustration-1.svg" title="Empowering Industries with Intelligent Automation" overTitle="Next-Gen AI Solutions">
            <p>
              At AIAgents.biz, we&apos;re redefining what&apos;s possible with AI. Our autonomous agents are more than just tools; they&apos;re intelligent partners that adapt, learn, and evolve to meet your industry&apos;s unique challenges. From healthcare to finance, manufacturing to retail, our AI solutions are driving unprecedented innovation and efficiency.
            </p>
            <ul>
              <li>Adaptive learning algorithms for continuous performance optimization</li>
              <li>Seamless integration with existing systems for frictionless adoption</li>
              <li>Real-time data processing and predictive analytics for informed decision-making</li>
              <li>Natural language processing for intuitive human-AI collaboration</li>
            </ul>
            <p>Ready to experience the future of AI? <Link href="/contact">Book a call with our experts today.</Link></p>
          </BasicSection>
          <BasicSection imageUrl="/demo-illustration-2.svg" title="Unparalleled User Experience at the Core of AI" overTitle="Human-Centric Innovation" reversed>
            <p>
              We believe that AI&apos;s true potential lies in enhancing human capabilities, not replacing them. That&apos;s why user experience is the cornerstone of our development process. Our autonomous AI agents feature:
            </p>
            <ul>
              <li>Intuitive interfaces that empower users of all technical backgrounds</li>
              <li>Transparent decision-making processes to build trust and foster understanding</li>
              <li>Personalized interactions tailored to individual user preferences and needs</li>
              <li>Proactive assistance that anticipates and addresses user requirements</li>
            </ul>
            <p>
              By prioritizing <strong>user-centric design</strong> and <strong>transparent AI</strong>, we&apos;re creating solutions that are not only powerful but also trustworthy and accessible. <Link href="/contact">Discover how our AI agents can transform your user experience and drive business growth.</Link>
            </p>
          </BasicSection>
          <Features />
          <FeaturesGallery />
          <BasicSection imageUrl="/demo-illustration-3.png" title="Cutting-Edge Technology, Unmatched Results" overTitle="Innovation at Scale">
            <p>
              At AIAgents.biz, we harness the latest breakthroughs in artificial intelligence to deliver results that exceed expectations:
            </p>
            <ul>
              <li>Advanced deep learning models that uncover hidden patterns and generate actionable insights</li>
              <li>Reinforcement learning algorithms for optimal decision-making in complex, dynamic environments</li>
              <li>State-of-the-art computer vision capabilities for sophisticated image and video analysis</li>
              <li>Federated learning techniques to ensure data privacy and security while leveraging collective intelligence</li>
            </ul>
            <p>
              Our unwavering commitment to innovation ensures that your business stays ahead of the curve, equipped with AI solutions that are always at the forefront of technological advancement.
            </p>
            <p>
              Don&apos;t let your competition outpace you. <Link href="/contact">Book a call now</Link> to explore how our cutting-edge AI agents can propel your business into the future.
            </p>
          </BasicSection>
          <ScrollableBlogPosts posts={posts} />
        </WhiteBackgroundContainer>
        <Footer>
          <p>&copy; {new Date().getFullYear()} AIAgents.biz. All rights reserved.</p>
        </Footer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
`;

const WhiteBackgroundContainer = styled.div`
  background: rgba(var(--secondBackground), 0.3);
  backdrop-filter: blur(20px);
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:not(:first-child) {
    margin-top: 8rem;
  }

  & > *:last-child {
    margin-bottom: 8rem;
  }

  ${media('<=desktop')} {
    & > *:not(:first-child) {
      margin-top: 6rem;
    }

    & > *:last-child {
      margin-bottom: 6rem;
    }
  }

  ${media('<=tablet')} {
    & > *:not(:first-child) {
      margin-top: 4rem;
    }

    & > *:last-child {
      margin-bottom: 4rem;
    }
  }
`;

const Footer = styled.footer`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  color: rgb(var(--text));
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
