import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row ">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={fadeIn("up", 0.2)}
              className="h2 xl:mt-12"
            >
              My Work <span className="text-accent"></span>
            </motion.h2>
          </div>
          <motion.div
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={fadeIn("down", 0.6)}
            className="w-full xl:max-w-[65%] mr-28"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
