import React from "react";
import Header from "./components/banner/Header";
import Profile from "./components/banner/Profile";
import styled from "styled-components";
import Resume from "./components/education/Resume";
import Pengalaman from "./components/pengalaman/Pengalaman";
import Minat from "./components/carousel/Minat";
// import Programmer from "./components/SkillList/Programmer";
import Circular from "./components/circular/Circular";
import SkillCard from "./components/card/SkillCard";
import PortFolio from "./components/portfolio/PersonalProject";
import PersonalProject from "./components/portfolio/PersonalProject";
import CardPorto from "./components/portfolio/CardPorto";
import Training from "./components/training/Training";
import Certificate from "./components/certificate/Certificate";
import MyPartner from "./components/mypartner/MyPartner";
import Footer from "./components/footer/Footer";
import Skill from "./components/skill/Skill";

function App() {
  return (
    <div>
      <Nav>
      <Header />
      </Nav>
      <Banner>
        <Profile />
      </Banner>
      <Resume />
      <Banner>
        <Pengalaman />
      </Banner>
      {/* <Programmer /> */}
      <Skill/>
      <Banner>
        <PersonalProject />
        {/* <CardPorto/> */}
      </Banner>
      <Training />
      <Banner>
        <Certificate />
      </Banner>
      <MyPartner />
      <Banner>
        <Footer />
      </Banner>
    </div>
  );
}

export default App;

const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  min-height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const Nav = styled.div`
  z-index: 100;
`
