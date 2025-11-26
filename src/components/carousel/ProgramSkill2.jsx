import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SkillCard from "../card/SkillCard";
import SkillCardMobile from "../card/SkillCardMobile";
import Carousel from "react-grid-carousel";
import "./programskill.css";
import { programmerData } from "../../data/programmer";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import styled from "styled-components";

const ProgramSkill2 = () => {
  const [data, setData] = useState([]);
  const [myElementVisible, setMyElementVisible] = useState([]);
  // console.log("myElementVisible", myElementVisible)
  const myRef = useRef([]);
  // console.log("myRef", myRef)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // console.log("entry", entry);
        setMyElementVisible((prev) => {
          const newVisibility = [...prev];
          // console.log("newVisibility", newVisibility)
          const index = myRef.current.indexOf(entry.target);
          newVisibility[index] = entry.isIntersecting;
          return newVisibility;
        });
      });
    });
    myRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (myRef.current) {
        myRef.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      }
    };
  }, [data]);

  useEffect(() => {
    setData(programmerData);
  }, []);

  const slidesToShow = 1.5;

  const PreviousButton = (props) => {
    const { className, onClick, currentSlide } = props;
    return (
      <>
        {currentSlide !== 0 && (
          <div className={`${className} custom-prev`} onClick={onClick}>
            <MdArrowBackIos
            // style={{ color: 'black', fontSize: '30px', marginLeft: '7px' }}
            />
          </div>
        )}
      </>
    );
  };

  const NextButton = (props) => {
    const { className, onClick, slideCount, currentSlide } = props;
    return (
      <>
        {currentSlide !== slideCount - slidesToShow && (
          <div className={`${className} custom-next`} onClick={onClick}>
            <MdArrowForwardIos
            // style={{ color: 'black', fontSize: '30px' }}
            />
          </div>
        )}
      </>
    );
  };

  const settings = {
    infinite: false,
    speed: 500,
    className: "center",
    // DEFAULT = MOBILE

    rows: 2,
    slidesPerRow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "70px",

    prevArrow: <PreviousButton />,
    nextArrow: <NextButton />,
  };

  return (
    <>
      <div className="slider-container">
          <Slider {...settings}>
            {data?.map((d, index) => (
              <div
                key={index}
                ref={(el) => {
                  myRef.current[index] = el;
                }} // Set each ref in the array
                className={`skill-card ${
                  myElementVisible[index] ? "visible" : ""
                }`}
              >
                <SkillCardMobile data={d} isVisible={myElementVisible[index]} />
              </div>
            ))}
          </Slider>
        </div>
      {/* <div className="slider-container-mobile">
        <Carousel
          cols={1}
          rows={2}
          gap={10}
          loop={false}
          hideArrow={false}
          showDots={true}
        >
          {programmerData.map((d, index) => (
            <Carousel.Item key={index}>
              <SkillCard data={d} isVisible={true} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div> */}
    </>
  );
};

export default ProgramSkill2;





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
