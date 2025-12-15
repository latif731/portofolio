import React, { useState } from "react";
import styled from "styled-components";
import { RxCross1 } from "react-icons/rx";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useTranslation } from "react-i18next";

const FigmaDetailCard = ({ setOpenFigmaDetail,selectedFigmaDetail }) => {
  const [selectedImage, setSelectedImage]= useState(selectedFigmaDetail.imageData[0])
  const {t} = useTranslation()
  const handleDetailOpen = () => {
    setOpenFigmaDetail(false);
  };

  return (
    <Container>
      <ContentWrapper>
        <Cross 
        onClick={handleDetailOpen}
        >
          <RxCross1 color="white" />
        </Cross>
        <TitleHeader>
          <h1
            style={{
              color: "white",
            }}
          >
             {/* Detail Figma */}
             {t("porto menu.Detail Figma")}
          </h1>
        </TitleHeader>
        <Content>
        <Title>
            <h2>{selectedFigmaDetail.titleHeader}</h2>
        </Title>
        <ButtonWrapper>
            {selectedFigmaDetail.imageData.map((image) => (
              <Button key={image.id} onClick={() => setSelectedImage(image)}>
                {image.title}
              </Button>
            ))}
        </ButtonWrapper>
        <TransformWrapper initialScale={1} initialPositionX={200} initialPositionY={100}>
            <TransformComponent>
              <img 
              src={selectedImage.img} 
              alt={selectedImage.title} 
              width={""} />
            </TransformComponent>
          </TransformWrapper>
        </Content>
      </ContentWrapper>
    </Container>
  );
};

export default FigmaDetailCard;

const Container = styled.div`
/* WEB RESPONSIVE */
@media (max-width:1920px) {
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
@media (max-width: 1115px) and (min-width: 1025px) {
  position: fixed;
  top: -20px;
  left: -15px;
  width: 90rem;
  height: 102px;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  // gap:"2rem",
  padding-left: 1rem;
  padding-top: 2rem;
  // justifyContent: "center",
  // alignItems: "center",
  // paddingTop: "3rem",
  z-index: 999;
  // position:"relative"
}
@media (max-width: 1024px) and (min-width: 834px) {
  position: fixed;
  top: 0px;
  left: -15px;
  width: 90rem;
  height: 102px;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  // gap:"2rem",
  padding-left: 1rem;
  padding-top: 2rem;
  // justifyContent: "center",
  // alignItems: "center",
  // paddingTop: "3rem",
  z-index: 999;
  // position:"relative"
}
@media (max-width: 820px) {
  position: fixed;
  top: 0px;
  left: -15px;
  width: 90rem;
  height: 102px;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  // gap:"2rem",
  padding-left: 1rem;
  padding-top: 2rem;
  // justifyContent: "center",
  // alignItems: "center",
  // paddingTop: "3rem",
  z-index: 999;
  // position:"relative"
}
@media (max-width: 800px) {
  position: fixed;
  top: 0px;
  left: -15px;
  width: 90rem;
  height: 102px;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  // gap:"2rem",
  padding-left: 1rem;
  padding-top: 2rem;
  // justifyContent: "center",
  // alignItems: "center",
  // paddingTop: "3rem",
  z-index: 999;
  // position:"relative"
}
@media (max-width: 768px) {
  position: fixed;
  top: 0px;
  left: -15px;
  width: 785px;
  height: 102px;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  // gap:"2rem",
  padding-left: 1rem;
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
    top: 0px;
    left: -15px;
    width: 620px;
    height: 102px;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    // gap:"2rem",
    padding-left: 1rem;
    padding-top: 2rem;
    // justifyContent: "center",
    // alignItems: "center",
    // paddingTop: "3rem",
    z-index: 999;
    // position:"relative"
  }
  @media (max-width: 415px) {
    position: fixed;
    top: 0px;
    left: -15px;
    width: 620px;
    height: 102px;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    // gap:"2rem",
    padding-left: 1rem;
    padding-top: 2rem;
    // justifyContent: "center",
    // alignItems: "center",
    // paddingTop: "3rem",
    z-index: 999;
    // position:"relative"
  }
  @media (max-width: 412px) {
    position: fixed;
    top: 0px;
    left: -15px;
    width: 620px;
    height: 102px;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    // gap:"2rem",
    padding-left: 1rem;
    padding-top: 2rem;
    // justifyContent: "center",
    // alignItems: "center",
    // paddingTop: "3rem",
    z-index: 999;
    // position:"relative"
  }
  @media (max-width: 395px) {
    position: fixed;
    top: 0px;
    left: -15px;
    width: 620px;
    height: 102px;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    // gap:"2rem",
    padding-left: 1rem;
    padding-top: 2rem;
    // justifyContent: "center",
    // alignItems: "center",
    // paddingTop: "3rem",
    z-index: 999;
    // position:"relative"
  }
  @media (max-width: 391px) {
    position: fixed;
    top: 0px;
    left: -15px;
    width: 620px;
    height: 102px;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    // gap:"2rem",
    padding-left: 1rem;
    padding-top: 2rem;
    // justifyContent: "center",
    // alignItems: "center",
    // paddingTop: "3rem",
    z-index: 999;
    // position:"relative"
  }
  @media (max-width: 376px) {
    position: fixed;
    top: 0px;
    left: -15px;
    width: 620px;
    height: 102px;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    // gap:"2rem",
    padding-left: 1rem;
    padding-top: 2rem;
    // justifyContent: "center",
    // alignItems: "center",
    // paddingTop: "3rem",
    z-index: 999;
    // position:"relative"
  }

  @media (max-width: 360px) {
    position: fixed;
    top: 0px;
    left: -15px;
    width: 620px;
    height: 102px;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    // gap:"2rem",
    padding-left: 1rem;
    padding-top: 2rem;
    // justifyContent: "center",
    // alignItems: "center",
    // paddingTop: "3rem",
    z-index: 999;
    // position:"relative"
  }
  @media (max-width: 320px) {
    position: fixed;
    top: 0px;
    left: -15px;
    width: 620px;
    height: 102px;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    // gap:"2rem",
    padding-left: 1rem;
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
@media (max-width:1920px) {
  width: 900px;
  height: 650px;
  background-color: #191923;
  padding: 3rem;
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
@media (max-width: 1115px) and (min-width: 1025px) {
  width: 69.5rem;
  height: 43rem;
  background-color: #191923;
  padding: 1rem;
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
@media (max-width: 1024px) and (min-width: 834px) {
  width: 52rem;
  height: 80rem;
  background-color: #191923;
  padding: 1rem;
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
@media (max-width:820px) {
  width: 51rem;
  height: 80rem;
  background-color: #191923;
  padding: 1rem;
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
@media (max-width:800px) {
  width: 49.8rem;
  height: 80rem;
  background-color: #191923;
  padding: 1rem;
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
@media (max-width:768px) {
  width: 780.8px;
  height: 880px;
  background-color: #191923;
  padding: 1rem;
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
@media (max-width:428px) {
  width: 425.8px;
  height: 850px;
  background-color: #191923;
  padding: 1rem;
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
@media (max-width:415px) {
  width: 411.8px;
  height: 850px;
  background-color: #191923;
  padding: 1rem;
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
@media (max-width:412px) {
  width: 408.8px;
  height: 850px;
  background-color: #191923;
  padding: 1rem;
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
@media (max-width:395px) {
  width: 391px;
  height: 850px;
  background-color: #191923;
  padding: 1rem;
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
@media (max-width:391px) {
  width: 388.5px;
  height: 850px;
  background-color: #191923;
  padding: 1rem;
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
@media (max-width:376px) {
  width: 373px;
  height: 850px;
  background-color: #191923;
  padding: 1rem;
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
@media (max-width:360px) {
  width: 358px;
  height: 700px;
  background-color: #191923;
  padding: 1rem;
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
@media (max-width:320px) {
  width: 317px;
  height: 650px;
  background-color: #191923;
  padding: 1rem;
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
@media (max-width:1920px) {
  text-align: center;
}
`;

const TitleHeader = styled.div`
  @media (max-width:768px) {
    h1{
      text-align: center;
    }
  }
  @media (max-width: 1115px) and (min-width: 1025px) {
    h1{
      text-align: center;
    }
  }
  @media (max-width: 1024px) and (min-width: 834px) {
    h1{
      text-align: center;
    }
  }
  @media (max-width:820px) {
    h1{
      text-align: center;
    }
  }
  @media (max-width:800px) {
    h1{
      text-align: center;
    }
  }
  @media (max-width:768px) {
    h1{
      text-align: center;
    }
  }
`;

const Content = styled.div`
/* WEB RESPONSIVE */
@media (max-width:1920px) {
  padding: 2rem;
  img{
    width: 750px;
  }
}

/* TABLET RESPONSIVE */
@media (max-width: 1115px) and (min-width: 1025px) {
  padding: 1rem;
  img{
    width: 65rem;
  }
}
@media (max-width: 1024px) and (min-width: 834px) {
  padding: 1rem;
  img{
    width: 764px;
  }
}
@media (max-width:820px) {
  padding: 1rem;
  img{
    width: 747px;
  }
}
@media (max-width:800px) {
  padding: 1rem;
  img{
    width: 730px;
  }
}
@media (max-width:768px) {
  padding: 1rem;
  img{
    width: 701px;
  }
}

/* MOBILE RESPONSIVE */
@media (max-width:428px) {
  padding: 1rem;
  img{
    width: 360px;
  }
}
@media (max-width:415px) {
  padding: 1rem;
  img{
    width: 345px;
  }
}
@media (max-width:412px) {
  padding: 1rem;
  img{
    width: 323px;
  }
}
@media (max-width:395px) {
  padding: 1rem;
  img{
    width: 323px;
  }
}
@media (max-width:391px) {
  padding: 1rem;
  img{
    width: 323px;
  }
}
@media (max-width:376px) {
  padding: 1rem;
  img{
    width: 310px;
  }
}
@media (max-width:360px) {
  padding: 1rem;
  img{
    width: 290px;
  }
}
@media (max-width:320px) {
  padding: 1rem;
  img{
    width: 255px;
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
@media (max-width:1920px) {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
}
`;

const ContentVideo = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
@media (max-width:1920px) {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
}
`;


const Button = styled.button`
@media (max-width:1920px) {
  background-color: #333;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: #555;
  }
}
`;
