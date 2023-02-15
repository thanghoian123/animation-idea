import { motion } from 'framer-motion';
import React from 'react';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

function MenuItem({ item, index }) {
  const style = { border: `2px solid ${colors[index]}` };

  return (
    <motion.li
      className='menu-item'
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div className="icon-placeholder bg-slate-50" style={style}></motion.div>
      <motion.div className="text-placeholder" style={style}>
        {item}
      </motion.div>
    </motion.li>
  );
}

export default MenuItem;
