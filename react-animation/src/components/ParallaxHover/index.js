import { motion, useAnimation } from "framer-motion";
import React, { useRef } from "react";

function ParallaxHover(props) {
    const animateValue = useAnimation()
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    const moveX = clientX - window.innerWidth / 2;
    const moveY = clientY - window.innerHeight / 2;
    const offsetFactor = 40;
    animateValue.start((number = 1)=>({
        x: moveX *number/ offsetFactor,
        y: moveY *number / offsetFactor,
      }));
  };
  const ref = useRef(null);
//   const { x, y } = useMouseTrack(ref);
//   console.log("🚀 ~ file: index.js:18 ~ ParallaxHover ~ y", y);
//   console.log("🚀 ~ file: index.js:18 ~ ParallaxHover ~ x", x);

  return (
    <motion.div
      ref={ref}
      className="bg-white w-full rounded-lg flex justify-center items-center p-6 min-h-[900px] relative"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        name="circle1"
        className=" top-12 left-5 absolute w-[180px] h-[180px] rounded-full bg-slate-400"
        animate={animateValue}
        custom={10}
      />
      <motion.div
        name="circle2"
        className=" bottom-8 left-8 absolute w-[120px] h-[120px] rounded-full  bg-red-300 "
        animate={animateValue}
        custom={2}


      />
      <motion.div
        name="circle3"
        className=" top-6 right-3 absolute w-[100px] h-[100px] rounded-full blur-lg bg-orange-300 "
        animate={animateValue}
        custom={8}

      />
      <motion.div
        name="circle4"
        className=" bottom-13 right-20 absolute w-[220px] h-[220px] rounded-full bg-yellow-300 "
        animate={animateValue}
        custom={5}


      />
      <motion.div
        name="circle5"
        className=" top-15 right-30 absolute w-[160px] h-[160px] rounded-full blur-md  bg-blue-300 "
        animate={animateValue}
        custom={1}

      />
    </motion.div>
  );
}

export default ParallaxHover;
