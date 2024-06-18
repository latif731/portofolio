import React from "react";
import styled from "styled-components";
import { RxCross1 } from "react-icons/rx";

const CertificateCard = ({ selectedDetail, openDetail, item }) => {
    // console.log("selectedDetail", selectedDetail)
  return (
    <Container className="project"
    onClick={() => openDetail(item.id)}
    >
      <img src={item.img} alt="project" 
      />
    </Container>
  );
};

export default CertificateCard;

const Container = styled.div`
  /* padding-top: 20rem; */
  height: 15rem;
  background-color: #4e5156;
  margin: 0 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 400ms ease-in-out;
  }
  .disc {
    position: absolute;
    right: 0;
    left: 0;
    bottom: -10rem;
    text-align: left;
    padding: 0.5rem;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8));
    transition: all 400ms ease-in-out;
    h1 {
      font-size: 1rem;
    }

    p {
      width: 90%;
      font-size: 0.8rem;
      a {
        margin-left: 0.4rem;
        color: red;
      }
    }
  }

  &:hover > img {
    transform: scale(1.3);
  }

  &:hover > .disc {
    bottom: 0;
  }
`;

