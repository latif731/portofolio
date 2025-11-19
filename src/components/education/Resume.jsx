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
import Hobby from "../../assets/images/hobby.svg?react";

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
  const { t, i18n } = useTranslation();

  return (
    <Container id="resume">
      <Title>
        {/* <h4>
          My<span className="green">Resume</span>
          {t("resume.title1")} <span className="green">{t("resume.title2")}</span>
        </h4> */}
        {/* <h1>Resume</h1> */}
        <h1>{t("resume.title")}</h1>
      </Title>
      <ContentContainer>
        <Sidebars>
          <SidebarContent>
            <Profile>
              {/* <ProfileIcon
                active={active === 1}
                onClick={() => setActive(1)}
                style={{
                  cursor: "pointer",
                }}
              >
                <IoMdPerson />
              </ProfileIcon> */}
              <IconBase
                active={active === 1}
                onClick={() => setActive(1)}
                style={{
                  cursor: "pointer",
                }}
              >
                <IoMdPerson />
              </IconBase>
              <ActiveLink
                active={active === 1}
                onClick={() => setActive(1)}
                style={{
                  cursor: "pointer",
                }}
              >
                {/* Profile Pribadi */}
                {/* <p>{t("menu.profile")}</p> */}
                <MenuText>{t("menu.profile")}</MenuText>
              </ActiveLink>
            </Profile>
            <Pendidikan>
              {/* <PendidikanIcon
                active={active === 2}
                onClick={() => setActive(2)}
                style={{
                  cursor: "pointer",
                }}
              >
                <FaGraduationCap />
              </PendidikanIcon> */}
              <IconBase
                active={active === 2}
                onClick={() => setActive(2)}
                style={{
                  cursor: "pointer",
                }}
              >
                <FaGraduationCap />
              </IconBase>
              <ActiveLink
                active={active === 2}
                onClick={() => setActive(2)}
                style={{
                  cursor: "pointer",
                }}
              >
                {/* Pendidikan */}
                {/* <p>{t("menu.education")}</p> */}
                <MenuText>{t("menu.education")}</MenuText>
              </ActiveLink>
            </Pendidikan>
            <Keahlian>
              {/* <KeahlianIcon
                active={active === 3}
                onClick={() => setActive(3)}
                style={{
                  cursor: "pointer",
                }}
              >
                <LuBrain />
              </KeahlianIcon> */}
              <IconBase
                active={active === 3}
                onClick={() => setActive(3)}
                style={{
                  cursor: "pointer",
                }}
              >
                <LuBrain />
              </IconBase>
              <ActiveLink
                active={active === 3}
                onClick={() => setActive(3)}
                style={{
                  cursor: "pointer",
                }}
              >
                {/* Skill */}
                {/* <p>{t("menu.skill")}</p> */}
                <MenuText>{t("menu.skill")}</MenuText>
              </ActiveLink>
            </Keahlian>
            <Minatku>
              {/* <MinatkuIcon
                active={active === 4}
                onClick={() => setActive(4)}
                style={{
                  cursor: "pointer",
                }}
              >
                <img src={`${hobi}`} alt="" width={"45px"} height={"30px"}  active={active === 4}
                onClick={() => setActive(4)}/>
              </MinatkuIcon> */}
              <IconBase
                active={active === 4}
                onClick={() => setActive(4)}
                style={{
                  cursor: "pointer",
                }}
              >
                {/* <img
                  src={`${hobi}`}
                  alt=""
                  width={"45px"}
                  height={"30px"}
                  active={active === 4}
                  onClick={() => setActive(4)}
                /> */}
                <HobbyFix>
                  <Hobby />
                </HobbyFix>
              </IconBase>
              <ActiveLink
                active={active === 4}
                onClick={() => setActive(4)}
                style={{
                  cursor: "pointer",
                }}
              >
                {/* Tertarik */}
                {/* <p>{t("menu.interest")}</p> */}
                <MenuText>{t("menu.interest")}</MenuText>
              </ActiveLink>
            </Minatku>
          </SidebarContent>
        </Sidebars>
        <ContentSidebar>
          {active === 1 && (
            <PersonContainer>
              <h3 className="main-title">{t("profileTitle.profile title")}</h3>

              <Banner backgroundImage={`${KTpolos}`}>
                <h3 className="second-title">
                  {t("profileTitle.province")}
                  <br />
                  {t("profileTitle.kabupaten")}
                </h3>

                {/* ===== PROFILE FIELDS ===== */}
                <PersonContent>
                  {[
                    ["profileMenu.nama", "profileContent.nama"],
                    [
                      "profileMenu.tempatTanggalLahir",
                      "profileContent.tempatTanggalLahir",
                    ],
                    [
                      "profileMenu.pendidikanTerakhir",
                      "profileContent.pendidikanTerakhir",
                    ],
                    ["profileMenu.jenisKelamin", "profileContent.jenisKelamin"],
                    ["profileMenu.alamat", "profileContent.alamat"],
                    ["profileMenu.agama", "profileContent.agama"],
                    ["profileMenu.status", "profileContent.status"],
                    ["profileMenu.nomorTelepon", "profileContent.nomorTelepon"],
                    ["profileMenu.email", "profileContent.email"],
                  ].map(([labelKey, valueKey], index) => (
                    <PersonContentChild>
                      <PersonContentSibling>
                        <h4
                          style={{
                            // fontFamily: "Hacker",
                            color: "black",
                          }}
                        >
                          {t(labelKey)}
                        </h4>
                        <span>:</span>
                      </PersonContentSibling>

                      <h4>{t(valueKey)}</h4>
                    </PersonContentChild>
                  ))}
                </PersonContent>
              </Banner>
            </PersonContainer>
          )}

          {active === 2 && (
            <PendidikanContainer>
              <h3>{t("education.educationTitle")}</h3>
              <ContentPendidikan>
                <ContentPendidikanChild>
                  <ContentPendidikanSibling>
                    <PendidikanFlex>
                      <Dot1></Dot1>
                      <ContentPendidikanTitle>
                        <h4>{t("education.education1")}</h4>
                      </ContentPendidikanTitle>
                    </PendidikanFlex>
                    <ContentTahunPendidikan1>
                      <p>2002 - 2008</p>
                    </ContentTahunPendidikan1>
                  </ContentPendidikanSibling>
                  <ContentPendidikanSibling>
                    <PendidikanFlex>
                      <Dot1></Dot1>
                      <ContentPendidikanTitle>
                        <h4>{t("education.education2")}</h4>
                      </ContentPendidikanTitle>
                    </PendidikanFlex>
                    <ContentTahunPendidikan2>
                      <p>2008 - 2011</p>
                    </ContentTahunPendidikan2>
                  </ContentPendidikanSibling>
                  <ContentPendidikanSibling>
                    <PendidikanFlex>
                      <Dot1></Dot1>
                      <ContentPendidikanTitle>
                        <h4>{t("education.education3")}</h4>
                        <p className="jurusan">
                          {t("education.jurusan")} :{" "}
                          {t("education.namajurusan")}
                        </p>
                      </ContentPendidikanTitle>
                    </PendidikanFlex>
                    <ContentTahunPendidikan3>
                      <p>2011 - 2014</p>
                    </ContentTahunPendidikan3>
                  </ContentPendidikanSibling>
                </ContentPendidikanChild>
              </ContentPendidikan>
            </PendidikanContainer>
          )}
          {active === 3 && (
            <Skill>
              <h3 className="skill-title">{t("skill.skillTitle")}</h3>
              <SkillBox>
                <SkillContainer>
                  <SoftSkill>
                    <h4>{t("skill.softSkill")}</h4>
                    <SoftSkillFlex>
                      <Dot2></Dot2>
                      <p>{t("skill.disiplin")}</p>
                    </SoftSkillFlex>
                    <SoftSkillFlex>
                      <Dot2></Dot2>
                      <p>{t("skill.jujur")}</p>
                    </SoftSkillFlex>
                    <SoftSkillFlex>
                      <Dot2></Dot2>
                      <p>{t("skill.mampuBekerja")}</p>
                    </SoftSkillFlex>
                    <SoftSkillFlex>
                      <Dot2></Dot2>
                      <p>{t("skill.komunikasi")}</p>
                    </SoftSkillFlex>
                    <SoftSkillFlex>
                      <Dot2></Dot2>
                      <p>{t("skill.komitmen")}</p>
                    </SoftSkillFlex>
                    <SoftSkillFlex>
                      <Dot2></Dot2>
                      <p>{t("skill.bawahTekanan")}</p>
                    </SoftSkillFlex>
                    <SoftSkillFlex>
                      <Dot2></Dot2>
                      <p>{t("skill.pekerjaKeras")}</p>
                    </SoftSkillFlex>
                  </SoftSkill>
                  <HardSkill>
                    <h4>{t("skill.hardSkill")}</h4>
                    <HardSkillFlex>
                      <Dot2></Dot2>
                      <p>{t("skill.las")}</p>
                    </HardSkillFlex>
                    <HardSkillFlex>
                      <Dot2></Dot2>
                      <p>{t("skill.komputer")}</p>
                    </HardSkillFlex>
                    <HardSkillFlex>
                      <Dot2></Dot2>
                      <p>{t("skill.inggris")}</p>
                    </HardSkillFlex>
                    <HardSkillFlex>
                      <Dot2></Dot2>
                      <p>{t("skill.korea")}</p>
                    </HardSkillFlex>
                    <HardSkillFlex>
                      <Dot2></Dot2>
                      <p>{t("skill.korea")}</p>
                    </HardSkillFlex>
                  </HardSkill>
                </SkillContainer>
              </SkillBox>
            </Skill>
          )}
          {active === 4 && (
            <MinatContainer>
              <TitleMinat>
                <h3 className="minat-title">{t("tertarik.title")}</h3>
              </TitleMinat>
              <Minat t={t} i18n={i18n} />
            </MinatContainer>
          )}
        </ContentSidebar>
      </ContentContainer>
    </Container>
  );
};

export default Resume;

const Container = styled.div`
  @media (max-width: 1920px) {
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
  }

  @media (max-width: 428px) {
    width: 100%;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    // margin-right  : 1rem;
  }

  @media (max-width: 415px) {
    width: 100%;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    // margin-right  : 1rem;
  }

  @media (max-width: 412px) {
    width: 100%;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    // margin-right  : 1rem;
  }

  @media (max-width: 395px) {
    width: 100%;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    // margin-right  : 1rem;
  }

  @media (max-width: 391px) {
    width: 100%;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    // margin-right  : 1rem;
  }

  @media (max-width: 376px) {
    width: 100%;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    // margin-right  : 1rem;
  }

  @media (max-width: 360px) {
    width: 100%;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    // margin-right  : 1rem;
  }

  @media (max-width: 320px) {
    width: 100%;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
  }
`;

const Title = styled.div`
  @media (max-width: 1920px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (max-width: 428px) {
    h1 {
      font-size: 25px;
    }
    margin-left: 0.5rem;
  }

  @media (max-width: 415px) {
    h1 {
      font-size: 25px;
    }
    margin-left: 0.5rem;
  }

  @media (max-width: 412px) {
    h1 {
      font-size: 25px;
    }
    margin-left: 0.5rem;
  }

  @media (max-width: 395px) {
    h1 {
      font-size: 25px;
    }
    margin-left: 0.5rem;
  }

  @media (max-width: 391px) {
    h1 {
      font-size: 25px;
    }
    margin-left: 0.5rem;
  }

  @media (max-width: 376px) {
    h1 {
      font-size: 25px;
    }
    margin-left: 0.5rem;
  }

  @media (max-width: 360px) {
    h1 {
      font-size: 25px;
    }
    margin-left: 0.5rem;
  }

  @media (max-width: 320px) {
    h1 {
      font-size: 20px;
    }
  }
`;

const ContentContainer = styled.div`
  @media (max-width: 1920px) {
    display: flex;
  }

  @media (max-width: 428px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (max-width: 415px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (max-width: 412px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (max-width: 395px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (max-width: 391px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

// BAGIAN NAVBAR

const Sidebars = styled.div`
  @media (max-width: 1920px) {
    display: flex;
    padding: 2rem;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
    flex: 1;
    align-items: center;
    height: 20rem;
    flex-shrink: 0;
  }

  @media (max-width: 428px) and (min-width: 415px) {
    display: flex;
    padding-left: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;
    width: 95.5%;
    margin-left: 0.5rem;
    // margin-right: 2rem;
    border-radius: 10px;
  }

  @media (max-width: 415px) and (min-width: 413px) {
    display: flex;
    padding-left: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;
    width: 95.5%;
    margin-left: 0.5rem;
    // margin-right: 2rem;
    border-radius: 10px;
  }

  @media (max-width: 412px) and (min-width: 396px) {
    display: flex;
    padding-left: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;
    width: 95.5%;
    margin-left: 0.5rem;
    // margin-right: 2rem;
    border-radius: 10px;
  }

  @media (max-width: 395px) and (min-width: 392px) {
    display: flex;
    padding-left: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;
    width: 95.5%;
    margin-left: 0.5rem;
    // margin-right: 2rem;
    border-radius: 10px;
  }

  @media (max-width: 391px) and (min-width: 377px) {
    display: flex;
    padding-left: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;
    width: 95.5%;
    margin-left: 0.5rem;
    // margin-right: 2rem;
    border-radius: 10px;
  }

  @media (max-width: 376px) and (min-width: 361px) {
    display: flex;
    padding-left: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;
    width: 95.5%;
    margin-left: 0.5rem;
    // margin-right: 2rem;
    border-radius: 10px;
  }

  @media (max-width: 360px) and (min-width: 321px) {
    display: flex;
    padding-left: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;
    width: 95.5%;
    margin-left: 0.5rem;
    // margin-right: 2rem;
    border-radius: 10px;
  }

  @media (max-width: 320px) {
    display: flex;
    padding-left: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;
    width: 100%;
    border-radius: 10px;
    // margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const SidebarContent = styled.div`
  @media (max-width: 1920px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (max-width: 428px) {
    max-width: 550px;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: center; */
    /* max-width: 300px; */
    margin: 0 auto;
  }

  @media (max-width: 415px) {
    max-width: 550px;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: center; */
    /* max-width: 300px; */
    margin: 0 auto;
  }

  @media (max-width: 412px) {
    max-width: 550px;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: center; */
    /* max-width: 300px; */
    margin: 0 auto;
  }

  @media (max-width: 395px) {
    max-width: 550px;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: center; */
    /* max-width: 300px; */
    margin: 0 auto;
  }

  @media (max-width: 391px) {
    max-width: 550px;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: center; */
    /* max-width: 300px; */
    margin: 0 auto;
  }

  @media (max-width: 376px) {
    max-width: 550px;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: center; */
    /* max-width: 300px; */
    margin: 0 auto;
  }

  @media (max-width: 360px) {
    max-width: 550px;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: center; */
    /* max-width: 300px; */
    margin: 0 auto;
  }

  @media (max-width: 320px) {
    max-width: 550px;
    display: flex;
    flex-direction: row;
    align-items: center;
    // margin-right: 2rem;
    /* justify-content: center; */
    /* max-width: 300px; */
    margin: 0 auto;
  }
`;

const MenuText = styled.p`
  @media (max-width: 1920px) {
    min-width: 80px;
    white-space: nowrap;
  }

  @media (max-width: 428px) {
    min-width: 69px;
    font-size: 23px;
  }

  @media (max-width: 415px) {
    min-width: 67px;
    font-size: 21px;
  }

  @media (max-width: 412px) {
    min-width: 65px;
    font-size: 19px;
  }

  @media (max-width: 395px) {
    min-width: 63px;
    font-size: 17px;
  }

  @media (max-width: 391px) {
    min-width: 61px;
    font-size: 15px;
  }

  @media (max-width: 376px) {
    min-width: 59px;
    font-size: 13px;
  }

  @media (max-width: 360px) {
    min-width: 57px;
    font-size: 11px;
  }

  @media (max-width: 320px) {
    min-width: 55px;
    font-size: 9px;
  }
`;

const HobbyFix = styled.div`
  @media (max-width: 1920px) {
    svg {
      width: 40px;
      height: 40px;
    }

    svg path {
      fill: currentColor !important;
      stroke: currentColor !important;
    }
    // color: ${(props) => (props.active ? "#00e0ff" : "#fff")};
  }

  @media (max-width: 428px) {
    svg {
      width: 60px;
      height: 60px;
    }
    svg path {
      fill: currentColor !important;
      stroke: currentColor !important;
    }
    // color: ${(props) => (props.active ? "#00e0ff" : "#fff")};
  }

  @media (max-width: 415px) {
    svg {
      width: 60px;
      height: 60px;
    }
    svg path {
      fill: currentColor !important;
      stroke: currentColor !important;
    }
    // color: ${(props) => (props.active ? "#00e0ff" : "#fff")};
  }

  @media (max-width: 412px) {
    svg {
      width: 60px;
      height: 60px;
    }
    svg path {
      fill: currentColor !important;
      stroke: currentColor !important;
    }
    // color: ${(props) => (props.active ? "#00e0ff" : "#fff")};
  }

  @media (max-width: 395px) {
    svg {
      width: 60px;
      height: 60px;
    }
    svg path {
      fill: currentColor !important;
      stroke: currentColor !important;
    }
    // color: ${(props) => (props.active ? "#00e0ff" : "#fff")};
  }

  @media (max-width: 391px) {
    svg {
      width: 50px;
      height: 50px;
    }
    svg path {
      fill: currentColor !important;
      stroke: currentColor !important;
    }
    // color: ${(props) => (props.active ? "#00e0ff" : "#fff")};
  }

  @media (max-width: 376px) {
    svg {
      width: 40px;
      height: 40px;
    }
    svg path {
      fill: currentColor !important;
      stroke: currentColor !important;
    }
    // color: ${(props) => (props.active ? "#00e0ff" : "#fff")};
  }

  @media (max-width: 360px) {
    svg {
      width: 35px;
      height: 35px;
    }
    svg path {
      fill: currentColor !important;
      stroke: currentColor !important;
    }
    // color: ${(props) => (props.active ? "#00e0ff" : "#fff")};
  }

  @media (max-width: 320px) {
    svg {
      width: 30px;
      height: 30px;
    }
    svg path {
      fill: currentColor !important;
      stroke: currentColor !important;
    }
    // color: ${(props) => (props.active ? "#00e0ff" : "#fff")};
  }
`;

const IconBase = styled.div`
  @media (max-width: 1920px) {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;

    color: ${(props) => (props.active ? "#00e0ff" : "#fff")};
  }

  @media (max-width: 428px) {
    width: 25px;
    height: 25px;
    font-size: 18px;
    color: ${(props) => (props.active ? "#00e0ff" : "#fff")};
  }

  @media (max-width: 415px) {
    width: 25px;
    height: 25px;
    font-size: 18px;
    color: ${(props) => (props.active ? "#00e0ff" : "#fff")};
  }

  @media (max-width: 412px) {
    width: 25px;
    height: 25px;
    font-size: 18px;
    color: ${(props) => (props.active ? "#00e0ff" : "#fff")};
  }

  @media (max-width: 395px) {
    width: 25px;
    height: 25px;
    font-size: 18px;
    color: ${(props) => (props.active ? "#00e0ff" : "#fff")};
  }

  @media (max-width: 391px) {
    width: 25px;
    height: 25px;
    font-size: 18px;
    color: ${(props) => (props.active ? "#00e0ff" : "#fff")};
  }

  @media (max-width: 376px) {
    width: 25px;
    height: 25px;
    font-size: 18px;
    color: ${(props) => (props.active ? "#00e0ff" : "#fff")};
  }

  @media (max-width: 360px) {
    width: 25px;
    height: 25px;
    font-size: 15px;
    color: ${(props) => (props.active ? "#00e0ff" : "#fff")};
  }

  @media (max-width: 320px) {
    width: 25px;
    height: 25px;
    font-size: 12px;
    color: ${(props) => (props.active ? "#00e0ff" : "#fff")};
  }
`;

const Profile = styled.div`
  @media (max-width: 1920px) {
    display: flex;
    align-items: center;
    margin-left: 1rem;
  }
  @media (max-width: 428px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 415px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 412px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 395px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 391px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }
`;

const ProfileIcon = styled.div`
  @media (max-width: 1920px) {
    margin-right: 1rem;
    color: ${(props) => (props.active ? "#00e0ff" : "#fff")};
  }
  @media (max-width: 320px) {
    margin-right: 5px;
    color: ${(props) => (props.active ? "#00e0ff" : "#fff")};
    font-size: 10px;
  }
`;

const Pendidikan = styled.div`
  @media (max-width: 1920px) {
    display: flex;
    align-items: center;
    margin-left: 1rem;
  }
  @media (max-width: 428px) {
    /* margin-left: 0;
    p {
      font-size: 9px;
    } */
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
    /* gap: 0.5rem; */
  }
  @media (max-width: 415px) {
    /* margin-left: 0;
    p {
      font-size: 9px;
    } */
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
    /* gap: 0.5rem; */
  }
  @media (max-width: 412px) {
    /* margin-left: 0;
    p {
      font-size: 9px;
    } */
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
    /* gap: 0.5rem; */
  }
  @media (max-width: 395px) {
    /* margin-left: 0;
    p {
      font-size: 9px;
    } */
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
    /* gap: 0.5rem; */
  }
  @media (max-width: 391px) {
    /* margin-left: 0;
    p {
      font-size: 9px;
    } */
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
    /* gap: 0.5rem; */
  }

  @media (max-width: 376px) {
    /* margin-left: 0;
    p {
      font-size: 9px;
    } */
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
    /* gap: 0.5rem; */
  }
  @media (max-width: 360px) {
    /* margin-left: 0;
    p {
      font-size: 9px;
    } */
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
    /* gap: 0.5rem; */
  }
  @media (max-width: 320px) {
    /* margin-left: 0;
    p {
      font-size: 9px;
    } */
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
    /* gap: 0.5rem; */
  }
`;

const PendidikanIcon = styled.div`
  @media (max-width: 1920px) {
    margin-right: 1rem;
    color: ${(props) => (props.active ? "#00e0ff" : "#fff")};
  }
  @media (max-width: 320px) {
    color: ${(props) => (props.active ? "#00e0ff" : "#fff")};
    margin-right: 5px;
    font-size: 10px;
  }
`;

const Keahlian = styled.div`
  @media (max-width: 1920px) {
    display: flex;
    align-items: center;
    margin-left: 1rem;
  }
  @media (max-width: 428px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 415px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 412px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 395px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 391px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }
`;

const KeahlianIcon = styled.div`
  @media (max-width: 1920px) {
    color: ${(props) => (props.active ? "#00e0ff" : "#fff")};
    margin-right: 1rem;
  }
  @media (max-width: 320px) {
    color: ${(props) => (props.active ? "#00e0ff" : "#fff")};
    margin-right: 5px;
    font-size: 10px;
  }
`;

const Minatku = styled.div`
  @media (max-width: 1920px) {
    display: flex;
    align-items: center;
    margin-left: 15px;
  }
  @media (max-width: 428px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 415px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 412px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 395px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 391px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    align-items: center;
    text-align: center;
  }
`;

const MinatkuIcon = styled.div`
  @media (max-width: 1920px) {
    color: ${(props) => (props.active ? "#00e0ff" : "#fff")};
    img {
      color: ${(props) => (props.active ? "#00e0ff" : "#fff")};
      width: 45px;
      height: 30px;
    }
  }
  @media (max-width: 320px) {
    color: ${(props) => (props.active ? "#00e0ff" : "#fff")};
    margin-bottom: 3px;
    img {
      color: ${(props) => (props.active ? "#00e0ff" : "#fff")};
      width: 20px;
      height: 15px;
    }
  }
`;

const ContentSidebar = styled.div`
  @media (max-width: 1920px) {
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
    padding: 2rem;
    width: 70%;
    height: 20rem;
    overflow-y: auto;
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
      background-color: rgb a(0, 0, 0, 0.1); /* Warna track scrollbar */
    }
  }
  @media (max-width: 320px) {
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
    padding: 1rem;
    width: 99%;
    height: 20rem;
    overflow-y: auto;
    margin-left: 0.1rem;
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
      background-color: rgb a(0, 0, 0, 0.1); /* Warna track scrollbar */
    }
  }
`;
const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

// BAGIAN DATA DIRI

const PersonContainer = styled.div`
  @media (max-width: 320px) {
    .main-title {
      font-size: 13px;
      text-align: center;
    }
  }
`;

const Banner = styled.div`
  @media (max-width: 1920px) {
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
    h3 {
      font-family: hacker;
      color: black;
      text-align: center;
      padding-bottom: 2rem;
      line-height: 2;
    }
  }
  @media (max-width: 320px) {
    background-image: url(${(props) => props.backgroundImage});
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
      url(${(props) => props.backgroundImage});
    background-size: cover;
    background-position: center;
    height: 300px; /* Sesuaikan sesuai kebutuhan */
    width: 100%; /* Sesuaikan sesuai kebutuhan */
    margin-top: 20px; /* Tambahkan margin jika diperlukan */
    /* padding: 1px; */
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 1px;
    /* margin-bottom: ; */
    display: flex;
    flex-direction: column;
    /* gap: 0.1px; */
    /* h3 {
      font-family: hacker;
      color: black;
      text-align: center;
      padding-bottom: 2rem;
    } */
    .second-title {
      font-size: 10px;
      color: black;
      text-align: center;
      line-height: 1.5;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      /* padding-bottom: 1rem; */
    }
  }
`;

const PersonContent = styled.div`
  @media (max-width: 1920px) {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    max-width: 700px;
    margin: 0 auto;
  }

  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 7px;
    max-width: 100%;
    /* height: 120px; */
    /* padding-bottom: 100px; */
    /* margin: 0px  auto; */
    /* margin-bottom: 100rem; */
  }
`;

const PersonContentChild = styled.div`
  @media (max-width: 1920px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: ${(props) => (props ? "rgba(255,255,255,0.2)" : "transparent")};
    padding: 0.3rem 0.5rem;
    border-radius: 8px;
    h4 {
      color: black;
      font-weight: 600;
      text-align: right;
      flex: 1;
      word-break: break-word;
    }
  }

  @media (max-width: 320px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: ${(props) => (props ? "rgba(255,255,255,0.2)" : "transparent")};
    padding: 0.1rem 0.3rem;
    border-radius: 8px;
    gap: 3px;
    h4 {
      color: black;
      font-weight: 600;
      text-align: start;
      flex: 1;
      /* word-break: break-word; */
      font-size: 7px;
    }
  }
`;

const PersonContentSibling = styled.div`
  @media (max-width: 1920px) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    min-width: 180px;
    span {
      color: black;
      font-weight: bold;
    }
  }

  @media (max-width: 320px) {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 100px;
    span {
      color: black;
      font-weight: bold;
      font-size: 5px;
    }
  }
`;

// BAGIAN PENDIDIKAN

const PendidikanContainer = styled.div`
  @media (max-width: 320px) {
    max-width: 100%;
    h3 {
      font-size: 13px;
      text-align: center;
    }
  }
`;

const ContentPendidikan = styled.div`
  @media (max-width: 1920px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (max-width: 320px) {
    padding: 1px;
  }
`;

const ContentPendidikanChild = styled.div`
  @media (max-width: 1920px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
`;

const ContentPendidikanSibling = styled.div`
  @media (max-width: 1920px) {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
  }
  @media (max-width: 320px) {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    padding-top: 30px;
  }
`;

const PendidikanFlex = styled.div`
  @media (max-width: 1920px) {
    display: flex;
    align-items: baseline;
    gap: 10px;
  }
  @media (max-width: 320px) {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const Dot1 = styled.div`
  @media (max-width: 1920px) {
    width: 15px;
    height: 15px;
    background-color: red;
    border-radius: 20px;
  }
  @media (max-width: 320px) {
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 10px;
  }
`;

const ContentPendidikanTitle = styled.div`
  @media (max-width: 1920px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    h4 {
      font-size: 9px;
      /* width: 100px; */
    }
    .jurusan {
      font-size: 8px;
    }
  }
`;

const ContentTahunPendidikan1 = styled.div`
  @media (max-width: 1920px) {
    padding-left: 17rem;
    p {
      background-color: red;
      padding: 10px;
      border-radius: 20px;
    }
  }
  @media (max-width: 320px) {
    padding-left: 1px;
    p {
      background-color: red;
      padding: 6px;
      border-radius: 10px;
      font-size: 8.5px;
    }
  }
`;
const ContentTahunPendidikan2 = styled.div`
  @media (max-width: 1920px) {
    padding-left: 15.2rem;
    p {
      background-color: red;
      padding-top: 10px;
      padding-left: 16px;
      padding-right: 16px;
      padding-bottom: 10px;
      border-radius: 20px;
    }
  }

  @media (max-width: 320px) {
    padding-left: 1px;
    p {
      background-color: red;
      padding-top: 6px;
      padding-bottom: 6px;
      padding-left: 8px;
      padding-right: 10px;
      border-radius: 10px;
      font-size: 8.5px;
    }
  }
`;

const ContentTahunPendidikan3 = styled.div`
  @media (max-width: 1920px) {
    padding-left: 16.2rem;
    p {
      background-color: red;
      padding-top: 10px;
      padding-left: 18px;
      padding-right: 18px;
      padding-bottom: 10px;
      border-radius: 20px;
    }
  }
  @media (max-width: 320px) {
    padding-left: 1px;
    p {
      background-color: red;
      padding-top: 6px;
      padding-bottom: 6px;
      padding-left: 10px;
      padding-right: 10px;
      border-radius: 10px;
      font-size: 8.5px;
    }
  }
`;

// BAGIAN KEMAMPUAN ATAU SKILL

const Skill = styled.div`
  @media (max-width: 1920px) {
    color: white;
  }
  @media (max-width: 320px) {
    .skill-title {
      font-size: 13px;
      text-align: center;
    }
  }
`;
const SkillBox = styled.div`
  @media (max-width: 1920px) {
    position: relative;
    margin-top: 1rem;
  }
  @media (max-width: 320px) {
    position: relative;
    margin-top: 1rem;
  }
`;

const SkillContainer = styled.div`
  @media (max-width: 1920px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    margin: 2rem 0;
  }
  @media (max-width: 320px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    position: relative;
    margin: 2rem 0;
  }
`;

const SoftSkill = styled.div`
  @media (max-width: 1920px) {
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
  }

  @media (max-width: 320px) {
    flex: 1;
    text-align: left;
    padding: 1rem;
    width: 99%;
    /* margin-left: 10rem; */
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
      width: 99%;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      font-size: 12px;
    }
  }
`;

const SoftSkillFlex = styled.div`
  @media (max-width: 1920px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
  }

  @media (max-width: 320px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
    p {
      font-size: 10px;
    }
  }
`;

const HardSkillFlex = styled.div`
  @media (max-width: 1920px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
  }

  @media (max-width: 320px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
    p {
      font-size: 10px;
    }
  }
`;

const Dot2 = styled.div`
  @media (max-width: 1920px) {
    width: 7px;
    height: 7px;
    background-color: white;
    border-radius: 10px;
  }
  @media (max-width: 320px) {
    width: 3px;
    height: 3px;
    background-color: white;
    border-radius: 10px;
  }
`;

const HardSkill = styled.div`
  @media (max-width: 1920px) {
    text-align: center;
    flex: 1;
    text-align: center;
    height: 19.78rem;
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
  }

  @media (max-width: 320px) {
    text-align: center;
    flex: 1;
    text-align: center;
    height: 21rem;
    padding: 1rem;
    width: 99%;
    border-right: white 1px solid;
    border-left: white 1px solid;
    border-top: white 1px solid;
    border-bottom: white 1px solid;
    h4 {
      text-align: center;
      border-bottom: white 1px solid;
      border-right: white 1px solid;
      border-left: white 1px solid;
      border-top: white 1px solid;
      width: 99%;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      font-size: 12px;
    }
  }
`;

// BAGIAN MINAT
const MinatContainer = styled.div`
  @media (max-width: 320px) {
    width: 100%;
  }
`;

const TitleMinat = styled.div`
  @media (max-width: 320px) {
    .minat-title {
      font-size: 13px;
      text-align: center;
    }
  }
`;

// LINK NAVBAR
const ActiveLink = styled.div`
  @media (max-width: 1920px) {
    color: ${(props) => (props.active ? "#00e0ff" : "#fff")};
  }
  @media (max-width: 320px) {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    color: ${(props) => (props.active ? "#00e0ff" : "#fff")};
  }
`;

const HobbyIcon = styled(Hobby)`
  @media (max-width: 1920px) {
    width: 40px;
    height: 40px;

    /* membuat icon mengikuti warna active */
    path {
      fill: currentColor;
      stroke: currentColor;
    }
  }

  @media (max-width: 391px) {
    width: 40px;
    height: 40px;

    path {
      fill: currentColor;
      stroke: currentColor;
    }
  }

  @media (max-width: 376px) {
    width: 10px;
    height: 20px;

    path {
      fill: currentColor;
      stroke: currentColor;
    }
  }

  @media (max-width: 360px) {
    width: 15px;
    height: 25px;

    path {
      fill: currentColor;
      stroke: currentColor;
    }
  }

  @media (max-width: 320px) {
    width: 10px;
    height: 20px;

    path {
      fill: currentColor;
      stroke: currentColor;
    }
  }
`;
