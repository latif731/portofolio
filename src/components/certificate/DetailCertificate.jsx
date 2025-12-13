import React from "react";
import styled from "styled-components";
import { RxCross1 } from "react-icons/rx";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const PortoDetailCard = ({ selectedDetail, setOpenDetail }) => {
  const handleDetailOpen = () => {
    setOpenDetail(false);
  };
  return (
    <Container>
      <ContentWrapper>
        <Cross onClick={handleDetailOpen}>
          <RxCross1 color="white" />
        </Cross>
        <TitleHeader>
          <h1
            style={{
              color: "white",
            }}
          >
            My Detail Certificate
          </h1>
        </TitleHeader>
        <Content>
          <TransformWrapper
          // initialScale={1}
          // initialPositionX={200}
          // initialPositionY={100}
          >
            <TransformComponent>
              <img src={selectedDetail.img} alt={""} style={{}} />
            </TransformComponent>
          </TransformWrapper>
        </Content>
      </ContentWrapper>
    </Container>
  );
};

export default PortoDetailCard;

const Container = styled.div`
  /* WEB RESPONSIVE */
  @media (max-width: 1920px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 1550px;
    height: 1024px;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    // gap:"2rem",
    padding-left: 20rem;
    padding-top: 2rem;
    // justifyContent: "center",
    // alignItems: "center",
    // paddingTop: "3rem",
    z-index: 999;
    // position:"relative"
  }
  
  /* TABLET RESPONSIVE */
  @media (max-width: 1115px) {
    position: fixed;
    top: -20px;
    left: -320px;
    width: 1550px;
    height: 1024px;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    // gap:"2rem",
    padding-left: 20rem;
    padding-top: 2rem;
    // justifyContent: "center",
    // alignItems: "center",
    // paddingTop: "3rem",
    z-index: 999;
    // position:"relative"
  }
  @media (max-width: 835px) {
    position: fixed;
    top: -20px;
    left: -310px;
    width: 1550px;
    height: 1024px;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    // gap:"2rem",
    padding-left: 20rem;
    padding-top: 2rem;
    // justifyContent: "center",
    // alignItems: "center",
    // paddingTop: "3rem",
    z-index: 999;
    // position:"relative"
  }
  @media (max-width: 820px) {
    position: fixed;
    top: -20px;
    left: -310px;
    width: 1550px;
    height: 1024px;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    // gap:"2rem",
    padding-left: 20rem;
    padding-top: 2rem;
    // justifyContent: "center",
    // alignItems: "center",
    // paddingTop: "3rem",
    z-index: 999;
    // position:"relative"
  }
  @media (max-width: 800px) {
    position: fixed;
    top: -20px;
    left: -310px;
    width: 1550px;
    height: 1024px;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    // gap:"2rem",
    padding-left: 20rem;
    padding-top: 2rem;
    // justifyContent: "center",
    // alignItems: "center",
    // paddingTop: "3rem",
    z-index: 999;
    // position:"relative"
  }
  @media (max-width: 768px) {
    position: fixed;
    top: -20px;
    left: -310px;
    width: 1550px;
    height: 1024px;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    // gap:"2rem",
    padding-left: 20rem;
    padding-top: 2rem;
    // justifyContent: "center",
    // alignItems: "center",
    // paddingTop: "3rem",
    z-index: 999;
    // position:"relative"
  }


  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    position: fixed;
    top: 30px;
    left: -315px;
    width: 750px;
    height: 1024px;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    // gap:"2rem",
    padding-left: 20rem;
    padding-top: 2rem;
    // justifyContent: "center",
    // alignItems: "center",
    // paddingTop: "3rem",
    z-index: 999;
    // position:"relative"
  }
  @media (max-width: 415px) {
    position: fixed;
    top: 30px;
    left: -315px;
    width: 728px;
    height: 1024px;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    // gap:"2rem",
    padding-left: 20rem;
    padding-top: 2rem;
    // justifyContent: "center",
    // alignItems: "center",
    // paddingTop: "3rem",
    z-index: 999;
    // position:"relative"
  }
  @media (max-width: 412px) {
    position: fixed;
    top: 30px;
    left: -315px;
    width: 725px;
    height: 1024px;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    // gap:"2rem",
    padding-left: 20rem;
    padding-top: 2rem;
    // justifyContent: "center",
    // alignItems: "center",
    // paddingTop: "3rem",
    z-index: 999;
    // position:"relative"
  }
  @media (max-width: 395px) {
    position: fixed;
    top: 30px;
    left: -315px;
    width: 705px;
    height: 1024px;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    // gap:"2rem",
    padding-left: 20rem;
    padding-top: 2rem;
    // justifyContent: "center",
    // alignItems: "center",
    // paddingTop: "3rem",
    z-index: 999;
    // position:"relative"
  }
  @media (max-width: 391px) {
    position: fixed;
    top: 30px;
    left: -315px;
    width: 700px;
    height: 1024px;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    // gap:"2rem",
    padding-left: 20rem;
    padding-top: 2rem;
    // justifyContent: "center",
    // alignItems: "center",
    // paddingTop: "3rem",
    z-index: 999;
    // position:"relative"
  }
  @media (max-width: 376px) {
    position: fixed;
    top: 30px;
    left: -315px;
    width: 685px;
    height: 1024px;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    // gap:"2rem",
    padding-left: 20rem;
    padding-top: 2rem;
    // justifyContent: "center",
    // alignItems: "center",
    // paddingTop: "3rem",
    z-index: 999;
    // position:"relative"
  }
  @media (max-width: 360px) {
    position: fixed;
    top: 30px;
    left: -315px;
    width: 670px;
    height: 1024px;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    // gap:"2rem",
    padding-left: 20rem;
    padding-top: 2rem;
    // justifyContent: "center",
    // alignItems: "center",
    // paddingTop: "3rem",
    z-index: 999;
    // position:"relative"
  }
  @media (max-width: 320px) {
    position: fixed;
    top: 30px;
    left: -315px;
    width: 630px;
    height: 1024px;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    // gap:"2rem",
    padding-left: 20rem;
    padding-top: 2rem;
    // justifyContent: "center",
    // alignItems: "center",
    // paddingTop: "3rem",
    z-index: 999;
    // position:"relative"
  }
`;

const ContentWrapper = styled.div`
  /* WEB RESPONSIVE */
  @media (max-width: 1920px) {
    width: 900px;
    height: 650px;
    padding: 3rem;
    background-color: #191923;
    border-radius: 2%;
    overflow-y: auto;
    box-shadow: 5px 5px 15px rgba(255, 251, 251, 0.5);
    &::-webkit-scrollbar {
      width: 8px; /* Lebar scrollbar */
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.2); /* Warna thumb scrollbar */
      border-radius: 4px; /* Radius sudut */
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: rgba(255, 255, 255, 0.4); /* Warna thumb saat dihover */
    }
    &::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0.1); /* Warna track scrollbar */
    }
  }

  /* TABLET RESPONSIVE */
  @media (max-width: 1115px) {
    width: 1150px;
    height: 45rem;
    padding: 3rem;
    background-color: #191923;
    border-radius: 2%;
    overflow-y: auto;
    box-shadow: 5px 5px 15px rgba(255, 251, 251, 0.5);
    &::-webkit-scrollbar {
      width: 8px; /* Lebar scrollbar */
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.2); /* Warna thumb scrollbar */
      border-radius: 4px; /* Radius sudut */
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: rgba(255, 255, 255, 0.4); /* Warna thumb saat dihover */
    }
    &::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0.1); /* Warna track scrollbar */
    }
  }
  @media (max-width: 835px) {
    width: 822px;
    height: 69rem;
    padding: 3rem;
    background-color: #191923;
    border-radius: 2%;
    overflow-y: auto;
    box-shadow: 5px 5px 15px rgba(255, 251, 251, 0.5);
    &::-webkit-scrollbar {
      width: 8px; /* Lebar scrollbar */
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.2); /* Warna thumb scrollbar */
      border-radius: 4px; /* Radius sudut */
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: rgba(255, 255, 255, 0.4); /* Warna thumb saat dihover */
    }
    &::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0.1); /* Warna track scrollbar */
    }
  }
  @media (max-width: 820px) {
    width: 808px;
    height: 71rem;
    padding: 3rem;
    background-color: #191923;
    border-radius: 2%;
    overflow-y: auto;
    box-shadow: 5px 5px 15px rgba(255, 251, 251, 0.5);
    &::-webkit-scrollbar {
      width: 8px; /* Lebar scrollbar */
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.2); /* Warna thumb scrollbar */
      border-radius: 4px; /* Radius sudut */
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: rgba(255, 255, 255, 0.4); /* Warna thumb saat dihover */
    }
    &::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0.1); /* Warna track scrollbar */
    }
  }
  @media (max-width: 800px) {
    width: 789px;
    height: 100rem;
    padding: 3rem;
    background-color: #191923;
    border-radius: 2%;
    overflow-y: auto;
    box-shadow: 5px 5px 15px rgba(255, 251, 251, 0.5);
    &::-webkit-scrollbar {
      width: 8px; /* Lebar scrollbar */
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.2); /* Warna thumb scrollbar */
      border-radius: 4px; /* Radius sudut */
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: rgba(255, 255, 255, 0.4); /* Warna thumb saat dihover */
    }
    &::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0.1); /* Warna track scrollbar */
    }
  }
  @media (max-width: 768px) {
    width: 750px;
    height: 950px;
    padding: 3rem;
    background-color: #191923;
    border-radius: 2%;
    overflow-y: auto;
    box-shadow: 5px 5px 15px rgba(255, 251, 251, 0.5);
    &::-webkit-scrollbar {
      width: 8px; /* Lebar scrollbar */
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.2); /* Warna thumb scrollbar */
      border-radius: 4px; /* Radius sudut */
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: rgba(255, 255, 255, 0.4); /* Warna thumb saat dihover */
    }
    &::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0.1); /* Warna track scrollbar */
    }
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    width: 900px;
    height: 850px;
    padding: 1rem;
    background-color: #191923;
    border-radius: 2%;
    overflow-y: auto;
    box-shadow: 5px 5px 15px rgba(255, 251, 251, 0.5);
    &::-webkit-scrollbar {
      width: 8px; /* Lebar scrollbar */
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.2); /* Warna thumb scrollbar */
      border-radius: 4px; /* Radius sudut */
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: rgba(255, 255, 255, 0.4); /* Warna thumb saat dihover */
    }
    &::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0.1); /* Warna track scrollbar */
    }
  }
  @media (max-width: 415px) {
    width: 900px;
    height: 850px;
    padding: 1rem;
    background-color: #191923;
    border-radius: 2%;
    overflow-y: auto;
    box-shadow: 5px 5px 15px rgba(255, 251, 251, 0.5);
    &::-webkit-scrollbar {
      width: 8px; /* Lebar scrollbar */
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.2); /* Warna thumb scrollbar */
      border-radius: 4px; /* Radius sudut */
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: rgba(255, 255, 255, 0.4); /* Warna thumb saat dihover */
    }
    &::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0.1); /* Warna track scrollbar */
    }
  }
  @media (max-width: 412px) {
    width: 900px;
    height: 850px;
    padding: 1rem;
    background-color: #191923;
    border-radius: 2%;
    overflow-y: auto;
    box-shadow: 5px 5px 15px rgba(255, 251, 251, 0.5);
    &::-webkit-scrollbar {
      width: 8px; /* Lebar scrollbar */
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.2); /* Warna thumb scrollbar */
      border-radius: 4px; /* Radius sudut */
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: rgba(255, 255, 255, 0.4); /* Warna thumb saat dihover */
    }
    &::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0.1); /* Warna track scrollbar */
    }
  }
  @media (max-width: 395px) {
    width: 900px;
    height: 725px;
    padding: 1rem;
    background-color: #191923;
    border-radius: 2%;
    overflow-y: auto;
    box-shadow: 5px 5px 15px rgba(255, 251, 251, 0.5);
    &::-webkit-scrollbar {
      width: 8px; /* Lebar scrollbar */
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.2); /* Warna thumb scrollbar */
      border-radius: 4px; /* Radius sudut */
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: rgba(255, 255, 255, 0.4); /* Warna thumb saat dihover */
    }
    &::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0.1); /* Warna track scrollbar */
    }
  }
  @media (max-width: 391px) {
    width: 900px;
    height: 725px;
    padding: 1rem;
    background-color: #191923;
    border-radius: 2%;
    overflow-y: auto;
    box-shadow: 5px 5px 15px rgba(255, 251, 251, 0.5);
    &::-webkit-scrollbar {
      width: 8px; /* Lebar scrollbar */
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.2); /* Warna thumb scrollbar */
      border-radius: 4px; /* Radius sudut */
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: rgba(255, 255, 255, 0.4); /* Warna thumb saat dihover */
    }
    &::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0.1); /* Warna track scrollbar */
    }
  }
  @media (max-width: 376px) {
    width: 900px;
    height: 700px;
    padding: 1rem;
    background-color: #191923;
    border-radius: 2%;
    overflow-y: auto;
    box-shadow: 5px 5px 15px rgba(255, 251, 251, 0.5);
    &::-webkit-scrollbar {
      width: 8px; /* Lebar scrollbar */
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.2); /* Warna thumb scrollbar */
      border-radius: 4px; /* Radius sudut */
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: rgba(255, 255, 255, 0.4); /* Warna thumb saat dihover */
    }
    &::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0.1); /* Warna track scrollbar */
    }
  }
  @media (max-width: 360px) {
    width: 900px;
    height: 720px;
    padding: 1rem;
    background-color: #191923;
    border-radius: 2%;
    overflow-y: auto;
    box-shadow: 5px 5px 15px rgba(255, 251, 251, 0.5);
    &::-webkit-scrollbar {
      width: 8px; /* Lebar scrollbar */
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.2); /* Warna thumb scrollbar */
      border-radius: 4px; /* Radius sudut */
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: rgba(255, 255, 255, 0.4); /* Warna thumb saat dihover */
    }
    &::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0.1); /* Warna track scrollbar */
    }
  }
  @media (max-width: 320px) {
    width: 900px;
    height: 480px;
    padding: 1rem;
    background-color: #191923;
    border-radius: 2%;
    overflow-y: auto;
    box-shadow: 5px 5px 15px rgba(255, 251, 251, 0.5);
    &::-webkit-scrollbar {
      width: 8px; /* Lebar scrollbar */
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.2); /* Warna thumb scrollbar */
      border-radius: 4px; /* Radius sudut */
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: rgba(255, 255, 255, 0.4); /* Warna thumb saat dihover */
    }
    &::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0.1); /* Warna track scrollbar */
    }
  }
`;

const ContentDetail = styled.div``;

const Title = styled.div`
  text-align: center;
`;

const TitleHeader = styled.div`
/* TABLET RESPONSIVE */
@media (max-width: 1115px) {
  h1 {
    text-align: center;
    font-size: 30px;
  }
}
@media (max-width: 835px) {
  h1 {
    text-align: center;
    font-size: 30px;
  }
}
@media (max-width: 820px) {
  h1 {
    text-align: center;
    font-size: 30px;
  }
}
@media (max-width: 800px) {
  h1 {
    text-align: center;
    font-size: 30px;
  }
}
@media (max-width: 768px) {
  h1 {
    text-align: center;
    font-size: 30px;
  }
}
/* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    h1 {
      text-align: center;
      font-size: 20px;
    }
  }
  @media (max-width: 415px) {
    h1 {
      text-align: center;
      font-size: 20px;
    }
  }
  @media (max-width: 412px) {
    h1 {
      text-align: center;
      font-size: 20px;
    }
  }
  @media (max-width: 395px) {
    h1 {
      text-align: center;
      font-size: 20px;
    }
  }
  @media (max-width: 391px) {
    h1 {
      text-align: center;
      font-size: 20px;
    }
  }
  @media (max-width: 376px) {
    h1 {
      text-align: center;
      font-size: 20px;
    }
  }
  @media (max-width: 360px) {
    h1 {
      text-align: center;
      font-size: 20px;
    }
  }
  @media (max-width: 320px) {
    h1 {
      text-align: center;
      font-size: 20px;
    }
  }
`;

const Content = styled.div`
  /* WEB RESPONSIVE */
  @media (max-width: 1920px) {
    padding: 2rem;
    img {
      width: 750px;
    }
  }

  /* TABLET RESPONSIVE */
  @media (max-width: 1115px) {
    padding-top: 2rem;
    padding-left: 0rem;
    img {
      width: 1020px;
    }
  }
  @media (max-width: 835px) {
    padding-top: 2rem;
    padding-left: 0rem;
    img {
      width: 720px;
    }
  }
  @media (max-width: 820px) {
    padding-top: 2rem;
    padding-left: 0rem;
    img {
      width: 690px;
    }
  }
  @media (max-width: 800px) {
    padding-top: 2rem;
    padding-left: 0rem;
    img {
      width: 690px;
    }
  }
  @media (max-width: 768px) {
    padding-top: 2rem;
    padding-left: 0rem;
    img {
      width: 650px;
    }
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    padding-top: 2rem;
    padding-left: 0rem;
    img {
      width: 390px;
    }
  }
  @media (max-width: 415px) {
    padding-top: 2rem;
    padding-left: 0rem;
    img {
      width: 375px;
    }
  }
  @media (max-width: 412px) {
    padding-top: 2rem;
    padding-left: 0rem;
    img {
      width: 375px;
    }
  }
  @media (max-width: 395px) {
    padding-top: 2rem;
    padding-left: 0rem;
    img {
      width: 350px;
    }
  }
  @media (max-width: 391px) {
    padding-top: 2rem;
    padding-left: 0rem;
    img {
      width: 345px;
    }
  }
  @media (max-width: 376px) {
    padding-top: 2rem;
    padding-left: 0rem;
    img {
      width: 330px;
    }
  }
  @media (max-width: 360px) {
    padding-top: 2rem;
    padding-left: 0rem;
    img {
      width: 320px;
    }
  }
  @media (max-width: 320px) {
    padding-top: 2rem;
    padding-left: 0rem;
    img {
      width: 277px;
    }
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2rem;
`;

const Cross = styled.div`
  @media (max-width: 1920px) {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2rem;
  }
`;

const ContentVideo = styled.div`
  display: flex;
  justify-content: center;
`;
