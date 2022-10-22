import React, {useState} from 'react'
import SliderArrows from "../../SliderArrows/SliderArrows"
import { Container } from '@mui/material';
import bg from "../../../assets/box/box.webp";
import { useTheme } from '@mui/material/styles';
import {default as Boxes} from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { CardActionArea } from '@mui/material';


const BoxOne = () => {
  return (
      <>
  <div className="SlideArea" style={{backgroundImage: `url(${bg})`,
backgroundSize: "cover",
height: "550px", 
}}>
    <Container>

    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", paddingTop: "100px", paddingBottom: "50px" }}>
            <div style={{gridColumn: 2,  }}>
            <img src="https://lumiere-a.akamaihd.net/v1/images/andor-logotitle-1000-mobile-white_46c042e1.png?region=0,0,1000,330&amp;width=500" alt="Andor logo" />
          <h3  style={{color: "#aaa", fontSize:"20px", paddingRight: "100px"}}><b>The Rebellion begins. Original series now streaming, only on Disney+!</b></h3>
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
    >EXPLORE
        </button></div>
        </div>
        </div>   
    </Container>
  </div>      </>
  )
}

const options = [{
  image: "https://lumiere-a.akamaihd.net/v1/images/6348775ad7e2f30001fbc44b-image_d5a36814.jpeg?region=0%2C0%2C1536%2C864",
  content: "Creator Tony Gilray Explores the Nuance of Andor"
},
{
  image: "https://lumiere-a.akamaihd.net/v1/images/633f2ecbbde4cd00017985e5-image_295314cf.jpeg?region=0%2C0%2C1536%2C864",
  content: "Genevieve O'Reilly on the Legacy of Moothma"
}
]

function Box() {
  const [slideItem, setSlideItem] = useState(0)
 
  const incrementCountSlide = () => {

      setSlideItem( slideItem + 1);
  };
  const DecrementCountSlide = () => {
  setSlideItem(slideItem - 1 );
    };


    const [slidesecondItem, setsecondSlideItem] = useState(0)
 
    const incrementCountSecondSlide = () => {
  
      setsecondSlideItem( slidesecondItem + 1);
    };
    const DecrementCountSecondSlide = () => {
      setsecondSlideItem(slidesecondItem - 1 );
      };

  return (
    <>
<BoxOne/>
<div style={{display: "grid", gridTemplateColumns: "1fr 1fr", marginTop: "-80px", paddingBottom: "-150px", position: "relative", zIndex: 2 }}>
{options.map((date, i) => (<React.Fragment key={i}>
  <MediaControlCard 
image={date.image}
content={date.content}
/>
</React.Fragment>
))
}
</div>
<div style={{ backgroundColor: "rgb(16, 28, 37)", height: "100%", marginTop: "-130px",  zIndex: 0 }}>
<div style={{ position: "relative", display: "flex", justifyContent: "center", marginBottom: "50px"}}>
<div style={{gap: "100px", paddingTop: "150px", display: "grid", gridTemplateColumns: "1fr 1fr"}}>
{firstSlider.slice(slideItem, (slideItem+2)).map((movie, i) => (
  <React.Fragment key={i}>
  <ActionAreaCard 
  image={movie.img}
  title={movie.title}
  /></React.Fragment>
))}</div>
    {slideItem > 0 && (    <div style={{ position: "absolute", top: "50%", left: "50px" }}>
            <SliderArrows
              direction={"left"}
              opacity={1}
              handleClick={DecrementCountSlide}
            />
          </div>)}
  {slideItem < 5 &&(        <div style={{ position: "absolute", top: "50%", right: "50px" }}>
            <SliderArrows
              direction={"right"}
              opacity={1}
              handleClick={incrementCountSlide}
            />
          </div>)}</div>

<div style={{ position: "relative", display: "flex", justifyContent: "center"}}>
<div style={{ padding: "150px, 50px, 0px 50px", display: "grid", gap: "100px", gridTemplateColumns: "1fr 1fr"}}>
{secondSlider.slice(slidesecondItem, (slidesecondItem+2)).map((movie, i) => (
  <React.Fragment key={i}>
  <ActionAreaCard 
  image={movie.img}
  title={movie.title}
  content={movie.content}
  /></React.Fragment>
))}</div>
    {slidesecondItem > 0 && (    <div style={{ position: "absolute", top: "50%", left: "50px" }}>
            <SliderArrows
              direction={"left"}
              opacity={1}
              handleClick={DecrementCountSecondSlide}
            />
          </div>)}
  {slidesecondItem < 5 &&(        <div style={{ position: "absolute", top: "50%", right: "50px" }}>
            <SliderArrows
              direction={"right"}
              opacity={1}
              handleClick={incrementCountSecondSlide}
            />
          </div>)}</div>
          </div>
  </>
  )
}

export default Box



function MediaControlCard(props: any) {
  const theme = useTheme();

  return (
    <Card sx={{color: "white", display: 'flex', width: "400px", padding: "20px 20px 20px 20px", backgroundColor: "#181A1B" , transform: "translateX(75px)"}}>
     
     <div >    <img
        src={props.image}
        alt="Live from space album cover"
        style={{height: "150px", width: "200px"}}      /></div> 
      <Boxes sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
        {props.content}
          </Typography>
        
        </CardContent>
   
      </Boxes>
  
    </Card>
  );
}


function ActionAreaCard(props: any) {
  return (
    <Card sx={{ maxWidth: 455 }} style={{margin: "30px, 50px, 0px, 50px", padding: "30px, 50px, 0px, 50px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          {props.content   &&(     <Typography variant="body2" color="text.secondary">
            {props.content}
          </Typography>)}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}


const firstSlider = [{
img: "https://lumiere-a.akamaihd.net/v1/images/andor-106-main_99d971bc.jpeg?region=787%2C1%2C2853%2C1607",
title: <><h3>  Andor | “Episode 6: The Eye” Episode Guide </h3></>
},{
img: "https://lumiere-a.akamaihd.net/v1/images/andor-ep-105-main_386d4b16.jpeg?region=560%2C33%2C1360%2C767",
title: <><h3>  Andor | “Episode 5: The Axe Forgets” Episode Guide </h3></>
},{
img: "https://lumiere-a.akamaihd.net/v1/images/andor-episode-4-main-2_42e006e9.jpeg?region=3%2C1%2C1427%2C803",
title: <><h3>  Andor | “Episode 4: Aldhani” Episode Guide </h3></>
},{
img: "https://lumiere-a.akamaihd.net/v1/images/80ce978acc2e194eecdd4a8081c184bf_2880x1620_bd119ab8.png?region=0%2C0%2C2880%2C1620",
title: <><h3>  Andor | “Episode 3: Reckoning” Episode Guide </h3></>
}
,{
  img: "https://lumiere-a.akamaihd.net/v1/images/4c4118f67bd850bf3fbc51f232a3ed21_2880x1620_ae585e17.png?region=0%2C0%2C2880%2C1620",
  title: <><h3>  Andor | “Episode 2: That Would Be Me” Episode Guide </h3></>
  }
  ,{
    img: "https://lumiere-a.akamaihd.net/v1/images/episode-1-andor-mobile_d23a6d98.jpeg?region=0%2C25%2C1024%2C576",
    title: <><h3>  Andor | “Episode 1: Kassa” Episode Guide </h3></>
    }

]


const secondSlider = [{
  img: "https://lumiere-a.akamaihd.net/v1/images/andor-106-main_99d971bc.jpeg?region=787%2C1%2C2853%2C1607",
  title: <><h3>  Andor | “Episode 6: The Eye” Episode Guide </h3></>,
  content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
  },{
  img: "https://lumiere-a.akamaihd.net/v1/images/andor-ep-105-main_386d4b16.jpeg?region=560%2C33%2C1360%2C767",
  title: <><h3>  Andor | “Episode 5: The Axe Forgets” Episode Guide </h3></>,
  content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
  
  },{
  img: "https://lumiere-a.akamaihd.net/v1/images/andor-episode-4-main-2_42e006e9.jpeg?region=3%2C1%2C1427%2C803",
  title: <><h3>  Andor | “Episode 4: Aldhani” Episode Guide </h3></>,
  content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
  
  },{
  img: "https://lumiere-a.akamaihd.net/v1/images/80ce978acc2e194eecdd4a8081c184bf_2880x1620_bd119ab8.png?region=0%2C0%2C2880%2C1620",
  title: <><h3>  Andor | “Episode 3: Reckoning” Episode Guide </h3></>,
  content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
  
  }
  ,{
    img: "https://lumiere-a.akamaihd.net/v1/images/4c4118f67bd850bf3fbc51f232a3ed21_2880x1620_ae585e17.png?region=0%2C0%2C2880%2C1620",
    title: <><h3>  Andor | “Episode 2: That Would Be Me” Episode Guide </h3></>,
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    
    }
    ,{
      img: "https://lumiere-a.akamaihd.net/v1/images/episode-1-andor-mobile_d23a6d98.jpeg?region=0%2C25%2C1024%2C576",
      title: <><h3>  Andor | “Episode 1: Kassa” Episode Guide </h3></>,
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
      
      }
  
  ]