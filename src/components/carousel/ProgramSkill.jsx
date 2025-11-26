import React from 'react'
import ProgramSkill1 from './ProgramSkill1'
import ProgramSkill2 from './ProgramSkill2'
import ProgramSkill3 from './ProgramSkill3'
import styled from 'styled-components'


const ProgramSkill = () => {
  return (
    <div>
      <Web>
        <ProgramSkill1/>
      </Web>
      <Mobile>
        <ProgramSkill2/>
      </Mobile>
      <Tablet>
        <ProgramSkill3/>
      </Tablet>
    </div>
  )
}

export default ProgramSkill

const Web = styled.div`
  display: block;
  /* TABLET RESPONSIVE */
  @media (max-width:1114px) {
    display: none;
  }
  @media (max-width:835px) {
    display: none;
  }
  @media (max-width:820px) {
    display: none;
  }
  @media (max-width:768px) {
    display: none;
  }
  /* MOBILE RESPONSIVE */
  @media (max-width: 428px) {
    display: none;
  }
  @media (max-width: 415px) {
    display: none;
  }
  @media (max-width: 412px) {
    display: none;
  }
  @media (max-width: 395px) {
    display: none;
  }
  @media (max-width: 391px) {
    display: none;
  }
  @media (max-width: 376px) {
    display: none;
  }
  @media (max-width: 360px) {
    display: none;
  }
  @media (max-width:320px) {
    display: none;
  }
  `
const Mobile = styled.div`
  display: none;

  @media (max-width: 428px) {
    display: block;
  }

  @media (max-width: 415px) {
    display: block;
  }

  @media (max-width: 412px) {
    display: block;
  }
  @media (max-width: 395px) {
    display: block;
  }

  @media (max-width: 391px) {
    display: block;
  }
  @media (max-width: 376px) {
    display: block;
  }
  @media (max-width: 360px) {
    display: block;
  }
  @media (max-width: 320px) {
    display: block;
  }
`;

const Tablet = styled.div`
  display: none;
  @media (max-width:1114px) {
    display: block;
  }
  @media (max-width:835px) {
    display: block;
  }
  @media (max-width:820px) {
    display: block;
  }
  @media (max-width:768px) {
    display: block;
  }

  /* MOBILE DISPLAY */
   @media (max-width: 428px) {
    display: none;
  }
  @media (max-width: 415px) {
    display: none;
  }
  @media (max-width: 412px) {
    display: none;
  }
  @media (max-width: 395px) {
    display: none;
  }
  @media (max-width: 391px) {
    display: none;
  }
  @media (max-width: 376px) {
    display: none;
  }
  @media (max-width: 360px) {
    display: none;
  }
  @media (max-width:320px) {
    display: none;
  }
`
































// import React, { useState, useEffect, useRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import SkillCard from "../card/SkillCard";
// import Carousel from "react-grid-carousel";
// import "./programskill.css";
// import { programmerData } from "../../data/programmer";
// import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
// import styled from "styled-components";

// const ProgramSkill = () => {
//   const [data, setData] = useState([]);
//   const [myElementVisible, setMyElementVisible] = useState([]);
//   // console.log("myElementVisible", myElementVisible)
//   const myRef = useRef([]);
//   // console.log("myRef", myRef)

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         // console.log("entry", entry);
//         setMyElementVisible((prev) => {
//           const newVisibility = [...prev];
//           // console.log("newVisibility", newVisibility)
//           const index = myRef.current.indexOf(entry.target);
//           newVisibility[index] = entry.isIntersecting;
//           return newVisibility;
//         });
//       });
//     });
//     myRef.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => {
//       if (myRef.current) {
//         myRef.current.forEach((ref) => {
//           if (ref) observer.unobserve(ref);
//         });
//       }
//     };
//   }, [data]);

//   useEffect(() => {
//     setData(programmerData);
//   }, []);

//   const slidesToShow = 1.5;

//   const PreviousButton = (props) => {
//     const { className, onClick, currentSlide } = props;
//     return (
//       <>
//         {currentSlide !== 0 && (
//           <div className={`${className} custom-prev`} onClick={onClick}>
//             <MdArrowBackIos
//             // style={{ color: 'black', fontSize: '30px', marginLeft: '7px' }}
//             />
//           </div>
//         )}
//       </>
//     );
//   };

//   const NextButton = (props) => {
//     const { className, onClick, slideCount, currentSlide } = props;
//     return (
//       <>
//         {currentSlide !== slideCount - slidesToShow && (
//           <div className={`${className} custom-next`} onClick={onClick}>
//             <MdArrowForwardIos
//             // style={{ color: 'black', fontSize: '30px' }}
//             />
//           </div>
//         )}
//       </>
//     );
//   };

//   const settings = {
//     className: "center",
//     prevArrow: <PreviousButton />,
//     nextArrow: <NextButton />,
//     infinite: false,
//     speed: 500,

//     // default (di atas 1925px)
//     centerMode: true,
//     slidesToShow: 1.5,
//     slidesToScroll: 1,
//     centerPadding: "70px",
//     rows: 2,
//     slidesPerRow: 2,
//     responsive: [
//       {
//         breakpoint: 480,
//         settings: {
//           rows: 2,
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           slidesPerRow: 1,
//           centerMode: true,
//           centerPadding: "60px",
//         },
//       },
//       {
//         breakpoint: 414,
//         settings: {
//           rows: 2,
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           slidesPerRow: 1,
//           centerMode: true,
//           centerPadding: "50px",
//         },
//       },
//       {
//         breakpoint: 375,
//         settings: {
//           rows: 2,
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           slidesPerRow: 1,
//           centerMode: true,
//           centerPadding: "40px",
//         },
//       },
//       {
//         breakpoint: 320,
//         settings: {
//           rows: 1,
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           slidesPerRow: 1,
//           centerMode: false,
//           centerPadding: "0px",
//         },
//       },
//     ],
//   };

//   //   const settings = {
//   //   infinite: false,
//   //   speed: 500,

//   //   // DEFAULT = MOBILE
//   //   rows: 2,
//   //   slidesPerRow: 1,
//   //   slidesToShow: 1,
//   //   slidesToScroll: 1,
//   //   centerMode: false,
//   //   centerPadding: "0px",

//   //   prevArrow: <PreviousButton />,
//   //   nextArrow: <NextButton />,

//   //   responsive: [
//   //     {
//   //       breakpoint: 768, // tablet
//   //       settings: {
//   //         rows: 2,
//   //         slidesPerRow: 1,
//   //         slidesToShow: 1,
//   //         slidesToScroll: 1,
//   //         centerMode: false,
//   //       },
//   //     },
//   //     {
//   //       breakpoint: 1024, // laptop
//   //       settings: {
//   //         rows: 2,
//   //         slidesPerRow: 1,
//   //         slidesToShow: 2, // tampil 2 card per slide
//   //         slidesToScroll: 1,
//   //         centerMode: false,
//   //       },
//   //     },
//   //     {
//   //       breakpoint: 1920, // desktop besar
//   //       settings: {
//   //         // className: ""
//   //       },
//   //     },
//   //   ],
//   // };

//   return (
//     <>
//       <Slick>
//         <div className="slider-container">
//           <Slider {...settings}>
//             {data?.map((d, index) => (
//               <div
//                 key={index}
//                 ref={(el) => {
//                   myRef.current[index] = el;
//                 }} // Set each ref in the array
//                 className={`skill-card ${
//                   myElementVisible[index] ? "visible" : ""
//                 }`}
//               >
//                 <SkillCard data={d} isVisible={myElementVisible[index]} />
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </Slick>
//       <GridCarousel>
//         <Carousel
//           cols={1}
//           rows={2}
//           gap={1}
//           loop={false}
//           // mobileBreakpoint={320} // ⚠️ berarti semua ukuran dianggap mobile
//           showDots
//         >
//           {data.map((d, index) => (
//             <Carousel.Item key={index}>
//               <div
//                 ref={(el) => (myRef.current[index] = el)}
//                 className={`skill-card ${
//                   myElementVisible[index] ? "visible" : ""
//                 }`}
//               >
//                 <SkillCard data={d} isVisible={myElementVisible[index]} />
//               </div>
//             </Carousel.Item>
//           ))}
//         </Carousel>
//       </GridCarousel>
//     </>
//   );
// };

// export default ProgramSkill;

// const Slick = styled.div`
//   @media (max-width:320px) {
//       /* display: none; */
//   }
// `;
// const GridCarousel = styled.div`
//   @media (max-width:1920px) {
//     /* display: none; */
//   }
// `;
























// import React, { useState, useEffect, useRef } from "react";
// import SkillCard from "../card/SkillCard";
// import { programmerData } from "../../data/programmer";
// import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
// import styled from "styled-components";

// const ProgramSkill = () => {
//   const [data, setData] = useState([]);
//   const [myElementVisible, setMyElementVisible] = useState([]);
//   const myRef = useRef([]);

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const itemsPerSlide = 4; // 2×2
//   const totalItems = data.length; //8
//   console.log("totalItems",totalItems)
//   const maxIndex = Math.ceil(totalItems / itemsPerSlide) - 1;
//   console.log("maxIndex", maxIndex)

//   const trackRef = useRef(null);
//   console.log("trackRef", trackRef)

//   useEffect(() => {
//     setData(programmerData);
//   }, []);

//   // INTERSECTION OBSERVER ANIMATION
//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         setMyElementVisible((prev) => {
//           const copy = [...prev];
//           const index = myRef.current.indexOf(entry.target);
//           copy[index] = entry.isIntersecting;
//           return copy;
//         });
//       });
//     });

//     myRef.current.forEach((ref) => ref && observer.observe(ref));

//     return () => {
//       myRef.current.forEach((ref) => ref && observer.unobserve(ref));
//     };
//   }, [data]);

//   // FIX: SLIDE WIDTH FIXED FOR DESKTOP
//   const SLIDE_WIDTH = 1100; // atur sesuai kebutuhan width container kamu

//   const updateTranslate = () => {
//     if (!trackRef.current) return;

//     const translate = currentIndex * SLIDE_WIDTH;
//     trackRef.current.style.transform = `translateX(-${translate}px)`;
//   };

//   useEffect(() => {
//     updateTranslate();
//   }, [currentIndex]);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
//   };

//   return (
//     <Container SLIDE_WIDTH={SLIDE_WIDTH}>
//       <ArrowButton left onClick={prevSlide} disabled={currentIndex === 0}>
//         <MdArrowBackIos />
//       </ArrowButton>

//       <CarouselWrapper SLIDE_WIDTH={SLIDE_WIDTH}>
//         <Track ref={trackRef} slidesCount={maxIndex + 1} SLIDE_WIDTH={SLIDE_WIDTH}>
//           {[...Array(maxIndex + 1)].map((_, slideIndex) => (
//             <Slide key={slideIndex} SLIDE_WIDTH={SLIDE_WIDTH}>
//               {data
//                 .slice(
//                   slideIndex * itemsPerSlide,
//                   slideIndex * itemsPerSlide + itemsPerSlide
//                 )
//                 .map((item, idx) => {
//                   const gIndex = slideIndex * itemsPerSlide + idx;
//                   return (
//                     <CardBox
//                       key={gIndex}
//                       ref={(el) => (myRef.current[gIndex] = el)}
//                       className={myElementVisible[gIndex] ? "visible" : ""}
//                     >
//                       <SkillCard
//                         data={item}
//                         isVisible={myElementVisible[gIndex]}
//                       />
//                     </CardBox>
//                   );
//                 })}
//             </Slide>
//           ))}
//         </Track>
//       </CarouselWrapper>

//       <ArrowButton onClick={nextSlide} disabled={currentIndex === maxIndex}>
//         <MdArrowForwardIos />
//       </ArrowButton>
//     </Container>
//   );
// };

// export default ProgramSkill;

// /* ===================== STYLE ======================== */

// const Container = styled.div`
//   display: flex;
//   align-items: center;
//   width: ${({ SLIDE_WIDTH }) => SLIDE_WIDTH}px;
//   margin: 0 auto;
// `;

// const CarouselWrapper = styled.div`
//   overflow: hidden;
//   width: ${({ SLIDE_WIDTH }) => SLIDE_WIDTH}px;
// `;

// const Track = styled.div`
//   display: flex;
//   transition: transform 0.45s ease;
//   width: ${({ slidesCount, SLIDE_WIDTH }) => slidesCount * SLIDE_WIDTH}px;
// `;

// const Slide = styled.div`
//   width: ${({ SLIDE_WIDTH }) => SLIDE_WIDTH}px;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 16px;

//   & > div {
//     flex: 0 0 calc(40% - 16px);
//   }
// `;

// const CardBox = styled.div`
//   opacity: 0;
//   transform: translateY(15px);
//   transition: 0.4s ease-in-out;

//   &.visible {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const ArrowButton = styled.button`
//   background: rgba(0, 0, 0, 0.4);
//   padding: 8px 12px;
//   border: none;
//   border-radius: 6px;
//   color: white;
//   cursor: pointer;
//   font-size: 20px;

//   ${({ left }) => left && `margin-right: 8px;`}

//   &:disabled {
//     opacity: 0.3;
//   }
// `;
