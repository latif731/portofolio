import React from "react";
import styled from "styled-components";
import { RxCross1 } from "react-icons/rx";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const DetailPengalaman = ({ setOpenDetail, detail, t }) => {
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
              textAlign: "center",
            }}
          >
            {/* My Detail Work Experience */}
            {t("detail menu.title")}
          </h1>
        </TitleHeader>
        <Content>
          <div className="sidebar">
            <div
            // style={{
            //   display:"flex",
            //   alignItems:"center",
            //   // gap:"1rem"
            // }}
            >
              <h4>{t("detail menu.perusahaan")}</h4>
              {/* <span style={{ fontWeight:"bold"}}>:</span> */}
            </div>
            <div
            // style={{
            //   display:"flex",
            //   alignItems:"center",
            //   // gap:"1rem"
            // }}
            >
              <h4>{t("detail menu.posisi")}</h4>
              {/* <span style={{ fontWeight:"bold"}}>:</span> */}
            </div>
            <div
            // style={{
            //   display:"flex",
            //   alignItems:"center",
            //   // gap:"1rem"
            // }}
            >
              <h4>{t("detail menu.lama bekerja")}</h4>
              {/* <span style={{ fontWeight:"bold"}}>:</span> */}
            </div>
            <div
            // style={{
            //   display:"flex",
            //   alignItems:"center",
            //   // gap:"1rem"
            // }}
            >
              <h4>{t("detail menu.deskripsi")}</h4>
              {/* <span style={{ fontWeight:"bold"}}>:</span> */}
            </div>
          </div>
          <div className="isi">
            <div>
              <h4>{t("detail menu.perusahaan")}</h4>
              <p>{detail.perusahaan}</p>
            </div>
            <div>
              <h4>{t("detail menu.posisi")}</h4>
              <p>{detail.posisi}</p>
            </div>
            <div>
              <h4>{t("detail menu.lama bekerja")}</h4>
              <p>{detail.durasi}</p>
            </div>
            <div
              style={{
                whiteSpace: "pre-wrap",
              }}
            >
              <h4>{t("detail menu.deskripsi")}</h4>
              <p>{detail.description}</p>
            </div>
          </div>
        </Content>
        <Paklaring>
          <TransformWrapper>
            <TransformComponent>
              <img src={detail.img} alt="" />
            </TransformComponent>
          </TransformWrapper>
        </Paklaring>
      </ContentWrapper>
    </Container>
  );
};

export default DetailPengalaman;

// const Container = styled.div`
//   position: fixed;
//   /* width: 10; */
//   top: 0;
//   left: 0;
//   width: 1550px;
//   height: 1024px;
//   background-color: rgba(0, 0, 0, 0.3);
//   display: flex;
//   // gap:"2rem",
//   padding-left: 20rem;
//   padding-top: 2rem;
//   // justifyContent: "center",
//   // alignItems: "center",
//   // paddingTop: "3rem",
//   z-index: 999;
//   // position:"relative"
// `;

// const ContentWrapper = styled.div`
//   width: 900px;
//   height: 650px;
//   background-color: #191923;
//   padding: 3rem;
//   border-radius: 2%;
//   overflow-y: auto;
//   box-shadow: 5px 5px 15px rgba(255, 251, 251, 0.5);
//   &::-webkit-scrollbar {
//     width: 8px; /* Lebar scrollbar */
//   }
//   &::-webkit-scrollbar-thumb {
//     background-color: rgba(255, 255, 255, 0.2); /* Warna thumb scrollbar */
//     border-radius: 4px; /* Radius sudut */
//   }
//   &::-webkit-scrollbar-thumb:hover {
//     background-color: rgba(255, 255, 255, 0.4); /* Warna thumb saat dihover */
//   }
//   &::-webkit-scrollbar-track {
//     background-color: rgba(0, 0, 0, 0.1); /* Warna track scrollbar */
//   }
// `;

// const Content = styled.div`
//   padding: 2rem;
//   display: flex;

//   gap:2rem;
//   .sidebar{
//     display: flex;
//     flex-direction: column;
//     gap: 2rem;
//   }
//   .isi{
//     display: flex;
//     flex-direction: column;
//     gap: 2rem;
//     /* align-items: ; */
//     /* margin-top: 1px; */
//   }
//   /* flex-direction: column; */
// `;

// const MainContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   padding-top: 2rem;
// `;

// const Cross = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   margin-bottom: 2rem;
// `;

// const ContentVideo = styled.div`
//   display: flex;
//   justify-content: center;
// `;

// const TitleHeader = styled.div``;

// const Paklaring = styled.div``;

// const Title = styled.div`
//   text-align: center;
// `;

const Container = styled.div`
  @media (max-width: 1920px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }

  @media (max-width: 428px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  @media (max-width: 412px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }

  @media (max-width: 395px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  @media (max-width: 391px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  @media (max-width: 376px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  @media (max-width: 360px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  @media (max-width: 320px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
`;

const ContentWrapper = styled.div`
  @media (max-width: 1920px) {
    width: 90%;
    max-width: 850px;
    max-height: 90vh;
    background-color: #191923;
    padding: 2rem 3rem;
    border-radius: 12px;
    overflow-y: auto;
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);
    color: white;

    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 3px;
    }
  }


  @media (max-width: 428px) {
    width: 90%;
    max-width: 865px;
    max-height: 90vh;
    background-color: #191923;
    padding: 2rem 3rem;
    border-radius: 12px;
    overflow-y: auto;
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);
    color: white;

    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 3px;
    }
  }

  @media (max-width: 412px) {
    width: 90%;
    max-width: 865px;
    max-height: 90vh;
    background-color: #191923;
    padding: 2rem 3rem;
    border-radius: 12px;
    overflow-y: auto;
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);
    color: white;

    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 3px;
    }
  }

  @media (max-width: 395px) {
    width: 90%;
    max-width: 865px;
    max-height: 90vh;
    background-color: #191923;
    padding: 2rem 3rem;
    border-radius: 12px;
    overflow-y: auto;
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);
    color: white;

    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 3px;
    }
  }
  @media (max-width: 391px) {
    width: 90%;
    max-width: 865px;
    max-height: 90vh;
    background-color: #191923;
    padding: 2rem 3rem;
    border-radius: 12px;
    overflow-y: auto;
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);
    color: white;

    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 3px;
    }
  }
  @media (max-width: 376px) {
    width: 90%;
    max-width: 860px;
    max-height: 90vh;
    background-color: #191923;
    padding: 2rem 3rem;
    border-radius: 12px;
    overflow-y: auto;
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);
    color: white;

    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 3px;
    }
  }
  @media (max-width: 360px) {
    width: 90%;
    max-width: 855px;
    max-height: 90vh;
    background-color: #191923;
    padding: 2rem 3rem;
    border-radius: 12px;
    overflow-y: auto;
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);
    color: white;

    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 3px;
    }
  }
  @media (max-width: 320px) {
    width: 90%;
    max-width: 850px;
    max-height: 90vh;
    background-color: #191923;
    padding: 2rem 3rem;
    border-radius: 12px;
    overflow-y: auto;
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);
    color: white;

    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 3px;
    }
  }
`;

const Content = styled.div`
  @media (max-width: 1920px) {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 1rem;

    .sidebar,
    .isi {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      min-width: 200px;
    }
  }


  @media (max-width: 428px) {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 1rem;

    .sidebar {
      display: none;
    }

    .isi {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      min-width: 200px;
      font-size: 16px;
    }
  }

  @media (max-width: 412px) {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 1rem;

    .sidebar {
      display: none;
    }

    .isi {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      min-width: 200px;
      font-size: 15px;
    }
  }

  @media (max-width: 395px) {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 1rem;

    .sidebar {
      display: none;
    }

    .isi {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      min-width: 200px;
      font-size: 14px;
    }
  }

  @media (max-width: 391px) {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 1rem;

    .sidebar {
      display: none;
    }

    .isi {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      min-width: 200px;
      font-size: 13px;
    }
  }
  @media (max-width: 376px) {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 1rem;

    .sidebar {
      display: none;
    }

    .isi {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      min-width: 200px;
      font-size: 12px;
    }
  }
  @media (max-width: 360px) {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 1rem;

    .sidebar {
      display: none;
    }

    .isi {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      min-width: 200px;
      font-size: 11px;
    }
  }
  @media (max-width: 320px) {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 1rem;

    .sidebar {
      display: none;
    }

    .isi {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      min-width: 200px;
      font-size: 10px;
    }
  }
`;

const Cross = styled.div`
  @media (max-width: 1920px) {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
  }

  @media (max-width: 428px) {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
  }

  @media (max-width: 412px) {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
  }

  @media (max-width: 395px) {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 391px) {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
  }
  @media (max-width: 376px) {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
  }
  @media (max-width: 360px) {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
  }
  @media (max-width: 320px) {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
  }
`;

const TitleHeader = styled.div`
  @media (max-width: 1920px) {
    text-align: center;
    margin-bottom: 1rem;
    h1 {
      color: white;
      font-size: 1.5rem;
    }
  }
  @media (max-width: 428px) {
    text-align: center;
    margin-bottom: 1rem;
    h1 {
      color: white;
      font-size: 20.5px;
    }
  }
  @media (max-width: 412px) {
    text-align: center;
    margin-bottom: 1rem;
    h1 {
      color: white;
      font-size: 20.5px;
    }
  }
  @media (max-width: 395px) {
    text-align: center;
    margin-bottom: 1rem;
    h1 {
      color: white;
      font-size: 20.5px;
    }
  }
  @media (max-width: 391px) {
    text-align: center;
    margin-bottom: 1rem;
    h1 {
      color: white;
      font-size: 20.5px;
    }
  }
  @media (max-width: 376px) {
    text-align: center;
    margin-bottom: 1rem;
    h1 {
      color: white;
      font-size: 20.5px;
    }
  }
  @media (max-width: 360px) {
    text-align: center;
    margin-bottom: 1rem;
    h1 {
      color: white;
      font-size: 20.5px;
    }
  }
  @media (max-width: 320px) {
    text-align: center;
    margin-bottom: 1rem;
    h1 {
      color: white;
      font-size: 20.5px;
    }
  }
`;

const Paklaring = styled.div`
  @media (max-width: 1920px) {
    display: flex;
    justify-content: center;
    img {
      width: 750px;
    }
  }
  @media (max-width: 428px) {
    display: flex;
    justify-content: center;
    img {
      margin-top: 10px;
      width: 350px;
    }
  }
  @media (max-width: 412px) {
    display: flex;
    justify-content: center;
    img {
      margin-top: 10px;
      width: 350px;
    }
  }
  @media (max-width: 395px) {
    display: flex;
    justify-content: center;
    img {
      margin-top: 10px;
      width: 350px;
    }
  }
  @media (max-width: 391px) {
    display: flex;
    justify-content: center;
    img {
      margin-top: 10px;
      width: 350px;
    }
  }
  @media (max-width: 376px) {
    display: flex;
    justify-content: center;
    img {
      margin-top: 10px;
      width: 290px;
    }
  }
  @media (max-width: 360px) {
    display: flex;
    justify-content: center;
    img {
      margin-top: 10px;
      width: 200px;
    }
  }
  @media (max-width: 320px) {
    display: flex;
    justify-content: center;
    img {
      margin-top: 10px;
      width: 150px;
    }
  }
`;
