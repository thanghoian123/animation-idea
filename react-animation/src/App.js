import "./App.css";
import { motion } from "framer-motion";
import Navigation from "./components/navigation";
import DragTransition from "./components/DragTransition";
import StepForm from "./components/StepForm";
import TodoList from "./components/TodoList";
import PathDraw from "./components/PathDraw";
import useMouseTrack from "./hooks/useMouseTrack";
import { useRef } from "react";
import CardHover from "./components/CardHover";
const navs = [1, 2, 3, 4, 5];
function App() {
  const ref = useRef(null);
  const { x, y } = useMouseTrack(ref);
  console.log(x, y);

  return (
    <motion.div
      ref={ref}
      className="w-full min-h-screen"
      animate={{
        backgroundImage: [
          "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
          "linear-gradient(to right top, #051937, #152e5c, #284583, #3f5cad, #5874d8)",
          "linear-gradient(to right top, #300537, #670e3f, #972c3b, #b7582e, #c38a23)",
          "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
        ],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <Navigation navs={navs} />

      <motion.div>
        <div>
          <DragTransition />
        </div>
        <div className="p-6 grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2">
          <div className="mb-6 w-96">
            <StepForm />
          </div>
          <div className="mb-6 h-fit">
            <TodoList />
          </div>
          <div className="mb-6 h-fit col-span-2">
            <CardHover />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default App;
