import {useState,useEffect,useCallback} from "react";

//  custom hook to capture scroll direction

export const useScrollDirection = ()=>{
    const [y,
        setY] = useState(document.scrollingElement.scrollHeight);
      const [scrollDirection,
        setScrollDirection] = useState("you have not scrolled yet");
    
      const handleNavigation = useCallback((e) => {
    
        if (y > window.scrollY) {
          setScrollDirection("up");
          console.log("scrolling up");
        } else if (y < window.scrollY) {
          setScrollDirection("down");
          console.log("scrolling down");
        }
        setY(window.scrollY)
      }, [y]);
    
      useEffect(() => {
    
        window.addEventListener("scroll", handleNavigation);
    
        return () => {
          window.removeEventListener("scroll", handleNavigation);
        };
      }, [handleNavigation]);
      return {
        scrollDirection
      }
}