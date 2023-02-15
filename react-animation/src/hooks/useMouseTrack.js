import React, { useEffect, useState } from "react";

function useMouseTrack(ref) {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  useEffect(() => {
    // if (!ref.current) return;
    const handlePointerMove = (mouseEvent) => {
      const { clientX, clientY, x,y } = mouseEvent;
    //   const element = ref.current;
    //   const x = clientX - element.offsetLeft - element.offsetWidth / 2;
    //   const y = clientY - element.offsetTop - element.offsetHeight / 2;
      setPointer({ x, y });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);
  return pointer;
}

export default useMouseTrack;
