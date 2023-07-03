import React, { useState, useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer } from "antd";
import { motion, useScroll, useTime, useTransform } from "framer-motion";
import { Opacity } from "@mui/icons-material";
import Home from "../sections/Home";
import background from "../assets/bg.jpg";
import {
  navVarients,
  staggerContainer,
  textContainer,
  textVariant2,
} from "../utils/motion";
import { TypingText } from "./CustomText";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, 600]);

  const time = useTime();
  const rotate = useTransform(time, [0, 10000], [0, 360], { clamp: false });

  return (
    <motion.div
      className="pt-5 h-screen flex flex-col gap-10 text-white bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${background})`,
      }}
      id="/"
    >
      <div>
        <motion.div
          className="sm:flex justify-around pl-[20vw] pr-[5vw] hidden transition-all duration-1000 ease-linear"
          variants={navVarients}
          initial="hidden"
          whileInView="show"
        >
          <motion.div>home</motion.div>
          <a href="Skills">Home</a>
          <div>Home</div>
          <div>Home</div>
          <div>Home</div>
        </motion.div>
        <div className="w-[100vw]  pt-10">
          <motion.p
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="text-3xl text-center transition-all duration-1000 ease-linear"
          >
            <TypingText
              title="Welcome to Our Website"
              textStyles="text-center"
            />
          </motion.p>
        </div>
        <div
          className="flex items-end justify-end pr-10  sm:hidden"
          onClick={() => {
            setOpen(true);
          }}
        >
          <MenuIcon />
        </div>
      </div>

      <div className="flex items-center h-full  justify-center">
        <Home />
      </div>

      <Drawer
        open={open}
        width={200}
        onClose={() => setOpen(false)}
        className="!bg-white/70 backdrop-blur-lg"
      >
        <div className="flex flex-col gap-6">
          <div className="border-b-2 border-b-slate-200 pb-2">home</div>
          <div className="border-b-2 border-b-slate-200 pb-2">home</div>
          <div className="border-b-2 border-b-slate-200 pb-2">home</div>
          <div className="border-b-2 border-b-slate-200 pb-2">home</div>
        </div>
      </Drawer>
    </motion.div>
  );
}

export default Navbar;
