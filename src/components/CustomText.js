import { textContainer, textVariant2 } from "../utils/motion";
import { motion } from "framer-motion";

export const TypingText = ({ title, textStyles }) => {
  return (
    <motion.p
      variants={textContainer}
      className={`font-normal text-[40px] text-secondary-white ${textStyles}`}
    >
      {Array.from(title).map((letter, i) => {
        return (
          <motion.span variants={textVariant2} key={i}>
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        );
      })}
    </motion.p>
  );
};
