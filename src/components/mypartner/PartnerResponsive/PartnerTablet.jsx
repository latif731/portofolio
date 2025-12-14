import React from "react";
import styled from "styled-components";
// import google from "../../assets/images/google.png";
import google from "../../../assets/images/google.png";
import chatgpt from "../../../assets/images/chatgpt.png";
import youtube from "../../../assets/images/Youtube_logo.png";
import stackoverflow from "../../../assets/images/stackoverflow.png";
import githubforum from "../../../assets/images/githubforum.png";
import codepen from "../../../assets/images/codepen.png";
import codesanbox from "../../../assets/images/codesandbox.png";
import mdn from "../../../assets/images/mdn.png";
import wschool from "../../../assets/images/w3school.png";
import medium from "../../../assets/images/medium.png";
import freecodecamp from "../../../assets/images/freecodecamp.png";
import { useTranslation } from "react-i18next";

const PartnerTablet = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <h1>{t("partner")}</h1>

      <div style={{ display: "flex", gap: "10rem" }}>
        <GlowCard>
          <CardImage src={youtube} />
        </GlowCard>

        <GlowCard>
          <CardImage src={codepen} />
        </GlowCard>
      </div>

      <div style={{ display: "flex", gap: "1rem" }}>
        <GlowCard>
          <CardImage src={mdn} />
        </GlowCard>

        <div>
          <GlowCard>
            <CardImage src={stackoverflow} />
          </GlowCard>

          <GlowCard>
            <CardImage src={codesanbox} />
          </GlowCard>
        </div>
      </div>

      <GlowCard>
        <CardImage src={google} large />
      </GlowCard>

      <div style={{ display: "flex", gap: "1rem" }}>
        <GlowCard>
          <CardImage src={githubforum} />
        </GlowCard>

        <div>
          <GlowCard>
            <CardImage src={freecodecamp} />
          </GlowCard>

          <GlowCard>
            <CardImage src={chatgpt} />
          </GlowCard>
        </div>
      </div>

      <div style={{ display: "flex", gap: "10rem" }}>
        <GlowCard>
          <CardImage src={wschool} />
        </GlowCard>

        <GlowCard>
          <CardImage src={medium} />
        </GlowCard>
      </div>
    </Container>
  );
};

export default PartnerTablet;

const GlowCard = styled.div`
  position: relative;
  padding: 14px;
  border-radius: 16px;
  background: #111;
  isolation: isolate;

  box-shadow:
    0 0 20px rgba(168, 85, 247, 0.35),
    0 0 40px rgba(0, 242, 255, 0.25),
    0 10px 30px rgba(0, 0, 0, 0.6);

  &::after {
    content: "";
    position: absolute;
    inset: -10px;
    border-radius: inherit;
    background: linear-gradient(
      120deg,
      #00f2ff,
      #7c7cff,
      #a855f7,
      #00f2ff
    );
    filter: blur(30px);
    opacity: 0.7;
    z-index: -1;
  }
`;






const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  color: white;
  padding-top: 6rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding-bottom: 100px;
  h1{
    margin-bottom: 5rem;
  }
`;

const CardImage = styled.img`
  width: ${({ large }) => (large ? "350px" : "250px")};
  border-radius: 12px;
  display: block;
`;

