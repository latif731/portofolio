import React, { useState } from "react";
import styled,{keyframes} from "styled-components";
import { FaGraduationCap } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { IoColorPalette } from "react-icons/io5";
import hobi from "../../assets/images/hobbie.png";
import KTpolos from "../../assets/images/ktppolos.jpg"
import foto from "../../assets/images/foto.jpg"
import Minat from "../carousel/Minat";
import { LuBrain } from "react-icons/lu";


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

  return (
    <Container id="resume">
      <Title>
        <h4>
          My<span className="green">Resume</span>
        </h4>
        <h1>Resume</h1>
      </Title>
      <ContentContainer>
        <Sidebars>
          <Icon>
            <IoMdPerson />
            <FaGraduationCap />
            {/* <IoColorPalette /> */}
            <LuBrain/>
            <img src={`${hobi}`} alt="" width={"45px"} height={"30px"} />
          </Icon>
          <Sidebar>
            <SidebarItem
              onClick={() => setActive(1)}
              style={{
                cursor: "pointer",
              }}
            >
              Profile Pribadi
            </SidebarItem>
            <SidebarItem
              onClick={() => setActive(2)}
              style={{
                cursor: "pointer",
              }}
            >
              Pendidikan
            </SidebarItem>
            <SidebarItem
              onClick={() => setActive(3)}
              style={{
                cursor: "pointer",
              }}
            >
              Skill
            </SidebarItem>
            <SidebarItem
              onClick={() => setActive(4)}
              style={{
                cursor: "pointer",
              }}
            >
              Tertarik
            </SidebarItem>
          </Sidebar>
        </Sidebars>
        <ContentSidebar>
          {active === 1 && 
          <PersonContainer>
            <h3>Profile Pribadi</h3>
            <Banner
            backgroundImage={`${KTpolos}`}
            >
              <h3
              style={{
                fontFamily:"hacker",
                color:"black",
                textAlign:"center",
                paddingBottom:"2rem"
              }}
              >
                Provinsi Jawa Timur
                <br/>
                <br/>
                Kabupaten Madiun
              </h3>
              <div
              style={{
                display:"flex",
                alignItems:"center",
                gap:"2rem"
              }}
              >
                <h4
                style={{
                  fontFamily:"Hacker",
                  color:"black"
                }}
                >Nama :</h4>
                <h4
                style={{
                  fontFamily:"Hacker",
                  color:"black"
                }}
                > Latif Budi Pamungkas </h4>
              </div>
              <div
              style={{
                display:"flex",
                alignItems:"center",
                gap:"2rem"
              }}
              >
                <h4
                style={{
                  fontFamily:"Hacker",
                  color:"black"
                }}
                >Tempat/Tgl Lahir :</h4>
                <h4
                style={{
                  fontFamily:"Hacker",
                  color:"black"
                }}
                > Madiun, 24 April 1996 </h4>
              </div>
              <div
              style={{
                display:"flex",
                alignItems:"center",
                gap:"2rem"
              }}
              >
                <h4
                style={{
                  fontFamily:"Hacker",
                  color:"black"
                }}
                >Pendidikan Terkhir :</h4>
                <h4
                style={{
                  fontFamily:"Hacker",
                  color:"black"
                }}
                > SMA </h4>
              </div>
              <div
              style={{
                display:"flex",
                alignItems:"center",
                gap:"2rem"
              }}
              >
                <h4
                style={{
                  fontFamily:"Hacker",
                  color:"black"
                }}
                >Jenis Kelamin :</h4>
                <h4
                style={{
                  fontFamily:"Hacker",
                  color:"black"
                }}
                > Laki-Laki </h4>
              </div>
              <div
              style={{
                display:"flex",
                alignItems:"center",
                gap:"2rem"
              }}
              >
                <h4
                style={{
                  fontFamily:"Hacker",
                  color:"black"
                }}
                >Alamat :</h4>
                <h4
                style={{
                  fontFamily:"Hacker",
                  color:"black"
                }}
                > Dusun 02, RT. 12/ RW. 02 Kec. Wonoasri Kab. Madiun </h4>
              </div>
              <div
              style={{
                display:"flex",
                alignItems:"center",
                gap:"2rem"
              }}
              >
                <h4
                style={{
                  fontFamily:"Hacker",
                  color:"black"
                }}
                >Agama :</h4>
                <h4
                style={{
                  fontFamily:"Hacker",
                  color:"black"
                }}
                > Islam </h4>
              </div>
              <div
              style={{
                display:"flex",
                alignItems:"center",
                gap:"2rem"
              }}
              >
                <h4
                style={{
                  fontFamily:"Hacker",
                  color:"black"
                }}
                >Status Perkawinan :</h4>
                <h4
                style={{
                  fontFamily:"Hacker",
                  color:"black"
                }}
                > Belum Kawin </h4>
              </div>
              <div
              style={{
                display:"flex",
                alignItems:"center",
                gap:"2rem"
              }}
              >
                <h4
                style={{
                  fontFamily:"Hacker",
                  color:"black"
                }}
                >Nomor Telfon :</h4>
                <h4
                className="telp"
                style={{
                  // fontFamily:"Hacker",
                  fontWeight:600,
                  color:"black"
                }}
                > 085782244135 </h4>
              </div>
              <div
              style={{
                display:"flex",
                alignItems:"center",
                gap:"2rem"
              }}
              >
                <h4
                style={{
                  fontFamily:"Hacker",
                  color:"black"
                }}
                >Email :</h4>
                <h4
                style={{
                  // fontFamily:"Hacker",
                  color:"black",
                  fontWeight:600,
                }}
                > pamungkaslatifbudi@gmail.com </h4>
              </div>
              <div
              style={{
                display:"flex",
                justifyContent:"flex-end"
              }}
              >
                <img src={`${foto}`} alt="" 
                style={{
                  width:"100px"
                }}
                />
              </div>
            </Banner>
          </PersonContainer>
          }
          {active === 2 && 
          <Pendidikan>
            <h3>Pendidikan</h3>
            <ContentPendidikan>
              <div
              style={{
                display:"flex",
                flexDirection:"column",
                gap:"1rem"
              }}
              >
                <div
                style={{
                  display:"flex",
                  alignItems:"center",
                  gap:"1rem"
                }}
                >
                  <div
                  style={{
                    width:"15px",
                    height:"15px",
                    backgroundColor:"red",
                    borderRadius:"20px"
                  }}
                  ></div>
                  <div>
                    <h4>SDN JATIREJO</h4>
                  </div>
                <div
                style={{
                  paddingLeft:"20rem"
                }}
                >
                  <p
                  style={{
                    backgroundColor:"red",
                    padding:"10px",
                    borderRadius:"20px"
                  }}
                  >2002 - 2008</p>
                </div>
                </div>
                <div
                style={{
                  display:"flex",
                  alignItems:"center",
                  gap:"1rem"
                }}
                >
                  <div
                  style={{
                    width:"15px",
                    height:"15px",
                    backgroundColor:"red",
                    borderRadius:"20px"
                  }}
                  ></div>
                  <div>
                    <h4>SMPN 1 WONOASRI</h4>
                  </div>
                <div
                style={{
                  paddingLeft:"17.3rem"
                }}
                >
                  <p
                  style={{
                    backgroundColor:"red",
                    paddingTop:"10px",
                    paddingLeft:"16px",
                    paddingRight:"16px",
                    paddingBottom:"10px",
                    borderRadius:"20px"
                  }}
                  >2008 - 2011</p>
                </div>
                </div>
                <div
                style={{
                  display:"flex",
                  alignItems:"baseline",
                  gap:"1rem"
                }}
                >
                  <div
                  style={{
                    width:"15px",
                    height:"15px",
                    backgroundColor:"red",
                    borderRadius:"20px"
                  }}
                  ></div>
                  <div
                  style={{
                    display:"flex",
                    flexDirection:"column"
                  }}
                  >
                    <h4>SMAN 1 MEJAYAN</h4>
                    <p>program : IPS</p>
                  </div>
                <div
                style={{
                  paddingLeft:"18.2rem"
                }}
                >
                  <p
                  style={{
                    backgroundColor:"red",
                    paddingTop:"10px",
                    paddingLeft:"18px",
                    paddingRight:"18px",
                    paddingBottom:"10px",
                    borderRadius:"20px"
                  }}
                  >2011 - 2014</p>
                </div>
                </div>
              </div>
            </ContentPendidikan>
          </Pendidikan>
          }
          {active === 3 && 
          <Skill>
            <h3>Skill</h3>
            <SkillContainer>
              <SoftSkill>
                <h4>Soft Skill</h4>
                <div
                style={{
                  display:"flex",
                  alignItems:"center",
                  gap:"1rem",
                  paddingTop:"1rem"
                }}
                >
                  <div
                  style={{
                    width:"7px",
                    height:"7px",
                    backgroundColor:"white",
                    borderRadius:"10px"
                  }}
                  ></div>
                  <p>Disiplin</p>
                </div>
                <div
                style={{
                  display:"flex",
                  alignItems:"center",
                  gap:"1rem",
                  paddingTop:"1rem"
                }}
                >
                  <div
                  style={{
                    width:"7px",
                    height:"7px",
                    backgroundColor:"white",
                    borderRadius:"10px"
                  }}
                  ></div>
                  <p>Jujur</p>
                </div>
                <div
                style={{
                  display:"flex",
                  alignItems:"baseline",
                  gap:"1rem",
                  paddingTop:"1rem"
                }}
                >
                  <div
                  style={{
                    width:"7px",
                    height:"7px",
                    backgroundColor:"white",
                    borderRadius:"10px"
                  }}
                  ></div>
                  <p>Mampu bekerja dengan tim maupun individu</p>
                </div>
                <div
                style={{
                  display:"flex",
                  alignItems:"center",
                  gap:"1rem",
                  paddingTop:"1rem"
                }}
                >
                  <div
                  style={{
                    width:"7px",
                    height:"7px",
                    backgroundColor:"white",
                    borderRadius:"10px"
                  }}
                  ></div>
                  <p>Mampu berkomunikasi dengan baik</p>
                </div>
                <div
                style={{
                  display:"flex",
                  alignItems:"center",
                  gap:"1rem",
                  paddingTop:"1rem"
                }}
                >
                  <div
                  style={{
                    width:"7px",
                    height:"7px",
                    backgroundColor:"white",
                    borderRadius:"10px"
                  }}
                  ></div>
                  <p>Memiliki komitmen</p>
                </div>
                <div
                style={{
                  display:"flex",
                  alignItems:"center",
                  gap:"1rem",
                  paddingTop:"1rem"
                }}
                >
                  <div
                  style={{
                    width:"7px",
                    height:"7px",
                    backgroundColor:"white",
                    borderRadius:"10px"
                  }}
                  ></div>
                  <p>Pekerja keras</p>
                </div>
                <div
                style={{
                  display:"flex",
                  alignItems:"center",
                  gap:"1rem",
                  paddingTop:"1rem"
                }}
                >
                  <div
                  style={{
                    width:"7px",
                    height:"7px",
                    backgroundColor:"white",
                    borderRadius:"10px"
                  }}
                  ></div>
                  <p>Mampu bekerja di bawah tekanan</p>
                </div>
              </SoftSkill>
              <Line/>
              <HardSkill>
                <h4>Hard skill</h4>
                <div
                       style={{
                        display:"flex",
                        alignItems:"center",
                        gap:"1rem",
                        paddingTop:"1rem"
                      }}
                >
                <div
                  style={{
                    width:"7px",
                    height:"7px",
                    backgroundColor:"white",
                    borderRadius:"10px"
                  }}
                  ></div>
                  <p>Las</p>
                </div>
                <div
                       style={{
                        display:"flex",
                        alignItems:"center",
                        gap:"1rem",
                        paddingTop:"1rem"
                      }}
                >
                <div
                  style={{
                    width:"7px",
                    height:"7px",
                    backgroundColor:"white",
                    borderRadius:"10px"
                  }}
                  ></div>
                  <p>Komputer</p>
                </div>
                <div
                       style={{
                        display:"flex",
                        alignItems:"center",
                        gap:"1rem",
                        paddingTop:"1rem"
                      }}
                >
                <div
                  style={{
                    width:"7px",
                    height:"7px",
                    backgroundColor:"white",
                    borderRadius:"10px"
                  }}
                  ></div>
                  <p>B. Inggris</p>
                </div>
                <div
                       style={{
                        display:"flex",
                        alignItems:"center",
                        gap:"1rem",
                        paddingTop:"1rem"
                      }}
                >
                <div
                  style={{
                    width:"7px",
                    height:"7px",
                    backgroundColor:"white",
                    borderRadius:"10px"
                  }}
                  ></div>
                  <p>B. Indonesia</p>
                </div>
              </HardSkill>
            </SkillContainer>
          </Skill>
          }
          {active === 4 && 
          <MinatContainer>
            <Title>
              <h3>Minat</h3>
            </Title>
              <Minat/>
          </MinatContainer>
          }
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
   background: linear-gradient(159deg, rgb(45,45,58) 0%, rgb(43,43,53) 100%);
  padding: 2rem;
  width: 70%;
  height:20rem;
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
  background: linear-gradient(159deg, rgb(45,45,58) 0%, rgb(43,43,53) 100%);
  flex: 1;
  align-items: center;
  /* height: auto; */
  height: 20rem;
  flex-shrink: 0; 
`;


const PersonContainer = styled.div`
`

const Pendidikan = styled.div``

const ContentPendidikan = styled.div`
  padding:2rem; 
`

const Banner = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  /* background-image: linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url(${(props) => props.backgroundImage}); */
  background-size: cover;
  background-position: center;
  height: 520px; /* Sesuaikan sesuai kebutuhan */
  width: 100%; /* Sesuaikan sesuai kebutuhan */
  margin-top: 20px; /* Tambahkan margin jika diperlukan */
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap:5px;
`


const MinatContainer =  styled.div``

const SkillContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 1rem;
  /* gap:15rem; */
`

const Line = styled.div`
  border:1px solid white;
  width:2px;
  height: 20rem;
`

const SoftSkill= styled.div`
  /* border:1px solid red; */
  width:20rem;
  h4{
    text-align: center;
  }
  /* padding-left: 10rem;
  padding-right: 10rem;
  padding-bottom: ;
  padding-top: ; */
`

const HardSkill = styled.div`
    /* border:1px solid red; */
  width:20rem;
  text-align: center;
`

const Skill = styled.div``