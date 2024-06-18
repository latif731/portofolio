import React from 'react'


const Minat = () => {
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
                <source src={"/videos/futsal.mp4"} type="video/mp4"/>
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
            >Futsal</h1>
          
        </div>
        <div
        style={{
          position:"relative"
        }}
        >
                  {/* <video src={videoObj.url} loop muted id="autoplay"/> */}
                  <video width="400" controls autoPlay={true} muted playsInline loop={true}>
                <source src={"/videos/game.mp4"} type="video/mp4"/>
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
            >Game</h1>
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
          <source src={"/videos/musik.mp4"} type="video/mp4"/>
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
            >Musik</h1>
        </div>  
        <div
        style={{
          position:"relative"
        }}
        >                
                  <video width="400" controls autoPlay={true} muted playsInline loop={true}>
                <source src={"/videos/belajarhalbaru.mp4"} type="video/mp4"/>
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
            >Belajar Hal Baru
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
                <source src={"/videos/coding.mp4"} type="video/mp4"/>
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
            >Coding
            </h1>

        </div>
      </div>
    </div>
  )
}

export default Minat
