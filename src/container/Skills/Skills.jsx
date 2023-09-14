import React from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../Wrapper";
import reactIcon from "../../assets/reactLogo.svg";
import htmlIcon from "../../assets/html5.svg";
import reduxIcon from "../../assets/redux.svg";
import jsIcon from "../../assets/javascript.svg";
import typescriptIcon from "../../assets/typescript.svg";
import cssIcon from "../../assets/css3.svg";
import nestIcon from "../../assets/nest.svg";

import "./Skills.scss";

const Skills = () => {
  const skillData = [
    {
      name: "ReactJs",
      icon: reactIcon,
    },
    {
      name: "HTML5",
      icon: htmlIcon,
    },
    {
      name: "Redux",
      icon: reduxIcon,
    },
    {
      name: "JavaScript",
      icon: jsIcon,
    },
    {
      name: "TypeScript",
      icon: typescriptIcon,
    },
    {
      name: "CSS3",
      icon: cssIcon,
    },
    {
      name: "NestJs",
      icon: nestIcon,
    },
  ];

  const experienceData = [
    {
      year: "2021",
      works: [
        {
          name: "Web Developer Intern",
          company: "LiVert",
          description: "Tech: ReactJS, HTML, CSS",
        },
      ],
    },
    {
      year: "2022",
      works: [
        {
          name: "Member of Technical Staff",
          company: "Roost AI",
          description: "Tech: ReactJS, HTML, CSS, JavaScript",
        },
      ],
    },
    {
      year: "2023",
      works: [
        {
          name: "Member of Technical Staff",
          company: "Roost AI",
          description: "Tech: ReactJS, HTML, CSS, JavaScript, TypeScript, NestJs",
        },
      ],
    },
  ];

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skillData.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className="app__flex" style={{ backgroundColor: "white" }}>
                <img src={skill.icon} alt={skill.name} />
              </div>
              <br />
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experienceData.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                      <p className="p-text">{work.description}</p>
                    </motion.div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "Skills",
  "app__primarybg"
);
