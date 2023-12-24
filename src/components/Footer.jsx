import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" min-h-[10vh] w-full  mt-14 bg-[#0E0D0F] p-8 z-40 ">
      <div className="flex justify-between items-center">
        <div className="text-white">
          Movie<span className="text-red-600">Theater</span>
        </div>
        <div className="">
          <ul className="flex justify-center items-center space-x-6 z-50 text-white font-bold  text-2xl">
            <NavLink to={"/home"}>
              <li>Home</li>
            </NavLink>{" "}
            <li>Movies</li>
            <li>Tv Series</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
