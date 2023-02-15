import { useEffect, useState } from "react";

function useMouseTrack(ref) {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  useEffect(() => {
    if (!ref.current) return;
    const handlePointerMove = (mouseEvent) => {
      const { clientX, clientY } = mouseEvent;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      // console.log("🚀 ~ file: useMouseTrack.js:9 ~ handlePointerMove ~ clientY", clientY)
      

      // const element = ref.current;
      // console.log("🚀 ~ file: useMouseTrack.js:15 ~ handlePointerMove ~ offsetTop", element.offsetTop)
      // console.log("🚀 ~ file: useMouseTrack.js:15 ~ handlePointerMove ~ offsetHeight", element.offsetHeight)
      
      // const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      // const y = clientY - element.offsetTop - element.offsetHeight / 2;
      setPointer({ x: moveX, y: moveY });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);
  return pointer;
}

export default useMouseTrack;
