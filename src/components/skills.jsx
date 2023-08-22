import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3,faJs,faReact , faNodeJs,faPhp,faJava,faPython } from "@fortawesome/free-brands-svg-icons";
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
const PDF_FILE_URL = "https://master--mateus-martins.netlify.app/CVDevUpdated.pdf"




export default function Skills(){
    const [ref, inView] = useInView({
        triggerOnce: true, // Para ativar a animação apenas uma vez quando a div se tornar visível
      });

      const downloadFIleatURL = (url) => {
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute("download", 'Resume');
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      }

    return (
        <div>
            <h1 className="resume_title">Front-end Skills</h1>
            <button onClick={() => {
                downloadFIleatURL(PDF_FILE_URL);
            }} className="btn_download_resume">
                
                <strong>Download My Resume</strong>
                    <div id="container-stars">
                      <div id="stars"></div>
                    </div>

                    <div id="glow">
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
            </button>
            <div className="front-end-container">
            <motion.div
                        className="container_text_skills"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
                        transition={{ duration: 0.8 }}
>

                    <p className="skills_text">
                    I have experience with HTML , JS ans CSS these are technologies that I know since I started to learn technology<br></br>
                    I'm also familiar with API consumption and sorting data in front-end, and after learn a big part from js I've done some projects in ReactJs
                   </p>
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
                    <p className="skills_text">
                    In back-end , I have experience with node.js from my work and php I have done projects in college and projects alone also<br></br>
                    For java I've done some college projects and studied on my own <br></br>and in my beggining of my carreer I've done a tons of sql scripts to generate reports and fix our database structure in my work<br></br>
                    for python, I started to let my work with sql automated and I gained I lot of experience with python
                   </p>

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
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon_db" height="3em" viewBox="0 0 448 512" fill="#ffffff" ><path className="icon_db" d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"/></svg>
                    <FontAwesomeIcon icon={faPython} className="icons_resume_react"/>    


                </motion.div>



            </div>
    </div>
       
    )
}