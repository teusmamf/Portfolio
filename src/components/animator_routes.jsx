import React from "react";
import { BrowserRouter as Router , Routes , Route,useLocation} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/Home";
import Habilities from "../pages/Habilities";
import History from "../pages/History";
import Projects from "../pages/Projects";



export default function AnimatorRoutes(){
    const location = useLocation();
    return (
    <AnimatePresence>  

    <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Habilities" element={<Habilities/>}></Route>
        <Route path="/History" element={<History/>}></Route>
        <Route path="/Projects" element={<Projects/>}></Route>
    </Routes>

    </AnimatePresence>
    )
}