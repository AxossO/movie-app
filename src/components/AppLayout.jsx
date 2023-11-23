import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const AppLayout = () => {
  return (
    <>
      <div className="flex justify-center  items-center relative">
        <Nav />
        <Outlet />
      </div>
    </>
  );
};

export default AppLayout;
