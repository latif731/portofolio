import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { trainings } from '../../data/training';
import { useTranslation } from 'react-i18next';

const Training = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const {t} = useTranslation()
  const data = trainings()

  useEffect(() => {
    // console.log("Active index:", activeIndex);
  }, [activeIndex]);

  return (
    <Container id="training">
      <h1>{t("trainning.title")}</h1>
      <ContentContainer>
        <Left>
          {data.map((item, index) => (
            <LeftItem
              key={index}
              title={item.title}
              description={item.description}
              index={index}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </Left>
        <Right>
          {data.map((item, index) => (
            <ImageItem
              key={index}
              img={item.img}
              index={index}
              activeIndex={activeIndex}
            />
          ))}
        </Right>
      </ContentContainer>
    </Container>
  );
};

export default Training;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: white;
  padding-top: 6rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding-bottom: 100px;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  gap: 2rem;
  position: relative;
  /* z-index: 999; */
`;

const Left = styled.div`
  flex-basis: 50%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  z-index: 10;
`;

const Right = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  height: 100vh;
  flex-basis: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftItem = ({ title, description, index, setActiveIndex }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) {
        setActiveIndex(index);
      }
    },
  });

  return (
    <StyledLeftItem ref={ref} inView={inView}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </StyledLeftItem>
  );
};

const StyledLeftItem = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding: 0 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  opacity: ${(props) => (props.inView ? 1 : 0)};
  transform: ${(props) => (props.inView ? 'none' : 'translateY(50px)')};
  transition: opacity 0.6s, transform 0.6s;
`;

const Title = styled.div`
  font-size: 100px;
  font-family: Poppins, sans-serif;
  font-weight: 600;
  color: white;
`;

const Description = styled.div`
  font-size: 18px;
  font-family: Poppins, sans-serif;
  font-weight: 300;
  color: white;
`;

const ImageItem = ({ img, index, activeIndex }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <ImageContainer ref={ref} active={index === activeIndex} inView={inView}>
      <img src={img} alt={`active-${index}`} />
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  display: ${(props) => (props.active ? 'block' : 'none')};
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: auto;
    transition: transform 0.6s ease-in-out, opacity 0.6s ease-in-out;
    transform: ${(props) => (props.inView ? 'scale(1.1)' : 'scale(0.8)')};
    opacity: ${(props) => (props.inView ? 1 : 0)};
  }
`;
