import React, { useEffect,useState, useRef } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';
import CertificateCard from '../card/CertificateCard';
import { sertifikatData } from '../../data/certificate';
import DetailCertificate from './DetailCertificate';
import { useTranslation } from 'react-i18next';


var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const Certificate = () => {
  const [data, setData] = useState()
  // console.log("data", data)
  const {t} = useTranslation()
  const [openDetail, setOpenDetail]= useState(false)
  const [selectedDetail, setSelectedDetail] = useState(null)
  // console.log("selectedDetail", selectedDetail)

  const handleCertificateDetail = (id) => {
    const detail = data.find(cert => cert.id === id)
    setOpenDetail(true)
    setSelectedDetail(detail)
  }

  useEffect(() => {
    setData(sertifikatData)
  },[])
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data?.map((item) => (
        <CertificateCard 
        item = {item} 
        key={item.id}
        openDetail={handleCertificateDetail}
        selectedDetail={selectedDetail}
        />
    ))
  return (
    <Container id="sertifikat">
      <h1>{t("sertifikat")}</h1>
    <ContentContainer>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'>
          <IoIosArrowForward
          // size={30}
          />
        </button>
      </Buttons>
    </ContentContainer>
    {
      openDetail && (
        <>
          <DetailCertificate
          selectedDetail={selectedDetail}
          setOpenDetail={setOpenDetail}
          />
        </>
      )
    }
    </Container>
  )
}

export default Certificate;

const ContentContainer = styled.div`
  position: relative;
  margin-top: 5rem;
  /* padding-top: 3rem; */
`

const Buttons = styled.div`
  button{
    width: 3rem;
    /* size: 20rem; */
    height: 3rem;
    font-size: 20px;

    /* background-color: rgba(255, 255, 255, 0.100); */
    cursor: pointer;
    color: black;
    border: 1px solid white;
    border-radius: 50%;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`

const Container = styled.div`
    display: flex;
  flex-direction: column;
  gap: 2rem;
  color: white;
  padding-top: 6rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding-bottom: 100px;
`
