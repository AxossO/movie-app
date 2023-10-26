import logo from "../../data/logoa.png";
const Nav = () => {
  return (
    <>
      <nav className=" max-w-7xl  w-full mx-auto flex justify-between items-center pt-8 absolute top-0 ">
        <img src={logo} alt="" className="w-20 z-50"></img>
        <div className="">
          <ul className="flex justify-center items-center space-x-6 z-50 text-white">
            <li>Home</li>
            <li>Movies</li>
            <li>Tv Series</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
