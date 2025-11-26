import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SkillCard from "../card/SkillCard";
import SkillCardMobile from "../card/SkillCardMobile";
import SkillCardTablet from "../card/SkillCardTablet";
import Carousel from "react-grid-carousel";
import "./programskill.css";
import { programmerData } from "../../data/programmer";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import styled from "styled-components";

const ProgramSkill3 = () => {
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
    slidesToShow: 1.8,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "40px",

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
                <SkillCardTablet data={d} isVisible={myElementVisible[index]} />
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

export default ProgramSkill3;
