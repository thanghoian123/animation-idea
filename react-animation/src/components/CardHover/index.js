import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import useMouseTrack from "../../hooks/useMouseTrack";

function CardHover(props) {
  const imgAnimation = useAnimation();

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = clientX - window.innerWidth / 2;
    const moveY = clientY - window.innerHeight / 2;
    const offsetFactor = 15;
    imgAnimation.start({
      x: moveX / offsetFactor,
      y: moveY / offsetFactor,
    });
  };

  return (
    <motion.div className="bg-white w-full min-h-[300px] rounded-lg flex justify-center items-center p-6">
      <motion.div className="  w-1/2 p-2 relative">
        <motion.img
          animate={imgAnimation}
          onMouseMove={handleMouseMove}
          src="https://images.unsplash.com/photo-1643581278970-413ac3900826?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80"
          className=" object-cover w-full h-full rounded-lg z-20  shadow-2xl top-0"
        />
      </motion.div>

      <motion.div className="w-1/2 p-2">
        <p className="text-sm font-normal text-gray-900 dark:text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </motion.div>
    </motion.div>
  );
}

export default CardHover;
