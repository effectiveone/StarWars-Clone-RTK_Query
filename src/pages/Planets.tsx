import { useEffect, useState } from "react";

import { useGetPlanetsQuery } from "../services/starWarsApi";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import "../App.css";
import Spinner from "../components/Spinner";
import Layout from "../Layout"


function Planets() {
  const [value, setValue] = useState("");


  const {
    data: planets = [],
    isLoading,
    isSuccess,
    isError,
    error
  }  = useGetPlanetsQuery("a");



  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
    <Layout>   <div
      className="App"
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "1000px",
        alignContent: "center",
        display: "grid",
         gridTemplateColumns: "1fr 1fr 1fr 1fr"
      }}
    >

        {planets?.results?.map(({name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population}: any, index: number) => (
          <Card sx={{ maxWidth: 345, backgroundColor: "#292828", padding:  "10px 5px 10px 5px", margin: "10px 5px 10px 5px"}} key={index}>
          <CardMedia
            component="img"
            height="140"
            image="https://lumiere-a.akamaihd.net/v1/images/vel-sartha-main_c1baec00.jpeg?region=847%2C0%2C806%2C803&width=320"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <div style={{ paddingTop: "10px", paddingBottom: "5px"}} className="row"
    >
      <table>
        <tr>
          <td><strong>Rotation period</strong></td>
          <td><p>{ rotation_period}</p></td>
        </tr>
        <tr>
          <td><strong>Orbital period</strong></td>
          <td><p>{orbital_period}</p></td>
        </tr>
        <tr>
          <td><strong>Diameter</strong></td>
          <td><p>{diameter}</p></td>
        </tr>
        <tr>
          <td><strong>Climate</strong></td>
          <td><p>{climate}</p></td>
        </tr>
        <tr>
          <td><strong>Gravity</strong></td>
          <td><p>{gravity}</p></td>
        </tr>
        <tr>
          <td><strong>Terrain</strong></td>
          <td><p>{terrain}</p></td>
        </tr>
        <tr>
          <td><strong>Surface water</strong></td>
          <td><p>{surface_water}</p></td>
        </tr>
        <tr>
          <td><strong>Population</strong></td>
          <td><p>{population}</p></td>
        </tr>
      </table>
    
          </div>
          </CardContent>
     
      
        </Card>
        ))}

    </div>
    </Layout>
    </>
  );
}

export default Planets;

// name:"Tatooine"
// rotation_period:"23"
// orbital_period:"304"
// diameter:"10465"
// climate:"arid"
// gravity:"1 standard"
// terrain:"desert"
// surface_water:"1"
// population:"200000"
// created:"2014-12-09T13:50:49.641000Z"
// edited:"2014-12-20T20:58:18.411000Z"
// url:"https://swapi.dev/api/planets/1/"