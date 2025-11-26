import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useTranslation } from "react-i18next";
// Import data and media
import DetailPengalaman from "./DetailPengalaman";
import { PengalamanKerja } from "../../data/pengalaman";
import i18n from "../../i18n";
// Define the structured data

const Pengalaman = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [detail, setDetail] = useState(false);
  const { t, i18n } = useTranslation();
  const data = PengalamanKerja();
  const [selectedDetail, setSelectedDetail] = useState(null);
  console.log("selectedDetail", selectedDetail);
  const openDetail = (e) => {
    e.preventDefault();
    setDetail(true);
  };
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handleOpenPengalaman = (id) => {
    const detail = data.find((pengalaman) => pengalaman.id === id);
    setSelectedDetail(detail);
    setDetail(true);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const getThumbnailSrc = (index) => {
    return data[(currentIndex + index) % data.length].thumbnail;
  };

  return (
    <Container id="pengalaman">
      <Title>
        {/* <h1>Pengalaman Kerja</h1> */}
        <h1>{t("Pengalaman Kerja.title")}</h1>
      </Title>
      <Slider>
        <List>
          {data.map((item, index) => (
            <VideoItem
              key={item.id}
              className={index === currentIndex ? "active" : ""}
            >
              <VideoWrapper className={index === currentIndex ? "active" : ""}>
                <video
                  controls
                  autoPlay
                  muted
                  playsInline
                  loop
                  className="video"
                >
                  <source src={item.video} type="video/mp4" />
                </video>
                <VideoOverlay />
              </VideoWrapper>
              <Content className={index === currentIndex ? "active" : ""}>
                <TitleContent
                  className={index === currentIndex ? "active" : ""}
                >
                  {item.title}
                  {/* {t("Pengalaman Kerja.catering")} */}
                </TitleContent>
                <Type className={index === currentIndex ? "active" : ""}>
                  {item.type}
                  {/* {t("Pengalaman Kerja.type1")} */}
                </Type>
                <button
                  className={index === currentIndex ? "active" : ""}
                  onClick={() => handleOpenPengalaman(item.id)}
                >
                  {/* See Detail */}
                  {t("Pengalaman Kerja.detail")}
                </button>
              </Content>
            </VideoItem>
          ))}
        </List>
        <ThumbnailsContainer>
          {data.map((_, index) => (
            <Thumbnail
              key={index}
              hidden={index === 0}
              src={getThumbnailSrc(index)}
              alt={`Thumbnail ${index}`}
            />
          ))}
        </ThumbnailsContainer>
        <Arrows>
          <button className="prev" onClick={prevSlide}>
            <IoIosArrowBack />
          </button>
          <button className="next" onClick={nextSlide}>
            <IoIosArrowForward />
          </button>
        </Arrows>
      </Slider>
      {detail && (
        <DetailPengalaman
          setOpenDetail={setDetail}
          detail={selectedDetail}
          t={t}
        />
      )}
    </Container>
  );
};

export default Pengalaman;

// Styled Components
const Container = styled.div`
  @media (max-width: 1920px) {
    display: flex;
    flex-direction: column;
    padding: 5rem 0;
    gap: 1rem;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    z-index: 0;
    color: white;
  }

  
  /* TABLET RESPONSIVE */

  @media (max-width: 835px) {
    display: flex;
    flex-direction: column;
    padding: 5rem 0;
    gap: 1rem;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    z-index: 0;
    color: white;
  }
  @media (max-width: 820px) {
    display: flex;
    flex-direction: column;
    padding: 5rem 0;
    gap: 1rem;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    z-index: 0;
    color: white;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 5rem 0;
    gap: 1rem;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    z-index: 0;
    color: white;
  }



  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    gap: 1rem;
    width: 100%;
    max-width: 1280px;
    margin: 0 10px;
    z-index: 0;
    color: white;
  }

  @media (max-width: 412px) {
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    gap: 1rem;
    width: 100%;
    max-width: 1280px;
    margin: 0 10px;
    z-index: 0;
    color: white;
  }

  @media (max-width: 395px) {
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    gap: 1rem;
    width: 100%;
    max-width: 1280px;
    margin: 0 10px;
    z-index: 0;
    color: white;
  }
  @media (max-width: 391px) {
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    gap: 1rem;
    width: 100%;
    max-width: 1280px;
    margin: 0 10px;
    z-index: 0;
    color: white;
  }
  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    gap: 1rem;
    width: 100%;
    max-width: 1280px;
    margin: 0 10px;
    z-index: 0;
    color: white;
  }
  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    gap: 1rem;
    width: 100%;
    max-width: 1280px;
    margin: 0 10px;
    z-index: 0;
    color: white;
  }
  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    gap: 1rem;
    width: 100%;
    max-width: 1280px;
    margin: 0 10px;
    z-index: 0;
    color: white;
  }
`;

const Title = styled.div`
  @media (max-width: 1920px) {
    padding-bottom: 5rem;
  }

  /* TABLET RESPONSIVE */
  @media (max-width: 835px) {
    padding-bottom: 5rem;
  }
  @media (max-width: 820px) {
    padding-bottom: 5rem;
  }
  @media (max-width: 768px) {
    padding-bottom: 5rem;
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    h1 {
      font-size: 19px;
      text-align: center;
    }
  }

  @media (max-width: 412px) {
    h1 {
      font-size: 19px;
      text-align: center;
    }
  }

  @media (max-width: 395px) {
    h1 {
      font-size: 19px;
      text-align: center;
    }
  }
  @media (max-width: 391px) {
    h1 {
      font-size: 19px;
      text-align: center;
    }
  }
  @media (max-width: 376px) {
    h1 {
      font-size: 19px;
      text-align: center;
    }
  }
  @media (max-width: 360px) {
    h1 {
      font-size: 17px;
      text-align: center;
    }
  }
  @media (max-width: 320px) {
    h1 {
      font-size: 15px;
      text-align: center;
    }
  }
`;

const Slider = styled.div`
  @media (max-width: 1920px) {
    height: 80vh;
    margin-top: -50px;
    width: 80vw;
    overflow: hidden;
    position: relative;
  }
  
  /* TABLET RESPONSIVE */
  @media (max-width: 835px) {
    height: 80vh;
    margin-top: -50px;
    width: 80vw;
    overflow: hidden;
    position: relative;
  }
  @media (max-width: 820px) {
    height: 80vh;
    margin-top: -50px;
    width: 80vw;
    overflow: hidden;
    position: relative;
  }
  @media (max-width: 768px) {
    height: 80vh;
    margin-top: -50px;
    width: 80vw;
    overflow: hidden;
    position: relative;
  }


  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    height: 80vh;
    margin-top: -50px;
    width: 94.5vw;
    overflow: hidden;
    position: relative;
  }

  @media (max-width: 412px) {
    height: 80vh;
    margin-top: -50px;
    width: 94.5vw;
    overflow: hidden;
    position: relative;
  }

  @media (max-width: 395px) {
    height: 80vh;
    margin-top: -50px;
    width: 94.5vw;
    overflow: hidden;
    position: relative;
  }
  @media (max-width: 391px) {
    height: 80vh;
    margin-top: -50px;
    width: 94.5vw;
    overflow: hidden;
    position: relative;
  }
  @media (max-width: 376px) {
    height: 80vh;
    margin-top: -50px;
    width: 94.5vw;
    overflow: hidden;
    position: relative;
  }
  @media (max-width: 360px) {
    height: 80vh;
    margin-top: -50px;
    width: 93.5vw;
    overflow: hidden;
    position: relative;
  }
  @media (max-width: 320px) {
    height: 80vh;
    margin-top: -50px;
    width: 93.5vw;
    overflow: hidden;
    position: relative;
  }
`;

const List = styled.div`
  @media (max-width: 1920px) {
    position: relative;
    height: 100%;
  }

  /* TABLET RESPONSIVE */
  @media (max-width: 835px) {
    position: relative;
    height: 100%;
  }
  @media (max-width: 820px) {
    position: relative;
    height: 100%;
  }
  @media (max-width: 768px) {
    position: relative;
    height: 100%;
  }


  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    position: relative;
    height: 100%;
  }

  @media (max-width: 412px) {
    position: relative;
    height: 100%;
  }
  
  @media (max-width: 395px) {
    position: relative;
    height: 100%;
  }
  @media (max-width: 391px) {
    position: relative;
    height: 100%;
  }
  @media (max-width: 376px) {
    position: relative;
    height: 100%;
  }
  @media (max-width: 360px) {
    position: relative;
    height: 100%;
  }
  @media (max-width: 320px) {
    position: relative;
    height: 100%;
  }
`;

const VideoItem = styled.div`
  @media (max-width: 1920px) {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0 0 0 0;
    &.active {
      z-index: 1;
    }
  }

  /* TABLET RESPONSIVE */
  @media (max-width: 835px) {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0 0 0 0;
    &.active {
      z-index: 1;
    }
  }
  @media (max-width: 820px) {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0 0 0 0;
    &.active {
      z-index: 1;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0 0 0 0;
    &.active {
      z-index: 1;
    }
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0 0 0 0;
    &.active {
      z-index: 1;
    }
  }
  @media (max-width: 412px) {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0 0 0 0;
    &.active {
      z-index: 1;
    }
  }
  @media (max-width: 395px) {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0 0 0 0;
    &.active {
      z-index: 1;
    }
  }
  @media (max-width: 391px) {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0 0 0 0;
    &.active {
      z-index: 1;
    }
  }
  @media (max-width: 376px) {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0 0 0 0;
    &.active {
      z-index: 1;
    }
  }
  @media (max-width: 360px) {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0 0 0 0;
    &.active {
      z-index: 1;
    }
  }
  @media (max-width: 320px) {
    width: 100%;
    height: 120%;
    position: absolute;
    inset: 0 0 0 0;
    &.active {
      z-index: 1;
    }
  }
`;

const VideoWrapper = styled.div`
  @media (max-width: 1920px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &.active {
      width: 150px;
      height: 220px;
      position: absolute;
      bottom: 50px;
      left: 50%;
      border-radius: 30px;
      animation: showImage 0.5s linear 1 forwards;

      @keyframes showImage {
        to {
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 0;
        }
      }
    }
  }

  /* TABLET RESPONSIVE */
  @media (max-width: 835px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &.active {
      width: 150px;
      height: 220px;
      position: absolute;
      bottom: 50px;
      left: 50%;
      border-radius: 30px;
      animation: showImage 0.5s linear 1 forwards;

      @keyframes showImage {
        to {
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 0;
        }
      }
    }
  }
  @media (max-width: 820px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &.active {
      width: 150px;
      height: 220px;
      position: absolute;
      bottom: 50px;
      left: 50%;
      border-radius: 30px;
      animation: showImage 0.5s linear 1 forwards;

      @keyframes showImage {
        to {
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 0;
        }
      }
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &.active {
      width: 150px;
      height: 220px;
      position: absolute;
      bottom: 50px;
      left: 50%;
      border-radius: 30px;
      animation: showImage 0.5s linear 1 forwards;

      @keyframes showImage {
        to {
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 0;
        }
      }
    }
  }


  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &.active {
      width: 150px;
      height: 220px;
      position: absolute;
      bottom: 50px;
      left: 50%;
      border-radius: 30px;
      animation: showImage 0.5s linear 1 forwards;

      @keyframes showImage {
        to {
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 0;
        }
      }
    }
  }
  @media (max-width: 412px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &.active {
      width: 150px;
      height: 220px;
      position: absolute;
      bottom: 50px;
      left: 50%;
      border-radius: 30px;
      animation: showImage 0.5s linear 1 forwards;

      @keyframes showImage {
        to {
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 0;
        }
      }
    }
  }
  @media (max-width: 395px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &.active {
      width: 150px;
      height: 220px;
      position: absolute;
      bottom: 50px;
      left: 50%;
      border-radius: 30px;
      animation: showImage 0.5s linear 1 forwards;

      @keyframes showImage {
        to {
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 0;
        }
      }
    }
  }
  @media (max-width: 391px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &.active {
      width: 150px;
      height: 220px;
      position: absolute;
      bottom: 50px;
      left: 50%;
      border-radius: 30px;
      animation: showImage 0.5s linear 1 forwards;

      @keyframes showImage {
        to {
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 0;
        }
      }
    }
  }
  @media (max-width: 376px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &.active {
      width: 150px;
      height: 220px;
      position: absolute;
      bottom: 50px;
      left: 50%;
      border-radius: 30px;
      animation: showImage 0.5s linear 1 forwards;

      @keyframes showImage {
        to {
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 0;
        }
      }
    }
  }
  @media (max-width: 360px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &.active {
      width: 150px;
      height: 220px;
      position: absolute;
      bottom: 50px;
      left: 50%;
      border-radius: 30px;
      animation: showImage 0.5s linear 1 forwards;

      @keyframes showImage {
        to {
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 0;
        }
      }
    }
  }
  @media (max-width: 320px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &.active {
      width: 150px;
      height: 220px;
      position: absolute;
      bottom: 50px;
      left: 50%;
      border-radius: 30px;
      animation: showImage 0.5s linear 1 forwards;

      @keyframes showImage {
        to {
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 0;
        }
      }
    }
  }
`;

const VideoOverlay = styled.div`
  @media (max-width: 1920px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    );
  }
  
  /* TABLET RESPONSIVE */
  @media (max-width: 835px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    );
  }
  @media (max-width: 820px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    );
  }
  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    );
  }


  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    );
  }

  @media (max-width: 412px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    );
  }

  @media (max-width: 395px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    );
  }
  @media (max-width: 391px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    );
  }
  @media (max-width: 376px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    );
  }
  @media (max-width: 360px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    );
  }
  @media (max-width: 320px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    );
  }
`;

const Content = styled.div`
  @media (max-width: 1920px) {
    position: absolute;
    top: 5%;
    width: 1140px;
    /* max-width: 80%; */
    left: 50%;
    transform: translateX(-50%);
    padding-right: 30%;
    box-sizing: border-box;
    color: #fff;
    text-shadow: 0 5px 10px #0004;
    button {
      margin-top: 1rem;
      /* margin-left: 10rem; */
      padding: 2px;
      width: 100px;
      height: 50px;
      background-color: transparent;
      border-radius: 10%;
      border: 1px solid white;
      color: white;
      transition: background-color 0.5s, color 0.5s;
      &:hover {
        background-color: white;
        color: black;
      }
      &.active {
        transform: translateY(50px);
        filter: blur(20px);
        opacity: 0;
        animation: showButton 0.5s 1s linear 1 forwards;

        @keyframes showButton {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
      }
    }
  }
  /* TABLET RESPONSIVE */

  
  @media (min-width: 1114px) and (max-width: 1152px) {
    position: absolute;
    top: 5%;
    width: 1140px;
    /* max-width: 80%; */
    left: 67%;
    transform: translateX(-50%);
    padding-right: 30%;
    box-sizing: border-box;
    color: #fff;
    text-shadow: 0 5px 10px #0004;
    button {
      margin-top: 1rem;
      /* margin-left: 10rem; */
      padding: 2px;
      width: 100px;
      height: 50px;
      background-color: transparent;
      border-radius: 10%;
      border: 1px solid white;
      color: white;
      transition: background-color 0.5s, color 0.5s;
      &:hover {
        background-color: white;
        color: black;
      }
      &.active {
        transform: translateY(50px);
        filter: blur(20px);
        opacity: 0;
        animation: showButton 0.5s 1s linear 1 forwards;

        @keyframes showButton {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
      }
    }
  }
  
  @media (max-width: 835px) {
    position: absolute;
    top: 5%;
    width: 1140px;
    /* max-width: 80%; */
    left: 87%;
    transform: translateX(-50%);
    padding-right: 30%;
    box-sizing: border-box;
    color: #fff;
    text-shadow: 0 5px 10px #0004;
    button {
      margin-top: 1rem;
      /* margin-left: 10rem; */
      padding: 2px;
      width: 100px;
      height: 50px;
      background-color: transparent;
      border-radius: 10%;
      border: 1px solid white;
      color: white;
      transition: background-color 0.5s, color 0.5s;
      &:hover {
        background-color: white;
        color: black;
      }
      &.active {
        transform: translateY(50px);
        filter: blur(20px);
        opacity: 0;
        animation: showButton 0.5s 1s linear 1 forwards;

        @keyframes showButton {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
      }
    }
  }
  @media (max-width: 820px) {
    position: absolute;
    top: 5%;
    width: 1140px;
    /* max-width: 80%; */
    left: 90%;
    transform: translateX(-50%);
    padding-right: 30%;
    box-sizing: border-box;
    color: #fff;
    text-shadow: 0 5px 10px #0004;
    button {
      margin-top: 1rem;
      /* margin-left: 10rem; */
      padding: 2px;
      width: 100px;
      height: 50px;
      background-color: transparent;
      border-radius: 10%;
      border: 1px solid white;
      color: white;
      transition: background-color 0.5s, color 0.5s;
      &:hover {
        background-color: white;
        color: black;
      }
      &.active {
        transform: translateY(50px);
        filter: blur(20px);
        opacity: 0;
        animation: showButton 0.5s 1s linear 1 forwards;

        @keyframes showButton {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    position: absolute;
    top: 5%;
    width: 1140px;
    /* max-width: 80%; */
    left: 95%;
    transform: translateX(-50%);
    padding-right: 30%;
    box-sizing: border-box;
    color: #fff;
    text-shadow: 0 5px 10px #0004;
    button {
      margin-top: 1rem;
      /* margin-left: 10rem; */
      padding: 2px;
      width: 100px;
      height: 50px;
      background-color: transparent;
      border-radius: 10%;
      border: 1px solid white;
      color: white;
      transition: background-color 0.5s, color 0.5s;
      &:hover {
        background-color: white;
        color: black;
      }
      &.active {
        transform: translateY(50px);
        filter: blur(20px);
        opacity: 0;
        animation: showButton 0.5s 1s linear 1 forwards;

        @keyframes showButton {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
      }
    }
  }


  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    position: absolute;
    font-size: 8px;
    top: 5%;
    width: 1140px;
    /* max-width: 80%; */
    left: 150%;
    transform: translateX(-50%);
    padding-right: 30%;
    box-sizing: border-box;
    color: #fff;
    text-shadow: 0 5px 10px #0004;
    button {
      font-size: 10px;
      margin-top: 1rem;
      /* margin-left: 10rem; */
      padding: 1px;
      width: 80px;
      height: 30px;
      background-color: transparent;
      border-radius: 10%;
      border: 1px solid white;
      color: white;
      transition: background-color 0.5s, color 0.5s;
      &:hover {
        background-color: white;
        color: black;
      }
      &.active {
        transform: translateY(50px);
        filter: blur(20px);
        opacity: 0;
        animation: showButton 0.5s 1s linear 1 forwards;

        @keyframes showButton {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
      }
    }
  }

  @media (max-width: 412px) {
    position: absolute;
    font-size: 8px;
    top: 5%;
    width: 1140px;
    /* max-width: 80%; */
    left: 150%;
    transform: translateX(-50%);
    padding-right: 30%;
    box-sizing: border-box;
    color: #fff;
    text-shadow: 0 5px 10px #0004;
    button {
      font-size: 10px;
      margin-top: 1rem;
      /* margin-left: 10rem; */
      padding: 1px;
      width: 80px;
      height: 30px;
      background-color: transparent;
      border-radius: 10%;
      border: 1px solid white;
      color: white;
      transition: background-color 0.5s, color 0.5s;
      &:hover {
        background-color: white;
        color: black;
      }
      &.active {
        transform: translateY(50px);
        filter: blur(20px);
        opacity: 0;
        animation: showButton 0.5s 1s linear 1 forwards;

        @keyframes showButton {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
      }
    }
  }

  @media (max-width: 395px) {
    position: absolute;
    font-size: 8px;
    top: 5%;
    width: 1140px;
    /* max-width: 80%; */
    left: 160%;
    transform: translateX(-50%);
    padding-right: 30%;
    box-sizing: border-box;
    color: #fff;
    text-shadow: 0 5px 10px #0004;
    button {
      font-size: 10px;
      margin-top: 1rem;
      /* margin-left: 10rem; */
      padding: 1px;
      width: 80px;
      height: 30px;
      background-color: transparent;
      border-radius: 10%;
      border: 1px solid white;
      color: white;
      transition: background-color 0.5s, color 0.5s;
      &:hover {
        background-color: white;
        color: black;
      }
      &.active {
        transform: translateY(50px);
        filter: blur(20px);
        opacity: 0;
        animation: showButton 0.5s 1s linear 1 forwards;

        @keyframes showButton {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
      }
    }
  }
  @media (max-width: 391px) {
    position: absolute;
    font-size: 8px;
    top: 5%;
    width: 1140px;
    /* max-width: 80%; */
    left: 160%;
    transform: translateX(-50%);
    padding-right: 30%;
    box-sizing: border-box;
    color: #fff;
    text-shadow: 0 5px 10px #0004;
    button {
      font-size: 10px;
      margin-top: 1rem;
      /* margin-left: 10rem; */
      padding: 1px;
      width: 80px;
      height: 30px;
      background-color: transparent;
      border-radius: 10%;
      border: 1px solid white;
      color: white;
      transition: background-color 0.5s, color 0.5s;
      &:hover {
        background-color: white;
        color: black;
      }
      &.active {
        transform: translateY(50px);
        filter: blur(20px);
        opacity: 0;
        animation: showButton 0.5s 1s linear 1 forwards;

        @keyframes showButton {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
      }
    }
  }
  @media (max-width: 376px) {
    position: absolute;
    font-size: 8px;
    top: 5%;
    width: 1140px;
    /* max-width: 80%; */
    left: 165%;
    transform: translateX(-50%);
    padding-right: 30%;
    box-sizing: border-box;
    color: #fff;
    text-shadow: 0 5px 10px #0004;
    button {
      font-size: 10px;
      margin-top: 1rem;
      /* margin-left: 10rem; */
      padding: 1px;
      width: 80px;
      height: 30px;
      background-color: transparent;
      border-radius: 10%;
      border: 1px solid white;
      color: white;
      transition: background-color 0.5s, color 0.5s;
      &:hover {
        background-color: white;
        color: black;
      }
      &.active {
        transform: translateY(50px);
        filter: blur(20px);
        opacity: 0;
        animation: showButton 0.5s 1s linear 1 forwards;

        @keyframes showButton {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
      }
    }
  }
  @media (max-width: 360px) {
    position: absolute;
    font-size: 8px;
    top: 5%;
    width: 1140px;
    /* max-width: 80%; */
    left: 175%;
    transform: translateX(-50%);
    padding-right: 30%;
    box-sizing: border-box;
    color: #fff;
    text-shadow: 0 5px 10px #0004;
    button {
      font-size: 10px;
      margin-top: 1rem;
      /* margin-left: 10rem; */
      padding: 1px;
      width: 80px;
      height: 30px;
      background-color: transparent;
      border-radius: 10%;
      border: 1px solid white;
      color: white;
      transition: background-color 0.5s, color 0.5s;
      &:hover {
        background-color: white;
        color: black;
      }
      &.active {
        transform: translateY(50px);
        filter: blur(20px);
        opacity: 0;
        animation: showButton 0.5s 1s linear 1 forwards;

        @keyframes showButton {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
      }
    }
  }
  @media (max-width: 320px) {
    position: absolute;
    font-size: 7px;
    top: 5%;
    width: 1140px;
    /* max-width: 80%; */
    left: 194%;
    transform: translateX(-50%);
    padding-right: 30%;
    box-sizing: border-box;
    color: #fff;
    text-shadow: 0 5px 10px #0004;
    button {
      font-size: 10px;
      margin-top: 1rem;
      /* margin-left: 10rem; */
      padding: 1px;
      width: 80px;
      height: 30px;
      background-color: transparent;
      border-radius: 10%;
      border: 1px solid white;
      color: white;
      transition: background-color 0.5s, color 0.5s;
      &:hover {
        background-color: white;
        color: black;
      }
      &.active {
        transform: translateY(50px);
        filter: blur(20px);
        opacity: 0;
        animation: showButton 0.5s 1s linear 1 forwards;

        @keyframes showButton {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
      }
    }
  }
`;

const Type = styled.div`
  @media (max-width: 1920px) {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    color: #14ff72cb;
    &.active {
      transform: translateY(50px);
      filter: blur(20px);
      opacity: 0;
      animation: showContent 0.5s 1s linear 1 forwards;

      @keyframes showContent {
        to {
          transform: translateY(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }
      animation-delay: 0.6s !important;
    }
  }
  
  /* TABLET RESPONSIVE */
  @media (max-width: 820px) {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    color: #14ff72cb;
    &.active {
      transform: translateY(50px);
      filter: blur(20px);
      opacity: 0;
      animation: showContent 0.5s 1s linear 1 forwards;

      @keyframes showContent {
        to {
          transform: translateY(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }
      animation-delay: 0.6s !important;
    }
  }
  @media (max-width: 768px) {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    color: #14ff72cb;
    &.active {
      transform: translateY(50px);
      filter: blur(20px);
      opacity: 0;
      animation: showContent 0.5s 1s linear 1 forwards;

      @keyframes showContent {
        to {
          transform: translateY(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }
      animation-delay: 0.6s !important;
    }
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    color: #14ff72cb;
    &.active {
      transform: translateY(50px);
      filter: blur(20px);
      opacity: 0;
      animation: showContent 0.5s 1s linear 1 forwards;

      @keyframes showContent {
        to {
          transform: translateY(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }
      animation-delay: 0.6s !important;
    }
  }

  @media (max-width: 412px) {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    color: #14ff72cb;
    &.active {
      transform: translateY(50px);
      filter: blur(20px);
      opacity: 0;
      animation: showContent 0.5s 1s linear 1 forwards;

      @keyframes showContent {
        to {
          transform: translateY(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }
      animation-delay: 0.6s !important;
    }
  }

  @media (max-width: 395px) {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    color: #14ff72cb;
    &.active {
      transform: translateY(50px);
      filter: blur(20px);
      opacity: 0;
      animation: showContent 0.5s 1s linear 1 forwards;

      @keyframes showContent {
        to {
          transform: translateY(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }
      animation-delay: 0.6s !important;
    }
  }
  @media (max-width: 391px) {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    color: #14ff72cb;
    &.active {
      transform: translateY(50px);
      filter: blur(20px);
      opacity: 0;
      animation: showContent 0.5s 1s linear 1 forwards;

      @keyframes showContent {
        to {
          transform: translateY(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }
      animation-delay: 0.6s !important;
    }
  }
  @media (max-width: 376px) {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    color: #14ff72cb;
    &.active {
      transform: translateY(50px);
      filter: blur(20px);
      opacity: 0;
      animation: showContent 0.5s 1s linear 1 forwards;

      @keyframes showContent {
        to {
          transform: translateY(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }
      animation-delay: 0.6s !important;
    }
  }
  @media (max-width: 360px) {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    color: #14ff72cb;
    &.active {
      transform: translateY(50px);
      filter: blur(20px);
      opacity: 0;
      animation: showContent 0.5s 1s linear 1 forwards;

      @keyframes showContent {
        to {
          transform: translateY(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }
      animation-delay: 0.6s !important;
    }
  }
  @media (max-width: 320px) {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    color: #14ff72cb;
    &.active {
      transform: translateY(50px);
      filter: blur(20px);
      opacity: 0;
      animation: showContent 0.5s 1s linear 1 forwards;

      @keyframes showContent {
        to {
          transform: translateY(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }
      animation-delay: 0.6s !important;
    }
  }
`;

const Description = styled.div`
  &.active {
    transform: translateY(50px);
    filter: blur(20px);
    opacity: 0;
    animation: showContent 0.5s 1s linear 1 forwards;

    @keyframes showContent {
      to {
        transform: translateY(0px);
        filter: blur(0px);
        opacity: 1;
      }
    }
    animation-delay: 0.8s !important;
  }
`;

const TitleContent = styled.div`
  @media (max-width: 1920px) {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    &.active {
      transform: translateY(50px);
      filter: blur(20px);
      opacity: 0;
      animation: showContent 0.5s 1s linear 1 forwards;

      @keyframes showContent {
        to {
          transform: translateY(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }
      animation-delay: 0.4s !important;
    }
  }
  /* TABLET RESPONSIVE */
  @media (max-width: 820px) {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    &.active {
      transform: translateY(50px);
      filter: blur(20px);
      opacity: 0;
      animation: showContent 0.5s 1s linear 1 forwards;

      @keyframes showContent {
        to {
          transform: translateY(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }
      animation-delay: 0.4s !important;
    }
  }
  @media (max-width: 768px) {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    &.active {
      transform: translateY(50px);
      filter: blur(20px);
      opacity: 0;
      animation: showContent 0.5s 1s linear 1 forwards;

      @keyframes showContent {
        to {
          transform: translateY(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }
      animation-delay: 0.4s !important;
    }
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    &.active {
      transform: translateY(50px);
      filter: blur(20px);
      opacity: 0;
      animation: showContent 0.5s 1s linear 1 forwards;

      @keyframes showContent {
        to {
          transform: translateY(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }
      animation-delay: 0.4s !important;
    }
  }

  @media (max-width: 412px) {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    &.active {
      transform: translateY(50px);
      filter: blur(20px);
      opacity: 0;
      animation: showContent 0.5s 1s linear 1 forwards;

      @keyframes showContent {
        to {
          transform: translateY(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }
      animation-delay: 0.4s !important;
    }
  }

  @media (max-width: 395px) {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    &.active {
      transform: translateY(50px);
      filter: blur(20px);
      opacity: 0;
      animation: showContent 0.5s 1s linear 1 forwards;

      @keyframes showContent {
        to {
          transform: translateY(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }
      animation-delay: 0.4s !important;
    }
  }
  @media (max-width: 391px) {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    &.active {
      transform: translateY(50px);
      filter: blur(20px);
      opacity: 0;
      animation: showContent 0.5s 1s linear 1 forwards;

      @keyframes showContent {
        to {
          transform: translateY(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }
      animation-delay: 0.4s !important;
    }
  }
  @media (max-width: 376px) {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    &.active {
      transform: translateY(50px);
      filter: blur(20px);
      opacity: 0;
      animation: showContent 0.5s 1s linear 1 forwards;

      @keyframes showContent {
        to {
          transform: translateY(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }
      animation-delay: 0.4s !important;
    }
  }
  @media (max-width: 360px) {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    &.active {
      transform: translateY(50px);
      filter: blur(20px);
      opacity: 0;
      animation: showContent 0.5s 1s linear 1 forwards;

      @keyframes showContent {
        to {
          transform: translateY(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }
      animation-delay: 0.4s !important;
    }
  }
  @media (max-width: 320px) {
    font-size: 4em;
    font-weight: bold;
    line-height: 1.3em;
    &.active {
      transform: translateY(50px);
      filter: blur(20px);
      opacity: 0;
      animation: showContent 0.5s 1s linear 1 forwards;

      @keyframes showContent {
        to {
          transform: translateY(0px);
          filter: blur(0px);
          opacity: 1;
        }
      }
      animation-delay: 0.4s !important;
    }
  }
`;

const ThumbnailsContainer = styled.div`
  @media (max-width: 1920px) {
    position: absolute;
    bottom: 50px;
    left: 50%;
    width: max-content;
    z-index: 100;
    display: flex;
    gap: 20px;
  }
  
  /* TABLET RESPONSIVE */
  @media (max-width: 820px) {
    position: absolute;
    bottom: 50px;
    left: 50%;
    width: max-content;
    z-index: 100;
    display: flex;
    gap: 20px;
  }
  @media (max-width: 768px) {
    position: absolute;
    bottom: 50px;
    left: 50%;
    width: max-content;
    z-index: 100;
    display: flex;
    gap: 20px;
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    position: absolute;
    bottom: 50px;
    left: 60%;
    width: max-content;
    z-index: 100;
    display: flex;
    gap: 20px;
  }

  @media (max-width: 412px) {
    position: absolute;
    bottom: 50px;
    left: 60%;
    width: max-content;
    z-index: 100;
    display: flex;
    gap: 20px;
  }

  @media (max-width: 395px) {
    position: absolute;
    bottom: 50px;
    left: 60%;
    width: max-content;
    z-index: 100;
    display: flex;
    gap: 20px;
  }
  
  @media (max-width: 391px) {
    position: absolute;
    bottom: 50px;
    left: 60%;
    width: max-content;
    z-index: 100;
    display: flex;
    gap: 20px;
  }
  @media (max-width: 376px) {
    position: absolute;
    bottom: 50px;
    left: 60%;
    width: max-content;
    z-index: 100;
    display: flex;
    gap: 20px;
  }
  @media (max-width: 360px) {
    position: absolute;
    bottom: 50px;
    left: 60%;
    width: max-content;
    z-index: 100;
    display: flex;
    gap: 20px;
  }
  @media (max-width: 320px) {
    position: absolute;
    bottom: 50px;
    left: 60%;
    width: max-content;
    z-index: 100;
    display: flex;
    gap: 20px;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
`;

const Thumbnail = styled.img`
  @media (max-width: 1920px) {
    width: 200px;
    height: 200px;
    object-fit: cover;
    box-shadow: 5px 0 15px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
  }
  
  /* TABLET RESPONSIVE */
  @media (max-width: 820px) {
    width: 200px;
    height: 200px;
    object-fit: cover;
    box-shadow: 5px 0 15px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
  }
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    object-fit: cover;
    box-shadow: 5px 0 15px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    width: 145px;
    height: 145px;
    object-fit: cover;
    box-shadow: 5px 0 15px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
  }

  @media (max-width: 412px) {
    width: 145px;
    height: 145px;
    object-fit: cover;
    box-shadow: 5px 0 15px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
  }

  @media (max-width: 395px) {
    width: 130px;
    height: 130px;
    object-fit: cover;
    box-shadow: 5px 0 15px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
  }
  
  @media (max-width: 391px) {
    width: 130px;
    height: 130px;
    object-fit: cover;
    box-shadow: 5px 0 15px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
  }
  @media (max-width: 376px) {
    width: 125px;
    height: 125px;
    object-fit: cover;
    box-shadow: 5px 0 15px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
  }
  @media (max-width: 360px) {
    width: 125px;
    height: 125px;
    object-fit: cover;
    box-shadow: 5px 0 15px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
  }
  @media (max-width: 320px) {
    width: 100px;
    height: 100px;
    object-fit: cover;
    box-shadow: 5px 0 15px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
  }
`;

const Arrows = styled.div`
  @media (max-width: 1920px) {
    position: absolute;
    top: 80%;
    right: 52%;
    z-index: 100;
    width: 300px;
    max-width: 30%;
    display: flex;
    gap: 10px;
    align-items: center;
    button {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: transparent;
      border: 1px solid white;
      color: #fff;
      font-family: monospace;
      font-weight: bold;
      transition: background-color 0.5s, color 0.5s;
      cursor: pointer;
      &:hover {
        background-color: #fff;
        color: black;
      }
      &.active {
        transform: translateY(50px);
        filter: blur(20px);
        opacity: 0;
        animation: showContent 0.5s 1s linear 1 forwards;

        @keyframes showContent {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
        animation-delay: 0.4s !important;
      }
    }
  }

  @media (max-width: 428px) {
    position: absolute;
    top: 80%;
    right: 52%;
    z-index: 100;
    width: 300px;
    max-width: 30%;
    display: flex;
    gap: 10px;
    align-items: center;
    button {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: transparent;
      border: 1px solid white;
      color: #fff;
      font-family: monospace;
      font-weight: bold;
      transition: background-color 0.5s, color 0.5s;
      cursor: pointer;
      &:hover {
        background-color: #fff;
        color: black;
      }
      &.active {
        transform: translateY(50px);
        filter: blur(20px);
        opacity: 0;
        animation: showContent 0.5s 1s linear 1 forwards;

        @keyframes showContent {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
        animation-delay: 0.4s !important;
      }
    }
  }

  @media (max-width: 412px) {
    position: absolute;
    top: 80%;
    right: 52%;
    z-index: 100;
    width: 300px;
    max-width: 30%;
    display: flex;
    gap: 10px;
    align-items: center;
    button {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: transparent;
      border: 1px solid white;
      color: #fff;
      font-family: monospace;
      font-weight: bold;
      transition: background-color 0.5s, color 0.5s;
      cursor: pointer;
      &:hover {
        background-color: #fff;
        color: black;
      }
      &.active {
        transform: translateY(50px);
        filter: blur(20px);
        opacity: 0;
        animation: showContent 0.5s 1s linear 1 forwards;

        @keyframes showContent {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
        animation-delay: 0.4s !important;
      }
    }
  }
  
  @media (max-width: 395px) {
    position: absolute;
    top: 80%;
    right: 52%;
    z-index: 100;
    width: 300px;
    max-width: 30%;
    display: flex;
    gap: 10px;
    align-items: center;
    button {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: transparent;
      border: 1px solid white;
      color: #fff;
      font-family: monospace;
      font-weight: bold;
      transition: background-color 0.5s, color 0.5s;
      cursor: pointer;
      &:hover {
        background-color: #fff;
        color: black;
      }
      &.active {
        transform: translateY(50px);
        filter: blur(20px);
        opacity: 0;
        animation: showContent 0.5s 1s linear 1 forwards;

        @keyframes showContent {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
        animation-delay: 0.4s !important;
      }
    }
  }
  @media (max-width: 391px) {
    position: absolute;
    top: 80%;
    right: 52%;
    z-index: 100;
    width: 300px;
    max-width: 30%;
    display: flex;
    gap: 10px;
    align-items: center;
    button {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: transparent;
      border: 1px solid white;
      color: #fff;
      font-family: monospace;
      font-weight: bold;
      transition: background-color 0.5s, color 0.5s;
      cursor: pointer;
      &:hover {
        background-color: #fff;
        color: black;
      }
      &.active {
        transform: translateY(50px);
        filter: blur(20px);
        opacity: 0;
        animation: showContent 0.5s 1s linear 1 forwards;

        @keyframes showContent {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
        animation-delay: 0.4s !important;
      }
    }
  }
  @media (max-width: 376px) {
    position: absolute;
    top: 80%;
    right: 52%;
    z-index: 100;
    width: 300px;
    max-width: 30%;
    display: flex;
    gap: 10px;
    align-items: center;
    button {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: transparent;
      border: 1px solid white;
      color: #fff;
      font-family: monospace;
      font-weight: bold;
      transition: background-color 0.5s, color 0.5s;
      cursor: pointer;
      &:hover {
        background-color: #fff;
        color: black;
      }
      &.active {
        transform: translateY(50px);
        filter: blur(20px);
        opacity: 0;
        animation: showContent 0.5s 1s linear 1 forwards;

        @keyframes showContent {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
        animation-delay: 0.4s !important;
      }
    }
  }
  @media (max-width: 360px) {
    position: absolute;
    top: 80%;
    right: 52%;
    z-index: 100;
    width: 300px;
    max-width: 30%;
    display: flex;
    gap: 10px;
    align-items: center;
    button {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: transparent;
      border: 1px solid white;
      color: #fff;
      font-family: monospace;
      font-weight: bold;
      transition: background-color 0.5s, color 0.5s;
      cursor: pointer;
      &:hover {
        background-color: #fff;
        color: black;
      }
      &.active {
        transform: translateY(50px);
        filter: blur(20px);
        opacity: 0;
        animation: showContent 0.5s 1s linear 1 forwards;

        @keyframes showContent {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
        animation-delay: 0.4s !important;
      }
    }
  }
  @media (max-width: 320px) {
    position: absolute;
    top: 80%;
    right: 52%;
    z-index: 100;
    width: 300px;
    max-width: 30%;
    display: flex;
    gap: 10px;
    align-items: center;
    button {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: transparent;
      border: 1px solid white;
      color: #fff;
      font-family: monospace;
      font-weight: bold;
      transition: background-color 0.5s, color 0.5s;
      cursor: pointer;
      &:hover {
        background-color: #fff;
        color: black;
      }
      &.active {
        transform: translateY(50px);
        filter: blur(20px);
        opacity: 0;
        animation: showContent 0.5s 1s linear 1 forwards;

        @keyframes showContent {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
        animation-delay: 0.4s !important;
      }
    }
  }
`;
