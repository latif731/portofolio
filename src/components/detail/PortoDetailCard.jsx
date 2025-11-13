import React from "react";
import styled from "styled-components";
import { RxCross1 } from "react-icons/rx";
import { useTranslation } from "react-i18next";

const PortoDetailCard = ({ setOpenPortoDetail, selectedPortoDetail }) => {
  const handleDetailOpen = () => {
    setOpenPortoDetail(false);
  };
  const {t} = useTranslation()
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
            <h4>{t("porto menu.type")} : {selectedPortoDetail.type}</h4>

            {/* <video src={videoObj.url} loop muted id="autoplay"/> */}
            <div>
              {/* <h4>Desc :</h4> */}
              <h4>{t("porto menu.desc")} :</h4>
              <p
              style={{
                whiteSpace:"pre-wrap"
              }}
              >{selectedPortoDetail.detail_description}</p>
            </div>
            <div
              style={{
                width: "100%",
              }}
            >
              {/* <h4>Tools/Library/Framework :</h4> */}
              <h4>{t("porto menu.tool")}:</h4>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1rem",
                  paddingTop: "2rem",
                  alignItems: "center",
                  // width:"100%"
                }}
              >
                {selectedPortoDetail.tools.map((tool, index) => (
                  <img key={index} src={tool.item} alt="" width={"100px"} />
                ))}
              </div>
            </div>
            <div>
              <div>
                {/* <h4>Link To Show Case:</h4> */}
                <h4>{t("porto menu.link")}:</h4>
              </div>
              <a
                href={selectedPortoDetail.link}
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                {selectedPortoDetail.link}
              </a>
            </div>
          </MainContent>
        </Content>
      </ContentWrapper>
    </Container>
  );
};

export default PortoDetailCard;

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
