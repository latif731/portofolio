import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FigmaWeb from "./FigmaMediaQuerry/FigmaWeb";
import FigmaMobile from "./FigmaMediaQuerry/FigmaMobile";
import FigmaTablet from "./FigmaMediaQuerry/FigmaTablet";

const CardFigma = ({ setOpenFigmaDetail }) => {
  return (
    <>
      <WebFigma>
        <FigmaWeb setOpenFigmaDetail={setOpenFigmaDetail}/>
      </WebFigma>

      <MobileFigma>
        <FigmaMobile setOpenFigmaDetail={setOpenFigmaDetail}/>
      </MobileFigma>

      <TabletFigma>
        <FigmaTablet setOpenFigmaDetail={setOpenFigmaDetail}/>
      </TabletFigma>
    </>
  );
};

export default CardFigma;



const WebFigma = styled.div`
  /* Desktop & Large Screen */
  @media (min-width: 1025px) {
    display: block;
  }

  /* Hide on tablet & mobile */
  @media (max-width: 1024px) {
    display: none;
  }
`;

const TabletFigma = styled.div`
  /* Tablet only */
  @media (min-width: 601px) and (max-width: 1024px) {
    display: block;
  }

  @media (min-width: 1025px), (max-width: 600px) {
    display: none;
  }
`;

const MobileFigma = styled.div`
  /* Mobile only */
  @media (min-width: 320px) and (max-width: 599px) {
    display: block;
    margin: 0;
  }

  @media (min-width: 601px) {
    display: none;
  }
`;

