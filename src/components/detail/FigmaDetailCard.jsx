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
              <img src={selectedImage.img} alt={selectedImage.title} width={"750px"} />
            </TransformComponent>
          </TransformWrapper>
        </Content>
      </ContentWrapper>
    </Container>
  );
};

export default FigmaDetailCard;

const Container = styled.div`
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
`;

const ContentWrapper = styled.div`
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
`;

const ContentDetail = styled.div``;

const Title = styled.div`
  text-align: center;
`;

const TitleHeader = styled.div``;

const Content = styled.div`
  padding: 2rem;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2rem;
`;

const Cross = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
`;

const ContentVideo = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
`;


const Button = styled.button`
  background-color: #333;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: #555;
  }
`;
