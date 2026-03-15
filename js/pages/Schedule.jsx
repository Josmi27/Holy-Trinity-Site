import React from "react"
import { Box } from "@mui/material"

export default function Schedule() {
    return (
        <Box
            sx={{
                minHeight: "80vh",
                display: "flex",
                flexDirection: "column",
            }}
        > 
        <h1>Service Schedule</h1>
            <div class="service-schedule">
                <h2>Holy Communion</h2>
                <span class="service-schedule-rightside-content"><h2>Every 4th Sunday</h2></span>
            </div>
            <div class="service-schedule">
                <h2>Prayer | Bible Church School or Bible Study</h2>
                <span class="service-schedule-rightside-content"><h2>Every Wednesday</h2></span>
            </div>
            <b><span class="service-schedule-rightside-content">6:45 PM / 7:00 PM</span></b>
            <div class="service-schedule">
                <h2>Hour of Power</h2>
                <span class="service-schedule-rightside-content"><h2>Every 2nd Friday</h2></span>
            </div>
            <b><span class="service-schedule-rightside-content">6:30 PM - 7:30 PM</span></b> 
        </Box>
    )
}