import React, { useState, useEffect } from "react";
import Circular from "../circular/Circular";
import CircularMobile from "../circular/CircularMobile";
import CircularTablet from "../circular/CircularTablet";
import styled from "styled-components";

const SkillCardTablet = ({ data, isVisible }) => {
  // console.log("skill card", isVisible)
  const [percent, setPercent] = useState(0);

  // useEffect(() => {
  //   let start = 0;
  //   const end = data.percent

  //   if(start === end) return;

  //   const incrementTime = (2 / end);
  //   const timer = setInterval(() => {
  //     start += 1;
  //     setPercent(start);
  //     if(start === end) clearInterval(timer);
  //   }, incrementTime);

  //   return () => clearInterval(timer)

  // },[data.percent])

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = data.percent;

      if (start === end) return;

      const incrementTime = 2 / end;
      const timer = setInterval(() => {
        start += 1;
        setPercent(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [data.percent, isVisible]);

  return (
    <Container>
      <CircularTablet data={data} isVisible={isVisible} />
      <Content>
        <Percent>
          <h4>{percent} %</h4>
        </Percent>
        <Title>
          <h5>{data.title}</h5>
        </Title>
      </Content>
    </Container>
  );
};

export default SkillCardTablet;

const Container = styled.div`
  /* overflow: visible !important;; */
  @media (max-width: 835px) and (min-width:821px) {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    border-radius: 2rem;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
      -6px -6px 10px -1px rgba(255, 255, 255, 0.2);
    width: 20rem;
    height: 20rem;
    margin-left: 1.5rem;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
  }
  @media (max-width: 820px) and (min-width:769px) {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    border-radius: 2rem;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
      -6px -6px 10px -1px rgba(255, 255, 255, 0.2);
    width: 20rem;
    height: 20rem;
    margin-left: 1.5rem;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
  }
  @media (max-width: 768px) {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    border-radius: 2rem;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
      -6px -6px 10px -1px rgba(255, 255, 255, 0.2);
    width: 20rem;
    height: 20rem;
    margin-left: 1.5rem;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
  }
`;

const Title = styled.div``;

const Percent = styled.div``;

const Content = styled.div`
  /* @media (max-width: 1114px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    display: none;
  } */
  @media (max-width: 835px) and (min-width:821px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    /* display: none; */
  }
  @media (max-width: 820px) and (min-width: 769px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    /* display: none; */
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    
    /* display: none; */
  }
`;
