import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={fadeIn("up", 0.2)}
              className="h2 xl:mt-8"
            >
              My services <span className="text-accent"></span>
            </motion.h2>
            <motion.p
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={fadeIn("up", 0.4)}
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              We offer expert frontend development services, specializing in
              creating visually appealing, responsive, and user-friendly
              websites and web applications. Our team leverages the latest
              technologies, such as React to build dynamic
              and interactive interfaces that enhance user experiences. 
            </motion.p>
          </div>
          <motion.div
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={fadeIn("down", 0.6)}
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
