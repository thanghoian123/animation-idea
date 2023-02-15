import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { BsCheck } from 'react-icons/bs';
const Step = ({ step, currentStep }) => {
  const status = useMemo(
    () =>
      step === currentStep
        ? 'active'
        : step > currentStep
        ? 'inactive'
        : 'completed',
    [currentStep, step]
  );

  const className =
    status === 'active'
      ? 'w-9 h-9 rounded-full border-[#6096B4] border-2 bg-white text-[#6096B4] flex justify-center items-center cursor-pointer'
      : status === 'completed'
      ? 'w-9 h-9 rounded-full border-[#6096B4] border-2 bg-[#6096B4] text-white flex justify-center items-center cursor-pointer'
      : 'w-9 h-9 rounded-full border-[#BDCDD6] border-2 bg-white text-gray-300 flex justify-center items-center cursor-pointer';

  return (
    <motion.div
      animate={{
        borderColor: status === 'inactive' ? '#BDCDD6' : '#6096B4',
        color:
          status === 'inactive'
            ? '#BDCDD6'
            : status === 'completed'
            ? '#fff'
            : '#6096B4',
        backgroundColor: status === 'completed' ? '#6096B4' : '#fff',
      }}
      className={className}
      transition={{ duration: 0.5 }}
    >
      {status === 'completed' ? (
        <BsCheck size={'30px'} className=" text-white" />
      ) : (
        step
      )}
    </motion.div>
  );
};

export default Step;
