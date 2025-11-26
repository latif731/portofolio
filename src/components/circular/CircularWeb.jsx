import React from "react";
import styled, { keyframes } from "styled-components";

const CircularWeb = ({ data, isVisible }) => {
  return (
    <SkillWeb percent={data.percent} isVisible={isVisible}>
      <OuterWeb>
        <InnerWeb>
          <img src={data.img} alt="" />
        </InnerWeb>
      </OuterWeb>

      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="GradientColorWeb">
            <stop offset="0%" stopColor="#DA22FF" />
            <stop offset="100%" stopColor="#9733EE" />
          </linearGradient>
        </defs>

        <circle className="web-circle" strokeLinecap="round" />
      </svg>
    </SkillWeb>
  );
};

export default CircularWeb;

/* =============================
   RADIUS BESAR (WEB)
============================= */
const R_BIG = 70;
const circumference = 2 * Math.PI * R_BIG;
const R_BIG1115 = 60;
const circumference1115 = 2 * Math.PI * R_BIG1115;

const dashOffset = (percent) => {
  return circumference - (percent / 100) * circumference;
};
const dashOffset1115 = (percent) => {
  return circumference1115 - (percent / 100) * circumference1115;
};

const animWeb = (percent) => keyframes`
  100% { stroke-dashoffset: ${dashOffset(percent)}; }
`;
const animWeb1115 = (percent) => keyframes`
  100% { stroke-dashoffset: ${dashOffset1115(percent)}; }
`;

/* =============================
   STYLING WEB (MIRIP Circular.jsx)
============================= */
const SkillWeb = styled.div`
@media (max-width:1920px) {
  width: 160px;
  height: 160px;
  position: relative;

  circle.web-circle {
    fill: none;
    stroke: url(#GradientColorWeb);
    stroke-width: 20px;

    stroke-dasharray: ${circumference};
    stroke-dashoffset: ${circumference};

    animation: ${({ percent, isVisible }) =>
      isVisible ? animWeb(percent) : "none"} 2s linear forwards;

    r: ${R_BIG};
    cx: 80;
    cy: 80;
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 160px;
    height: 160px;
  }
}
@media (max-width:1115px) {
  width: 140px;
  height: 140px;
  position: relative;

  circle.web-circle {
    fill: none;
    stroke: url(#GradientColorWeb);
    stroke-width: 20px;

    stroke-dasharray: ${circumference1115};
    stroke-dashoffset: ${circumference1115};

    animation: ${({ percent, isVisible }) =>
      isVisible ? animWeb1115(percent) : "none"} 2s linear forwards;

    r: ${R_BIG1115};
    cx: 70;
    cy: 70;
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 150px;
    height: 150px;
  }
}
`;

const OuterWeb = styled.div`
@media (max-width:1920px) {
  height: 160px;
  width: 160px;
  padding: 20px;
  border-radius: 50%;
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
    -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
}
@media (max-width:1115px) {
  height: 140px;
  width: 140px;
  padding: 20px;
  border-radius: 50%;
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
    -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
}
`;

const InnerWeb = styled.div`
@media (max-width:1920px) {
  height: 120px;
  width: 120px;
  border-radius: 50%;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
    inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7);

  img {
    height: 70px;
    width: 70px;
  }
}
@media (max-width:1115px) {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
    inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7);

  img {
    height: 50px;
    width: 50px;
  }
}
`;
