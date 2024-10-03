import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { A11y, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArticleCard from 'components/ArticleCard';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { useResizeObserver } from 'hooks/useResizeObserver';
import { SingleArticle } from 'types';
import { media } from 'utils/media';

interface ScrollableBlogPostsProps {
  posts: SingleArticle[];
}

export default function ScrollableBlogPosts({ posts }: ScrollableBlogPostsProps) {
  const [hasMounted, setHasMounted] = useState(false);
  const { ref, width = 1 } = useResizeObserver<HTMLDivElement>();

  const oneItemWidth = 350;
  const noOfItems = Math.max(1, Math.floor(width / oneItemWidth));

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <Section>
      <Container>
        <Content>
          <OverTitle>Latest Articles</OverTitle>
          <SectionTitle>Explore Our Blog</SectionTitle>
        </Content>
      </Container>

      <SwiperContainer ref={ref}>
        {hasMounted && (
          <Swiper
            modules={[A11y, Pagination]}
            slidesPerView={noOfItems}
            spaceBetween={20}
            pagination={{ clickable: true }}
            loop={false}
          >
            {posts.map((singlePost, idx) => (
              <SwiperSlide key={singlePost.meta.title}>
                <ArticleCard
                  title={singlePost.meta.title}
                  description={singlePost.meta.description}
                  imageUrl={singlePost.meta.imageUrl}
                  slug={singlePost.slug}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </SwiperContainer>
    </Section>
  );
}

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;

  & > *:last-child {
    margin-top: 1rem;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 0;
  background: rgba(var(--cardBackground), 0.8);
  backdrop-filter: blur(15px);
  border-radius: 2rem;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.1);

  ${media('<=tablet')} {
    padding: 3rem 0;
  }
`;

const SwiperContainer = styled(Container)`
  max-width: 100%;
  padding: 0 2rem;

  .swiper {
    width: 100%;
    padding-bottom: 4rem; // Space for pagination
  }

  .swiper-pagination {
    bottom: 0;
  }

  ${media('<=desktop')} {
    padding: 0 1rem;
  }
`;
