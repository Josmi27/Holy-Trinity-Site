import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header.jsx";
import Beliefs from "./pages/Beliefs.jsx";
import Schedule from "./pages/Schedule.jsx"
import Home from "./pages/Home.jsx";
import Giving from "./pages/Giving.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./footer.jsx"
import "../css/styles.css"

const App = () => {
    return (
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/beliefs" element={<Beliefs />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/giving" element={<Giving />} />
        </Routes>
        <br />
        <br />
        <Footer />
        </BrowserRouter>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
