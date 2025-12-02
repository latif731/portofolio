import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PortoWeb from "./PortoMediaQuerry/PortoWeb";
import PortoMobile from "./PortoMediaQuerry/PortoMobile";

const CardPorto = ({ setOpenPortoDetail }) => {
  return (
    <>
      <WebPorto>
        <PortoWeb setOpenPortoDetail={setOpenPortoDetail} />
      </WebPorto>

      <MobilePorto>
        <PortoMobile setOpenPortoDetail={setOpenPortoDetail} />
      </MobilePorto>
      <TabletPorto></TabletPorto>
    </>
  );
};

export default CardPorto;

const WebPorto = styled.div`
  /* Desktop & Large Screen */
  @media (min-width: 1025px) {
    display: block;
  }

  /* Hide on tablet & mobile */
  @media (max-width: 1024px) {
    display: none;
  }
`;

const TabletPorto = styled.div`
  /* Tablet only */
  @media (min-width: 601px) and (max-width: 1024px) {
    display: block;
  }

  @media (min-width: 1025px), (max-width: 600px) {
    display: none;
  }
`;

const MobilePorto = styled.div`
  /* Mobile only */
  @media (min-width: 320px) and (max-width: 599px) {
    display: block;
    margin: 0;
  }

  @media (min-width: 601px) {
    display: none;
  }
`;
