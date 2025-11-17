import React from "react";
import styled from "styled-components";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";
import foto from "../../assets/images/foto.jpg";
import ProfileCaraousel from "../carousel/ProfileCaraousel";
import i18 from "../../i18n";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const { t, i18n } = useTranslation();

  return (
    <Container id="home">
      <Texts>
        {/* <h4>Halo <span className='green'>Saya</span></h4> */}
        <h4>
          {t("profile.greeting")}{" "}
          <span className="green">{t("profile.me")}</span>
        </h4>
        {/* <h1>Latif Budi Pamungkas</h1> */}
        <h1>{t("profile.name")}</h1>
        {/* <h3>A WEB DEVELOPER</h3> */}
        <ProfileCaraousel t={t} i18n={i18n} />
        {/* <p
            style={{
                paddingTop:"2rem",
                color: "white",
                fontWeight: "bold"
            }}
            >My Motto :</p> */}
        <p
          style={{
            paddingTop: "2rem",
            color: "white",
            fontWeight: "bold",
          }}
          className="motto-title"
        >
          {t("profile.mottoTitle")}
        </p>
        <p
          style={{
            fontWeight: "bold",
            // paddingTop:"2rem",
            color: "white",
          }}
          className="motto"
        >
          {/* "I'm not smart, but i'm just a man that know about process and work hard,<br/>
            ever tried, ever failed, no matter, try again, fail again, fail better, Allah <br/> 
            always listening and always beside me, treat everyone kindly and light up the night"  */}
          {t("profile.motto")}
        </p>
        <Social>
          <p>
            {/* Check out my */}
            {t("profile.social")} :
          </p>
          <div className="social-icons">
            <span>
              <a href="#">
                <TiSocialInstagram className="ig" />
              </a>
            </span>
            <span>
              <a href="#">
                <TiSocialLinkedin className="linkedin" />
              </a>
            </span>
            <span>
              <a href="#">
                <TiSocialGithub className="github" />
              </a>
            </span>
          </div>
        </Social>
      </Texts>
      <ProfileContent>
        <img src={`${foto}`} alt="" />
      </ProfileContent>
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  /* laptop */
  @media (max-width: 1920px) {
    display: flex;
    padding-top: 8rem;
    padding-bottom: 5rem;
    /* align-items: center; */
    gap: 2rem;
    z-index: 0;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
  }
  /* tablet */
  @media (max-width: 835px) {
    padding-top: 6rem;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  /* tablet */
  @media (max-width: 820px) {
    padding-top: 6rem;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  /* tablet */
  @media (max-width: 768px) {
    padding-top: 6rem;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  /* mobile */
  @media (max-width: 428px) {
    padding-top: 3rem;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  /* mobile */
  @media (max-width: 415px) {
    padding-top: 3rem;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  /* mobile */
  @media (max-width: 412px) {
    padding-top: 3rem;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  /* mobile */
  @media (max-width: 395px) {
    padding-top: 3rem;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  /* mobile */
  @media (max-width: 391px) {
    padding-top: 3rem;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  /* mobile */
  @media (max-width: 376px) {
    padding-top: 3rem;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    /* ini akan AKTIF di iPhone X */
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  /* mobile */
  @media (max-width: 360px) {
    padding-top: 3rem;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  /* mobile */
  @media (max-width: 320px) {
    padding-top: 3rem;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
const Texts = styled.div`
  flex: 1;
  /* laptop */
  @media (max-width: 1920px) {
    h4 {
      padding: 1rem 0;
      font-weight: 500;
      color: white;
      .green {
        color: green;
      }
    }

    h1 {
      font-size: 2rem;
      font-family: "Secular One", sans-serif;
      letter-spacing: 2px;
      color: white;
    }

    h3 {
      font-weight: 500;
      font-size: 1.2rem;
      padding-bottom: 1.2rem;
      color: white;
      text-transform: capitalize;
    }
    p {
      font-weight: 300;
      color: white;
    }
  }

  /* tablet */
  @media (max-width: 835px) {
    h4 {
      text-align: center;
      font-size: 22px;
    }
    h1 {
      text-align: center;
      font-size: 2rem;
    }
    .motto-title {
      text-align: center;
      /* font-size: 20px; */
    }
    .motto {
      text-align: center;
      /* font-size: 16px; */
      width: 49rem;
    }
  }

  /* tablet */
  @media (max-width: 820px) {
    h4 {
      text-align: center;
      font-size: 22px;
    }
    h1 {
      text-align: center;
      font-size: 2rem;
    }
    .motto-title {
      text-align: center;
      /* font-size: 20px; */
    }
    .motto {
      text-align: center;
      /* font-size: 16px; */
      width: 49rem;
    }
  }

  /* tablet */
  @media (max-width: 768px) {
    h4 {
      text-align: center;
      font-size: 22px;
    }
    h1 {
      text-align: center;
      font-size: 2rem;
    }
    .motto-title {
      text-align: center;
      /* font-size: 20px; */
    }
    .motto {
      text-align: center;
      /* font-size: 16px; */
      width: 46rem;
    }
  }

  /* mobile */
  @media (max-width: 428px) {
    h4 {
      text-align: center;
      font-size: 21px;
    }
    h1 {
      text-align: center;
      font-size: 21px;
    }
    .motto-title {
      text-align: center;
      font-size: 20px;
    }
    .motto {
      text-align: center;
      font-size: 16px;
      width: 25.5rem;
    }
  }

  /* mobile */
  @media (max-width: 415px) {
    h4 {
      text-align: center;
      font-size: 20px;
    }
    h1 {
      text-align: center;
      font-size: 20px;
    }
    .motto-title {
      text-align: center;
      font-size: 19px;
    }
    .motto {
      text-align: center;
      font-size: 15px;
      width: 25.3rem;
    }
  }

  /* mobile */
  @media (max-width: 412px) {
    h4 {
      text-align: center;
      font-size: 19px;
    }
    h1 {
      text-align: center;
      font-size: 19px;
    }
    .motto-title {
      text-align: center;
      font-size: 18px;
    }
    .motto {
      text-align: center;
      font-size: 14px;
      width: 24rem;
    }
  }

  /* mobile */
  @media (max-width: 395px) {
    h4 {
      text-align: center;
      font-size: 18px;
    }
    h1 {
      text-align: center;
      font-size: 18px;
    }
    .motto-title {
      text-align: center;
      font-size: 17px;
    }
    .motto {
      text-align: center;
      font-size: 14px;
      width: 24rem;
    }
  }

  /* mobile */
  @media (max-width: 391px) {
    h4 {
      text-align: center;
      font-size: 18px;
    }
    h1 {
      text-align: center;
      font-size: 18px;
    }
    .motto-title {
      text-align: center;
      font-size: 17px;
    }
    .motto {
      text-align: center;
      font-size: 14px;
      width: 23.5rem;
    }
  }

  /* mobile */
  @media (max-width: 376px) {
    h4 {
      text-align: center;
      font-size: 17px;
    }
    h1 {
      text-align: center;
      font-size: 17px;
    }
    .motto-title {
      text-align: center;
      font-size: 16px;
    }
    .motto {
      text-align: center;
      font-size: 13px;
      width: 22rem;
    }
  }

  /* mobile */
  @media (max-width: 360px) {
    h4 {
      text-align: center;
      font-size: 16px;
    }
    h1 {
      text-align: center;
      font-size: 16px;
    }
    .motto-title {
      text-align: center;
      font-size: 15px;
    }
    .motto {
      text-align: center;
      font-size: 12px;
      width: 20.7rem;
    }
  }

  /* mobile */
  @media (max-width: 320px) {
    h4 {
      text-align: center;
      font-size: 15px;
    }
    h1 {
      text-align: center;
      font-size: 15px;
    }
    .motto-title {
      text-align: center;
      font-size: 13px;
    }
    .motto {
      text-align: center;
      font-size: 10px;
      width: 19rem;
    }
  }
`;

const Social = styled.div`
  /* laptop */
  @media (max-width: 1920px) {
    margin-top: 3rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    p {
      font-size: 0.9rem;
    }
    .social-icons {
      display: flex;
      gap: 2rem;
      span {
        width: 3rem;
        height: 3rem;
        clip-path: polygon(
          50% 0%,
          100% 25%,
          100% 75%,
          50% 100%,
          0% 75%,
          0% 25%
        );
        background-color: #01be96;
        position: relative;
        transition: transform 400ms ease;
        &:hover {
          transform: rotate(360deg);
        }
        .ig {
          font-size: 25px;
        }
        .linkedin {
          font-size: 25px;
        }
        .github {
          font-size: 25px;
        }
      }
      * {
        color: #fff;
        position: absolute;
        top: 25%;
        left: 25%;
        transform: translateY(-50%, -50%);
      }
    }
  }

  /* tablet */
  @media (max-width: 835px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 15px;
    }
    .social-icons {
      /* position: absolute; */
      /* top: 57rem; */
      /* right: 220px; */
      margin-right: 6.4rem;
      span {
        width: 45px;
        height: 45px;
        .ig {
          font-size: 23px;
        }
        .linkedin {
          font-size: 23px;
        }
        .github {
          font-size: 23px;
        }
      }
      * {
        color: #fff;
        position: absolute;
        top: 25%;
        left: 25%;
        transform: translateY(-40%, -40%);
      }
    }
  }
  /* tablet */
  @media (max-width: 820px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 15px;
    }
    .social-icons {
      /* position: absolute; */
      /* top: 57rem; */
      /* right: 220px; */
      margin-right: 6.4rem;
      span {
        width: 45px;
        height: 45px;
        .ig {
          font-size: 23px;
        }
        .linkedin {
          font-size: 23px;
        }
        .github {
          font-size: 23px;
        }
      }
      * {
        color: #fff;
        position: absolute;
        top: 25%;
        left: 25%;
        transform: translateY(-40%, -40%);
      }
    }
  }

  /* mobile */
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 15px;
    }
    .social-icons {
      /* position: absolute; */
      /* top: 57rem; */
      /* right: 220px; */
      margin-right: 6.4rem;
      span {
        width: 45px;
        height: 45px;
        .ig {
          font-size: 23px;
        }
        .linkedin {
          font-size: 23px;
        }
        .github {
          font-size: 23px;
        }
      }
      * {
        color: #fff;
        position: absolute;
        top: 25%;
        left: 25%;
        transform: translateY(-40%, -40%);
      }
    }
  }

  /* mobile */
  @media (max-width: 415px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 14px;
    }
    .social-icons {
      /* position: absolute; */
      /* top: 57rem; */
      /* right: 220px; */
      margin-right: 6.1rem;
      span {
        width: 43px;
        height: 43px;
        .ig {
          font-size: 22px;
        }
        .linkedin {
          font-size: 22px;
        }
        .github {
          font-size: 22px;
        }
      }
      * {
        color: #fff;
        position: absolute;
        top: 25%;
        left: 25%;
        transform: translateY(-40%, -40%);
      }
    }
  }

  /* mobile */
  @media (max-width: 412px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 13px;
    }
    .social-icons {
      /* position: absolute; */
      /* top: 57rem; */
      /* right: 220px; */
      margin-right: 6rem;
      span {
        width: 41px;
        height: 41px;
        .ig {
          font-size: 21px;
        }
        .linkedin {
          font-size: 21px;
        }
        .github {
          font-size: 21px;
        }
      }
      * {
        color: #fff;
        position: absolute;
        top: 25%;
        left: 25%;
        transform: translateY(-40%, -40%);
      }
    }
  }

  /* mobile */
  @media (max-width: 391px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 12px;
    }
    .social-icons {
      /* position: absolute; */
      /* top: 57rem; */
      /* right: 220px; */
      margin-right: 5.6rem;
      span {
        width: 38px;
        height: 38px;
        .ig {
          font-size: 20px;
        }
        .linkedin {
          font-size: 20px;
        }
        .github {
          font-size: 20px;
        }
      }
      * {
        color: #fff;
        position: absolute;
        top: 25%;
        left: 25%;
        transform: translateY(-40%, -40%);
      }
    }
  }
  /* mobile */
  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 11px;
    }
    .social-icons {
      /* position: absolute; */
      /* top: 57rem; */
      /* right: 220px; */
      margin-right: 5.6rem;
      span {
        width: 36px;
        height: 36px;
        .ig {
          font-size: 19px;
        }
        .linkedin {
          font-size: 19px;
        }
        .github {
          font-size: 19px;
        }
      }
      * {
        color: #fff;
        position: absolute;
        top: 25%;
        left: 25%;
        transform: translateY(-40%, -40%);
      }
    }
  }

  /* mobile */
  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 10px;
    }
    .social-icons {
      /* position: absolute; */
      /* top: 57rem; */
      /* right: 220px; */
      margin-right: 5.6rem;
      span {
        width: 34px;
        height: 34px;
        .ig {
          font-size: 17px;
        }
        .linkedin {
          font-size: 17px;
        }
        .github {
          font-size: 17px;
        }
      }
      * {
        color: #fff;
        position: absolute;
        top: 25%;
        left: 25%;
        transform: translateY(-40%, -40%);
      }
    }
  }

  /* mobile */
  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-size: 9px;
    }
    .social-icons {
      /* position: absolute; */
      /* top: 52rem; */
      /* right: 190px; */
      margin-right: 5rem;
      span {
        width: 30px;
        height: 30px;
        .ig {
          font-size: 15px;
        }
        .linkedin {
          font-size: 15px;
        }
        .github {
          font-size: 15px;
        }
      }
      * {
        color: #fff;
        position: absolute;
        top: 25%;
        left: 25%;
        transform: translateY(-40%, -40%);
      }
    }
  }
`;
const ProfileContent = styled.div`
  img {
    /* laptop */
    @media (max-width: 1920px) {
      margin-top: 3rem;
      width: 15rem;
      border-radius: 50%;
      filter: drop-shadow(0px 0px 10px #f04242);
      transition: 400ms;
      /* position:absolute; */
      /* z-index: -2; */
    }
    /* tablet */
    @media (max-width: 768px) {
      width: 240px;
    }

    /* mobile */
    @media (max-width: 428px) {
      width: 230px;
    }

    /* mobile */
    @media (max-width: 415px) {
      width: 220px;
    }

    /* mobile */
    @media (max-width: 412px) {
      width: 210px;
    }

    /* mobile */
    @media (max-width: 391px) {
      width: 200px;
    }

    /* mobile */
    @media (max-width: 376px) {
      width: 190px;
    }

    /* mobile */
    @media (max-width: 360px) {
      width: 180px;
    }

    /* mobile */
    @media (max-width: 320px) {
      width: 170px;
    }
  }

  :hover {
    transform: translateY(-10px);
  }
`;
