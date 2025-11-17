import React,{useRef} from "react";
import styled from "styled-components";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { BsFacebook, BsSlack } from "react-icons/bs";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import emailjs from "@emailjs/browser"

import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const form = useRef()
  const {t} = useTranslation()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_q8jaors', 'template_h36besp', form.current, {
        publicKey: '8XQKncXT0Yo_961pD',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };
  return (
    <Container>
      <LeftContainer>
        {/* <h1>Contact</h1> */}
        <h1>{t("kontak")}</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "2rem",
            // gap:"1rem"
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            {/* <span>Alamat :</span> */}
            <span>{t("lokasi menu.alamat")} :</span>
            {/* <p>Ds. Jatirejo Rt. 12/Rw. 02 Kec.Wonoasri Kab. Madiun</p> */}
            <p>{t("detail lokasi.alamat")}</p>
          </div>
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            {/* <span>No Telp :</span> */}
            <span>{t("lokasi menu.telepon")} :</span>
            {/* <p>085782244135</p> */}
            <p>{t("detail lokasi.telepon")}</p>
          </div>
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            {/* <span>Email :</span> */}
            <span>{t("lokasi menu.email")} :</span>
            {/* <p>pamungkaslatifbudi@gmail.com</p> */}
            <p>{t("detail lokasi.email")}</p>
          </div>
        </div>
        <div
        style={{
          paddingTop:"2rem"
        }}
        >
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d494.3677474913964!2d111.6159355483724!3d-7.581294926404177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79b9002d70be67%3A0xd403f77394fbacf7!2sAisah!5e0!3m2!1sen!2sid!4v1717997432419!5m2!1sen!2sid"
        width="600" 
        height="450"  
        allowfullscreen=""
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
      </LeftContainer>
      <RightContainer>
        <Form>
          <form 
          ref={form}
          onSubmit={sendEmail}
          >
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
            <button
            type="submit"
            >{t("kirim")}</button>
          </form>
        </Form>
        <Social>
                {/* <p>Social Media</p> */}
                <p>{t("Media Sosial")}</p>
                <div className='social-icons'>
                    <span><a href='#'><TiSocialInstagram className='ig'/></a></span>
                    <span><a href='#'><TiSocialLinkedin className='linkedin'/></a></span>
                    <span><a href='#'><TiSocialGithub className='github'/></a></span>
                </div>
            </Social>
      </RightContainer>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  margin-top: 2rem;
  position: relative;
  padding: 2rem 0;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  gap:2rem;
  justify-content: space-between;
  color: white;
`;

const Profile = styled.div``;

const Slide = styled.div``;

const LeftContainer = styled.div`
  /* border: 1px solid red; */
  width: 50rem;
  height: 100%;
`;

const MidContainer = styled.div`
  /* border: 1px solid red; */
  width: 20rem;
  height: 20rem;
  h1 {
    text-align: center;
  }
`;

const RightContainer = styled.div`
  /* border: 1px solid red; */
  width: 50rem;
  height: 100%;
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

`

const Social = styled.div`
    margin-top: 3rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    @media(max-width: 640px){
            /* width: 50rem; */
            /* font-size: 1px; */
            /* display: none; */
            /* width:100px; */
            padding-right: 130px;
        }
    p{
        font-size: 0.9rem;
        @media(max-width:690px){
            width: 20rem;
        }
        @media(max-width: 640px){
            /* width: 50rem; */
            /* font-size: 1px; */
            display: none;
            /* width:100px; */
        }

    }
    .social-icons{
        display: flex;
        gap: 2rem;
        @media(max-width: 640px){
            /* width: 50rem; */
            /* font-size: 1px; */
            /* gap: 0; */
            padding-left: 23px;
            /* width:100px; */
        }
        span{
            width: 3rem;
            height: 3rem;
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            background-color: #01be96;
            position: relative;
            transition: transform 400ms ease;
            &:hover{
                transform: rotate(360deg);
            }
            .ig{
                font-size: 25px;
            }
            .linkedin{
                font-size: 25px;   
            }
            .github{
                font-size: 25px;
            }
        }
        *{
            color: #fff;
            position: absolute;
            top: 25%;
            left: 25%;
            transform: translateY(-50%, -50%);
        }
    }
`
