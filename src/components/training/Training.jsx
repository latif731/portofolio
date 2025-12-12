import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { trainings } from "../../data/training";
import { useTranslation } from "react-i18next";

const Training = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();
  const data = trainings();

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
  /* WEB RESPONSIVE */
  @media (max-width: 1920px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: white;
    padding-top: 6rem;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding-bottom: 100px;
  }

  /* TABLET RESPONSIVE */
  @media (max-width: 835px) {
    display: flex;
    flex-direction: column;
    gap: 12rem;
    color: white;
    padding-top: 6rem;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding-bottom: 100px;
    h1 {
      font-size: 2em;
      text-align: center;
    }
  }
  @media (max-width: 820px) {
    display: flex;
    flex-direction: column;
    gap: 11rem;
    color: white;
    padding-top: 6rem;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding-bottom: 100px;
    h1 {
      font-size: 2em;
      text-align: center;
    }
  }
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    gap: 11rem;
    color: white;
    padding-top: 6rem;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding-bottom: 100px;
    h1 {
      font-size: 2em;
      text-align: center;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 10rem;
    color: white;
    padding-top: 6rem;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding-bottom: 100px;
    h1 {
      font-size: 2em;
      text-align: center;
    }
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    display: flex;
    flex-direction: column;
    gap: 9rem;
    color: white;
    padding-top: 6rem;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding-bottom: 100px;
    h1 {
      font-size: 25px;
      text-align: center;
    }
  }
  @media (max-width: 415px) {
    display: flex;
    flex-direction: column;
    gap: 8rem;
    color: white;
    padding-top: 6rem;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding-bottom: 100px;
    h1 {
      font-size: 25px;
      text-align: center;
    }
  }
  @media (max-width: 412px) {
    display: flex;
    flex-direction: column;
    gap: 7rem;
    color: white;
    padding-top: 6rem;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding-bottom: 100px;
    h1 {
      font-size: 25px;
      text-align: center;
    }
  }
  @media (max-width: 395px) {
    display: flex;
    flex-direction: column;
    gap: 6rem;
    color: white;
    padding-top: 6rem;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding-bottom: 100px;
    h1 {
      font-size: 25px;
      text-align: center;
    }
  }
  @media (max-width: 391px) {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    color: white;
    padding-top: 6rem;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding-bottom: 100px;
    h1 {
      font-size: 25px;
      text-align: center;
    }
  }
  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    color: white;
    padding-top: 6rem;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding-bottom: 100px;
    h1 {
      font-size: 25px;
      text-align: center;
    }
  }
  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    color: white;
    padding-top: 6rem;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding-bottom: 100px;
    h1 {
      font-size: 25px;
      text-align: center;
    }
  }
  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: white;
    padding-top: 6rem;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding-bottom: 100px;
    h1 {
      font-size: 25px;
      text-align: center;
    }
  }
`;

const ContentContainer = styled.div`
  /* WEB RESPONSIVE */
  @media (max-width: 1920px) {
    width: 100%;
    height: fit-content;
    display: flex;
    gap: 2rem;
    position: relative;
    /* z-index: 999; */
  }

  /* TABLET RESPONSIVE */
  @media (max-width: 835px) {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column-reverse;
    gap: 2rem;
    position: relative;
    /* z-index: 999; */
  }
  @media (max-width: 820px) {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column-reverse;
    gap: 2rem;
    position: relative;
    /* z-index: 999; */
  }
  @media (max-width: 800px) {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column-reverse;
    gap: 2rem;
    position: relative;
    /* z-index: 999; */
  }
  @media (max-width: 768px) {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column-reverse;
    gap: 2rem;
    position: relative;
    /* z-index: 999; */
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column-reverse;
    gap: 2rem;
    position: relative;
    /* z-index: 999; */
  }
  @media (max-width: 415px) {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column-reverse;
    gap: 2rem;
    position: relative;
    /* z-index: 999; */
  }
  @media (max-width: 412px) {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column-reverse;
    gap: 2rem;
    position: relative;
    /* z-index: 999; */
  }
  @media (max-width: 395px) {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column-reverse;
    gap: 2rem;
    position: relative;
    /* z-index: 999; */
  }
  @media (max-width: 391px) {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column-reverse;
    gap: 2rem;
    position: relative;
    /* z-index: 999; */
  }
  @media (max-width: 376px) {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column-reverse;
    gap: 2rem;
    position: relative;
    /* z-index: 999; */
  }
  @media (max-width: 360px) {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column-reverse;
    gap: 2rem;
    position: relative;
    /* z-index: 999; */
  }
  @media (max-width: 320px) {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column-reverse;
    gap: 2rem;
    position: relative;
    /* z-index: 999; */
  }
`;

const Left = styled.div`
  /* WEB RESPONSIVE */
  @media (max-width: 1920px) {
    flex-basis: 50%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
    z-index: 10;
  }

  /* TABLET RESPONSIVE */
  @media (max-width: 835px) {
    flex-basis: 50%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
    /* z-index: 10; */
  }
  @media (max-width: 820px) {
    flex-basis: 50%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
    /* z-index: 10; */
  }
  @media (max-width: 800px) {
    flex-basis: 50%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
    /* z-index: 10; */
  }
  @media (max-width: 768px) {
    flex-basis: 50%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
    /* z-index: 10; */
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    flex-basis: 50%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
    /* z-index: 10; */
  }
  @media (max-width: 415px) {
    flex-basis: 50%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
    /* z-index: 10; */
  }
  @media (max-width: 412px) {
    flex-basis: 50%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
    /* z-index: 10; */
  }
  @media (max-width: 395px) {
    flex-basis: 50%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
    /* z-index: 10; */
  }
  @media (max-width: 391px) {
    flex-basis: 50%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
    /* z-index: 10; */
  }
  @media (max-width: 376px) {
    flex-basis: 50%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
    /* z-index: 10; */
  }
  @media (max-width: 360px) {
    flex-basis: 50%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
    /* z-index: 10; */
  }
  @media (max-width: 320px) {
    flex-basis: 50%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
    /* z-index: 10; */
  }
`;

const Right = styled.div`
  /* WEB RESPONSIVE */
  @media (max-width: 1920px) {
    position: sticky;
    top: 0;
    right: 0;
    height: 100vh;
    flex-basis: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* TABLET RESPONSIVE */
  @media (max-width: 835px) {
    position: sticky;
    top: 74px;
    right: 0;
    height: 100vh;
    flex-basis: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }
  @media (max-width: 820px) {
    position: sticky;
    top: 74px;
    right: 0;
    height: 100vh;
    flex-basis: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }
  @media (max-width: 800px) {
    position: sticky;
    top: 74px;
    right: 0;
    height: 100vh;
    flex-basis: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }
  @media (max-width: 768px) {
    position: sticky;
    top: 74px;
    right: 0;
    height: 100vh;
    flex-basis: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    position: sticky;
    top: 79px;
    right: 0;
    height: 100vh;
    flex-basis: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }
  @media (max-width: 415px) {
    position: sticky;
    top: 79px;
    right: 0;
    height: 100vh;
    flex-basis: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }
  @media (max-width: 412px) {
    position: sticky;
    top: 79px;
    right: 0;
    height: 100vh;
    flex-basis: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }
  @media (max-width: 395px) {
    position: sticky;
    top: 79px;
    right: 0;
    height: 100vh;
    flex-basis: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }
  @media (max-width: 391px) {
    position: sticky;
    top: 79px;
    right: 0;
    height: 100vh;
    flex-basis: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }
  @media (max-width: 376px) {
    position: sticky;
    top: 79px;
    right: 0;
    height: 100vh;
    flex-basis: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }
  @media (max-width: 360px) {
    position: sticky;
    top: 79px;
    right: 0;
    height: 100vh;
    flex-basis: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }
  @media (max-width: 320px) {
    position: sticky;
    top: 79px;
    right: 0;
    height: 100vh;
    flex-basis: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }
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
  /* WEB RESPONSIVE */
  @media (max-width: 1920px) {
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    padding: 0 60px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    opacity: ${(props) => (props.inView ? 1 : 0)};
    transform: ${(props) => (props.inView ? "none" : "translateY(50px)")};
    transition: opacity 0.6s, transform 0.6s;
  }

  /* TABLET RESPONSIVE */
  @media (max-width: 835px) {
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    padding: 0 5px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    opacity: ${(props) => (props.inView ? 1 : 0)};
    transform: ${(props) => (props.inView ? "none" : "translateY(50px)")};
    transition: opacity 0.6s, transform 0.6s;
  }
  @media (max-width: 820px) {
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    padding: 0 5px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    opacity: ${(props) => (props.inView ? 1 : 0)};
    transform: ${(props) => (props.inView ? "none" : "translateY(50px)")};
    transition: opacity 0.6s, transform 0.6s;
  }
  @media (max-width: 800px) {
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    padding: 0 5px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    opacity: ${(props) => (props.inView ? 1 : 0)};
    transform: ${(props) => (props.inView ? "none" : "translateY(50px)")};
    transition: opacity 0.6s, transform 0.6s;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    padding: 0 5px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    opacity: ${(props) => (props.inView ? 1 : 0)};
    transform: ${(props) => (props.inView ? "none" : "translateY(50px)")};
    transition: opacity 0.6s, transform 0.6s;
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    padding: 0 5px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    opacity: ${(props) => (props.inView ? 1 : 0)};
    transform: ${(props) => (props.inView ? "none" : "translateY(50px)")};
    transition: opacity 0.6s, transform 0.6s;
  }
  @media (max-width: 415px) {
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    padding: 0 5px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    opacity: ${(props) => (props.inView ? 1 : 0)};
    transform: ${(props) => (props.inView ? "none" : "translateY(50px)")};
    transition: opacity 0.6s, transform 0.6s;
  }
  @media (max-width: 412px) {
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    padding: 0 5px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    opacity: ${(props) => (props.inView ? 1 : 0)};
    transform: ${(props) => (props.inView ? "none" : "translateY(50px)")};
    transition: opacity 0.6s, transform 0.6s;
  }
  @media (max-width: 395px) {
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    padding: 0 5px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    opacity: ${(props) => (props.inView ? 1 : 0)};
    transform: ${(props) => (props.inView ? "none" : "translateY(50px)")};
    transition: opacity 0.6s, transform 0.6s;
  }
  @media (max-width: 391px) {
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    padding: 0 5px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    opacity: ${(props) => (props.inView ? 1 : 0)};
    transform: ${(props) => (props.inView ? "none" : "translateY(50px)")};
    transition: opacity 0.6s, transform 0.6s;
  }
  @media (max-width: 376px) {
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    padding: 0 5px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    opacity: ${(props) => (props.inView ? 1 : 0)};
    transform: ${(props) => (props.inView ? "none" : "translateY(50px)")};
    transition: opacity 0.6s, transform 0.6s;
  }
  @media (max-width: 360px) {
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    padding: 0 5px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    opacity: ${(props) => (props.inView ? 1 : 0)};
    transform: ${(props) => (props.inView ? "none" : "translateY(50px)")};
    transition: opacity 0.6s, transform 0.6s;
  }
  @media (max-width: 320px) {
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    padding: 0 5px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    opacity: ${(props) => (props.inView ? 1 : 0)};
    transform: ${(props) => (props.inView ? "none" : "translateY(50px)")};
    transition: opacity 0.6s, transform 0.6s;
  }
`;

const Title = styled.div`
  /* WEB RESPONSIVE */
  @media (max-width: 1920px) {
    font-size: 100px;
    font-family: Poppins, sans-serif;
    font-weight: 600;
    color: white;
  }
  
  /* TABLET RESPONSIVE */
  @media (max-width: 1115px) {
    font-size: 50px;
    font-family: Poppins, sans-serif;
    font-weight: 600;
    color: white;
  }
  @media (max-width: 835px) {
    font-size: 43px;
    font-family: Poppins, sans-serif;
    /* font-weight: 100; */
    color: white;
  }
  @media (max-width: 820px) {
    font-size: 42px;
    font-family: Poppins, sans-serif;
    /* font-weight: 100; */
    color: white;
  }
  @media (max-width: 800px) {
    font-size: 41px;
    font-family: Poppins, sans-serif;
    /* font-weight: 100; */
    color: white;
  }
  @media (max-width: 768px) {
    font-size: 40px;
    font-family: Poppins, sans-serif;
    /* font-weight: 100; */
    color: white;
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    font-size: 25px;
    font-family: Poppins, sans-serif;
    /* font-weight: 100; */
    color: white;
  }
  @media (max-width: 415px) {
    font-size: 24px;
    font-family: Poppins, sans-serif;
    /* font-weight: 100; */
    color: white;
  }
  @media (max-width: 412px) {
    font-size: 23px;
    font-family: Poppins, sans-serif;
    /* font-weight: 100; */
    color: white;
  }
  @media (max-width: 395px) {
    font-size: 22px;
    font-family: Poppins, sans-serif;
    /* font-weight: 100; */
    color: white;
  }
  @media (max-width: 391px) {
    font-size: 21px;
    font-family: Poppins, sans-serif;
    /* font-weight: 100; */
    color: white;
  }
  @media (max-width: 376px) {
    font-size: 20px;
    font-family: Poppins, sans-serif;
    /* font-weight: 100; */
    color: white;
  }
  @media (max-width: 360px) {
    font-size: 19px;
    font-family: Poppins, sans-serif;
    /* font-weight: 100; */
    color: white;
  }
  @media (max-width: 320px) {
    font-size: 18px;
    font-family: Poppins, sans-serif;
    /* font-weight: 100; */
    color: white;
  }
`;

const Description = styled.div`
  /* WEB RESPONSIVE */
  @media (max-width: 1920px) {
    font-size: 18px;
    font-family: Poppins, sans-serif;
    font-weight: 300;
    color: white;
  }
  
  /* TABLET RESPONSIVE */
  @media (max-width: 1115px) {
    font-size: 12px;
    font-family: Poppins, sans-serif;
    font-weight: 300;
    color: white;
  }
  @media (max-width: 835px) {
    font-size: 15px;
    font-family: Poppins, sans-serif;
    font-weight: 300;
    color: white;
  }
  @media (max-width: 820px) {
    font-size: 15px;
    font-family: Poppins, sans-serif;
    font-weight: 300;
    color: white;
  }
  @media (max-width: 800px) {
    font-size: 15px;
    font-family: Poppins, sans-serif;
    font-weight: 300;
    color: white;
  }
  @media (max-width: 768px) {
    font-size: 15px;
    font-family: Poppins, sans-serif;
    font-weight: 300;
    color: white;
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    font-size: 17px;
    font-family: Poppins, sans-serif;
    font-weight: 300;
    color: white;
  }
  @media (max-width: 415px) {
    font-size: 16px;
    font-family: Poppins, sans-serif;
    font-weight: 300;
    color: white;
  }
  @media (max-width: 412px) {
    font-size: 15px;
    font-family: Poppins, sans-serif;
    font-weight: 300;
    color: white;
  }
  @media (max-width: 395px) {
    font-size: 14px;
    font-family: Poppins, sans-serif;
    font-weight: 300;
    color: white;
  }
  @media (max-width: 391px) {
    font-size: 13px;
    font-family: Poppins, sans-serif;
    font-weight: 300;
    color: white;
  }
  @media (max-width: 376px) {
    font-size: 12px;
    font-family: Poppins, sans-serif;
    font-weight: 300;
    color: white;
  }
  @media (max-width: 360px) {
    font-size: 11px;
    font-family: Poppins, sans-serif;
    font-weight: 300;
    color: white;
  }
  @media (max-width: 320px) {
    font-size: 10px;
    font-family: Poppins, sans-serif;
    font-weight: 300;
    color: white;
  }
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
  /* WEB RESPONSIVE */
  @media (max-width: 1920px) {
    width: 100%;
    height: auto;
    display: ${(props) => (props.active ? "block" : "none")};
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      height: auto;
      transition: transform 0.6s ease-in-out, opacity 0.6s ease-in-out;
      transform: ${(props) => (props.inView ? "scale(1.1)" : "scale(0.8)")};
      opacity: ${(props) => (props.inView ? 1 : 0)};
    }
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    width: 100%;
    height: auto;
    display: ${(props) => (props.active ? "block" : "none")};
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      height: auto;
      transition: transform 0.6s ease-in-out, opacity 0.6s ease-in-out;
      transform: ${(props) => (props.inView ? "scale(1.1)" : "scale(0.8)")};
      opacity: ${(props) => (props.inView ? 1 : 0)};
    }
  }
  @media (max-width: 415px) {
    width: 100%;
    height: auto;
    display: ${(props) => (props.active ? "block" : "none")};
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      height: auto;
      transition: transform 0.6s ease-in-out, opacity 0.6s ease-in-out;
      transform: ${(props) => (props.inView ? "scale(1.1)" : "scale(0.8)")};
      opacity: ${(props) => (props.inView ? 1 : 0)};
    }
  }
  @media (max-width: 412px) {
    width: 100%;
    height: auto;
    display: ${(props) => (props.active ? "block" : "none")};
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      height: auto;
      transition: transform 0.6s ease-in-out, opacity 0.6s ease-in-out;
      transform: ${(props) => (props.inView ? "scale(1.1)" : "scale(0.8)")};
      opacity: ${(props) => (props.inView ? 1 : 0)};
    }
  }
  @media (max-width: 395px) {
    width: 100%;
    height: auto;
    display: ${(props) => (props.active ? "block" : "none")};
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      height: auto;
      transition: transform 0.6s ease-in-out, opacity 0.6s ease-in-out;
      transform: ${(props) => (props.inView ? "scale(1.1)" : "scale(0.8)")};
      opacity: ${(props) => (props.inView ? 1 : 0)};
    }
  }
  @media (max-width: 391px) {
    width: 100%;
    height: auto;
    display: ${(props) => (props.active ? "block" : "none")};
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      height: auto;
      transition: transform 0.6s ease-in-out, opacity 0.6s ease-in-out;
      transform: ${(props) => (props.inView ? "scale(1.1)" : "scale(0.8)")};
      opacity: ${(props) => (props.inView ? 1 : 0)};
    }
  }
  @media (max-width: 376px) {
    width: 100%;
    height: auto;
    display: ${(props) => (props.active ? "block" : "none")};
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      height: auto;
      transition: transform 0.6s ease-in-out, opacity 0.6s ease-in-out;
      transform: ${(props) => (props.inView ? "scale(1.1)" : "scale(0.8)")};
      opacity: ${(props) => (props.inView ? 1 : 0)};
    }
  }
  @media (max-width: 360px) {
    width: 100%;
    height: auto;
    display: ${(props) => (props.active ? "block" : "none")};
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      height: auto;
      transition: transform 0.6s ease-in-out, opacity 0.6s ease-in-out;
      transform: ${(props) => (props.inView ? "scale(1.1)" : "scale(0.8)")};
      opacity: ${(props) => (props.inView ? 1 : 0)};
    }
  }
  @media (max-width: 320px) {
    width: 100%;
    height: auto;
    display: ${(props) => (props.active ? "block" : "none")};
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      height: auto;
      transition: transform 0.6s ease-in-out, opacity 0.6s ease-in-out;
      transform: ${(props) => (props.inView ? "scale(1.1)" : "scale(0.8)")};
      opacity: ${(props) => (props.inView ? 1 : 0)};
    }
  }
`;
