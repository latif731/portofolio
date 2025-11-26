import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import i18 from "../../i18n";

const Header = () => {
  const [bar, setBar] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const [lang, setLang] = useState("id");
  const { t, i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);

  const sections = [
    "home",
    "resume",
    "pengalaman",
    "skill",
    "project",
    "training",
    "sertifikat",
  ];

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
          console.log("Intersecting:", entry.target.id, entry.isIntersecting);
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

  // // ganti bahasa
  //  const handleLanguageChange = (e) => {
  //   const selectedLang = e.target.value;
  //   setLang(selectedLang);
  //   i18n.changeLanguage(selectedLang);
  // };

  const handleLanguageChange = (selectedLang) => {
    setLang(selectedLang);
    i18n.changeLanguage(selectedLang);
    localStorage.setItem("selectedLang", selectedLang);
    setShowDropdown(false);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("selectedLang") || "id";
    setLang(savedLang);
    i18n.changeLanguage(savedLang);
  }, []);

  return (
    <Container navbar={navbar}>
      <ContentContainer>
        <Logo>{/* <span>Latif</span> */}</Logo>
        {/* <Title>Welcome To My Portofolio</Title> */}
        <Title>{t("title")}</Title>
      </ContentContainer>
      <Navbar bar={bar}>
        {sections.map((section) => (
          <Navlink key={section} active={activeNav === section}>
            <span onClick={() => handleNavClick(section)}>
              {/* {section.charAt(0).toUpperCase() + section.slice(1)} */}
              {t(`navbar.${section}`)}
            </span>
          </Navlink>
        ))}
        {/* === DROPDOWN TRANSLATE CUSTOM === */}
        <TranslateContainer>
          <Dropdown>
            <DropdownButton onClick={() => setShowDropdown(!showDropdown)}>
              {lang === "id" && "Indonesia"}
              {lang === "en" && "English"}
              {lang === "ko" && "한국어"}
            </DropdownButton>

            {showDropdown && (
              <DropdownMenu>
                <DropdownItem
                  onClick={() => handleLanguageChange("id")}
                  active={lang === "id"}
                >
                  🇮🇩 Indonesia
                </DropdownItem>
                <DropdownItem
                  onClick={() => handleLanguageChange("en")}
                  active={lang === "en"}
                >
                  🇺🇸 English
                </DropdownItem>
                <DropdownItem
                  onClick={() => handleLanguageChange("ko")}
                  active={lang === "ko"}
                >
                  🇰🇷 한국어
                </DropdownItem>
              </DropdownMenu>
            )}
          </Dropdown>
        </TranslateContainer>
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
  padding-bottom: 1rem;
  /* padding-left: 9rem; */
  padding-right: 1rem;
  transition: 0.6s;
  align-items: center;
  background: ${({ navbar }) =>
    navbar
      ? "black"
      : `linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%)`};
  justify-content: space-between;
  /* Desktop besar */
  @media (max-width: 1536px) {
    /* padding-left: 7rem; */
  }

  /* Laptop besar */
  @media (max-width: 1280px) {
    /* padding-left: 4rem; */
  }

  /* Laptop kecil / Tablet Landscape */
  @media (max-width: 1024px) {
    /* padding-left: 2rem; */
    /* padding-right: 1rem; */
  }

  /* Tablet */
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  /* HP besar */

  @media (max-width: 720px) {
  /* untuk layar kecil / sangat rendah resolusi */
}

@media (min-width: 721px) and (max-width: 1080px) {
  /* untuk sebagian besar ponsel Oppo FHD+ (1080 × 2400) */
}

@media (min-width: 1081px) {
  /* untuk layar besar / high-res (QHD atau foldable) */
}
  @media (max-width: 640px) {
    /* padding-left: 1rem; */
    /* padding-right: 1rem; */
  }

  /* HP kecil (iPhone SE) */
  /* @media (max-width: 480px) {
    padding-left: 0rem;
    padding-right: 1rem;
    width: 30rem;
    position:fixed;
  } */
  /* paling aman untuk semua HP */
  @media (max-width: 430px) {
    width: 100%;
  }
`;
const Logo = styled.div`
  /* span {
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
  ); */
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
  /* @media (max-width: 700px) {
    font-size: 10rem;
    padding: 10px;
  } */
`;
const Title = styled.div`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: white;
  /* font-size: 50px; */
  font-size: clamp(1.2rem, 2vw, 2rem);
  /* font-size: clamp(1rem, 1.5vw, 1.6rem); */
  /* font-size: clamp(0.9rem, 1.3vw, 1.4rem); */

  @media (max-width: 1120px) {
    font-size: 20px;
    /* padding: 2px 6px; */
  }

  @media (max-width: 884px) {
    font-size: 12px;
  }

  @media (max-width:800px) {
    font-size: 17px
  }

  @media (max-width: 768px) {
    /* padding-left: 1rem; */
    /* padding-right: 1rem; */
    /* width:"100%" */
    /* font-size: clamp(0.9rem, 1.3vw, 1.4rem); */
    font-size: 14px;
  }

  /* HP kecil (iPhone SE) */
  @media (max-width: 480px) {
    padding-left: 0rem;
    /* margin-right: 1.5rem; */
    font-size: 13px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }

  @media(max-width: 320px) {
    font-size: 10px;
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
  display: flex;
  /* gap: 25px; */
  align-items: center;

  /* === FIX POSISI NAVBAR AGAR TIDAK GESER === */
  /* min-width: 750px;      samakan dengan tampilan saat bahasa Indonesia */
  justify-content: space-between;

  /* Tablet */
  @media (max-width: 768px) {
    /* padding-left: 1rem; */
    /* padding-right: 1rem; */
    /* width:"10px" */
    /* min-width: 100px; */
  }

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
    /* margin-left: 2rem; */
    /* width: auto; */
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
  /* padding: 0.5rem; */
  /* min-width: 90px; */
  width: auto;
  text-align: center;
  white-space: nowrap;
  /* teks tidak turun ke bawah */

  :before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    height: 2px;
    background-color: white;
    width: ${(props) => (props.active ? "100%" : "0")};
    transition: width 0.3s ease;
  }

  :hover:before {
    width: 100%;
  }

  /* Desktop besar */
  @media (max-width: 1920px) {
    /* padding-left: 7rem; */
    min-width: 90px;
    margin-left: 1rem;
  }

  /* Laptop besar */
  @media (max-width: 1280px) {
    /* padding-left: 4rem; */
    min-width: 90px;
    margin-left: 0%;
  }

  /* Laptop kecil / Tablet Landscape */
  @media (max-width: 1024px) {
    /* padding-left: 2rem; */
    /* padding-right: 1rem; */
    /* min-width: 90px; */
  }

  /* HP kecil (iPhone SE) */
  @media (max-width: 480px) {
    /* margin-right: 1.8rem; */
  }

  /* @media (max-width: 768px) {
    font-size: 10px;
  } */

  @media (min-width: 768px) and (max-width: 1024px) {
    /* warna berubah kalau active */
    color: ${(props) => (props.active ? "#00e0ff" : "#fff")};
    font-size: 10px;
    min-width: 40px;
    margin-left: 0%;
    /* hilangkan underline */
    :before {
      display: none;
    }

    :hover:before {
      display: none;
    }
  }
`;

const TranslateContainer = styled.div`
  position: relative;
  margin-left: 1rem;
  user-select: none;
  /* hp kecil */
  @media (max-width: 480px) {
    /* padding-left: 0.5rem; */
    /* padding-right: 0.5rem; */
    font-size: 6px;
  }
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.div`
  background: transparent;
  border: 1px solid white;
  color: white;
  /* padding: 6px 12px; */
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  @media (max-width:1920px){
    font-size: 15px;
    padding: 2px 6px;
  }


  @media (max-width: 1120px) {
    font-size: 15px;
    padding: 2px 6px;
  }

  @media (max-width: 843px) {
    font-size: 10px;
    padding: 2px 6px;
  }

  @media (max-width: 820px) {
    font-size: 10px;
    padding: 2px 6px;
  }

  @media (max-width: 768px) {
    font-size: 10px;
    padding: 2px 6px;
    margin-bottom: 4px;
  }

  /* HP kecil (iPhone SE) */
  @media (max-width: 480px) {
    font-size: 10px;
    margin-right: 1rem;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  right: 0;
  top: 110%;
  background: #222;
  border: 1px solid #555;
  border-radius: 8px;
  padding: 0.3rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  /* align-items: center; */
  z-index: 999;
  min-width: 130px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  @media (max-width: 480px) {
    /* position: fixed; */
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    right: auto;
    background: #111;
    min-width: 200px;
    padding: 1rem;
  }
`;

const DropdownItem = styled.div`
  padding: 1px 10px;
  border-radius: 5px;
  color: ${(props) => (props.active ? "#01be96" : "white")};
  background: ${(props) =>
    props.active ? "rgba(1,190,150,0.1)" : "transparent"};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
  @media (max-width: 480px) {
    /* padding-left: 0rem; */
    /* padding-right: 0.5rem; */
    /* width:375px */
    font-size: 15px;
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
      transform: ${(props) =>
        props.bar ? "rotate(45deg)" : "translateY(10px)"};
      transition: all 400ms ease-in-out;
    }

    &::after {
      transform: ${(props) =>
        props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
      transition: all 400ms ease-in-out;
    }
  }
`;
