import React, { useRef } from "react";
import styled from "styled-components";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { BsFacebook, BsSlack } from "react-icons/bs";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import emailjs from "@emailjs/browser";

import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";
import { useTranslation } from "react-i18next";

const FooterMobile = () => {
  const form = useRef();
  const { t } = useTranslation();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_q8jaors", "template_h36besp", form.current, {
        publicKey: "8XQKncXT0Yo_961pD",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };
  return (
    <Container>
      <TopContainer>
        {/* <h1>Contact</h1> */}
        <h1>{t("kontak")}</h1>
        <TopContainerParent
          style={
            {
              // gap:"1rem"
            }
          }
        >
          <Alamat style={{}}>
            {/* <span>Alamat :</span> */}
            <span>{t("lokasi menu.alamat")} :</span>
            {/* <p>Ds. Jatirejo Rt. 12/Rw. 02 Kec.Wonoasri Kab. Madiun</p> */}
            <p>{t("detail lokasi.alamat")}</p>
          </Alamat>
          <Telepon style={{}}>
            {/* <span>No Telp :</span> */}
            <span>{t("lokasi menu.telepon")} :</span>
            {/* <p>085782244135</p> */}
            <p>{t("detail lokasi.telepon")}</p>
          </Telepon>
          <Email style={{}}>
            {/* <span>Email :</span> */}
            <span>{t("lokasi menu.email")} :</span>
            {/* <p>pamungkaslatifbudi@gmail.com</p> */}
            <p>{t("detail lokasi.email")}</p>
          </Email>
        </TopContainerParent>
        <MapWrapper
          style={{
            paddingTop: "2rem",
          }}
        >
          <ResponsiveIframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d494.3677474913964!2d111.6159355483724!3d-7.581294926404177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79b9002d70be67%3A0xd403f77394fbacf7!2sAisah!5e0!3m2!1sen!2sid!4v1717997432419!5m2!1sen!2sid"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></ResponsiveIframe>
        </MapWrapper>
      </TopContainer>
      <BottomContainer>
        <Form>
          <form ref={form} onSubmit={sendEmail}>
            <div className="name">
              <span>
                <CgProfile />
              </span>
              <input
                type="text"
                placeholder={t("Umpan.Nama Lengkap")}
                name="user_name"
                required
              />
            </div>
            <div className="email">
              <span>
                <MdAlternateEmail />
              </span>
              <input
                type="email"
                placeholder={t("Umpan.Email")}
                name="user_email"
                required
              />
            </div>
            {/* <div className="subject">
              <span>
                <CgProfile />
              </span>
              <input type="text" placeholder="Subject..." />
            </div> */}
            <div className="message">
              <span className="messageIcon">
                <FiMail />
              </span>
              <textarea
                cols="30"
                rows="10"
                placeholder={t("Umpan.Pesan")}
                name="message"
              ></textarea>
            </div>
            <button type="submit">{t("kirim")}</button>
          </form>
        </Form>
        <Social>
          {/* <p>Social Media</p> */}
          <p>{t("Media Sosial")}</p>
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
        <Copyright>
          © {new Date().getFullYear()} Latif Budi Pamungkas. All Rights
          Reserved.
        </Copyright>
      </BottomContainer>
    </Container>
  );
};

export default FooterMobile;

const Container = styled.div`
  margin-top: 2rem;
  position: relative;
  padding: 10px;
  width: 100%;
  /* max-width: 12px; */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;
  color: white;
`;

const MapWrapper = styled.div`
  width: 100%;
  height: 100vh;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
`;

const ResponsiveIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

const Profile = styled.div``;

const Slide = styled.div``;

const TopContainer = styled.div`
  /* border: 1px solid red; */
  /* width: 50rem; */
  height: 100%;
  h1 {
    font-size: 25px;
    /* text-align: center; */
  }
`;

const TopContainerParent = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 2rem;
`;

const Alamat = styled.div`
  /* display: flex;
  gap: 1rem;
  span{
      font-size: 12.8px;
    }
    p{
    max-width: 270px;
    font-size: 12.8px;
  } */
  display: grid;
  grid-template-columns: 90px 1fr;
  column-gap: 1px;
  align-items: start;
  margin-bottom: 0.5rem;

  span {
    font-size: 12.8px;
    opacity: 0.85;
    white-space: nowrap;
  }

  p {
    font-size: 12.8px;
    line-height: 1.5;
    max-width: 220px;
    word-break: break-word;
  }
`;

const Telepon = styled.div`
  /* display: flex;
  gap: 1rem;
  span {
    font-size: 12.8px;
  }
  p {
    max-width: 270px;
    font-size: 12.8px;
  } */
  display: grid;
  grid-template-columns: 90px 1fr;
  column-gap: 1px;
  align-items: start;
  margin-bottom: 0.5rem;

  span {
    font-size: 12.8px;
    opacity: 0.85;
    white-space: nowrap;
  }

  p {
    font-size: 12.8px;
    line-height: 1.5;
    word-break: break-word;
  }
`;

const Email = styled.div`
  /* display: flex;
  gap: 1rem;
  span {
    font-size: 12.8px;
  }
  p {
    max-width: 270px;
    font-size: 12.8px;
  } */
  display: grid;
  grid-template-columns: 90px 1fr;
  column-gap: 1px;
  align-items: start;
  margin-bottom: 0.5rem;

  span {
    font-size: 12.8px;
    opacity: 0.85;
    white-space: nowrap;
  }

  p {
    font-size: 12.8px;
    line-height: 1.5;
    word-break: break-word;
  }
`;

const MidContainer = styled.div`
  /* border: 1px solid red; */
  width: 20rem;
  height: 20rem;
  h1 {
    text-align: center;
  }
`;

const BottomContainer = styled.div`
  /* border: 1px solid red; */
  /* width: 50rem; */
  height: 100%;
  /* display: flex; */
  /* flex-direction: column; */
`;

const MidContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 4rem;
  .miditem {
    display: flex;
    gap: 1rem;
  }
`;

const Form = styled.div`
  form {
    width: 100%;
    background-color: #191923;
    padding: 0.8rem;
    border-radius: 5px;
    .name,
    .subject,
    .email,
    .message {
      display: flex;
      border: 1px solid gray;
      margin-bottom: 0.5rem;
      input,
      textarea {
        width: 100%;
        border: none;
        outline: none;
        color: #fff;
        background-color: transparent;
        padding: 1rem 0.5rem;
      }
      span {
        background-color: #3e3e3e;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .messageIcon {
        align-items: flex-start;
        padding-top: 0.5rem;
      }
    }

    button {
      width: 5rem;
      height: 1.8rem;
      background-color: #01be96;
      border: none;
      border-radius: 5px;
      filter: drop-shadow(0px 4px 5px #01be9551);
      cursor: pointer;
      :hover {
        filter: drop-shadow(0px 6px 9px #01be9551);
      }
    }
  }
`;

const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
  }
  .social-icons {
    display: flex;
    gap: 2rem;
    padding-right: 100px;
    span {
      width: 3rem;
      height: 3rem;
      clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
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
`;

const Copyright = styled.div`
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  text-align: center;
  font-size: 10px;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.5px;
`;

