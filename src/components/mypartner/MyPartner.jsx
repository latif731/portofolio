import React from "react";
import styled from "styled-components";
import PartnerWeb from "./PartnerResponsive/PartnerWeb";
import PartnerMobile from "./PartnerResponsive/PartnerMobile";


const MyPartner = () => {
  // const {t} = useTranslation()
  return (
    <>
      <Web>
        <PartnerWeb />
      </Web>
      <Mobile>
        <PartnerMobile />
      </Mobile>
      <Tablet></Tablet>
    </>
  );
};

export default MyPartner;

const Web = styled.div`
  @media (max-width: 1920px) {
    display: block;
  }
  @media (max-width: 320px) {
    display: none;
  }
`;
const Mobile = styled.div`
  @media (max-width: 1920px) {
    display: none;
  }
  @media (max-width: 320px) {
    display: block;
  }
`;
const Tablet = styled.div``;
