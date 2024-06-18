import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Header = () => {
  const [bar, setBar] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  const sections = ["home", "resume", "pengalaman", "skill", "project", "training", "sertifikat"];

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setBar(false);
    setActiveNav(id);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log('Intersecting:', entry.target.id, entry.isIntersecting); 
          if (entry.isIntersecting) {
            setActiveNav(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <Container navbar={navbar}>
      <ContentContainer>
        <Logo>
          <span>Latif</span>
        </Logo>
        <Title>Welcome To My Portofolio</Title>
      </ContentContainer>
      <Navbar bar={bar}>
        {sections.map((section) => (
          <Navlink key={section} active={activeNav === section}>
            <span onClick={() => handleNavClick(section)}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </span>
          </Navlink>
        ))}
      </Navbar>
      <Bars className="bars" onClick={() => setBar(!bar)}>
        <Bar bar={bar}></Bar>
      </Bars>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  width: ${({ navbar }) => (navbar ? "100%" : "100%")};
  display: flex;
  z-index: 150;
  padding-top: 1rem;
  padding-left: 9rem;
  padding-right: 1rem;
  transition: 0.6s;
  align-items: center;
  background: ${({ navbar }) =>
    navbar
      ? "black"
      : `linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%)`};
  justify-content: space-between;
  @media (max-width: 763px) {
    width: 90%;
    padding: 1rem;
  }
  @media (max-width: 1195px) {
    padding-left: 0px;
    padding-right: 0px;
  }
  @media (max-width: 700px) {
    width: 95%;
    padding-left: 30px;
  }
  @media (max-width: 640px) {
    padding-right: 20px;
  }
`;
const Logo = styled.div`
  span {
    font-family: PimpawCat;
  }
  color: white;
  font-size: 25px;
  border-radius: 50%;
  padding: 1rem;
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(3, 77, 166, 1) 100%
  );
  @media (max-width: 640px) {
    font-size: 0;
    padding: 0;
    width: 40px;
    height: 40px;
    background-image: url(${"/images/foto.jpg"});
    background-size: cover;
  }

  span {
    @media (max-width: 640px) {
      display: none;
    }
  }
  @media (max-width: 700px) {
    font-size: 10px;
    padding: 10px;
  }
`;
const Title = styled.div`
  font-family: RamuanKurma;
  color: white;
  font-size: 50px;
  @media (max-width: 640px) {
    font-size: 20px;
  }
  @media (max-width: 700px) {
    font-size: 20px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  @media (max-width: 640px) {
    gap: 10px;
  }
  @media (max-width: 700px) {
    gap: 10px;
  }
`;

const Navbar = styled.div`
  @media (max-width: 640px) {
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: #01be96;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    gap: 2rem;
    font-weight: 700;
    height: ${(props) => (props.bar ? "100vh" : 0)};
    transition: height 400ms ease-in-out;
    overflow: hidden;
    z-index: 99;
  }

  @media (max-width: 700px) {
    font-size: 10px;
  }
  span {
    margin-left: 8px;
    margin-right: 8px;
    a {
      text-decoration: none;
      color: white;
    }
  }
`;

const Navlink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: 400;
  position: relative;
  cursor: pointer;
  padding: 0.5rem;

  :before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    height: 2px;
    background-color: white;
    width: ${props => props.active ? '100%' : '0'};
    transition: width 0.3s ease;
  }
  
  :hover:before {
    width: 100%;
  }
`;

const Bars = styled.div`
  @media (max-width: 640px) {
    width: 40px;
    height: 40px;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
  }
`;

const Bar = styled.div`
  @media (max-width: 640px) {
    position: absolute;
    z-index: 99;
    width: 100%;
    height: 2px;
    background-color: ${(props) => (props.bar ? "transparent" : "#fff")};
    &::before,
    &::after {
      content: "";
      width: 100%;
      height: 2px;
      background-color: #fff;
      position: absolute;
    }

    &::before {
      transform: ${(props) => props.bar ? "rotate(45deg)" : "translateY(10px)"};
      transition: all 400ms ease-in-out;
    }

    &::after {
      transform: ${(props) => props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
      transition: all 400ms ease-in-out;
    }
  }
`;
