import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3,faJs,faReact , faNodeJs,faPhp,faJava,faPython } from "@fortawesome/free-brands-svg-icons";
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import logoSQl from "../assets/mysql.png"




export default function Skills(){
    const [ref, inView] = useInView({
        triggerOnce: true, // Para ativar a animação apenas uma vez quando a div se tornar visível
      });

    return (
        <div>
            <h1 className="resume_title">Front-end Skills</h1>
            <div className="front-end-container">
            <motion.div
                        className="container_text_skills"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
                        transition={{ duration: 0.8 }}
>
                    <ul ref={ref} className="container_text_skills">
                        <li className="skills">HTML</li>
                        <li className="skills">CSS</li>
                        <li className="skills">Javascript</li>
                        <li className="skills">ReactJS</li>
                        
                    </ul>

                    </motion.div>

                    <motion.div className="icons_skills_container" ref={ref} 
                     initial={{ opacity: 0, x: -100 }}
                     animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
                     transition={{ duration: 0.8 }}>
                    <FontAwesomeIcon icon={faHtml5} 
                      className="icons_resume_html"/>
                    <FontAwesomeIcon icon={faCss3} className="icons_resume_css"/>
                    <FontAwesomeIcon icon={faJs} className="icons_resume_js"/>
                    <FontAwesomeIcon icon={faReact} className="icons_resume_react"/>
                    </motion.div>

            </div>

            <h1 className="resume_title">Back-end Skills</h1>
            <div className="front-end-container">
            <motion.div
                        className="container_text_skills"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
                        transition={{ duration: 0.8 }}
>
                    <ul ref={ref} className="container_text_skills">
                        <li className="skills">NodeJs</li>
                        <li className="skills">PHP</li>
                        <li className="skills">Java</li>
                        <li className="skills">Mysql</li>
                        <li className="skills">Python</li>
                    </ul>

                    </motion.div>
                <motion.div
                className="container_icons_skills_back_end"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
                transition={{ duration: 0.8 }}
                >
                    <FontAwesomeIcon icon={faNodeJs} className="icons_resume_node"/>
                    <FontAwesomeIcon icon={faPhp} className="icons_resume_react"/>     
                    <FontAwesomeIcon icon={faJava} className="icons_resume_html"/>   
                    <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 448 512" fill="#ffffff" ><path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"/></svg>
                    <FontAwesomeIcon icon={faPython} className="icons_resume_react"/>    


                </motion.div>



            </div>
    </div>
       
    )
}