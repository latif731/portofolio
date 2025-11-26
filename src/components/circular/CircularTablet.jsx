import React from "react";
import styled, { keyframes } from "styled-components";

const CircularTablet = ({ data, isVisible }) => {
  return (
    <SkillTablet percent={data.percent} isVisible={isVisible}>
      <OuterTablet>
        <InnerTablet>
          <img src={data.img} alt="" />
        </InnerTablet>
      </OuterTablet>

      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="GradientColorTablet">
            <stop offset="0%" stopColor="#DA22FF" />
            <stop offset="100%" stopColor="#9733EE" />
          </linearGradient>
        </defs>

        <circle className="tablet-circle" strokeLinecap="round" />
      </svg>
    </SkillTablet>
  );
};

export default CircularTablet;

/* =============================
   RADIUS KECIL (MOBILE)
============================= */
const R_TABLET768 = 60;
const R_TABLET820 = 60;
const circumference768 = 2 * Math.PI * R_TABLET768;

const dashOffset768 = (percent) =>
  circumference768 - (percent / 100) * circumference768;
const dashOffset820 = (percent) =>
  circumference820 - (percent / 100) * circumference820;

const animMobile768 = (percent) => keyframes`
  100% { stroke-dashoffset: ${dashOffset768(percent)}; }
`;
const animMobile820 = (percent) => keyframes`
  100% { stroke-dashoffset: ${dashOffset768(percent)}; }
`;

/* =============================
   STYLING MOBILE
============================= */
const SkillTablet = styled.div`
@media (max-width:835px) and (min-width:821px) {
    width: 140px;
    height: 140px;
    position: relative;
  
    circle.tablet-circle {
      fill: none;
      stroke: url(#GradientColorTablet);
      stroke-width: 16px;
  
      stroke-dasharray: ${circumference768};
      stroke-dashoffset: ${circumference768};
  
      animation: ${({ percent, isVisible }) =>
        isVisible ? animMobile768(percent) : "none"} 2s linear forwards;
  
      r: ${R_TABLET768};
      cx: 70;
      cy: 70;
    }
  
    svg {
      position: absolute;
      top: 0;
      left: 0;
      width: 140px;
      height: 140px;
    }
}
@media (max-width:820px) and (min-width:769px) {
    width: 140px;
    height: 140px;
    position: relative;
  
    circle.tablet-circle {
      fill: none;
      stroke: url(#GradientColorTablet);
      stroke-width: 16px;
  
      stroke-dasharray: ${circumference768};
      stroke-dashoffset: ${circumference768};
  
      animation: ${({ percent, isVisible }) =>
        isVisible ? animMobile768(percent) : "none"} 2s linear forwards;
  
      r: ${R_TABLET768};
      cx: 70;
      cy: 70;
    }
  
    svg {
      position: absolute;
      top: 0;
      left: 0;
      width: 140px;
      height: 140px;
    }
}
@media (max-width:768px) {
    width: 140px;
    height: 140px;
    position: relative;
  
    circle.tablet-circle {
      fill: none;
      stroke: url(#GradientColorTablet);
      stroke-width: 16px;
  
      stroke-dasharray: ${circumference768};
      stroke-dashoffset: ${circumference768};
  
      animation: ${({ percent, isVisible }) =>
        isVisible ? animMobile768(percent) : "none"} 2s linear forwards;
  
      r: ${R_TABLET768};
      cx: 70;
      cy: 70;
    }
  
    svg {
      position: absolute;
      top: 0;
      left: 0;
      width: 140px;
      height: 140px;
    }
}
`;

const OuterTablet = styled.div`
@media (max-width:835px) and (min-width:821px) {
    height: 140px;
    width: 140px;
    padding: 21px;
    border-radius: 50%;
    box-shadow: 5px 5px 8px -1px rgba(0, 0, 0, 0.15),
      -5px -5px 8px -1px rgba(255, 255, 255, 0.7);
}
@media (max-width:820px) and (min-width:769px) {
    height: 140px;
    width: 140px;
    padding: 21px;
    border-radius: 50%;
    box-shadow: 5px 5px 8px -1px rgba(0, 0, 0, 0.15),
      -5px -5px 8px -1px rgba(255, 255, 255, 0.7);
}
@media (max-width:768px) {
    height: 140px;
    width: 140px;
    padding: 21px;
    border-radius: 50%;
    box-shadow: 5px 5px 8px -1px rgba(0, 0, 0, 0.15),
      -5px -5px 8px -1px rgba(255, 255, 255, 0.7);
}
`;

const InnerTablet = styled.div`
@media (max-width:835px) and (min-width: 821px) {
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
@media (max-width:820px) and (min-width: 769px) {
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
@media (max-width:768px) {
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
      height:40px;
      width: 40px;
    }
}
`;
