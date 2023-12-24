import { NavLink } from "react-router-dom";
import logo from "../../data/logoa.png";
const Nav = () => {
  return (
    <>
      <nav className=" max-w-7xl z-20  w-full mx-auto flex justify-between items-center pt-8 absolute top-0 ">
        <NavLink to={"/home"}>
          <img src={logo} alt="" className="w-20 z-50 "></img>
        </NavLink>
        <div className="">
          <ul className="flex justify-center items-center space-x-6 z-50 text-white font-bold   text-2xl">
            <NavLink to={"/home"} >
              <li>Home</li>
            </NavLink>
            <li>Movies</li>
            <li>Tv Series</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
