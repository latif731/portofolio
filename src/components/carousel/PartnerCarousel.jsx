import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "react-i18next";

import google from "../../assets/images/google.png";
import chatgpt from "../../assets/images/chatgpt.png";
import youtube from "../../assets/images/Youtube_logo.png";
import stackoverflow from "../../assets/images/stackoverflow.png";
import githubforum from "../../assets/images/githubforum.png";
import codepen from "../../assets/images/codepen.png";
import codesandbox from "../../assets/images/codesandbox.png";
import mdn from "../../assets/images/mdn.png";
import wschool from "../../assets/images/w3school.png";
import medium from "../../assets/images/medium.png";
import freecodecamp from "../../assets/images/freecodecamp.png";

/* ================= KEYFRAMES ================= */
/* Scroll super pelan & stabil */
const scroll = keyframes`
  to {
    transform: translateX(-50%);
  }
`;

/* ================= STYLED COMPONENTS ================= */

const Container = styled.section`
  padding: 4rem 1rem;
  text-align: center;
  overflow: hidden;
`;

const Title = styled.h1`
  margin-bottom: 3rem;
  color: white;
`;

const Scroller = styled.div`
  max-width: 100%;
  margin-bottom: 2rem;

  &[data-animated="true"] {
    overflow: hidden;
    -webkit-mask: linear-gradient(
      90deg,
      transparent,
      white 20%,
      white 80%,
      transparent
    );
    mask: linear-gradient(
      90deg,
      transparent,
      white 20%,
      white 80%,
      transparent
    );
  }

  &[data-direction="right"] {
    --_animation-direction: reverse;
  }

  &[data-direction="left"] {
    --_animation-direction: forwards;
  }

  /* 🔥 SATU SPEED GLOBAL (SUPER SLOW) */
  --_animation-duration: 120s; /* 3 MENIT */
`;

const Inner = styled.div`
  display: flex;
  gap: 2rem;
  width: max-content;
  flex-wrap: nowrap;
  padding-block: 1rem;

  animation: ${scroll}
    var(--_animation-duration)
    var(--_animation-direction)
    linear infinite;

  /* Opsional: pause saat hover */
  &:hover {
    animation-play-state: paused;
  }
`;

const Logo = styled.img`
  height: 60px;
  width: auto;
  filter: grayscale(100%);
  opacity: 0.6;
  transition: 0.3s ease;

  &:hover {
    filter: grayscale(0);
    opacity: 1;
    transform: scale(1.05);
  }
`;

/* ================= COMPONENT ================= */

const PartnerCarousel = () => {
  const { t } = useTranslation();

  const topRef = useRef(null);
  const bottomRef = useRef(null);

  const topLogos = [
    google,
    chatgpt,
    youtube,
    stackoverflow,
    githubforum,
  ];

  const bottomLogos = [
    codepen,
    codesandbox,
    mdn,
    wschool,
    medium,
    freecodecamp,
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    [topRef, bottomRef].forEach((ref) => {
      const inner = ref.current;
      if (!inner) return;

      const items = Array.from(inner.children);

      items.forEach((item) => {
        const clone = item.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        inner.appendChild(clone);
      });
    });
  }, []);

  return (
    <Container>
      <Title>{t("partner")}</Title>

      {/* ===== BARIS ATAS (KIRI → SUPER PELAN) ===== */}
      <Scroller data-animated="true" data-direction="left">
        <Inner ref={topRef}>
          {topLogos.map((logo, index) => (
            <Logo key={index} src={logo} alt="" />
          ))}
        </Inner>
      </Scroller>

      {/* ===== BARIS BAWAH (KANAN → SUPER PELAN) ===== */}
      <Scroller data-animated="true" data-direction="right">
        <Inner ref={bottomRef}>
          {bottomLogos.map((logo, index) => (
            <Logo key={index} src={logo} alt="" />
          ))}
        </Inner>
      </Scroller>
    </Container>
  );
};

export default PartnerCarousel;


// import React, { useEffect, useRef } from "react";
// import styled, { keyframes } from "styled-components";

// const scroll = keyframes`
//   to {
//     transform: translate(calc(-50% - 0.5rem));
//   }
// `;

// const Scroller = styled.div`
//   max-width: 600px;
//   overflow: hidden;
// `;

// const Inner = styled.div`
//   display: flex;
//   gap: 1rem;
//   width: max-content;
//   animation: ${scroll} 40s linear infinite;
// `;

// const Item = styled.div`
//   padding: 1rem 1.5rem;
//   background: #334155;
//   color: white;
//   border-radius: 8px;
// `;

// export default function InfiniteScrollSingle() {
//   const innerRef = useRef(null);

//   useEffect(() => {
//     const prefersReducedMotion = window.matchMedia(
//       "(prefers-reduced-motion: reduce)"
//     ).matches;

//     if (prefersReducedMotion) return;

//     const inner = innerRef.current;
//     const items = Array.from(inner.children);

//     items.forEach((item) => {
//       const clone = item.cloneNode(true);
//       clone.setAttribute("aria-hidden", "true");
//       inner.appendChild(clone);
//     });
//   }, []);

//   return (
//     <Scroller>
//       <Inner ref={innerRef}>
//         <Item>HTML</Item>
//         <Item>CSS</Item>
//         <Item>JavaScript</Item>
//         <Item>React</Item>
//         <Item>UI/UX</Item>
//       </Inner>
//     </Scroller>
//   );
// }
