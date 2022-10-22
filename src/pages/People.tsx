import { useEffect, useState } from "react";

import { useGetPeopleQuery } from "../services/starWarsApi";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../App.css";
import Spinner from "../components/Spinner";
import Layout from "../Layout";

interface IKeys {
 name: string;
 hair_color: string;
 skin_color: string;
 eye_color: string;
 birth_year: any;
 gender: any;
}

function People() {
  const [value, setValue] = useState("");


  const {
    data: people = [],
    isLoading,
    isSuccess,
    isError,
    error
  }  = useGetPeopleQuery("a");



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
        display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr"
      }}
    >


   
        {people?.results?.map(({name, hair_color, skin_color, eye_color, birth_year, gender}: any, index: number) => (
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
      <td><strong>Hair color</strong></td>
      <td><p>{hair_color}</p></td>
    </tr>
    <tr>
      <td><strong>Skin Color</strong></td>
      <td><p>{skin_color}</p></td>
    </tr>
    <tr>
      <td><strong>Eye Color</strong></td>
      <td><p>{eye_color}</p></td>
    </tr>
    <tr>
      <td><strong>Birth year</strong></td>
      <td><p>{birth_year}</p></td>
    </tr>
    <tr>
      <td><strong>Gender</strong></td>
      <td><p>{gender}</p></td>
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

export default People;


