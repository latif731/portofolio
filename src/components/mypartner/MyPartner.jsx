import React from "react";
import styled from "styled-components";
import PartnerWeb from "./PartnerResponsive/PartnerWeb";
import PartnerMobile from "./PartnerResponsive/PartnerMobile";
import PartnerTablet from "./PartnerResponsive/PartnerTablet";

const MyPartner = () => {
  // const {t} = useTranslation()
  return (
    <>
      <Web>
        <PartnerWeb />
      </Web>
      <Mobile>
        <PartnerMobile />
      </Mobile>
      <Tablet>
        <PartnerTablet />
      </Tablet>
    </>
  );
};

export default MyPartner;

const Web = styled.div`
  @media (max-width: 1920px) {
    display: block;
  }
  @media (max-width:1115px) {
    display: none;
  }
  @media (max-width:835px) {
    display: none;
  }
  @media (max-width:820px) {
    display: none;
  }
  @media (max-width:800px) {
    display: none;
  }
  @media (max-width:768px) {
    display: none;
  }
  @media (max-width: 415px) {
    display: none;
  }
  @media (max-width: 412px) {
    display: none;
  }
  @media (max-width: 395px) {
    display: none;
  }
  @media (max-width: 391px) {
    display: none;
  }
  @media (max-width: 376px) {
    display: none;
  }
  @media (max-width: 360px) {
    display: none;
  }
  @media (max-width: 320px) {
    display: none;
  }
`;
const Mobile = styled.div`
  @media (max-width: 1920px) {
    display: none;
  }
  @media (max-width: 415px) {
    display: block;
  }
  @media (max-width: 412px) {
    display: block;
  }
  @media (max-width: 395px) {
    display: block;
  }
  @media (max-width: 391px) {
    display: block;
  }
  @media (max-width: 376px) {
    display: block;
  }
  @media (max-width: 360px) {
    display: block;
  }
  @media (max-width: 320px) {
    display: block;
  }
`;
const Tablet = styled.div`
  @media (max-width: 1920px) {
    display: none;
  }
  @media (max-width: 1115px) {
    display: block;
  }
  @media (max-width: 835px) {
    display: block;
  }
  @media (max-width: 820px) {
    display: block;
  }
  @media (max-width: 800px) {
    display: block;
  }
  @media (max-width: 768px) {
    display: block;
  }
  @media (max-width: 415px) {
    display: none;
  }
  @media (max-width: 412px) {
    display: none;
  }
  @media (max-width: 395px) {
    display: none;
  }
  @media (max-width: 391px) {
    display: none;
  }
  @media (max-width: 376px) {
    display: none;
  }
  @media (max-width: 360px) {
    display: none;
  }
  @media (max-width: 320px) {
    display: none;
  }
`;
