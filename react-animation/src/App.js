import './App.css';
import { motion } from 'framer-motion';
import Navigation from './components/navigation';
import DragTransition from './components/DragTransition';
import StepForm from './components/StepForm';
import TodoList from './components/TodoList';
const navs = [1, 2, 3, 4, 5];
function App() {
  return (
    <motion.div
      className="w-full min-h-screen"
      animate={{
        backgroundImage: [
          'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)',
          'linear-gradient(to right top, #051937, #152e5c, #284583, #3f5cad, #5874d8)',
          'linear-gradient(to right top, #300537, #670e3f, #972c3b, #b7582e, #c38a23)',
          'linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)',
        ],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    >
      <Navigation navs={navs} />

      <motion.div>
        <div>
          <DragTransition />
        </div>

        <div className="flex justify-center items-center flex-col">
          {/* <div className="mb-6 w-96">
            <StepForm />
          </div> */}
          <div className="mb-6 h-fit">
            <TodoList />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default App;
