import { useEffect, useState } from "react";

import { useGetStarshipsQuery } from "../services/starWarsApi";
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


function Starships() {
  const [value, setValue] = useState("");


  const {
    data: Starships = [],
    isLoading,
    isSuccess,
    isError,
    error
  }  = useGetStarshipsQuery("a");



  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
    <Layout>
    <div
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


        {Starships?.results?.map(({MGLT, cargo_capacity, name, consumables, cost_in_credits, crew, hyperdrive_rating, length, model, max_atmosphering_speed, manufacturer}: any, index: any) => (
          <Card sx={{ maxWidth: 345, backgroundColor: "#292828", padding:  "10px 5px 10px 5px", margin: "10px 5px 10px 5px"}} key={index}>
   <CardMedia
     component="img"
     height="140"
     image="https://lumiere-a.akamaihd.net/v1/images/vel-sartha-main_c1baec00.jpeg?region=847%2C0%2C806%2C803&width=320"
     alt="green iguana"
   />
   <CardContent>
     <Typography gutterBottom variant="h5" component="div">
       {MGLT}
     </Typography>
     <div style={{ paddingTop: "10px", paddingBottom: "5px"}} className="row"
>
   
<table>
 <tr>
   <td><strong> Cargo capacity</strong></td>
   <td><p>{ cargo_capacity}</p></td>
 </tr>
 <tr>
   <td><strong>name</strong></td>
   <td><p>{name}</p></td>
 </tr>
 <tr>
   <td><strong>Consumables</strong></td>
   <td><p>{consumables}</p></td>
 </tr>
 <tr>
   <td><strong>Cost in credits</strong></td>
   <td><p>{cost_in_credits}</p></td>
 </tr>
 <tr>
   <td><strong>crew</strong></td>
   <td><p>{crew}</p></td>
 </tr>
 <tr>
   <td><strong>Hyperdrive rating</strong></td>
   <td><p>{hyperdrive_rating}</p></td>
 </tr>
 <tr>
   <td><strong>Length</strong></td>
   <td><p>{length}</p></td>
 </tr>
 <tr>
   <td><strong>Model</strong></td>
   <td><p>{model}</p></td>
 </tr> <tr>
   <td><strong>Max_atmosphering_speed</strong></td>
   <td><p>{max_atmosphering_speed}</p></td>
 </tr> <tr>
   <td><strong>Manufacturer</strong></td>
   <td><p>{manufacturer}</p></td>
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

export default Starships;