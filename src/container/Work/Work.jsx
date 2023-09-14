import React from "react";
import { motion } from "framer-motion";
import { AiFillEye } from "react-icons/ai";
import { AppWrap, MotionWrap } from "../../Wrapper";
import portfolioIcon from '../../assets/portfolio.png'
import youTubeIcon from '../../assets/youTube.png'
import fitnessIcon from '../../assets/fitness.png'

import "./Work.scss";

const Work = () => {
  const animateCard = ({ y: 0, opacity: 1 });

  const data = [
    { url: portfolioIcon , title: "My PortFolio Website", link: "https://ashutosh-kapoor-portfolio.netlify.app/", description: "This Project has been done to show case my skills as a developer to the audience." },
    { url: youTubeIcon, title: "YouTube Clone", link: "https://stupendous-haupia-936c4c.netlify.app/", description: "This Project has been done to have features similar to YouTube where we can have streamless video streaming." },
    { url: fitnessIcon, title: "Fitness App", link: "https://ashutoshfitnessapp.netlify.app", description: "A fitness web-app personalized for user to find the perfect exercises for them and suggest similar YouTube videos." },
  ];

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {data.map((data, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={(data.url)} alt={data.title} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={data.link} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.5 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{data.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {data.description}
              </p>
              {/* <div className="app__work-tag app__flex">
                <p className="p-text">{data.tag[0]}</p>
              </div> */}
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Work, "app__works"), "Work", "app__whitebg");
