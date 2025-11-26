import React from "react";
import styled, { keyframes } from "styled-components";

const CircularMobile = ({ data, isVisible }) => {
  return (
    <SkillMobile percent={data.percent} isVisible={isVisible}>
      <OuterMobile>
        <InnerMobile>
          <img src={data.img} alt="" />
        </InnerMobile>
      </OuterMobile>

      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="GradientColorMobile">
            <stop offset="0%" stopColor="#DA22FF" />
            <stop offset="100%" stopColor="#9733EE" />
          </linearGradient>
        </defs>

        <circle className="mobile-circle" strokeLinecap="round" />
      </svg>
    </SkillMobile>
  );
};

export default CircularMobile;

/* =============================
   RADIUS KECIL (MOBILE)
============================= */
const R_SMALL = 55;
const circumference = 2 * Math.PI * R_SMALL;

const dashOffset = (percent) =>
  circumference - (percent / 100) * circumference;

const animMobile = (percent) => keyframes`
  100% { stroke-dashoffset: ${dashOffset(percent)}; }
`;

/* =============================
   STYLING MOBILE
============================= */
const SkillMobile = styled.div`
  width: 120px;
  height: 120px;
  position: relative;

  circle.mobile-circle {
    fill: none;
    stroke: url(#GradientColorMobile);
    stroke-width: 16px;

    stroke-dasharray: ${circumference};
    stroke-dashoffset: ${circumference};

    animation: ${({ percent, isVisible }) =>
      isVisible ? animMobile(percent) : "none"} 2s linear forwards;

    r: ${R_SMALL};
    cx: 60;
    cy: 60;
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 123px;
    height: 123px;
  }
`;

const OuterMobile = styled.div`
  height: 120px;
  width: 120px;
  padding: 15px;
  border-radius: 50%;
  box-shadow: 5px 5px 8px -1px rgba(0, 0, 0, 0.15),
    -5px -5px 8px -1px rgba(255, 255, 255, 0.7);
`;

const InnerMobile = styled.div`
  height: 90px;
  width: 90px;
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
`;
