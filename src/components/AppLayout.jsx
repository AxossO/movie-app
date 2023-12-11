import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <>
      <div className="flex overflow-hidden flex-col justify-center  items-center relative">
        <Nav />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
