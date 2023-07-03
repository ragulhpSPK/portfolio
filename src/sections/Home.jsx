import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Home() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 600]);
  return (
    <div className="flex justify-between w-[80vw]">
      <motion.div
        className="text-2xl flex flex-col gap-10 transition-all duration-[2s] ease-linear"
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1, damping: 10, type: "spring" }}
        style={{ x }}
      >
        <p className="w-[45%] leading-[50px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </p>
      </motion.div>
      <motion.div
        className="text-2xl flex flex-col gap-10 w-[45%] transition-all duration-[2s] ease-linear"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5, damping: 10, type: "tween" }}
        style={{ x: x2 }}
      >
        <p>John</p>
        <p>London,tricky palace,8344</p>
        <p>+93 227728363</p>
      </motion.div>
    </div>
  );
}

export default Home;
