import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Header() {
    return (
            <AppBar position="static" color="primary" sx={{ backgroundColor: 'blue' }}>
      <Toolbar>
        <Typography variant="h6" component="div">
          Holy Trinity (Visible Test)
        </Typography>
      </Toolbar>
    </AppBar>
    )
}
