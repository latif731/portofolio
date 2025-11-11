import React from 'react'
import BelajarHalBaru from "../../assets/videos/belajarhalbaru.mp4"
import futsal from "../../assets/videos/futsal.mp4"
import coding from "../../assets/videos/coding.mp4"
import game from "../../assets/videos/game.mp4"
import musik from "../../assets/videos/musik.mp4"


const Minat = ({t,i18n}) => {
  return (
    <div
    style={{
      display:"flex",
      flexDirection:"column",
      // gap:"1rem"
      paddingTop:"2rem"
    }}
    >
      <div
      style={{
        display:"flex",
        // gap:"1rem",
      }}
      >
        <div
        style={{
          position:"relative"
        }}
        >
                  {/* <video src={videoObj.url} loop muted id="autoplay"/> */}
                  <video width="400" controls autoPlay={true} muted playsInline loop={true}>
                <source src={`${futsal}`} type="video/mp4"/>
                {/* <source src="mov_bbb.ogg" type="video/ogg"/>             */}
                  </video>
                  <h1
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "5px"
            }}
            >{t("tertarik.futsal")}</h1>
          
        </div>
        <div
        style={{
          position:"relative"
        }}
        >
                  {/* <video src={videoObj.url} loop muted id="autoplay"/> */}
                  <video width="400" controls autoPlay={true} muted playsInline loop={true}>
                <source src={`${game}`} type="video/mp4"/>
                {/* <source src="mov_bbb.ogg" type="video/ogg"/>             */}
                  </video>

                  <h1
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "5px"
            }}
            >{t("tertarik.game")}</h1>
            </div>
      </div>
      <div
      style={{
        display:"flex",
        // gap:"1rem",
      }}
      >
        <div
        style={{
          position:"relative"
        }}
        >
            <video width="400" controls autoPlay={true} muted playsInline loop={true}>
          <source src={`${musik}`} type="video/mp4"/>
          {/* <source src="mov_bbb.ogg" type="video/ogg"/>             */}
            </video>
            <h1
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "5px"
            }}
            >{t("tertarik.musik")}</h1>
        </div>  
        <div
        style={{
          position:"relative"
        }}
        >                
                  <video width="400" controls autoPlay={true} muted playsInline loop={true}>
                <source src={`${BelajarHalBaru}`} type="video/mp4"/>
                {/* <source src="mov_bbb.ogg" type="video/ogg"/>             */}
                  </video>
                  <h1
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "5px"
            }}
            >{t("tertarik.belajar")}
            </h1>
            </div>
      </div>
      <div
      style={{
        display:"flex",
        // gap:"1rem",
      }}
      >
                <div
        style={{
          position:"relative"
        }}
        >
                  {/* <video src={videoObj.url} loop muted id="autoplay"/> */}
                  <video width="400" controls autoPlay={true} muted playsInline loop={true}>
                <source src={`${coding}`} type="video/mp4"/>
                {/* <source src="mov_bbb.ogg" type="video/ogg"/>             */}
                  </video>
                  {/* <video src={videoObj.url} loop muted id="autoplay"/> */}
          
                  <h1
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "5px"
            }}
            >{t("tertarik.coding")}
            </h1>

        </div>
      </div>
    </div>
  )
}

export default Minat
