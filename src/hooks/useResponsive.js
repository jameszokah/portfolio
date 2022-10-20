import { useState, useEffect, useCallback } from "react";


export const useResponsive = () => {
    const [width, setWidth] = useState(0);

    const updateWindowResize = useCallback(
      () => {
        const windowWidth = window.innerWidth;
        setWidth(windowWidth);
      },
      [],
    )
    

    useEffect(() => {

        updateWindowResize();
        window.addEventListener('resize', updateWindowResize)
        return () => {
            window.removeEventListener('resize', updateWindowResize);
        }
    },[updateWindowResize]);
  return {width};
    
}
