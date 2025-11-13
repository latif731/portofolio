// import React, { useState } from "react";
// import styled from "styled-components";
// import ProgramSkill from "../carousel/ProgramSkill";

// const Programmer = () => {
//   // state untuk melacak pilihan aktif
//   const [activeSkill, setActiveSkill] = useState("IT");

//   return (
//     <Container id="skill">
//       <Title>
//         <h1>Skill</h1>
//       </Title>

//       <Pilihan>
//         <button
//           className={activeSkill === "IT" ? "active" : ""}
//           onClick={() => setActiveSkill("IT")}
//         >
//           IT
//         </button>

//         <button
//           className={activeSkill === "LAS" ? "active" : ""}
//           onClick={() => setActiveSkill("LAS")}
//         >
//           LAS
//         </button>
//       </Pilihan>

//       {/* tampilkan skill sesuai pilihan */}
//       <ProgramSkill category={activeSkill} />
//     </Container>
//   );
// };

// export default Programmer;

// // === styled components ===
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding-top: 3rem;
//   padding-bottom: 100px;
//   gap: 1rem;
//   width: 80%;
//   max-width: 1280px;
//   margin: 0 auto;
//   color: white;
// `;

// const Title = styled.div`
//   padding-bottom: 5rem;
// `;

// const Pilihan = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 10rem;
//   margin-bottom: 5rem;

//   button {
//     margin-top: 1rem;
//     width: 100px;
//     height: 50px;
//     background-color: transparent;
//     border-radius: 10%;
//     border: 1px solid white;
//     color: white;
//     cursor: pointer;
//     transition: background-color 0.3s, color 0.3s, transform 0.3s;

//     &:hover {
//       background-color: white;
//       color: black;
//     }

//     &.active {
//       background-color: white;
//       color: black;
//       transform: scale(1.1);
//     }
//   }
// `;
