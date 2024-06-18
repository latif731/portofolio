import React from "react";
import styled from "styled-components";
import { RxCross1 } from "react-icons/rx";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


const DetailPengalaman = ({ setOpenDetail, detail }) => {
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
              textAlign:"center"
            }}
          >
            My Detail Work Experience
          </h1>
        </TitleHeader>
        <Content>
          <div className="sidebar">
            <div>
              <h4>Perusahaan :</h4>
            </div>
            <div>
              <h4>Posisi :</h4>
            </div>
            <div>
              <h4>Lama Bekerja :</h4>
            </div>
            <div>
              <h4>Deskripsi :</h4>
            </div>
          </div>
          <div className="isi">
            <div>
              <p>{detail.perusahaan}</p>
            </div>
            <div>
              <p>{detail.posisi}</p>
            </div>
            <div>
              <p>{detail.durasi}</p>
            </div>
            <div
                   style={{
                    whiteSpace:"pre-wrap"
                  }}
            >
              <p>{detail.description}</p>
            </div>
          </div>
        </Content>
          <div
          style={{
            display:"flex",
            justifyContent:"center",
          }}
          >
            <TransformWrapper 
            >
            <TransformComponent>
            <img src={detail.img} alt="" 
            style={{
              width:"750px"
            }}
            />
            </TransformComponent>
            </TransformWrapper>
          </div>
      </ContentWrapper>
    </Container>
  );
};

export default DetailPengalaman;

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

const Content = styled.div`
  padding: 2rem;
  display: flex;
  gap:2rem;
  .sidebar{
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .isi{
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  /* flex-direction: column; */
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

const TitleHeader = styled.div``;

const Paklaring = styled.div``;

const Title = styled.div`
  text-align: center;
`;
