//Libraries
import { useEffect } from 'react';

//Util function for scrolling to top of page on refresh
const ScrollTop = () => {
  useEffect(() => {
    window.scroll({ top: 0, left: 0 });
  }, []);
  return null;
};

export default ScrollTop;
