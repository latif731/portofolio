import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import { PortfolioDatas } from "../../../data/Portfolio";
import { figmaDatas } from "../../../data/figma";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "./figma.css";

const FigmaTablet = ({ setOpenFigmaDetail }) => {
  const [figmaData, setFigmaData] = useState([]);
  console.log("figmaData", figmaData)
  const { t } = useTranslation();
  const data = figmaDatas();
  // const [figmaData, setFigmaData] = useState([]);

  //     setOpenPortoDetail(true)
  // }

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };

  useEffect(() => {
    setFigmaData(data);
    // setFigmaData(FigmaDatas);
  }, []);

  return (
    <SliderContainer>
      <Slider {...settings}>
        {figmaData?.map((d) => (
          <BoxTablet key={d.id}>
            <img src={d.imageUrl} alt={d.titleHeader} />
            <ContentOverlayTablet>
              <h3>{d.titleHeader}</h3>
              <p>{d.desc}</p>
              <button onClick={() => setOpenFigmaDetail(d.id)}>
                {t("porto menu.detail")}
              </button>
            </ContentOverlayTablet>
          </BoxTablet>
        ))}
      </Slider>
    </SliderContainer>
    // <Container>
    //   <BoxArea>
    //     {portData?.map((d) => (
    //       <BoxTablet key={d.id}>
    //         <img src={d.img} alt={d.title} />
    //         <ContentOverlayTablet>
    //           <h3>{d.title}</h3>
    //           <p>{d.desc}</p>
    //           <button onClick={() => setOpenPortoDetail(d.id)}>
    //             {t("porto menu.detail")}
    //           </button>
    //         </ContentOverlayTablet>
    //       </BoxTablet>
    //     ))}
    //   </BoxArea>
    // </Container>
  );
};

export default FigmaTablet;

const Container = styled.div`
  /* padding: 10px 10%; */
`;

const BoxArea = styled.div`
  @media (max-width: 768px) {
    width: 150%;
    display: flex;
    /* flex-wrap: wrap; */
    gap: 1rem;
    align-items: center;
    /* justify-content: center; */
    /* justify-content: space-between; */
  }
`;

const ContentOverlayTablet = styled.div`
  @media (max-width: 1024px) and (min-width: 834px) {
    height: 0;
    width: 100%;
    background: linear-gradient(transparent, #1c1c1c 58%);
    border-radius: 10px;
    position: absolute;
    left: 0;
    bottom: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    align-items: center;
    /* text-align: center; */
    font-size: 14px;
    transition: height 1s;
    h3 {
      color: white;
      font-weight: 500;
      margin-top: 20%;
      font-size: 1.25rem;
      letter-spacing: 2px;
      text-align: center;
    }

    p {
      color: white;
      margin: 10px 0;
      text-align: center;
      /* font-size: 1px; */
    }

    button {
      margin-top: 10px;
      color: black;
      width: 90px;
      height: 40px;
      font-size: 14px;
      background: #fff;
      border-radius: 10px;
      text-align: center;
      cursor: pointer;
    }
  }
  @media (max-width: 820px) {
    height: 0;
    width: 100%;
    background: linear-gradient(transparent, #1c1c1c 58%);
    border-radius: 10px;
    position: absolute;
    left: 0;
    bottom: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    align-items: center;
    /* text-align: center; */
    font-size: 14px;
    transition: height 1s;
    h3 {
      color: white;
      font-weight: 500;
      margin-top: 20%;
      font-size: 1.25rem;
      letter-spacing: 2px;
      text-align: center;
    }

    p {
      color: white;
      margin: 10px 0;
      text-align: center;
      /* font-size: 1px; */
    }

    button {
      margin-top: 10px;
      color: black;
      width: 90px;
      height: 40px;
      font-size: 14px;
      background: #fff;
      border-radius: 10px;
      text-align: center;
      cursor: pointer;
    }
  }
  @media (max-width: 800px) {
    height: 0;
    width: 100%;
    background: linear-gradient(transparent, #1c1c1c 58%);
    border-radius: 10px;
    position: absolute;
    left: 0;
    bottom: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    align-items: center;
    /* text-align: center; */
    font-size: 14px;
    transition: height 1s;
    h3 {
      color: white;
      font-weight: 500;
      margin-top: 20%;
      font-size: 1.25rem;
      letter-spacing: 2px;
      text-align: center;
    }

    p {
      color: white;
      margin: 10px 0;
      text-align: center;
      /* font-size: 1px; */
    }

    button {
      margin-top: 10px;
      color: black;
      width: 90px;
      height: 40px;
      font-size: 14px;
      background: #fff;
      border-radius: 10px;
      text-align: center;
      cursor: pointer;
    }
  }
  @media (max-width: 768px) {
    height: 0;
    width: 100%;
    background: linear-gradient(transparent, #1c1c1c 58%);
    border-radius: 10px;
    position: absolute;
    left: 0;
    bottom: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    align-items: center;
    /* text-align: center; */
    font-size: 14px;
    transition: height 1s;
    h3 {
      color: white;
      font-weight: 500;
      margin-top: 20%;
      font-size: 1.25rem;
      letter-spacing: 2px;
      text-align: center;
    }

    p {
      color: white;
      margin: 10px 0;
      text-align: center;
      /* font-size: 1px; */
    }

    button {
      margin-top: 10px;
      color: black;
      width: 90px;
      height: 40px;
      font-size: 14px;
      background: #fff;
      border-radius: 10px;
      text-align: center;
      cursor: pointer;
    }
  }
`;

const BoxTablet = styled.div`
  @media (max-width: 1024px) and (min-width: 834px) {
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    width: 100% !important;
    /* Mengurangi jarak agar dua item per baris */
    /* width: calc(50% - 0.5rem);  */
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
    margin-bottom: 1rem;

    img {
      width: 100%;
      border-radius: 10px;
      display: block;
      transition: transform 0.5s;
    }

    &:hover img {
      transform: scale(1.2);
    }

    &:hover ${ContentOverlayTablet} {
      height: 100%;
    }
  }
  @media (max-width: 820px) {
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    width: 100% !important;
    /* Mengurangi jarak agar dua item per baris */
    /* width: calc(50% - 0.5rem);  */
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
    margin-bottom: 1rem;

    img {
      width: 100%;
      border-radius: 10px;
      display: block;
      transition: transform 0.5s;
    }

    &:hover img {
      transform: scale(1.2);
    }

    &:hover ${ContentOverlayTablet} {
      height: 100%;
    }
  }
  @media (max-width: 800px) {
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    width: 100% !important;
    /* Mengurangi jarak agar dua item per baris */
    /* width: calc(50% - 0.5rem);  */
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
    margin-bottom: 1rem;

    img {
      width: 100%;
      border-radius: 10px;
      display: block;
      transition: transform 0.5s;
    }

    &:hover img {
      transform: scale(1.2);
    }

    &:hover ${ContentOverlayTablet} {
      height: 100%;
    }
  }
  @media (max-width: 768px) {
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    width: 100% !important;
    /* Mengurangi jarak agar dua item per baris */
    /* width: calc(50% - 0.5rem);  */
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
    margin-bottom: 1rem;

    img {
      width: 100%;
      border-radius: 10px;
      display: block;
      transition: transform 0.5s;
    }

    &:hover img {
      transform: scale(1.2);
    }

    &:hover ${ContentOverlayTablet} {
      height: 100%;
    }
  }
`;


const SliderContainer = styled.div``