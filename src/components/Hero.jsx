import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { AbstractCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flew-row items-start gap-5`}
      >
        <div className="flex flex-col jusify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#E3FA51]" />
          <div className="w-1 sm:h-80 h40 bg-gradient-to-b from-yellow-500" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, I'm <span className="text-[#E3FA51]">Michael</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a Full Stack Web Developer
          </p>
        </div>
      </div>

      <AbstractCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
