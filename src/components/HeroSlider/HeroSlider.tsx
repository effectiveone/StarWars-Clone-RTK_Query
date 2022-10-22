import React, {useState} from 'react'
import SliderArrows from "../SliderArrows/SliderArrows"
import { Container } from '@mui/material';
import bgslide1 from "../../assets/slides/slide1.jpeg";
import bgslide2 from "../../assets/slides/slide2.jpeg";
import bgslide3 from "../../assets/slides/slide3.jpg";
import bgslide5 from "../../assets/slides/slide5.jpeg";



const Slide1 = () => {
  return (
      <>
  <div className="SlideArea" style={{backgroundImage: `url(${bgslide1})`,
backgroundSize: "cover",
height: "750px"
}}>
    <Container>
        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", paddingTop: "100px", paddingBottom: "50px" }}>
            <div style={{gridColumn: 1, transform: "translateX(-100px)"}}>
    <img src="https://lumiere-a.akamaihd.net/v1/images/106-andor_episode_logotitle-_1_eb2b9095.png?region=0,0,1200,717&amp;width=600" alt="Andor - Episode 6 - The Eye"  />
<h3 style={{color: "#aaa", fontSize:"20px"}}><b>With cover from a spectacular local festival, the Aldhani mission reaches a point of no return.</b></h3>
    <div className="div"><button
    style={{    backgroundColor: "rgb(16, 106, 224)",
        color: "rgb(255, 255, 255)",
        fontSize: "20px",
        height: "40px",
        width: "200px",
        paddingRight: "10px",
        marginRight: "10px",

        borderColor: "rgb(16, 106, 224)"}}
    
    >STREAM NOW</button>
    <button
    style={{
        paddingLeft: "10px",
        fontSize: "20px",
        height: "40px",
        width: "200px",
        backgroundColor: "rgba(0,0,0,0.8)",
        color: "rgb(255, 255, 255)",
        borderColor: "white"
    }}
    >EPISODE GUIDE
        </button></div>
        </div>
        </div>
    </Container>
  </div>
      </>
  )
}

const Slide2 = () => {
  return (
      <>
  <div className="SlideArea" style={{backgroundImage: `url(${bgslide2})`,
backgroundSize: "cover",
height: "750px"}}>
    <Container >

    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", paddingTop: "100px", paddingBottom: "50px" }}>
            <div style={{gridColumn: 2, transform: "translateX(100px)"}}>
            <img src="https://lumiere-a.akamaihd.net/v1/images/107-andor_episode_logotitle-_1_e8e78387.png?region=0,0,1200,717&amp;width=600" alt="Andor - Episode 7 - Announcement" />                <h3 style={{color: "#aaa", fontSize:"20px"}}>The repercussions of the Aldhani heist reach all the way to Coruscant, while Cassian returns home.</h3>
    <div className="div"><button
    style={{    backgroundColor: "rgb(16, 106, 224)",
        color: "rgb(255, 255, 255)",
        fontSize: "20px",
        height: "40px",
        width: "300px",
        paddingRight: "10px",
        marginRight: "10px",

        borderColor: "rgb(16, 106, 224)"}}
    
    >STREAM NOW ON DISNEY+</button>
  </div>
        </div>
        </div>   
    </Container>
  </div>      </>
  )
}

const Slide3 = () => {
  return (
      <>
      <div className="SlideArea" style={{backgroundImage: `url(${bgslide3})`,
    backgroundSize: "cover",
    height: "750px"}}>
    <Container className="testone">
    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", paddingTop: "100px", paddingBottom: "50px" }}>
            <div style={{gridColumn: 1, transform: "translateX(-100px)"}}>
            <img src="https://lumiere-a.akamaihd.net/v1/images/bhtg-logotitle-1000_fb62b1c1.png?region=0,0,1000,435&amp;width=500" alt="Bring Home The Galaxy logo" />
<h3 style={{color: "#aaa", fontSize:"20px"}}>Weekly reveals of new toys, collectibles, and apparel have begun. Punch it!</h3>
    <div className="div"><button
    style={{    backgroundColor: "rgb(16, 106, 224)",
        color: "rgb(255, 255, 255)",
        fontSize: "20px",
        height: "40px",
        width: "200px",
        paddingRight: "10px",
        marginRight: "10px",

        borderColor: "rgb(16, 106, 224)"}}
    
    >MORE DETAILS</button>
  </div>
        </div>
        </div>
    </Container>
  </div>
      </>
  )
}

const Slide4 = () => {
  return (
      <>
       <div className="SlideArea" style={{backgroundImage: `url(${bgslide5})`,
    backgroundSize: "cover",
    height: "750px"}}>
    <Container >
    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", paddingTop: "100px", paddingBottom: "50px" }}>
            <div style={{gridColumn: 1, transform: "translateX(-100px)"}}>
            <img src="https://lumiere-a.akamaihd.net/v1/images/bhtg-logotitle-1000_fb62b1c1.png?region=0,0,1000,435&amp;width=500" alt="Bring Home The Galaxy logo" />
<h3 style={{color: "#aaa", fontSize:"20px"}}>
     This week in Star Wars, we venture into The Eye, Star Wars Galactic Pals returns, andmore.</h3>
    <div className="div"><button
    style={{    backgroundColor: "rgb(16, 106, 224)",
        color: "rgb(255, 255, 255)",
        fontSize: "20px",
        height: "40px",
        width: "200px",
        paddingRight: "10px",
        marginRight: "10px",

        borderColor: "rgb(16, 106, 224)"}}
    
    >MORE DETAILS</button>
  </div>
        </div>
        </div>
    </Container>
  </div>
      </>
  )
}



function App() {
    const [numberOfSLider, setNumberOfSLider] = useState(0)
 
    const incrementCount = () => {
        numberOfSLider === 3 ? setNumberOfSLider(0) :

      setNumberOfSLider( numberOfSLider + 1);
    };
    const DecrementCount = () => {
    numberOfSLider === 0 ? setNumberOfSLider(3) :
        setNumberOfSLider(numberOfSLider - 1 );
      };
    return (
      <>
  
        <div style={{ position: "relative" }} data-testid="areaOfSlide">
        
          <div style={{ position: "absolute", top: "50%", left: "50px" }}>
            <SliderArrows
              direction={"left"}
              opacity={1}
              handleClick={DecrementCount}
            />
          </div>
          <div style={{ position: "absolute", top: "50%", right: "50px" }}>
            <SliderArrows
              direction={"right"}
              opacity={1}
              handleClick={incrementCount}
            />
          </div>
          {dateSlide[`${numberOfSLider}`].component}

          <div
            style={{
              position: "absolute",
              bottom: "0px",
              right: "25%",
              display: "flex",
              flexDirection: "row",
              gap: "20px",
            }}
          >
            <div
                    data-testid="sliderduo"

              onClick={() => setNumberOfSLider(0)}
              style={{
                width: "200px",
                height: "100px",
                backgroundImage: `url(${bgslide1})`,
                backgroundSize: "cover",
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                padding: "10px 10px 10px 10px",
                cursor: "pointer",
                color: "white"

              }}
            >
              ANDOR: EPISODE 7 "ANNOUNCEMENT" - NOW STREAMING
            </div>
            <div
              onClick={() => setNumberOfSLider(1)}
              style={{

                width: "200px",
                height: "100px",
                backgroundImage: `url(${bgslide2})`,
                backgroundSize: "cover",
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                padding: "10px 10px 10px 10px",
                cursor: "pointer",
                color: "white"

              }}
            >
              THIS WEEK! IN STAR WARS
            </div>
            <div
                            data-testid="sliderChanger"

              onClick={() => setNumberOfSLider(2)}
              style={{
                width: "200px",
                height: "100px",
                backgroundImage: `url(${bgslide3})`,
                backgroundSize: "cover",
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                padding: "10px 10px 10px 10px",
                cursor: "pointer",
                color: "white"

              }}
            >
              BRING HOME THE GALAXY
            </div>
            <div
              onClick={() => setNumberOfSLider(3)}
              style={{
                width: "200px",
                height: "100px",
                backgroundImage: `url(${bgslide5})`,
                backgroundSize: "cover",
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                padding: "10px 10px 10px 10px",
                cursor: "pointer",
                color: "white"
              }}
            >
              ANDOR: EPISODE 6 "THE EYE" EPISODE GUIDE
            </div>
          </div>
        </div>
      </>
    );
}

export default App


const dateSlide = [
  {id: "slide1",
  component: <Slide1/>
  },
  {id: "slide2",
      component: <Slide2/>
      },
      {id: "slide3",
          component: <Slide3/>
          },
          {id: "slide4",
              component: <Slide4/>
              }
  ]
  
  