import React from "react";
import styled from "styled-components";
import { RxCross1 } from "react-icons/rx";
import { useTranslation } from "react-i18next";

const PortoDetailCard = ({ setOpenPortoDetail, selectedPortoDetail }) => {
  const handleDetailOpen = () => {
    setOpenPortoDetail(false);
  };
  const { t } = useTranslation();
  return (
    <Container>
      <ContentWrapper>
        <Cross onClick={handleDetailOpen}>
          <RxCross1 color="white" />
        </Cross>
        <TitleHeader>
          <h1>
            {/* My Detail Project */}
            {t("portofolio.title4")}
          </h1>
        </TitleHeader>
        <Content>
          <Title>
            <h2>{selectedPortoDetail.title}</h2>
          </Title>
          <MainContent>
            {/* <h4>type : {selectedPortoDetail.type}</h4> */}
            <Type>
              <h4>
                {t("porto menu.type")} : {selectedPortoDetail.type}
              </h4>
            </Type>

            {/* <video src={videoObj.url} loop muted id="autoplay"/> */}
            <ChildContent>
              {/* <h4>Desc :</h4> */}
              <h4>{t("porto menu.desc")} :</h4>
              <p
                style={{
                  whiteSpace: "pre-wrap",
                }}
              >
                {selectedPortoDetail.detail_description}
              </p>
            </ChildContent>
            <ToolContainer>
              {/* <h4>Tools/Library/Framework :</h4> */}
              <h4>{t("porto menu.tool")}:</h4>
              <ToolContent>
                {selectedPortoDetail.tools.map((tool, index) => (
                  <img key={index} src={tool.item} alt="" />
                ))}
              </ToolContent>
            </ToolContainer>
            <LinkContainer>
              <LinkTitle>
                {/* <h4>Link To Show Case:</h4> */}
                <h4>{t("porto menu.link")}:</h4>
              </LinkTitle>
              <LinkContent>
                <a
                  href={selectedPortoDetail.link}
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  {selectedPortoDetail.link}
                </a>
              </LinkContent>
            </LinkContainer>
          </MainContent>
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
@media (max-width: 1115px) and (min-width: 1025px){
  position: fixed;
  top: -20px;
  left: -310px;
  width: 88.5rem;
  height: 800px;
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
@media (max-width: 1024px) and (min-width: 834px) {
  position: fixed;
  top: 0px;
  left: -310px;
  width: 70.9rem;
  height: 800px;
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
  top: 0px;
  left: -310px;
  width: 70.1rem;
  height: 800px;
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
  top: 0px;
  left: -310px;
  width: 68rem;
  height: 800px;
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
  top: 0px;
  left: -310px;
  width: 68rem;
  height: 800px;
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
    top: 0px;
    left: -310px;
    width: 728px;
    height: 105px;
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
    top: 0px;
    left: -310px;
    width: 715px;
    height: 105px;
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
    top: 0px;
    left: -310px;
    width: 720px;
    height: 105px;
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
    top: 0px;
    left: -310px;
    width: 694px;
    height: 105px;
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
    top: 0px;
    left: -310px;
    width: 690px;
    height: 105px;
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
    top: 0px;
    left: -310px;
    width: 675px;
    height: 102px;
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
    top: 0px;
    left: -310px;
    width: 658px;
    height: 102px;
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
    top: 0px;
    left: -310px;
    width: 620px;
    height: 102px;
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
    width: 500rem;
    height: 42rem;
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
    width: 300rem;
    height: 68rem;
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
  @media (max-width: 820px) {
    width: 300rem;
    height: 68rem;
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
  @media (max-width: 800px) {
    width: 300rem;
    height: 75rem;
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
  @media (max-width: 768px) {
    width: 300rem;
    height: 920px;
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
/* TABLET REPONSIVE */
@media (max-width: 428px) {
  width: 300rem;
  height: 810px;
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
  @media (max-width: 428px) {
    width: 300rem;
    height: 810px;
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
  @media (max-width: 415px) {
    width: 300rem;
    height: 810px;
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
  @media (max-width: 412px) {
    width: 300rem;
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
  @media (max-width: 395px) {
    width: 300rem;
    height: 780px;
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
  @media (max-width: 391px) {
    width: 300rem;
    height: 760px;
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
  @media (max-width: 376px) {
    width: 300rem;
    height: 720px;
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
  @media (max-width: 360px) {
    width: 300rem;
    height: 800px;
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
  @media (max-width: 320px) {
    width: 1000px;
    height: 490px;
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
/* WEB RESPONSIVE */
  @media (max-width: 1920px) {
    text-align: center;
  }

/* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    text-align: center;
    h2 {
      font-size: 18.5px;
    }
  }
  @media (max-width: 415px) {
    text-align: center;
    h2 {
      font-size: 18.5px;
    }
  }
  @media (max-width: 412px) {
    text-align: center;
    h2 {
      font-size: 18.5px;
    }
  }
  @media (max-width: 395px) {
    text-align: center;
    h2 {
      font-size: 18.5px;
    }
  }
  @media (max-width: 391px) {
    text-align: center;
    h2 {
      font-size: 18.5px;
    }
  }
  @media (max-width: 376px) {
    text-align: center;
    h2 {
      font-size: 18.5px;
    }
  }
  @media (max-width: 360px) {
    text-align: center;
    h2 {
      font-size: 17.5px;
    }
  }
  @media (max-width: 320px) {
    text-align: center;
    h2 {
      font-size: 16.5px;
    }
  }
`;

const TitleHeader = styled.div`
 /* TABLET RESPONSIVE */
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

/* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    h1 {
      color: white;
      text-align: center;
      font-size: 22.5px;
    }
  }
  @media (max-width: 415px) {
    h1 {
      color: white;
      text-align: center;
      font-size: 22.5px;
    }
  }
  @media (max-width: 412px) {
    h1 {
      color: white;
      text-align: center;
      font-size: 22.5px;
    }
  }
  @media (max-width: 395px) {
    h1 {
      color: white;
      text-align: center;
      font-size: 22.5px;
    }
  }
  @media (max-width: 391px) {
    h1 {
      color: white;
      text-align: center;
      font-size: 22.5px;
    }
  }
  @media (max-width: 376px) {
    h1 {
      color: white;
      text-align: center;
      font-size: 22.5px;
    }
  }
  @media (max-width: 360px) {
    h1 {
      color: white;
      text-align: center;
      font-size: 21.5px;
    }
  }
  @media (max-width: 320px) {
    h1 {
      color: white;
      text-align: center;
      font-size: 20.5px;
    }
  }
`;

const Content = styled.div`
/* WEB RESPONSIVE */
  @media (max-width: 1920px) {
    padding: 2rem;
  }

/* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    padding: 2rem;
  }
  @media (max-width: 415px) {
    padding: 2rem;
  }
  @media (max-width: 412px) {
    padding: 2rem;
  }
  @media (max-width: 395px) {
    padding: 2rem;
  }
  @media (max-width: 391px) {
    padding: 2rem;
  }
  @media (max-width: 376px) {
    padding: 2rem;
  }
  @media (max-width: 360px) {
    padding: 2rem;
  }
  @media (max-width: 320px) {
    padding: 2rem;
  }
`;

const MainContent = styled.div`
/* WEB RESPONSIVE */
  @media (max-width: 1920px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 2rem;
  }

/* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 2rem;
  }
  @media (max-width: 415px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 2rem;
  }
  @media (max-width: 412px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 2rem;
  }
  @media (max-width: 395px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 2rem;
  }
  @media (max-width: 391px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 2rem;
  }
  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 2rem;
  }
  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 2rem;
  }
  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 2rem;
  }
`;

const Type = styled.div`
/* MOBILE RESPONSIVE */
@media (max-width:428px) {
  h4 {
    font-size: 12px;
  }
}
@media (max-width:415px) {
  h4 {
    font-size: 12px;
  }
}
@media (max-width:412px) {
  h4 {
    font-size: 12px;
  }
}
@media (max-width:395px) {
  h4 {
    font-size: 12px;
  }
}
@media (max-width:391px) {
  h4 {
    font-size: 12px;
  }
}
@media (max-width:376px) {
  h4 {
    font-size: 12px;
  }
}
@media (max-width:360px) {
  h4 {
    font-size: 11px;
  }
}
@media (max-width:320px) {
  h4 {
    font-size: 10px;
  }
}
`;

const Cross = styled.div`
/* WEB RESPONSIVE */
  @media (max-width: 1920px) {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2rem;
  }

/* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2rem;
  }
  @media (max-width: 415px) {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2rem;
  }
  @media (max-width: 412px) {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2rem;
  }
  @media (max-width: 395px) {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2rem;
  }
  @media (max-width: 391px) {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2rem;
  }
  @media (max-width: 376px) {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2rem;
  }
  @media (max-width: 360px) {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2rem;
  }
  @media (max-width: 320px) {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2rem;
  }
`;

const ContentVideo = styled.div`
  display: flex;
  justify-content: center;
`;

const ChildContent = styled.div`
/* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    h4 {
      font-size: 13px;
    }
    p {
      font-size: 10.7px;
    }
  }
  @media (max-width: 415px) {
    h4 {
      font-size: 13px;
    }
    p {
      font-size: 10.7px;
    }
  }
  @media (max-width: 412px) {
    h4 {
      font-size: 13px;
    }
    p {
      font-size: 10.7px;
    }
  }
  @media (max-width: 395px) {
    h4 {
      font-size: 12px;
    }
    p {
      font-size: 9.7px;
    }
  }
  @media (max-width: 391px) {
    h4 {
      font-size: 12px;
    }
    p {
      font-size: 9.7px;
    }
  }
  @media (max-width: 376px) {
    h4 {
      font-size: 12px;
    }
    p {
      font-size: 9.7px;
    }
  }
  @media (max-width: 360px) {
    h4 {
      font-size: 11px;
    }
    p {
      font-size: 8.7px;
    }
  }
  @media (max-width: 320px) {
    h4 {
      font-size: 10px;
    }
    p {
      font-size: 7.7px;
    }
  }
`;

const ToolContainer = styled.div`
/* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    width: 100%;
    font-size: 12px;
  }
  @media (max-width: 415px) {
    width: 100%;
    font-size: 12px;
  }
  @media (max-width: 412px) {
    width: 100%;
    font-size: 12px;
  }
  @media (max-width: 395px) {
    width: 100%;
    font-size: 12px;
  }
  @media (max-width: 391px) {
    width: 100%;
    font-size: 12px;
  }
  @media (max-width: 376px) {
    width: 100%;
    font-size: 12px;
  }
  @media (max-width: 360px) {
    width: 100%;
    font-size: 11px;
  }
  @media (max-width: 320px) {
    width: 100%;
    font-size: 10px;
  }
`;

const ToolContent = styled.div`
/* WEB RESPONSIVE */
  @media (max-width: 1920px) {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding-top: 2rem;
    align-items: center;
    img {
      width: 100px;
    }
  }

/* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding-top: 2rem;
    align-items: center;
    img {
      width: 50px;
    }
  }
  @media (max-width: 415px) {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding-top: 2rem;
    align-items: center;
    img {
      width: 50px;
    }
  }
  @media (max-width: 412px) {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding-top: 2rem;
    align-items: center;
    img {
      width: 50px;
    }
  }
  @media (max-width: 395px) {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding-top: 2rem;
    align-items: center;
    img {
      width: 50px;
    }
  }
  @media (max-width: 391px) {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding-top: 2rem;
    align-items: center;
    img {
      width: 50px;
    }
  }
  @media (max-width: 376px) {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding-top: 2rem;
    align-items: center;
    img {
      width: 50px;
    }
  }
  @media (max-width: 360px) {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding-top: 2rem;
    align-items: center;
    img {
      width: 40px;
    }
  }
  @media (max-width: 320px) {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding-top: 2rem;
    align-items: center;
    img {
      width: 30px;
    }
  }
`;

const LinkContainer = styled.div``

const LinkTitle = styled.div`
/* MOBILE RESPONSIVE */
  @media (max-width:428px) {
    font-size: 12px;
  }
  @media (max-width:415px) {
    font-size: 12px;
  }
  @media (max-width:412px) {
    font-size: 12px;
  }
  @media (max-width:395px) {
    font-size: 12px;
  }
  @media (max-width:391px) {
    font-size: 12px;
  }
  @media (max-width:376px) {
    font-size: 12px;
  }
  @media (max-width:360px) {
    font-size: 11px;
  }
  @media (max-width:320px) {
    font-size: 10px;
  }
`

const LinkContent = styled.div`
/* MOBILE RESPONSIVE */
  @media (max-width:428px) {
    a{
      font-size: 11px;
    }
  }
  @media (max-width:415px) {
    a{
      font-size: 11px;
    }
  }
  @media (max-width:412px) {
    a{
      font-size: 11px;
    }
  }
  @media (max-width:395px) {
    a{
      font-size: 11px;
    }
  }
  @media (max-width:391px) {
    a{
      font-size: 11px;
    }
  }
  @media (max-width:376px) {
    a{
      font-size: 11px;
    }
  }
  @media (max-width:360px) {
    a{
      font-size: 10px;
    }
  }
  @media (max-width:320px) {
    a{
      font-size: 9px;
    }
  }
`
