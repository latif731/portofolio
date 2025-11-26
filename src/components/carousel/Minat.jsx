import React from "react";
import BelajarHalBaru from "../../assets/videos/belajarhalbaru.mp4";
import futsal from "../../assets/videos/futsal.mp4";
import coding from "../../assets/videos/coding.mp4";
import game from "../../assets/videos/game.mp4";
import musik from "../../assets/videos/musik.mp4";
import styled from "styled-components";

const Minat = ({ t, i18n }) => {
  return (
    <MinatContainer>
      <MinatChild>
        <MinatSibling>
          {/* <video src={videoObj.url} loop muted id="autoplay"/> */}
          <VideoPlayer
            width="400"
            controls
            autoPlay={true}
            muted
            playsInline
            loop={true}
          >
            <source src={`${futsal}`} type="video/mp4" />
            {/* <source src="mov_bbb.ogg" type="video/ogg"/>             */}
          </VideoPlayer>
          <h1 className="video-title">{t("tertarik.futsal")}</h1>
        </MinatSibling>
        <MinatSibling>
          {/* <video src={videoObj.url} loop muted id="autoplay"/> */}
          <VideoPlayer
            width="400"
            controls
            autoPlay={true}
            muted
            playsInline
            loop={true}
          >
            <source src={`${game}`} type="video/mp4" />
            {/* <source src="mov_bbb.ogg" type="video/ogg"/>             */}
          </VideoPlayer>

          <h1 className="video-title">{t("tertarik.game")}</h1>
        </MinatSibling>
      </MinatChild>
      <MinatChild>
        <MinatSibling>
          <VideoPlayer controls autoPlay={true} muted playsInline loop={true}>
            <source src={`${musik}`} type="video/mp4" />
            {/* <source src="mov_bbb.ogg" type="video/ogg"/>             */}
          </VideoPlayer>
          <h1 className="video-title">{t("tertarik.musik")}</h1>
        </MinatSibling>
        <MinatSibling>
          <VideoPlayer
            width="400"
            controls
            autoPlay={true}
            muted
            playsInline
            loop={true}
          >
            <source src={`${BelajarHalBaru}`} type="video/mp4" />
            {/* <source src="mov_bbb.ogg" type="video/ogg"/>             */}
          </VideoPlayer>
          <h1 className="video-title">{t("tertarik.belajar")}</h1>
        </MinatSibling>
      </MinatChild>
      <MinatChild>
        <MinatSibling>
          <VideoPlayer
            width="400"
            controls
            autoPlay={true}
            muted
            playsInline
            loop={true}
          >
            <source src={`${coding}`} type="video/mp4" />
          </VideoPlayer>
          <h1 className="video-title">{t("tertarik.coding")}</h1>
        </MinatSibling>
      </MinatChild>
    </MinatContainer>
  );
};

export default Minat;

const MinatContainer = styled.div`
  /* WEB RESPONSIVE DESKTOP */
  @media (max-width: 1920px) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-top: 2rem;
  }
  /* TABLET RESPONSIVE */
  @media (min-width: 1114px) and (max-width: 1152px){
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-top: 2rem;
  }
  @media (max-width: 835px) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-top: 2rem;
  }
  @media (max-width: 820px) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-top: 2rem;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-top: 2rem;
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
  }
  @media (max-width: 415px) {
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
  }
  @media (max-width: 412px) {
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
  }
  @media (max-width: 395px) {
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
  }
  @media (max-width: 391px) {
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
  }
  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
  }
  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
  }
  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
  }
`;

const MinatChild = styled.div`
  /* WEB RESPONSIVE DESKTOP */
  @media (max-width: 1920px) {
    display: flex;
    gap: 0.5rem;
  }
  
  /* TABLET RESPONSIVE */
  @media (min-width: 1114px) and (max-width: 1152px){
    display: flex;
    gap: 0.5rem;
  }
  @media (max-width: 835px) {
    display: flex;
    gap: 0.5rem;
  }
  @media (max-width: 820px) {
    display: flex;
    gap: 0.5rem;
  }
  @media (max-width: 768px) {
    display: flex;
    gap: 0.5rem;
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 415px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 412px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 395px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 391px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
  }
`;

const MinatSibling = styled.div`
  /* WEB RESPONSIVE DESKTOP */
  @media (max-width: 1920px) {
    position: relative;
    .video-title {
      position: absolute;
      top: 10px;
      left: 10px;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 5px;
    }
  }

  /* TABLET RESPONSIVE */
  @media (min-width: 1114px) and (max-width: 1152px){
    position: relative;
    .video-title {
      position: absolute;
      top: 10px;
      left: 10px;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 5px;
      font-size: 15px;
    }
  }
  @media (max-width: 835px) {
    position: relative;
    .video-title {
      position: absolute;
      top: 10px;
      left: 10px;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 5px;
      font-size: 14px;
    }
  }
  @media (max-width: 820px) {
    position: relative;
    .video-title {
      position: absolute;
      top: 10px;
      left: 10px;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 5px;
      font-size: 13px;
    }
  }
  @media (max-width: 768px) {
    position: relative;
    .video-title {
      position: absolute;
      top: 10px;
      left: 10px;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 5px;
      font-size: 12px;
    }
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    position: relative;
    .video-title {
      position: absolute;
      top: 10px;
      left: 10px;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 5px;
      font-size: 17px;
    }
  }
  @media (max-width: 415px) {
    position: relative;
    .video-title {
      position: absolute;
      top: 10px;
      left: 10px;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 5px;
      font-size: 16px;
    }
  }
  @media (max-width: 412px) {
    position: relative;
    .video-title {
      position: absolute;
      top: 10px;
      left: 10px;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 5px;
      font-size: 15px;
    }
  }
  @media (max-width: 395px) {
    position: relative;
    .video-title {
      position: absolute;
      top: 10px;
      left: 10px;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 5px;
      font-size: 14px;
    }
  }
  @media (max-width: 391px) {
    position: relative;
    .video-title {
      position: absolute;
      top: 10px;
      left: 10px;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 5px;
      font-size: 13px;
    }
  }
  @media (max-width: 376px) {
    position: relative;
    .video-title {
      position: absolute;
      top: 10px;
      left: 10px;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 5px;
      font-size: 12px;
    }
  }
  @media (max-width: 360px) {
    position: relative;
    .video-title {
      position: absolute;
      top: 10px;
      left: 10px;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 5px;
      font-size: 11px;
    }
  }
  @media (max-width: 320px) {
    position: relative;
    .video-title {
      position: absolute;
      top: 10px;
      left: 10px;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 5px;
      font-size: 10px;
    }
  }
`;

const VideoPlayer = styled.video`
  /* WEB RESPONSIVE DESKTOP */
  @media (max-width: 1920px) {
    width: 400px;
    height: auto;
    display: block;
    border-radius: 5px;
  }

  /* TABLET RESPONSIVE */
  @media (min-width: 1114px) and (max-width: 1152px) {
    width: 275px;
    height: auto;
    display: block;
    border-radius: 5px;
  }
  @media (max-width: 835px) {
    width: 245px;
    height: auto;
    display: block;
    border-radius: 5px;
  }
  @media (max-width: 820px) {
    width: 245px;
    height: auto;
    display: block;
    border-radius: 5px;
  }
  @media (max-width: 800px) {
    width: 235.4px;
    height: auto;
    display: block;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    width: 222px;
    height: auto;
    display: block;
    border-radius: 5px;
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    width: 379.5px;
    height: auto;
    display: block;
    border-radius: 5px;
  }
  @media (max-width: 415px) {
    width: 364.5px;
    height: auto;
    display: block;
    border-radius: 5px;
  }
  @media (max-width: 412px) {
    width: 361.5px;
    height: auto;
    display: block;
    border-radius: 5px;
  }
  @media (max-width: 395px) {
    width: 340px;
    height: auto;
    display: block;
    border-radius: 5px;
  }
  @media (max-width: 391px) {
    width: 340px;
    height: auto;
    display: block;
    border-radius: 5px;
  }

  @media (max-width: 376px) {
    width: 325px;
    height: auto;
    display: block;
    border-radius: 5px;
  }
  @media (max-width: 360px) {
    width: 312px;
    height: auto;
    display: block;
    border-radius: 5px;
  }
  @media (max-width: 320px) {
    width: 270px;
    height: auto;
    display: block;
    border-radius: 5px;
  }
`;
