import {useState } from "react";

import "../App.css";
import Layout from "../Layout"
import HeroSlider from "../components/HeroSlider/HeroSlider";
import {Container} from "@mui/material";
import Box from "../components/sections/Box/Box"
const options = [
  {
    label: "people",
    value: "people",
  },
  {
    label: "planets",
    value: "planets",
  },
  {
    label: "films",
    value: "films",
  },
  {
    label: "species",
    value: "species",
  },
  {
    label: "vehicles",
    value: "vehicles",
  },
  {
    label: "starships",
    value: "starships"
  },
];

function Home() {

  

  return (
<>
<Layout>

<HeroSlider/>

    
 
    <Container>

<Box />

</Container>

</Layout>
    </>

  );
}

export default Home;
