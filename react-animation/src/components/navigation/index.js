import { motion, useCycle } from 'framer-motion';
import React, { useRef } from 'react';
import MenuItem from './MenuItem';
import { MenuToggle } from './MenuToggle';

const sideBar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 30,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const ulVariant = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

function Navigation({ navs }) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const ref = useRef(null);
  const height = ref?.current?.offsetHeight;
  return (
    <motion.nav
      className="w-full h-20"
      animate={isOpen ? 'open' : 'closed'}
      initial={false}
      custom={{ height }}
      ref={ref}
    >
      <motion.div className="background z-10" variants={sideBar} />
      <motion.ul className='menu z-20' variants={ulVariant}>
        {(navs || []).map((i, index) => (
          <MenuItem i={i} key={index} index={index} />
        ))}
      </motion.ul>

      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
}

export default Navigation;
