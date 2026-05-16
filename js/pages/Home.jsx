import React from "react";
import HolyTrinityPastor from "../../img/HolyTrinityPastor.jpg";
import "../../css/styles.css"; 
import { Box, Stack } from "@mui/material"

export default function Home() {
  return (
    <div>
      <Box
        sx={{
            display: "flex",
            flexDirection: "column",
        }}
      >
      <Stack direction="row">
        <div>      
          <img
        src={HolyTrinityPastor}
        width="250"
        height="250"
        alt="Holy Trinity Pastor"
      />
      <h4 style={{ textAlign: "left", marginLeft:'30px'}}>Elder C. Ann Smith (Pastor)</h4>
      </div>
      <h4 style={{ marginLeft:'60px'}}>
        <em>Elder C. Ann Smith</em>, began pastoring in July 2003, Harvest Christian Worship Center, United
        Holy Church of America, Inc. The Church in 2019, was renamed Holy Trinity, UHCOA.
        She holds two Associate Degrees, and is currently enrolled in the United Holy Church
        Leadership Training Program. Elder Smith is the wife of Minister David Smith, mother of two adult children (M. Kirin and
        Joshua), a grandmother and great grandmother.<br /><br />
        <em>Passion</em>: To continue to be used as an instrument of God.<br /><br />
        <em>Motto</em>: Everybody needs periodic self examination. (2 Cor. 13:5)</h4>
      </Stack>
      <br />
      
      <h1 style={{ color: "#f3d14a", textAlign: "center" }}>
        Welcome to Holy Trinity United Holy Church of America, inc.
      </h1>

      <h3 style={{ color: "#4f0084", textAlign: "center" }}>
        MOTTO: A church who believes anyone can be transformed by hearing the Word of God.
      </h3>

      <h4 style={{ color: "#4f0084" }}>
        Romans 10:17: "Faith comes by hearing and hearing by the Word of God."
        <br />
        <br />
        Hebrews 4:12: "The Word of God is living, life-changing, and dynamic as it works in us."
        <br />
        <br />
        Ezekial 36:26: "God's Word transforms lives."
      </h4>
      </Box>
      <br />
      <hr />
      <br />
      <Box
        sx={{
            display: "flex",
            flexDirection: "column",
        }}
      >
      <h2 style={{ color: "#f3d14a"}}>
        CHURCH MISSION STATEMENT
      </h2>
      <h3 style={{ textAlign: "center"}}>To study, teach, preach and share the Word of God.<br /><br />
      To honor and exalt God in every aspect of our lives
      through studying His Word and applying it.<br /><br />
      To follow Christ and share our faith with others.</h3>
      </Box>
      <br />
      <hr />
      <br />
      <Box
        sx={{
            minHeight: "34.5vh",
            display: "flex",
            flexDirection: "column",
        }}
      >
      <h2 style={{ color: "#f3d14a"}}>
        VISION
      </h2>
      <h3 style={{ textAlign: "center"}}>To be a Gospel Centered Church (a ministry that is
      focused on Jesus and partnering with Him in His mission 
      to make disciples) <br /><br />whose goal is to honor the God of the
      Holy Bible in all we do. <br /></h3>
      <h4 style={{ textAlign: "center"}}>
      ~Elder C. Ann Smith <br />
      Pastor, Holy Trinity UHCA, Inc.
      </h4>
      </Box>
    </div>
  );
}
