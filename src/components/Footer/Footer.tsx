import React from 'react';
import "./Footer.style.css";
import vader from "../../assets/vader.jpg"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <div style={{ backgroundImage:   `url(${vader})`,
backgroundPosition: "center", height: "300px",
backgroundRepeat: "no-repeat", backgroundColor: "black",
display: "flex",
flexDirection: "column",
justifyContent: "flex-end", 
alignItems: "center",
 color: "white",
 gap: "10px"
}}>
<div className="row">FOLLOW STAR WARS:</div>
<div className="row">      <TwitterIcon/>
              <InstagramIcon/>
              <FacebookIcon/>
              <YouTubeIcon/></div>
<div className="row">TM  © Lucasfilm Ltd. All Rights Reserved</div>
<div className="row">{pages.map((page, i) => (<><span className="page" style={{color: "white"}}>{page} {i < page.length - 1 ? "|" : ""}</span>   
</>))}</div>
<div className="row">Do Not Sell My Personal Information</div>
</div>
  )
}

export default Footer

const pages = ["Terms of Use", "Additional ContentInformation", "Privacy Policy", "Children’s Online Privacy", "Policy Your California Privacy Rights",  "Star Wars at shopDisney", "Star Wars Helpdesk", "Interest-Based Ads"]