import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import CardPorto from './CardPorto'
import CardFigma from './CardFigma'
import { PortfolioDatas } from '../../data/PortfolioData'
import FigmaDetailCard from '../detail/FigmaDetailCard'
import PortoDetailCard from '../detail/PortoDetailCard'
import { figmaDatas } from '../../data/figmaData'
// import FigmaDetailCard from '../detail/FigmaDetailCard'


const PersonalProject = () => {
  const [active, setActive] = useState(1)
  const [openPortoDetail, setOpenPortoDetail] = useState(false) 
  // const [openFigmaDetail, setOpenFigmaDetail] = useState(false)
  // console.log("openPortoDetail", openPortoDetail)
  const [selectedPortoDetail, setSelectedPortoDetail] = useState(null)
  const [selectedFigmaDetail, setSelectedFigmaDetail] = useState(null)
  const [openFigmaDetail, setOpenFigmaDetail] = useState(false)

  const handleOpenPortoDetail = (id) => {
    const detail = PortfolioDatas.find(portfolio => portfolio.id === id)
    setSelectedPortoDetail(detail)
    setOpenPortoDetail(true)
  }

  const handleFigmaDetail = (id) => {
    const detail = figmaDatas.find(figma => figma.id === id)
    setSelectedFigmaDetail(detail)
    setOpenFigmaDetail(true)
  }

  return (
    <Container id="project">
        <h1>My Personal Project</h1>
        <TabContainer>
          <Web
          onClick={() => setActive(1)}
          active={active === 1}
          >
            <h5>My Portfolio</h5>
          </Web>
          <Figma
          onClick={() => setActive(2)}
          active={active === 2}
          >
          <h5>UI/UX Design</h5>
          </Figma>
        </TabContainer>
        {
          active === 1 && (
            <Portfolio>
              <CardPorto
              setOpenPortoDetail={handleOpenPortoDetail}
              />
            </Portfolio>
          )
        }
        {
          active === 2 && (
            <Design>
              <CardFigma
              setOpenFigmaDetail={handleFigmaDetail}
              />
            </Design>
          )
        }
        {
          openPortoDetail && (
            <>
              <PortoDetailCard
              setOpenPortoDetail={setOpenPortoDetail}
              selectedPortoDetail={selectedPortoDetail}
              />
            </>
          )
        }
        {
          openFigmaDetail && (
            <>
              <FigmaDetailCard
              setOpenFigmaDetail={setOpenFigmaDetail}
              selectedFigmaDetail={selectedFigmaDetail}
              />
            </>
          )
        }
    </Container>
  )
}

export default PersonalProject


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


const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10rem;
  padding-top: 2rem;
  /* padding: 10px 40rem 10px 40rem;  */
  /* justify-content: space-around; */
`

const Web = styled.div`
    cursor:pointer !important;
    position: relative; /* Add position relative */
      :before{
        content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -5px; /* Adjust bottom position */
          height: 2px;
          background-color: white;
          width: 100%;
          transform: scaleX(0);
          transition: transform 0.3s ease;
      }
      :hover:before{
        transform: scaleX(1);
      }
      ${(props) => 
        props.active && 
        `
          :before{
          transform: scaleX(1);
          }
        `
      }
`

const Figma = styled.div`
      cursor:pointer !important;
    position: relative; /* Add position relative */
      :before{
        content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -5px; /* Adjust bottom position */
          height: 2px;
          background-color: white;
          width: 100%;
          transform: scaleX(0);
          transition: transform 0.3s ease;
      }
      :hover:before{
        transform: scaleX(1);
      }
      ${(props) => 
        props.active && 
        `
          :before{
          transform: scaleX(1);
          }
        `
      }
`

const Portfolio = styled.div`
  width: 100%;
`


const Design = styled.div`
  width: 100%;
`