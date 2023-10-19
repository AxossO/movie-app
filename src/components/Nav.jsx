import logo from "../../data/logoa.png";
const Nav = () => {
  return (
    <>
      <nav className=" max-w-7xl  mx-auto flex justify-between items-center pt-8">
        <img src={logo} alt="" className="w-20 "></img>
        <div className="">
          <ul className="flex justify-center items-center space-x-6 ">
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
