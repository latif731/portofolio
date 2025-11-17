import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProgramSkill from "../carousel/ProgramSkill";
import Las from "../SkillList/Las";
import { useTranslation } from "react-i18next";

const   Skill = () => {
  const [activeSkill, setActiveSkill] = useState("IT");
  const [open, setOpen] = useState(true);
  const {t} = useTranslation()

  //ambil data terakhir dari localstorage saat refresh
  useEffect(() => {
    const savedSkill = localStorage.getItem("activeSkill");
    const savedOpen = localStorage.getItem("open") === true;
    if(savedSkill && savedOpen){
      setActiveSkill(savedSkill);
      setOpen(true)
    }
  })

  //simpan ke localstorage setiap kali skill berubah
  useEffect(() => {
    if(activeSkill !== null){
      localStorage.setItem("activeSkill", activeSkill);
      localStorage.setItem("open", open);
    }
  },[activeSkill, open])

  const handleClick = (skill) => {
    if (activeSkill === skill && open) {
      setOpen(false);
      localStorage.setItem("open", false)
    } else {
      setActiveSkill(skill);
      setOpen(true);
      localStorage.setItem("activeSkill", skill)
      localStorage.setItem("open", open)
    }
  };

  return (
    <Container id="skill">
      <Title>
        <h1>{t("skilled.title")}</h1>
      </Title>

      <Pilihan>
        <button
          className={activeSkill === "IT" && open ? "active" : ""}
          onClick={() => handleClick("IT")}
        >
          {t("skilled.IT")}
        </button>

        <button
          className={activeSkill === "LAS" && open ? "active" : ""}
          onClick={() => handleClick("LAS")}
        >
          {t("skilled.LAS")}
        </button>
      </Pilihan>

      {/* tampilkan hanya kalau open = true */}
      {open && activeSkill === "IT" && <ProgramSkill />}
      {open && activeSkill === "LAS" && <Las />}
    </Container>
  );
};

export default Skill;

// === styled components ===
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  padding-bottom: 100px;
  gap: 1rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  color: white;
`;

const Title = styled.div`
  padding-bottom: 5rem;
`;

const Pilihan = styled.div`
  display: flex;
  justify-content: center;
  gap: 10rem;
  margin-bottom: 5rem;

  button {
    margin-top: 1rem;
    width: 200px;
    height: 50px;
    background-color: transparent;
    border-radius: 10%;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s, transform 0.3s;

    &:hover {
      background-color: white;
      color: black;
    }

    &.active {
      background-color: white;
      color: black;
      transform: scale(1.1);
    }
  }
`;
