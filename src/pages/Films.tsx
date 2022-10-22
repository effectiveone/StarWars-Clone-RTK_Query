import React,{ useEffect, useState } from "react";

import { useGetFilmsQuery } from "../services/starWarsApi";
import "../App.css";
import Spinner from "../components/Spinner";
import Layout from "../Layout"
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Divider from '@mui/material/Divider';

function Films() {
  const [value, setValue] = useState("");


  const {
    data: Films = [],
    isLoading,
    isSuccess,
    isError,
    error
  }  = useGetFilmsQuery("a");



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
      }}
    >


     
   
        {Films?.results?.map((item: any, index: any) => (
            <Card sx={{ display: 'flex', width: "100%", backgroundColor: "#282727", margin: "20px 0 20px 0" }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                <span style={{color: "white"}}>{item.title}</span>
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                 
                  <span style={{color: "white"}}> {item.opening_crawl}</span>
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
 <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", paddingTop: "50px", paddingBottom: "20px" }}>
<span><b>Director:</b>{"  "} {item.director}</span>
<span><b>Producer:</b>{"  "} {item.producer}</span>
<span><b>Year:</b>{"  "} {item.release_date}</span>
 </div>
        </Box>
            </Box>
            <Divider orientation="vertical" variant="middle" flexItem />
            <CardMedia
              component="img"
              sx={{ width: 300 }}
              image="https://lumiere-a.akamaihd.net/v1/images/rogueone_onesheeta_8a255456.jpeg?region=0%2C77%2C1688%2C849&width=600"
              alt="Live from space album cover"
            />
          </Card>
        ))}
</div>
</Layout>
</>
  );
}

export default Films;

