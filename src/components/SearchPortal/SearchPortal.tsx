import React, {useState, useEffect} from "react";
import { Card, CardMedia, Grid, CardContent, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link , useNavigate} from "react-router-dom";
import { useGetSearchMutation } from "../../services/starWarsApi";



const SearchPortal = () => {
  const navigate = useNavigate()
    const [resultsDataFetching, setResultsDataFetching] =  useState([])
    const [getSearch, { isLoading, data }] = useGetSearchMutation({
        fixedCacheKey: 'shared-update-post',
      })

      useEffect(()=>{
        setResultsDataFetching(data?.results)
      },[data, getSearch])

      console.log("resultsDataFetching", resultsDataFetching)

      return (
    <div style={{  width: "300px",
    position: "fixed",
  top: "120px",
    right: "10px",

    background: "rgba(57, 55, 72, 0.22)",
    zIndex: 30,
    overflow: "scroll"}}>
<div style={{ color: "white"}}>
{resultsDataFetching?.map(({name, url}:any, index: number) => {console.log("nameFrom", name)
const r = /\d+/g;
const peopleID = r.exec(url)

    return(
        <React.Fragment key={index}>
        <p onClick={()=> navigate(`/people/${peopleID}`)}>{name}</p>
        </React.Fragment>
    )})}
      

</div>
</div>
  );
};

export default SearchPortal;

