import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header.jsx";
import Beliefs from "./pages/Beliefs.jsx";
import Home from "./pages/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../css/styles.css"

const App = () => {
    return (
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/beliefs" element={<Beliefs />} />
        </Routes>
        </BrowserRouter>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
