import { useState,useEffect } from "react";


const usePopoverDimensions =  (divref)=>{
console.log(divref?.current?.offsetWidth)
    const [distanceFromTop, setDistanceFromTop] = useState(0);
    const [distanceFromLeft, setDistanceFromLeft] = useState(0);
    const [popoverWidth, setPopoverWidth] = useState(0);
    useEffect(() => {
      setDistanceFromTop(divref?.current?.offsetTop);
      setDistanceFromLeft(divref?.current?.offsetLeft);
      setPopoverWidth(divref?.current?.offsetWidth);
    }, [distanceFromTop, distanceFromLeft]);

    // this margin-top is used to position the popover content,useful for all devices just below the input component
    const marginTop = (distanceFromTop * 30) / 100 + 160;
    const marginLeft = (distanceFromLeft * 50) / 100 + 100;
    const width = popoverWidth;
    return {
        marginTop,
        marginLeft,
        width
    }
}

export default usePopoverDimensions;