import { useEffect } from "react";
import { useLocation, useNavigation } from "react-router-dom";

const ScrollTop = () => {
  const { pathname, search } = useLocation();
  const navigation = useNavigation();
  console.log(navigation);
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname, search]);
  return null;
};
export default ScrollTop;
