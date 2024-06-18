import React from "react";
import styled from "styled-components";
import google from "../../assets/images/google.png";
import chatgpt from "../../assets/images/chatgpt.png";
import youtube from "../../assets/images/Youtube_logo.png";
import stackoverflow from "../../assets/images/stackoverflow.png";
import githubforum from "../../assets/images/githubforum.png";
import codepen from "../../assets/images/codepen.png";
import codesanbox from "../../assets/images/codesandbox.png";
import mdn from "../../assets/images/mdn.png";
import wschool from "../../assets/images/w3school.png";
import medium from "../../assets/images/medium.png";
import freecodecamp from "../../assets/images/freecodecamp.png";

const MyPartner = () => {
  return (
    <Container>
      <h1>My Partner</h1>
      <ItemContent
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          paddingTop:"3rem"
        }}
      >
        <div>
   
          <div>
            <img
              src={medium}
              // src="/images/medium.png"
              alt=""
              style={{
                width: "250px",
              }}
            />
          </div>
          <div>
            <img
              src={wschool}
              // src="/images/w3school.png"
              alt=""
              style={{
                width: "250px",
              }}
            />
          </div>
        </div>
        <div>
        <div
            style={{
              // backgroundColor:"blue",
              borderRadius: "2%",
            }}
          >
            <img
              src={mdn}
              // src="/images/mdn.png"
              alt=""
              style={{
                width: "250px",
              }}
            />
          </div>
          <div>
            <img
              src={stackoverflow}
              // src="/images/stackoverflow.png"
              alt=""
              style={{
                width: "250px",
              }}
            />
          </div>
          <div>
            <img
              src={codesanbox}
              // src="/images/codesandbox.png"
              alt=""
              style={{
                width: "250px",
              }}
            />
          </div>
        </div>
        <div>
          <img
            src={google}
            // src="/images/google.png"
            alt=""
            style={{
              width: "350px",
            }}
          />
        </div>
        <div>
        <div>
            <img
              src={githubforum}
              // src="/images/githubforum.png"
              alt=""
              style={{
                width: "250px",
              }}
            />
          </div>
          <div>
            <img
              src={freecodecamp}
              // src="/images/freecodecamp.png"
              alt=""
              style={{
                width: "250px",
              }}
            />
          </div>
          <div>
            <img
              src={chatgpt}
              // src="/images/chatgpt.png"
              alt=""
              style={{
                width: "250px",
              }}
            />
          </div>
        </div>
        <div
        >
          <div>
            <img
              src={youtube}
              // src="/images/Youtube_logo.png"
              alt=""
              style={{
                width: "250px",
              }}
            />
          </div>
 
          <div>
            <img
              src={codepen}
              // src="/images/codepen.png"
              alt=""
              style={{
                width: "250px",
              }}
            />
          </div>
        </div>
      </ItemContent>
    </Container>
  );
};

export default MyPartner;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  color: white;
  padding-top: 6rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding-bottom: 100px;
`;

const ItemContent = styled.div``;
