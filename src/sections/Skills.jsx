import React from "react";
import skill from "../assets/skill.png";
import { TypingText } from "../components/CustomText";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

function Skills() {
  return (
    <div
      className="h-screen text-white w-[80vw] flex pt-28 justify-between m-auto"
      id="skill"
    >
      <div>
        <h1 className="text-2xl tracking-wider pb-[4vh]">
          <motion.p
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="text-3xl text-center transition-all duration-1000 ease-linear"
          >
            <TypingText title="Topics" textStyles="text-start" />
          </motion.p>
        </h1>
        <motion.div
          className="pt-5"
          variants={fadeIn("right", "tween", 0.5, 1)}
          initial="hidden"
          whileInView="show"
        >
          <ol className="grid grid-cols-3 gap-x-[16vw] gap-y-[12vh] list-disc text-xl">
            <li>HTML</li>
            <li>HTML</li>
            <li>HTML</li>
            <li>HTML</li>
            <li>HTML</li>
            <li>HTML</li>
            <li>HTML</li>
            <li>HTML</li>
            <li>HTML</li>
            <li>HTML</li>
            <li>HTML</li>
            <li>HTML</li>
            <li>HTML</li>
            <li>HTML</li>
            <li>HTML</li>
          </ol>
        </motion.div>
      </div>
      <motion.div
        className="pt-[15vh] transition-all duration-[1s] ease-linear"
        variants={{
          hidden: {
            x: 200,
            rotate: 90,
          },
          show: {
            x: 0,
            rotate: 0,
            transition: {
              type: "spring",
              duration: 1,
              delay: 0.5,
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <img src={skill} alt="skill" />
      </motion.div>
    </div>
  );
}

export default Skills;
