import React, { useRef } from "react";
import styled from "styled-components";
import FooterWeb from "./responsive/FooterWeb";
import FooterMobile from "./responsive/FooterMobile";

const Footer = () => {
  return (
    <>
      <Web>
        <FooterWeb />
      </Web>
      <Mobile>
        <FooterMobile/>
      </Mobile>
      <Tablet>

      </Tablet>
    </>
  );
};

export default Footer;

const Web = styled.div`
@media (max-width:1920px) {
  display: block;
}
@media (max-width:320px) {
  display: none;
}
`

const Mobile = styled.div`
@media (max-width:1920px) {
  display: none;
}
@media (max-width:428px) {
  display: block;
}
@media (max-width:415px) {
  display: block;
}
@media (max-width:412px) {
  display: block;
}
@media (max-width:395px) {
  display: block;
}
@media (max-width:391px) {
  display: block;
}
@media (max-width:376px) {
  display: block;
}
@media (max-width:360px) {
  display: block;
}
@media (max-width:320px) {
  display: block;
}
`

const Tablet = styled.div``