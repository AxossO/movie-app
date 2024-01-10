import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const { pathname, search } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    window.history.scrollRestoration = "manual";
  }, [pathname, search]);
  return null;
};
export default ScrollTop;
