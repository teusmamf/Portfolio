import React from "react";
import { Link } from "react-router-dom";
import { useSpring,animated, useInView } from "react-spring";


export default function Navbar(){
    const [ref, inView1] = useInView({
        triggerOnce: true, 
      });

    const textAnimation = useSpring({
        opacity: inView1 ? 1 : 0,
        fontSize: inView1 ? '25px' : '22px', 
        config: { duration: 500 },
      });

    return (
        <nav>
           <animated.div ref={ref} style={textAnimation} className="container_ul_navbar">
            <ul className="ul_navbar">
              <li  className="list_navbar" >
                <Link  className="links_navbar" to="/Projects">Projects</Link>   
              </li>
              <li className="list_navbar" >
               <Link className="links_navbar" to="/History">History</Link>
              </li> 
              <li className="list_navbar" >
                <Link className="links_navbar" to="/Habilities">Resumé</Link>
              </li>
              <li className="list_navbar" >
                <Link  className="links_navbar"to="/">Home</Link>
              </li>
            </ul> 
            </animated.div>
        </nav>
    )
}