import React from "react";
import styled, { keyframes } from "styled-components";
// import reactlogo from "../../images/reactjs.png";

const Circular = ({ data, isVisible }) => {
  return (
    <Skill percent={data.percent} isVisible={isVisible}>
      <Outer>
        <Inner>
          <img
            src={data.img}
            alt=""
            className="react-logo"
          />
        </Inner>
      </Outer>
      <svg height="160" width="160" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stopColor="#DA22FF" />
            <stop offset="100%" stopColor="#9733EE" />
          </linearGradient>
        </defs>
        <circle 
          r="70" 
          cx="80" 
          cy="80" 
          fill="url(#grad1)" 
          strokeLinecap="round"
        />
      </svg>
    </Skill>
  );
};

export default Circular;

const calculateStrokeDashoffset = (percent) => {
  const circumference = 2 * Math.PI * 70; // 70 is the radius of the circle
  return circumference - (percent / 100) * circumference;
};

const anim = (percent) => keyframes`
  100% {
    stroke-dashoffset: ${calculateStrokeDashoffset(percent)};
  }
`;

const Skill = styled.div`
  width: 160px;
  height: 160px;
  position: relative;
  
  circle {
    fill: none;
    stroke: url(#GradientColor);
    stroke-width: 20px;
    stroke-dasharray: ${2 * Math.PI * 70}; // 70 is the radius of the circle
    stroke-dashoffset: ${2 * Math.PI * 70}; // 70 is the radius of the circle
    animation: ${({ percent, isVisible }) => isVisible ? anim(percent) : ""} 2s linear forwards;
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Outer = styled.div`
  height: 160px;
  width: 160px;
  padding: 20px;
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
    -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
  border-radius: 50%;
`;

const Inner = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
    inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7),
    -0.5px -0.5px 0px rgba(255, 255, 255, 1),
    0.5px 0.5px 0.5px 0px rgba(0, 0, 0, 0.15),
    0px 12px 10px -10px rgba(0, 0, 0, 0.05);
  justify-content: space-around;

  img {
    height: 70px;
    width: 70px;
  }
`;

const Image = styled.img``;
