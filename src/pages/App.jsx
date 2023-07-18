import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatorRoutes from "../components/animator_routes";
import Navbar from "../components/navbar";



export default function App(){

    return (
   

      <Router>
  
          <AnimatorRoutes/>
      </Router> 

    )
}