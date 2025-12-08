import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { figmaDatas } from "../../../data/figma";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "./figma.css";

const FigmaMobile = ({ setOpenFigmaDetail }) => {
  const [figmaData, setFigmaData] = useState([]);
  console.log("figmaData", figmaData);
  const { t } = useTranslation();
  const data = figmaDatas();
  useEffect(() => {
    setFigmaData(data);
  }, []);

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  return (
    <SliderContainer>
      <Slider {...settings}>
        {figmaData.map((d) => (
          <BoxMobile key={d.id}>
            <img src={d.imageUrl} alt={d.titleHeader} />
            <ContentOverlayMobile>
              <h3>{d.titleHeader}</h3>
              <p>{d.desc}</p>
              <button onClick={() => setOpenFigmaDetail(d.id)}>
                {/* See Detail */}
                {t("porto menu.detail")}
              </button>
            </ContentOverlayMobile>
          </BoxMobile>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default FigmaMobile;

const Container = styled.div`
  @media (max-width: 1920px) {
    padding: 10px 10%;
    /* height: 200%; */
  }
`;
const BoxArea = styled.div`
  @media (max-width: 1920px) {
    display: flex;
    gap: 1rem;
  }
`;

const ContentOverlayMobile = styled.div`
  @media (max-width: 360px) {
    height: 0;
    width: 125%;
    background: linear-gradient(transparent, #1c1c1c 56%);
    border-radius: 5px;
    position: absolute;
    left: 0;
    bottom: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    /* padding: 0 5px; */
    padding-right: 4.5rem;
    align-items: center;
    text-align: center;
    /* font-size: 1px; */
    transition: height 1s;

    h3 {
      color: white;
      font-weight: 500;
      margin-top: 16%;
      font-size: 17px;
      letter-spacing: 2px;
    }

    p {
      color: white;
      margin: 5px 0;
      font-size: 8px;
      width: 60%;
    }

    button {
      margin-top: 1px;
      color: black;
      width: 60px;
      height: 25px;
      font-size: 7px;
      background: #fff;
      border-radius: 5px;
      text-align: center;
      cursor: pointer;
    }
  }
  @media (max-width: 320px) {
    height: 0;
    width: 125%;
    background: linear-gradient(transparent, #1c1c1c 56%);
    border-radius: 5px;
    position: absolute;
    left: 0;
    bottom: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    /* padding: 0 5px; */
    padding-right: 4.5rem;
    align-items: center;
    text-align: center;
    /* font-size: 1px; */
    transition: height 1s;

    h3 {
      color: white;
      font-weight: 500;
      margin-top: 16%;
      font-size: 17px;
      letter-spacing: 2px;
    }

    p {
      color: white;
      margin: 5px 0;
      font-size: 8px;
      width: 60%;
    }

    button {
      margin-top: 1px;
      color: black;
      width: 60px;
      height: 25px;
      font-size: 7px;
      background: #fff;
      border-radius: 5px;
      text-align: center;
      cursor: pointer;
    }
  }
`;

const BoxMobile = styled.div`
  @media (max-width: 360px) {
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    width: 49%;
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

    &:hover ${ContentOverlayMobile} {
      height: 100%;
    }
  }
  @media (max-width: 320px) {
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    width: 49%;
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

    &:hover ${ContentOverlayMobile} {
      height: 100%;
    }
  }
`;

const SliderContainer = styled.div`
  @media (max-width:360px) {
    width: 105%;
    margin-left: -2.5px;
  }
  @media (max-width:320px) {
    width: 105%;
    margin-left: -2.5px;
  }
`
