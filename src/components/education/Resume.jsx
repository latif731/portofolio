import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaGraduationCap } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { IoColorPalette } from "react-icons/io5";
import hobi from "../../assets/images/hobbie.png";
import KTpolos from "../../assets/images/ktppolos.jpg";
import foto from "../../assets/images/foto.jpg";
import Minat from "../carousel/Minat";
import { LuBrain } from "react-icons/lu";
import { useTranslation } from "react-i18next";


const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const Resume = () => {
  const [active, setActive] = useState(1);
  const { t,i18n } = useTranslation();
  
  return (
    <Container id="resume">
      <Title>
        <h4>
          {/* My<span className="green">Resume</span> */}
          {t("resume.title1")}<span className="green">{t("resume.title2")}</span>
        </h4>
        {/* <h1>Resume</h1> */}
        <h1>{t("resume.title")}</h1>
      </Title>
      <ContentContainer>
        <Sidebars>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginLeft:"1rem"
              }}
            >
              <div
                style={{
                  marginRight: "1rem",
                }}
              >
                <IoMdPerson />
              </div>
              <div
                onClick={() => setActive(1)}
                style={{
                  cursor: "pointer",
                }}
              >
                {/* Profile Pribadi */}
                {t("menu.profile")}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                // justifyContent:"space-around"
                // gap:1
                                marginLeft:"1rem"
              }}
            >
              <div
                style={{
                  marginRight: "1rem",
                }}
              >
                <FaGraduationCap />
              </div>
              <div
                onClick={() => setActive(2)}
                style={{
                  cursor: "pointer",
                }}
              >
                {/* Pendidikan */}
                {t("menu.education")}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                                marginLeft:"1rem"
                // justifyContent: "space-around",
              }}
            >
              <div
                style={{
                  marginRight: "1rem",
                }}
                
              >
                  <LuBrain/>
              </div>
              <div
                onClick={() => setActive(3)}
                style={{
                  cursor: "pointer",
                }}
              >
                 {/* Skill */}
                 {t("menu.skill")}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems:"center",
                // justifyContent: "space-around",
              }}
            >
              <div
                style={{
                  // marginRight: "1rem",
                }}
              >
                <img src={`${hobi}`} alt="" width={"45px"} height={"30px"} />
              </div>
              <div
                onClick={() => setActive(4)}
                style={{
                  cursor: "pointer",
                }}
              >
                {/* Tertarik */}
                {t("menu.interest")}
              </div>
            </div>
          </div>
        </Sidebars>
        <ContentSidebar>
          {/* {active === 1 && (
            <PersonContainer>
              <h3>{t("profileTitle.profile title")}</h3>
              <Banner backgroundImage={`${KTpolos}`}>
                <h3
                  style={{
                    fontFamily: "hacker",
                    color: "black",
                    textAlign: "center",
                    paddingBottom: "2rem",
                  }}
                >
                  {t("profileTitle.province")}
                  <br />
                  <br />
                  
                  {t("profileTitle.kabupaten")}
                </h3>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    
                  }}
                >
                  <h4
                    style={{
                      fontFamily: "Hacker",
                      color: "black",
                    }}
                  >
                    
                    {t("profileMenu.nama")}
                  </h4>
                  <span
                    style={{
                      color: "black",
                      marginLeft: "13.3rem",
                      fontWeight: "bold",
                    }}
                  >
                    :
                  </span>
                  <h4
                    style={{
                      marginLeft: "3rem",
                      fontFamily: "Hacker",
                      color: "black",
                    }}
                  >
                    {" "}
                    
                    {t("profileContent.nama")}
                  </h4>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2rem",
                  }}
                >
                  <h4
                    style={{
                      fontFamily: "Hacker",
                      color: "black",
                    }}
                  >
                    
                    {t("profileMenu.tempatTanggalLahir")}
                  </h4>
                  <span
                    style={{
                      color: "black",
                      marginLeft: "3.3rem",
                      fontWeight: "bold",
                    }}
                  >
                    :
                  </span>
                  <h4
                    style={{
                      fontFamily: "Hacker",
                      color: "black",
                      marginLeft: "1rem",
                    }}
                  >
                    {" "}
                    
                    {t("profileContent.tempatTanggalLahir")}
                  </h4>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2rem",
                  }}
                >
                  <h4
                    style={{
                      fontFamily: "Hacker",
                      color: "black",
                    }}
                  >
                    
                    {t("profileMenu.pendidikanTerakhir")}
                  </h4>
                  <span
                    style={{
                      color: "black",
                      marginLeft: "0.1rem",
                      fontWeight: "bold",
                    }}
                  >
                    :
                  </span>
                  <h4
                    style={{
                      fontFamily: "Hacker",
                      color: "black",
                      marginLeft: "1rem",
                    }}
                  >
                    {" "}
                    
                    {t("profileContent.pendidikanTerakhir")}
                  </h4>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2rem",
                  }}
                >
                  <h4
                    style={{
                      fontFamily: "Hacker",
                      color: "black",
                    }}
                  >
                    
                    {t("profileMenu.jenisKelamin")}
                  </h4>
                  <span
                    style={{
                      color: "black",
                      marginLeft: "5.3rem",
                      fontWeight: "bold",
                    }}
                  >
                    :
                  </span>
                  <h4
                    style={{
                      fontFamily: "Hacker",
                      color: "black",
                      marginLeft: "1rem",
                    }}
                  >
                    {" "}
                    
                    {t("profileContent.jenisKelamin")}
                  </h4>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2rem",
                  }}
                >
                  <h4
                    style={{
                      fontFamily: "Hacker",
                      color: "black",
                    }}
                  >
                    
                    {t("profileMenu.alamat")}
                  </h4>
                  <span
                    style={{
                      color: "black",
                      marginLeft: "10.1rem",
                      fontWeight: "bold",
                    }}
                  >
                    :
                  </span>
                  <h4
                    style={{
                      fontFamily: "Hacker",
                      color: "black",
                      marginLeft: "1rem",
                    }}
                  >
                    {" "}
                    
                    {t("profileContent.alamat")}
                  </h4>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2rem",
                  }}
                >
                  <h4
                    style={{
                      fontFamily: "Hacker",
                      color: "black",
                    }}
                  >
                    
                    {t("profileMenu.agama")}
                  </h4>
                  <span
                    style={{
                      color: "black",
                      marginLeft: "10.6rem",
                      fontWeight: "bold",
                    }}
                  >
                    :
                  </span>
                  <h4
                    style={{
                      fontFamily: "Hacker",
                      color: "black",
                      marginLeft: "1rem",
                    }}
                  >
                    {" "}
                    
                    {t("profileContent.agama")}
                  </h4>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2rem",
                  }}
                >
                  <h4
                    style={{
                      fontFamily: "Hacker",
                      color: "black",
                    }}
                  >
                    
                    {t("profileMenu.status")}
                  </h4>
                  <span
                    style={{
                      color: "black",
                      marginLeft: "0.7rem",
                      fontWeight: "bold",
                    }}
                  >
                    :
                  </span>
                  <h4
                    style={{
                      fontFamily: "Hacker",
                      color: "black",
                      marginLeft: "1rem",
                    }}
                  >
                    {" "}
                    
                    {t("profileContent.status")}
                  </h4>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2rem",
                  }}
                >
                  <h4
                    style={{
                      fontFamily: "Hacker",
                      color: "black",
                    }}
                  >
                    
                    {t("profileMenu.nomorTelepon")}
                  </h4>
                  <span
                    style={{
                      color: "black",
                      marginLeft: "4.7rem",
                      fontWeight: "bold",
                    }}
                  >
                    :
                  </span>
                  <h4
                    className="telp"
                    style={{
                      
                      fontWeight: 600,
                      color: "black",
                      marginLeft: "1rem",
                    }}
                  >
                    {" "}
                    
                    {t("profileContent.nomorTelepon")}
                  </h4>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2rem",
                  }}
                >
                  <h4
                    style={{
                      fontFamily: "Hacker",
                      color: "black",
                    }}
                  >
                    
                    {t("profileMenu.email")}
                  </h4>
                  <span
                    style={{
                      color: "black",
                      marginLeft: "11.3rem",
                      fontWeight: "bold",
                    }}
                  >
                    :
                  </span>
                  <h4
                    style={{
                      
                      color: "black",
                      fontWeight: 600,
                      marginLeft: "1rem",
                    }}
                  >
                    {" "}
                    
                    {t("profileContent.email")}
                  </h4>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    // marginBottom:"20rem"
                  }}
                >
                </div>
              </Banner>
            </PersonContainer>
          )} */}
          {active === 1 && (
  <PersonContainer>
    <h3>{t("profileTitle.profile title")}</h3>

    <Banner backgroundImage={`${KTpolos}`}>
      <h3
        style={{
          fontFamily: "hacker",
          color: "black",
          textAlign: "center",
          paddingBottom: "2rem",
        }}
      >
        {t("profileTitle.province")}
        <br />
        <br />
        {t("profileTitle.kabupaten")}
      </h3>

      {/* ===== PROFILE FIELDS ===== */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.8rem",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        {[
          ["profileMenu.nama", "profileContent.nama"],
          ["profileMenu.tempatTanggalLahir", "profileContent.tempatTanggalLahir"],
          ["profileMenu.pendidikanTerakhir", "profileContent.pendidikanTerakhir"],
          ["profileMenu.jenisKelamin", "profileContent.jenisKelamin"],
          ["profileMenu.alamat", "profileContent.alamat"],
          ["profileMenu.agama", "profileContent.agama"],
          ["profileMenu.status", "profileContent.status"],
          ["profileMenu.nomorTelepon", "profileContent.nomorTelepon"],
          ["profileMenu.email", "profileContent.email"],
        ].map(([labelKey, valueKey], index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              background: index % 2 === 0 ? "rgba(255,255,255,0.2)" : "transparent",
              padding: "0.3rem 0.5rem",
              borderRadius: "8px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                minWidth: "180px",
              }}
            >
              <h4
                style={{
                  // fontFamily: "Hacker",
                  color: "black",
                }}
              >
                {t(labelKey)}
              </h4>
              <span
                style={{
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                :
              </span>
            </div>

            <h4
              style={{
                // fontFamily: "Hacker",
                color: "black",
                fontWeight: 600,
                textAlign: "right",
                flex: "1",
                wordBreak: "break-word",
              }}
            >
              {t(valueKey)}
            </h4>
          </div>
        ))}
      </div>

      {/* ===== FOTO OPSIONAL ===== */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "2rem",
        }}
      >
        {/* <img
          src={`${foto}`}
          alt="Foto Profil"
          style={{
            width: "100px",
            height: "140px",
            borderRadius: "8px",
            objectFit: "cover",
            border: "2px solid black",
          }}
        /> */}
      </div>
    </Banner>
  </PersonContainer>
)}

          {active === 2 && (
            <Pendidikan>
              <h3>{t("education.educationTitle")}</h3>
              <ContentPendidikan>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "15px",
                        height: "15px",
                        backgroundColor: "red",
                        borderRadius: "20px",
                      }}
                    ></div>
                    <div>
                      <h4>{t("education.education1")}</h4>
                    </div>
                    <div
                      style={{
                        paddingLeft: "20rem",
                      }}
                    >
                      <p
                        style={{
                          backgroundColor: "red",
                          padding: "10px",
                          borderRadius: "20px",
                        }}
                      >
                        2002 - 2008
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "15px",
                        height: "15px",
                        backgroundColor: "red",
                        borderRadius: "20px",
                      }}
                    ></div>
                    <div>
                      <h4>{t("education.education2")}</h4>
                    </div>
                    <div
                      style={{
                        paddingLeft: "17.3rem",
                      }}
                    >
                      <p
                        style={{
                          backgroundColor: "red",
                          paddingTop: "10px",
                          paddingLeft: "16px",
                          paddingRight: "16px",
                          paddingBottom: "10px",
                          borderRadius: "20px",
                        }}
                      >
                        2008 - 2011
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "15px",
                        height: "15px",
                        backgroundColor: "red",
                        borderRadius: "20px",
                      }}
                    ></div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <h4>{t("education.education3")}</h4>
                      <p>{t("education.jurusan")} : {t("education.namajurusan")}</p>
                    </div>
                    <div
                      style={{
                        paddingLeft: "18.2rem",
                      }}
                    >
                      <p
                        style={{
                          backgroundColor: "red",
                          paddingTop: "10px",
                          paddingLeft: "18px",
                          paddingRight: "18px",
                          paddingBottom: "10px",
                          borderRadius: "20px",
                        }}
                      >
                        2011 - 2014
                      </p>
                    </div>
                  </div>
                </div>
              </ContentPendidikan>
            </Pendidikan>
          )}
          {active === 3 && (
            <Skill>
              <h3>{t("skill.skillTitle")}</h3>
              <SkillBox>
                <Line2 />
                <SkillContainer>
                  <SoftSkill>
                    <h4>{t("skill.softSkill")}</h4>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        paddingTop: "1rem",
                      }}
                    >
                      <div
                        style={{
                          width: "7px",
                          height: "7px",
                          backgroundColor: "white",
                          borderRadius: "10px",
                        }}
                      ></div>
                      <p>{t("skill.disiplin")}</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        paddingTop: "1rem",
                      }}
                    >
                      <div
                        style={{
                          width: "7px",
                          height: "7px",
                          backgroundColor: "white",
                          borderRadius: "10px",
                        }}
                      ></div>
                      <p>{t("skill.jujur")}</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: "1rem",
                        paddingTop: "1rem",
                      }}
                    >
                      <div
                        style={{
                          width: "7px",
                          height: "7px",
                          backgroundColor: "white",
                          borderRadius: "10px",
                        }}
                      ></div>
                      <p>{t("skill.mampuBekerja")}</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        paddingTop: "1rem",
                      }}
                    >
                      <div
                        style={{
                          width: "7px",
                          height: "7px",
                          backgroundColor: "white",
                          borderRadius: "10px",
                        }}
                      ></div>
                      <p>{t("skill.komunikasi")}</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        paddingTop: "1rem",
                      }}
                    >
                      <div
                        style={{
                          width: "7px",
                          height: "7px",
                          backgroundColor: "white",
                          borderRadius: "10px",
                        }}
                      ></div>
                      <p>{t("skill.komitmen")}</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        paddingTop: "1rem",
                      }}
                    >
                      <div
                        style={{
                          width: "7px",
                          height: "7px",
                          backgroundColor: "white",
                          borderRadius: "10px",
                        }}
                      ></div>
                      <p>{t("skill.bawahTekanan")}</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        paddingTop: "1rem",
                      }}
                    >
                      <div
                        style={{
                          width: "7px",
                          height: "7px",
                          backgroundColor: "white",
                          borderRadius: "10px",
                        }}
                      ></div>
                      <p>{t("skill.pekerjaKeras")}</p>
                    </div>
                  </SoftSkill>
                  <Line />
                  <HardSkill>
                    <h4>{t("skill.hardSkill")}</h4>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        paddingTop: "1rem",
                      }}
                    >
                      <div
                        style={{
                          width: "7px",
                          height: "7px",
                          backgroundColor: "white",
                          borderRadius: "10px",
                        }}
                      ></div>
                      <p>{t("skill.las")}</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        paddingTop: "1rem",
                      }}
                    >
                      <div
                        style={{
                          width: "7px",
                          height: "7px",
                          backgroundColor: "white",
                          borderRadius: "10px",
                        }}
                      ></div>
                      <p>{t("skill.komputer")}</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        paddingTop: "1rem",
                      }}
                    >
                      <div
                        style={{
                          width: "7px",
                          height: "7px",
                          backgroundColor: "white",
                          borderRadius: "10px",
                        }}
                      ></div>
                      <p>{t("skill.inggris")}</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        paddingTop: "1rem",
                      }}
                    >
                      <div
                        style={{
                          width: "7px",
                          height: "7px",
                          backgroundColor: "white",
                          borderRadius: "10px",
                        }}
                      ></div>
                      <p>{t("skill.korea")}</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        paddingTop: "1rem",
                      }}
                    >
                      <div
                        style={{
                          width: "7px",
                          height: "7px",
                          backgroundColor: "white",
                          borderRadius: "10px",
                        }}
                      ></div>
                      <p>{t("skill.korea")}</p>
                    </div>
                  </HardSkill>
                </SkillContainer>
                <Line3 />
              </SkillBox>
            </Skill>
          )}
          {active === 4 && (
            <MinatContainer>
              <Title>
                <h3>{t("tertarik.title")}</h3>
              </Title>
              <Minat t={t} i18n={i18n}/>
            </MinatContainer>
          )}
        </ContentSidebar>
      </ContentContainer>
    </Container>
  );
};

export default Resume;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: white;
  padding-top: 6rem;
  gap: 2rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding-bottom: 100px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  animation: ${slideIn} 0.5s ease-out;
`;

const SidebarItem = styled.div``;

const ContentContainer = styled.div`
  display: flex;
  /* padding: 4rem; */
  /* gap: 5rem; */
`;

const ContentSidebar = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  padding: 2rem;
  width: 70%;
  height: 20rem;
  overflow-y: auto;
  /* flex-grow: 1; */
  margin-left: 0.5rem;
  &::-webkit-scrollbar {
    width: 8px; /* Lebar scrollbar */
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2); /* Warna thumb scrollbar */
    border-radius: 4px; /* Radius sudut */
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, 0.4); /* Warna thumb saat dihover */
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1); /* Warna track scrollbar */
  }
`;
const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const Sidebars = styled.div`
  display: flex;
  padding: 2rem;
  /* border: 1px solid red; */
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  flex: 1;
  align-items: center;
  /* height: auto; */
  height: 20rem;
  flex-shrink: 0;
`;

const PersonContainer = styled.div``;

const Pendidikan = styled.div``;

const ContentPendidikan = styled.div`
  padding: 2rem;
`;

const Banner = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  height: 600px; /* Sesuaikan sesuai kebutuhan */
  width: 100%; /* Sesuaikan sesuai kebutuhan */
  margin-top: 20px; /* Tambahkan margin jika diperlukan */
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const MinatContainer = styled.div``;

const SkillContainer = styled.div`
  display: flex;
  justify-content: center;
  /* padding-top: 1rem; */
  align-items: flex-start;
  position: relative;
  margin: 2rem 0;
  /* gap:15rem; */
`;

const Line = styled.div`
  /* width: 2px;
  background-color: white;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%); */
`;
const Line2 = styled.div`
  /* width: 100%;
  height: 2px;
  background-color: white;
  position: absolute;
  top: 0;
  left: 0; */
`;
const Line3 = styled.div`
  /* width: 100%;
  height: 2px;
  background-color: white;
  position: absolute;
  bottom: 0;
  left: 0; */
`;

const SoftSkill = styled.div`
  /* border:1px solid red; */
  /* width:20rem; */
  flex: 1;
  text-align: left;
  padding: 1rem;
  border-left: white 1px solid;
  border-right: white 1px solid;
  border-top: white 1px solid;
  border-bottom: white 1px solid;
  h4 {
    text-align: center;
    border-bottom: white 1px solid;
    border-right: white 1px solid;
    border-left: white 1px solid;
    border-top: white 1px solid;
    width: 24rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  /* padding-left: 10rem;
  padding-right: 10rem;
  padding-bottom: ;
  padding-top: ; */
`;

const HardSkill = styled.div`
  /* border:1px solid red; */
  /* margin-top */
  /* width:20rem; */
  text-align: center;
  flex: 1;
  text-align: center;
  height: 21rem;
  padding: 1rem;
  border-right: white 1px solid;
  border-top: white 1px solid;
  border-bottom: white 1px solid;
  h4 {
    text-align: center;
    border-bottom: white 1px solid;
    border-right: white 1px solid;
    border-left: white 1px solid;
    border-top: white 1px solid;
    width: 24rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
`;

const Skill = styled.div`
  color: white;
  /* text-align: center; */
  /* margin-top: 2rem; */
`;
const SkillBox = styled.div`
  position: relative;
  margin-top: 1rem;
`;
