import React from "react";
import styled from "styled-components";
import ProgramSkill from "../carousel/ProgramSkill";

const Programmer = () => {
  return (
    <Container id="skill">
      <Title>
        <h1>Skill</h1>
      </Title>
      <div
      style={{
        display:"flex",
        justifyContent:"center",
        gap:"10rem",
        marginBottom:"5rem"
      }}
      >
        <div
        style={{
          
        }}
        >
          <h3>IT</h3>
        </div>
        <div>
          <h3>LAS</h3>
        </div>
      </div>
      <ProgramSkill />
    </Container>
  );
};

export default Programmer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  padding-bottom: 100px;
  /* padding-bottom: 10rem; */
  /* align-items: center; */
  gap: 1rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  color: white;
`;

const Title = styled.div`
  padding-bottom: 5rem;
`;
