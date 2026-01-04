import React from "react";
import HolyTrinityPastor from "../../img/HolyTrinityPastor.jpg";
import "../../css/styles.css"; 
import { Box } from "@mui/material"

export default function Home() {
  return (
    <div>
        <Box
            sx={{
                minHeight: "80vh",
                display: "flex",
                flexDirection: "column",
            }}
        > 
      <img
        src={HolyTrinityPastor}
        width="250"
        height="250"
        alt="Holy Trinity Pastor"
      />
      <h4 style={{ textAlign: "left", marginLeft:'30px'}}>Elder C. Ann Smith (Pastor)</h4>

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
    </div>
  );
}
