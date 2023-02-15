import { motion } from 'framer-motion';
import React, { useMemo, useState } from 'react';
import Step from './Step';
const stepMap = [1, 2, 3, 4];

function StepForm(props) {
  const [currentStep, setCurrentStep] = useState(0);
  const maxStep = Math.max(...stepMap);
  const minStep = Math.min(...stepMap);

  const handleAdd = () => {
    if (currentStep <= maxStep) {
      setCurrentStep(pre => pre + 1);
    }
  };

  const handleMinus = () => {
    if (currentStep >= minStep) {
      setCurrentStep(pre => pre - 1);
    }
  };

  return (
    <div className="w-full max-w-sm border border-gray-200 rounded-lg bg-slate-100 p-6  ">
      <div className="step-group flex justify-between mb-4 ">
        {stepMap.map(i => (
          <Step step={i} key={i} currentStep={currentStep} />
        ))}
      </div>

      <div role="status" className="max-w-sm animate-pulse mb-4">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
        <span className="sr-only">Loading...</span>
      </div>

      <div className="action-group flex justify-between">
        <motion.button
          type="button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleMinus}
        >
          Back
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="button"
          className={`${
            currentStep > maxStep && 'cursor-not-allowed'
          } text-white bg-[#6096B4] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2`}
          onClick={handleAdd}
        >
          Continue
        </motion.button>
      </div>
    </div>
  );
}

export default StepForm;
