import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import styled from 'styled-components'
import  { LasData }  from '../../data/LasData';

const Gallery = () => {

    const data = LasData()
      const [type, setType] = useState("");
    // const data = [
    //     {
    //         id:1,
    //         imgSrc:img1
    //     },
    //     {
    //         id:2,
    //         imgSrc:img2
    //     },
    //     {
    //         id:3,
    //         imgSrc:img3
    //     },
    //     {
    //         id:4,
    //         imgSrc:img4
    //     },
    //     {
    //         id:5,
    //         imgSrc:img5
    //     },
    //     {
    //         id:6,
    //         imgSrc:img6
    //     },
    //     {
    //         id:7,
    //         imgSrc:img7
    //     },
    //     {
    //         id:8,
    //         imgSrc:img8
    //     },
    //     {
    //         id:9,
    //         imgSrc:img9
    //     },
    //     {
    //         id:10,
    //         imgSrc:img10
    //     },
    //     {
    //         id:11,
    //         imgSrc:img11
    //     },
    //     {
    //         id:12,
    //         imgSrc:img12
    //     },
    //     {
    //         id:13,
    //         imgSrc:img13
    //     },
    //     {
    //         id:14,
    //         imgSrc:img14
    //     },
    //     {
    //         id:15,
    //         imgSrc:img15
    //     },
    //     {
    //         id:16,
    //         imgSrc:img16
    //     },
    //     {
    //         id:17,
    //         imgSrc:img17
    //     },
    //     {
    //         id:18,
    //         imgSrc:img18
    //     },
    //     {
    //         id:19,
    //         imgSrc:img19
    //     },
    //     {
    //         id:20,
    //         imgSrc:img20
    //     }
    // ]
    const [model, setModel] = useState(false)
    const [tempSrc,setTempSrc] = useState("")
const getMedia = (item) => {
  setType(item.type);
  setTempSrc(item.type === "image" ? item.imgSrc : item.vidSrc);
  setModel(true);
};
  return (
      <Container>
      <div className={model? "model open" : "model"}>
            {/* <img src={tempimgSrc} alt="" /> */}
                   {type === "image" && <img src={tempSrc} alt="" />}
        {type === "video" && (
          <video
            src={tempSrc}
            controls
            autoPlay
            style={{ maxHeight: "90vh", maxWidth: "90vw", borderRadius: "10px" }}
          />
        )}
            <RxCross1 color="white" onClick={() => setModel(false)}/>
      </div>
      <GalleryContainer>
        {data.map((item, index) => (
          <div className='pics' key={index} onClick={() => getMedia(item)}>
            {item.type === "image" ? (
              <img src={item.imgSrc} alt="" style={{ width: "100%" }} />
            ) : (
              <div className="video-thumb">
                <video src={item.vidSrc} style={{ width: "100%" }} controls autoPlay={true} muted playsInline loop={true}/>
                {/* <div className="play-icon">▶</div> */}
              </div>
            )}
          </div>
        ))} 
       </GalleryContainer>  
    </Container>
  )
}

export default Gallery

const Container = styled.div`
    .model{
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #000000;
        transition: opacity .4s ease, visibility .4s ease, transform .5s ease-in-out;
        visibility: hidden;
        opacity: 0;
        transform: scale(0);
        overflow: hidden;
        z-index: 999;
    }
  
    .model.open {
        visibility: visible;
        opacity: 1;
        transform: scale(1);
    }

    .model img{
        width: auto;
        max-width: 100%;
        height: auto;
        max-height: 100%;
        display: block;
        line-height: 0;
        box-sizing: border-box;
        padding: 20px 0 20px;
        margin: 0 auto;
    }

    .model.open svg{
        position: fixed;
        top: 10px;
        right: 10px;
        width: 2rem;
        height: 2rem;
        padding: 5px;
        background-color: rgba(0,0,0,0.4);
        color: #ffffff;
        cursor: pointer;
    }

`

const GalleryContainer = styled.div`
  -webkit-column-count   : 3;
 -moz-column-count: 3;
 column-count: 3;
 -webkit-column-width: 33%;
 -moz-column-width: 33%;
 column-width: 33%;
padding: 0 12px;
  .pics{
    -webkit-transition: all 350ms ease;
    transition: all 350ms ease;
    cursor: pointer;
    margin-bottom: 12px;
  }

  .pics:hover{
    filter: opacity(.8);
  }

@media (max-width:991px) {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
}
@media (max-width: 480px){
    -webkit-column-count: 1;
    -moz-column-count: 1;
    column-count: 1;
    -webkit-column-width: 100%;
    -moz-column-width: 100%;
    column-width: 100%;
}
`