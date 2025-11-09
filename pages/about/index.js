import React, { useState } from "react";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa";

import { SiNextdotjs, SiFramer } from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          { id: 1, component: <FaHtml5 /> },
          { id: 2, component: <FaCss3 /> },
          { id: 3, component: <FaJs /> },
          { id: 4, component: <FaReact /> },
          { id: 5, component: <SiNextdotjs /> },
          { id: 6, component: <SiFramer /> },
        ],
      },
      {
        title: "Git & Linux",
        icons: [
          {
            id: 1,
            component: <FaGitAlt />,
          },
          { id: 2, component: <FaLinux /> },
        ],
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: " React Accelerator - TBC IT ACADEMY",
        stage: "2024-2025",
      },
      {
        title: "Information Technology - BTU University",
        stage: "2022-2026",
      },
      {
        title: "Node JS Development Intership - LEVERX",
        stage: "2025",
      },
    ],
  },
];
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
        exit="hidden"
        animate="show"
        initial="hidden"
        variants={fadeIn("right", 0.2)}
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            className="h2"
            exit="hidden"
            animate="show"
            initial="hidden"
            variants={fadeIn("right", 0.2)}
          >
            Frontend Software Engineer
          </motion.h2>
          <motion.p
            exit="hidden"
            animate="show"
            initial="hidden"
            variants={fadeIn("right", 0.4)}
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Creative and detail-oriented Frontend Developer specializing in
            building responsive, user-friendly web applications. Proficient in
            modern frameworks like React, with expertise in UI/UX design,
            performance optimization, and accessibility. Passionate about
            crafting seamless digital experiences through clean, efficient code.
          </motion.p>
          <motion.div
            exit="hidden"
            animate="show"
            initial="hidden"
            variants={fadeIn("right", 0.6)}
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={7} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Completed Projects
                </div>
                <div></div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          exit="hidden"
          animate="show"
          initial="hidden"
          variants={fadeIn("right", 0.4)}
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index == itemIndex &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {item.icons?.map((icon, iconIndex) => (
                    <div key={iconIndex} className="text-2xl text-white">
                      {icon.component}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
