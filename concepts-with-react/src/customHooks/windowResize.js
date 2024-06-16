import { useState, useEffect } from "react";

const useWindowResize = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function onWindowResize() {
    setWindowWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", onWindowResize);
    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, [windowWidth]);
  return {
    windowWidth
  }
};

export default useWindowResize;
