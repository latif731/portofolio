import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { PortfolioDatas } from "../../../data/Portfolio";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "./porto.css";

const PortoMobile = ({ setOpenPortoDetail }) => {
  const [portData, setPortData] = useState([]);
  const { t } = useTranslation();
  const data = PortfolioDatas();
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
    setPortData(data);
    // setFigmaData(FigmaDatas);
  }, []);

  return (
    <SliderContainer>
      <Slider {...settings}>
        {portData?.map((d) => (
          <BoxMobile key={d.id}>
            <img src={d.img} alt={d.title} />
            <ContentOverlayMobile>
              <h3>{d.title}</h3>
              <p>{d.desc}</p>
              <button onClick={() => setOpenPortoDetail(d.id)}>
                {t("porto menu.detail")}
              </button>
            </ContentOverlayMobile>
          </BoxMobile>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default PortoMobile;

const Container = styled.div`
  /* padding: 10px 10%; */
`;


const ContentOverlayMobile = styled.div`
  @media (max-width: 320px) {
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
    text-align: center;
    font-size: 14px;
    transition: height 1s;

    h3 {
      color: white;
      font-weight: 500;
      margin-top: 20%;
      font-size: 1.25rem;
      letter-spacing: 2px;
    }

    p {
      color: white;
      margin: 10px 0;
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

const BoxMobile = styled.div`
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

const SliderContainer = styled.div``
