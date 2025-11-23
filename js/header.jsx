import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HolyTrinityLogo from "../img/HolyTrinityLogo.jpg";

export default function Header() {
  return (
    <>
    <AppBar position="static" sx={{ backgroundColor: "#6a1b9a" }}>
      <Toolbar
      sx={{ justifyContent: 'center'}} 
      >
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", 
      }}
    >
            <img src={HolyTrinityLogo} width="50px" />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  2100 Vine Street Baltimore, MD 21223
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Sunday Morning Worship Service @ 10:45 AM
        </Typography>
         </Box>
      </Toolbar>
    </AppBar>
    <br />
    <br />
    </>
  );
}
