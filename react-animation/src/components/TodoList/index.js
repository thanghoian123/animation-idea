import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const initialTodo = [
  {
    id: 'dc58d7e1-83ae-4850-aa1c-c304fe4c8e34',
    name:
      'Dextroamphetamine Saccharate, Amphetamine Aspartate, Dextroamphetamine Sulfate and Amphetamine Sulfate',
    note: 'Contusion of abdominal wall',
  },
  {
    id: 'e3e1f4aa-8ce1-47b6-82c6-29a73fa653cf',
    name: 'Fluorescein Sodium and Benoxinate Hydrochloride',
    note: 'Moderate laceration of heart with hemopericardium',
  },
  {
    id: '08505716-ba94-44cc-baeb-ea41949e316d',
    name: 'Terapie Anti-Fungal',
    note: 'Unsp injury of musc/fasc/tend triceps, right arm, init',
  },
  {
    id: 'bb3b291e-5f69-41f1-87ed-6b0ccbe278c3',
    name: 'Head and Shoulders',
    note: 'Bitten by rat, sequela',
  },
  {
    id: '876206ff-748e-445d-9f8d-1e87025df5b0',
    name: 'CVS Pharmacy Anti-itch',
    note: 'Complete loss of teeth due to trauma',
  },
  {
    id: 'a35e443b-e0c6-4754-8073-cd32adb3155f',
    name: 'Midodrine Hydrochloride',
    note: 'Advrs effect of antihyperlip and antiarterio drugs, sequela',
  },
  {
    id: '5909b46c-1173-42ae-b605-05b4d289b063',
    name: 'acetaminophen',
    note: 'Burn of third degree of right ear',
  },
  {
    id: '448035f5-3d7d-46c5-817e-392a65834a28',
    name: 'meloxicam',
    note: 'Nondisp fx of body of hamate bone, unsp wrs, 7thD',
  },
  {
    id: '31aaf00c-ed71-4e43-b024-c72ead0f2c52',
    name: 'Up and Up Nicotine',
    note: 'Toxic effect of halogenated insecticides, assault, subs',
  },
  {
    id: '78b363c5-173e-49fb-bce8-2179c848e299',
    name: 'LEVOXYL',
    note: 'Puncture wound with foreign body of unsp upper arm, sequela',
  },
];
function TodoList(props) {
  const [todos, setTodos] = useState(initialTodo);
  const handleClick = item => {
    const cloneTodos = [...todos];
    const index = cloneTodos.findIndex(i => i.id === item.id);
    cloneTodos.splice(index, 1);
    console.log(
      '🚀 ~ file: index.js:49 ~ handleClick ~ cloneTodos',
      cloneTodos
    );
    setTodos(cloneTodos);
  };
  console.log('🚀 ~ file: index.js:49 ~ handleClick ~ cloneTodos', todos);

  return (
    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4 w-full">
        <div className="flex w-full">
          <div className="relative w-full lg:max-w-sm flex-[1]">
            <select className="w-full p-2.5 h-[42px] text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
              <option>ReactJS </option>
              <option>Laravel</option>
              <option>React with</option>
              <option>React Wit</option>
            </select>
          </div>
          <div className="relative w-ful h-full flex-[2] pl-2">
            <input
              type="search"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg  border-2 border-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
          </div>
        </div>
      </div>
      <div className="">
        <ul className="h-full ">
          <AnimatePresence mode={'popLayout'}>
            {todos.map((i, index) => (
              <motion.li
                layout
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring' }}
                key={i.id}
                className="py-3 sm:py-4 h-fit cursor-pointer"
                onClick={() => handleClick(i)}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {i.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {i.note}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
