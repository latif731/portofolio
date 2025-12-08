import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CardPorto from "./CardPorto";
import CardFigma from "./CardFigma";
import { PortfolioDatas } from "../../data/Portfolio";
import FigmaDetailCard from "../detail/FigmaDetailCard";
import PortoDetailCard from "../detail/PortoDetailCard";
import { figmaDatas } from "../../data/figma";
import { useTranslation } from "react-i18next";

// import FigmaDetailCard from '../detail/FigmaDetailCard'

const PersonalProject = () => {
  const [active, setActive] = useState(1);
  const [openPortoDetail, setOpenPortoDetail] = useState(false);
  // const [openFigmaDetail, setOpenFigmaDetail] = useState(false)
  // console.log("openPortoDetail", openPortoDetail)
  const [selectedPortoDetail, setSelectedPortoDetail] = useState(null);
  const [selectedFigmaDetail, setSelectedFigmaDetail] = useState(null);
  const [openFigmaDetail, setOpenFigmaDetail] = useState(false);
  const { t, i18n } = useTranslation();
  const data = PortfolioDatas();
  console.log(data);
  const figmaData = figmaDatas();

  const handleOpenPortoDetail = (id) => {
    const detail = data.find((portfolio) => portfolio.id === id);
    setSelectedPortoDetail(detail);
    setOpenPortoDetail(true);
  };

  const handleFigmaDetail = (id) => {
    const detail = figmaData.find((figma) => figma.id === id);
    setSelectedFigmaDetail(detail);
    setOpenFigmaDetail(true);
  };

  return (
    <Container id="project">
      {/* <h1>Portofolio</h1> */}
      <h1>{t("portofolio.title1")}</h1>
      <TabContainer>
        <Web onClick={() => setActive(1)} active={active === 1}>
          {/* <h5>My Portfolio</h5> */}
          <h5>{t("porto menu.portofolio")}</h5>
        </Web>
        <Figma onClick={() => setActive(2)} active={active === 2}>
          {/* <h5>UI/UX Design</h5> */}
          <h5>{t("porto menu.design")}</h5>
        </Figma>
      </TabContainer>
      {active === 1 && (
        <Portfolio>
          <CardPorto setOpenPortoDetail={handleOpenPortoDetail} />
        </Portfolio>
      )}
      {active === 2 && (
        <Design>
          <CardFigma setOpenFigmaDetail={handleFigmaDetail} />
        </Design>
      )}
      {openPortoDetail && (
        <>
          <PortoDetailCard
            setOpenPortoDetail={setOpenPortoDetail}
            selectedPortoDetail={selectedPortoDetail}
          />
        </>
      )}
      {openFigmaDetail && (
        <>
          <FigmaDetailCard
            setOpenFigmaDetail={setOpenFigmaDetail}
            selectedFigmaDetail={selectedFigmaDetail}
          />
        </>
      )}
    </Container>
  );
};

export default PersonalProject;

const Container = styled.div`
  @media (max-width: 1920px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: white;
    padding-top: 6rem;
    gap: 2rem;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding-bottom: 100px;
  }
  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: white;
    padding-top: 6rem;
    gap: 2rem;
    width: 90%;
    /* max-width: 1280px; */
    margin-left: 11px;
    /* padding-bottom: 100px; */
    h1 {
      text-align: center;
      font-size: 25px;
      /* margin-left: 2rem; */
    }
  }
  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: white;
    padding-top: 6rem;
    gap: 2rem;
    width: 90%;
    /* max-width: 1280px; */
    margin-left: 11px;
    /* padding-bottom: 100px; */
    h1 {
      text-align: center;
      font-size: 25px;
    }
  }
  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: white;
    padding-top: 6rem;
    gap: 2rem;
    width: 90%;
    /* max-width: 1280px; */
    margin-left: 11px;
    padding-bottom: 100px;
    h1 {
      text-align: center;
      font-size: 25px;
    }
  }
`;

const TabContainer = styled.div`
  @media (max-width: 1920px) {
    display: flex;
    justify-content: center;
    gap: 10rem;
    padding-top: 2rem;
    /* padding: 10px 40rem 10px 40rem;  */
    /* justify-content: space-around; */
  }
  @media (max-width: 376px) {
    display: flex;
    justify-content: center;
    gap: 4rem;
    padding-top: 2rem;
  }
  @media (max-width: 360px) {
    display: flex;
    justify-content: center;
    gap: 4rem;
    padding-top: 2rem;
  }
  @media (max-width: 320px) {
    display: flex;
    justify-content: center;
    gap: 4rem;
    padding-top: 2rem;
  }
`;

const Web = styled.div`
  @media (max-width: 1920px) {
    cursor: pointer !important;
    position: relative; /* Add position relative */
    :before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -5px; /* Adjust bottom position */
      height: 2px;
      background-color: white;
      width: 100%;
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }
    :hover:before {
      transform: scaleX(1);
    }
    ${(props) =>
      props.active &&
      `
          :before{
          transform: scaleX(1);
          }
        `}
  }

  @media (max-width: 376px) {
    cursor: pointer !important;
    position: relative; /* Add position relative */
    :before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -5px; /* Adjust bottom position */
      height: 2px;
      background-color: white;
      width: 100%;
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }
    :hover:before {
      transform: scaleX(1);
    }
    ${(props) =>
      props.active &&
      `
          :before{
          transform: scaleX(1);
          }
        `}
  }

  @media (max-width: 360px) {
    cursor: pointer !important;
    position: relative; /* Add position relative */
    :before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -5px; /* Adjust bottom position */
      height: 2px;
      background-color: white;
      width: 100%;
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }
    :hover:before {
      transform: scaleX(1);
    }
    ${(props) =>
      props.active &&
      `
          :before{
          transform: scaleX(1);
          }
        `}
  }

  @media (max-width: 320px) {
    cursor: pointer !important;
    position: relative; /* Add position relative */
    :before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -5px; /* Adjust bottom position */
      height: 2px;
      background-color: white;
      width: 100%;
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }
    :hover:before {
      transform: scaleX(1);
    }
    ${(props) =>
      props.active &&
      `
          :before{
          transform: scaleX(1);
          }
        `}
  }
`;

const Figma = styled.div`
  @media (max-width: 1920px) {
    cursor: pointer !important;
    position: relative; /* Add position relative */
    :before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -5px; /* Adjust bottom position */
      height: 2px;
      background-color: white;
      width: 100%;
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }
    :hover:before {
      transform: scaleX(1);
    }
    ${(props) =>
      props.active &&
      `
          :before{
          transform: scaleX(1);
          }
        `}
  }
  @media (max-width: 376px) {
    cursor: pointer !important;
    position: relative; /* Add position relative */
    :before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -5px; /* Adjust bottom position */
      height: 2px;
      background-color: white;
      width: 100%;
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }
    :hover:before {
      transform: scaleX(1);
    }
    ${(props) =>
      props.active &&
      `
          :before{
          transform: scaleX(1);
          }
        `}
  }
  @media (max-width: 360px) {
    cursor: pointer !important;
    position: relative; /* Add position relative */
    :before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -5px; /* Adjust bottom position */
      height: 2px;
      background-color: white;
      width: 100%;
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }
    :hover:before {
      transform: scaleX(1);
    }
    ${(props) =>
      props.active &&
      `
          :before{
          transform: scaleX(1);
          }
        `}
  }
  @media (max-width: 320px) {
    cursor: pointer !important;
    position: relative; /* Add position relative */
    :before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -5px; /* Adjust bottom position */
      height: 2px;
      background-color: white;
      width: 100%;
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }
    :hover:before {
      transform: scaleX(1);
    }
    ${(props) =>
      props.active &&
      `
          :before{
          transform: scaleX(1);
          }
        `}
  }
`;

const Portfolio = styled.div`
  @media (max-width: 1902px) {
    width: 100%;
  }
  @media (max-width: 376px) {
    width: 100%;
  }
  @media (max-width: 360px) {
    width: 100%;
  }
  @media (max-width: 320px) {
    width: 100%;
  }
`;

const Design = styled.div`
  @media (max-width: 1920px) {
    width: 100%;
  }
  @media (max-width: 376px) {
    width: 100%;
  }
  @media (max-width: 360px) {
    width: 100%;
  }
  @media (max-width: 320px) {
    width: 100%;
  }
`;
