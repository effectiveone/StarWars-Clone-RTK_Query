import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useUpdateCharMutation } from "../services/starWarsApi";
import Layout from "../Layout"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Spinner from "../components/Spinner";


const initialChar ={
  "name": "Luke Skywalker",
	"height": "172",
	"mass": "77",
	"hair_color": "blond",
	"skin_color": "fair",
	"eye_color": "blue",
	"birth_year": "19BBY",
	"gender": "male",
}

const Char: React.FC = () => {
    const [updateChar, { isLoading, data }] = useUpdateCharMutation()
  const [char, setChar] = useState(initialChar)
    const { id } = useParams<{ id: any }>()

    useEffect(() => {
      if (id) {
        
        updateChar({ id }).unwrap().then(fulfilled => {setChar(fulfilled)
        console.log("char", char)
        console.log("fulfilled", fulfilled)
        })

      }
  
    }, [id]);
    // if (isLoading) {
    //     return <Spinner />;
    //   }
    


const {name, hair_color, skin_color, eye_color, birth_year, gender}: any = char

    return(
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


     
   
           <Card sx={{ display: 'flex', width: "100%", backgroundColor: "#282727", margin: "20px 0 20px 0" }} >
            <Box sx={{ display: 'grid', gridTemplateColumns: '2fr 3fr' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                <span style={{color: "white"}}>{name}</span>
                </Typography>
                <table>
                    <thead><tr><td>Property</td><td>value</td></tr></thead>
                    <tbody>
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
    </tr></tbody>
  </table>
        </CardContent>
        </Box>
          
            <Divider orientation="vertical" variant="middle" flexItem />
            <CardMedia
              component="img"
              sx={{ width: 300 }}
              image="https://lumiere-a.akamaihd.net/v1/images/rogueone_onesheeta_8a255456.jpeg?region=0%2C77%2C1688%2C849&width=600"
              alt="Live from space album cover"
            />
          </Card>
         
</div>
</Layout>
</>
    )
} 

export default Char