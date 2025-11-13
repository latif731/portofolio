import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { figmaDatas } from '../../data/figma'
import { useTranslation } from 'react-i18next'

const CardFigma = ({setOpenFigmaDetail}) => {
    const [figmaData, setFigmaData] = useState([])
    console.log("figmaData", figmaData)
    const {t} = useTranslation()
    const data = figmaDatas()
    useEffect(() => {
        setFigmaData(data)
    },[])
  return (
    <Container>
        <BoxArea>
            {
            figmaData.map((d) => (
            <Box key={d.id}>
                <img src={d.imageUrl} alt={d.titleHeader} />
                <ContentOverlay>
                    <h3>{d.titleHeader}</h3>
                    <p>{d.desc}</p>
                    <button
                    onClick={() => setOpenFigmaDetail(d.id)}
                    >
                        {/* See Detail */}
                        {t("porto menu.detail")}
                    </button>
                </ContentOverlay>
            </Box>
            ))
            }
            {/* <Box>
                <img src={figma2} alt="" />
                <ContentOverlay>
                    <h3>Musicon</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere illo similique iusto, excepturi sunt accusamus possimus doloremque expedita a quia sit deserunt. Beatae quis error rem. Laudantium, numquam architecto.</p>
                    <button
                    onClick={setOpenFigmaDetail}
                    >See Detail</button>
                </ContentOverlay>
            </Box> */}
        </BoxArea>
    </Container>
  )
}

export default CardFigma

const Container = styled.div`
    padding: 10px 10%;
    /* height: 200%; */
`
const BoxArea = styled.div`
    display: flex;
    gap: 1rem;
`

const ContentOverlay = styled.div`
    height:0px;
    width: 100%;
    background: linear-gradient(transparent, #1c1c1c 58%);
    border-radius: 10px;
    position: absolute;
    /* top: 0; */
    left: 0;
    bottom: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 0 40px;
    align-items: center;
    text-align: center;
    font-size: 14px;
    transition: height 1s;
    h3{
        color: white;
        font-weight: 500;
        margin-top: 20%;
        font-size: 30px;
        letter-spacing: 2px;
    }
    p{
        color:white;
    }
    button{
        margin-top: 10px;
        color: black;
        width: 90px;
        height: 40px;
        font-size: 14px;
        background: #fff;
        border-radius: 10px;
        text-align: center;
        cursor: pointer;
        /* padding: 5px; */
    }
`

const Box = styled.div`
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    /* height: 10%; */
    box-shadow: 5px 5px 15px rgba(0,0,0,0.5);
    img{
        width: 100%;
        /* height: 20rem; */
        border-radius: 10px;
        display: block;
        transition: transform 0.5s;
        
    }
    &:hover img{
            transform: scale(1.2);
        }
    &:hover ${ContentOverlay} {
        height: 100%;
    }

`


