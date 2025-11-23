import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <>
    <AppBar position="relative" sx={{ backgroundColor: "#6a1b9a" }}>
        <Toolbar>
        <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left", 
        }}
        >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "left" }}>
            Join Us For Service On Zoom:
            <br />
                  
            <a href="https://us06web.zoom.us/j/7570891993?pwd=Mnd5TTlRNEs1SklMZE1RajBZejY0Zz09" target="_blank" style={{
                color: "gold"
            }}>     
            https://us06web.zoom.us/j/7570891993?pwd=Mnd5TTlRNEs1SklMZE1RajBZejY0Zz09
            </a>
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Meeting ID: 757 089 1993
        </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Password: e6nLkB
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        You are welcome!
        </Typography>
        </Box>
        <iframe
        width="150"
        height="150"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.8391779152567!2d-76.61397788462447!3d39.31322287942315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c81b3bea2aa4f3%3A0x3f0f9be65a7735f8!2s2100%20Vine%20St%2C%20Baltimore%2C%20MD%2021223!5e0!3m2!1sen!2sus!4v1698160052994!5m2!1sen!2sus"
        sx={{
            alignItems: "right"
        }}
        >
        </iframe>
      </Toolbar>
    </AppBar>
    </>
  );
}