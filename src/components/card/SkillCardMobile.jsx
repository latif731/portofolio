import React, { useState, useEffect } from "react";
import Circular from "../circular/Circular";
import CircularMobile from "../circular/CircularMobile";
import styled from "styled-components";

const SkillCardMobile = ({ data, isVisible }) => {
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
      <CircularMobile data={data} isVisible={isVisible} />
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

export default SkillCardMobile;

const Container = styled.div`
  @media (max-width: 428px) {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    justify-content: center; 
    /* margin */
     border-radius: 2rem;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
      -6px -6px 10px -1px rgba(255, 255, 255, 0.2); 
    /* border: 1px solid red; */
    /* padding: 2rem 5rem 2rem 5rem; */
    width: 15rem;
    height:15rem;
    margin-left: 1.5rem;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
  }
  @media (max-width: 415px) {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    justify-content: center; 
    /* margin */
     border-radius: 2rem;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
      -6px -6px 10px -1px rgba(255, 255, 255, 0.2); 
    /* border: 1px solid red; */
    /* padding: 2rem 5rem 2rem 5rem; */
    width: 15rem;
    height:15rem;
    margin-left: 1.5rem;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
  }
  @media (max-width: 412px) {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    justify-content: center; 
    /* margin */
     border-radius: 2rem;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
      -6px -6px 10px -1px rgba(255, 255, 255, 0.2); 
    /* border: 1px solid red; */
    /* padding: 2rem 5rem 2rem 5rem; */
    width: 15rem;
    height:15rem;
    margin-left: 1.5rem;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
  }
  @media (max-width: 395px) {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    justify-content: center; 
    /* margin */
     border-radius: 2rem;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
      -6px -6px 10px -1px rgba(255, 255, 255, 0.2); 
    /* border: 1px solid red; */
    /* padding: 2rem 5rem 2rem 5rem; */
    width: 15rem;
    height:15rem;
    margin-left: 1.5rem;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
  }
  @media (max-width: 391px) {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    justify-content: center; 
    /* margin */
     border-radius: 2rem;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
      -6px -6px 10px -1px rgba(255, 255, 255, 0.2); 
    /* border: 1px solid red; */
    /* padding: 2rem 5rem 2rem 5rem; */
    width: 15rem;
    height:15rem;
    margin-left: 1.5rem;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
  }
  @media (max-width: 376px) {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    justify-content: center; 
    /* margin */
     border-radius: 2rem;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
      -6px -6px 10px -1px rgba(255, 255, 255, 0.2); 
    /* border: 1px solid red; */
    /* padding: 2rem 5rem 2rem 5rem; */
    width: 15rem;
    height:15rem;
    margin-left: 1.5rem;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
  }
  @media (max-width: 360px) {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    justify-content: center; 
    /* margin */
     border-radius: 2rem;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
      -6px -6px 10px -1px rgba(255, 255, 255, 0.2); 
    /* border: 1px solid red; */
    /* padding: 2rem 5rem 2rem 5rem; */
    width: 15rem;
    height:15rem;
    margin-left: 1.5rem;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
  }
  @media (max-width: 320px) {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    justify-content: center; 
    /* margin */
     border-radius: 2rem;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
      -6px -6px 10px -1px rgba(255, 255, 255, 0.2); 
    /* border: 1px solid red; */
    /* padding: 2rem 5rem 2rem 5rem; */
    width: 15rem;
    height:15rem;
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
@media (max-width:428px) {
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  /* display: none; */
}
@media (max-width:415px) {
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  /* display: none; */
}
@media (max-width:412px) {
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  /* display: none; */
}
@media (max-width:395px) {
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  /* display: none; */
}
@media (max-width:391px) {
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  /* display: none; */
}
@media (max-width:376px) {
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  /* display: none; */
}
@media (max-width:360px) {
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  /* display: none; */
}
@media (max-width:320px) {
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  /* display: none; */
}
`;
