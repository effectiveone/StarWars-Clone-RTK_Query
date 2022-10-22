import { useEffect, useState } from "react";

import { useGetSpeciesQuery } from "../services/starWarsApi";
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


function Species() {
  const [value, setValue] = useState("");


  const {
    data: species = [],
    isLoading,
    isSuccess,
    isError,
    error
  }  = useGetSpeciesQuery("a");



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


        {species?.results?.map(({name, language, average_lifespan, classification, designation, average_height, hair_colors, skin_colors}: any, index: any) => (
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
   <td><strong> Language</strong></td>
   <td><p>{ language}</p></td>
 </tr>
 <tr>
   <td><strong>Average lifespan</strong></td>
   <td><p>{average_lifespan}</p></td>
 </tr>
 <tr>
   <td><strong>Classification</strong></td>
   <td><p>{classification}</p></td>
 </tr>
 <tr>
   <td><strong>Designation</strong></td>
   <td><p>{designation}</p></td>
 </tr>
 <tr>
   <td><strong>Average height</strong></td>
   <td><p>{average_height}</p></td>
 </tr>
 <tr>
   <td><strong>Hair colors</strong></td>
   <td><p>{hair_colors}</p></td>
 </tr>
 <tr>
   <td><strong>Skin colors</strong></td>
   <td><p>{skin_colors}</p></td>
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

export default Species;