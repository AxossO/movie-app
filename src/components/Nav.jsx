import { NavLink } from "react-router-dom";
import logo from "../../data/logoa.png";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMovie } from "../../Api";
import SingleUpcomingMovie from "./SingleUpcomingMovie";

const Nav = () => {
  const [searchClicker, setSearchClicker] = useState(false);
  const [inputText, setInputText] = useState();
  const searchName = useSelector((state) => state.movie.searchName);

  const dispatch = useDispatch();
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  useEffect(() => {
    if (inputText !== "") {
      dispatch(searchMovie(inputText));
    }
  }, [inputText]);
  useEffect(() => {
    if (searchClicker) {
      document.body.style.overflow = "hidden";
      document.body.style.scrollbarWidth = "0.2rem";
      document.body.style.scrollbarColor = "#66c5fc rgb(48, 48, 48)";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [searchClicker]);
  return (
    <>
      {searchClicker && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto">
          <div className=" mx-auto flex  items-center flex-col w-full ">
            <div className=" flex flex-col  w-full ">
              <div className=" flex-row bg-[#100F10] z-[70] w-full mx-auto flex  items-center py-8   top-0 large:max-w-6xl large:px-4  ">
                <div
                  className="text-white  ml-4 cursor-pointer font-anta"
                  onClick={() => {
                    setSearchClicker(!searchClicker);
                    setInputText("");
                  }}
                >
                  Cancel
                </div>
                <div className="w-full mx-8 ">
                  <input
                    className="w-full   rounded-xl cursor-pointer bg-[#292929] py-2 outline-none text-white px-2 font-anta "
                    value={inputText}
                    onChange={inputTextHandler}
                    type="text"
                  ></input>
                </div>
              </div>
              {inputText !== undefined && inputText !== "" && (
                <div className=" flex items-center justify-center w-full mx-auto flex-wrap">
                  <div className=" bg-[#100F10]  w-full  mx-auto px-4 ">
                    <div className="   ">
                      {searchName && searchName.length > 0 && (
                        <div
                          className="w-full grid gap-2 grid-cols-SemiSmall-cols min-h-screen grid-rows-2 semiMedium:grid-rows-2 semiMedium:grid-cols-small-cols superSmall:grid-cols-smally-cols superSmall:grid-rows-3  "
                          onClick={() => setSearchClicker(false)}
                        >
                          {searchName.map((movie) => (
                            <div
                              key={movie.id}
                              className="h-full"
                              onClick={() => setInputText("")}
                            >
                              <SingleUpcomingMovie
                                movie={movie}
                                key={movie.id}
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <nav
        className={`max-w-7xl z-20 w-full mx-auto flex justify-between items-center pt-8 absolute top-0 large:max-w-6xl large:px-4 ${
          searchClicker ? "hidden" : ""
        }`}
      >
        <NavLink to={"/movie-app/home"}>
          <img src={logo} alt="" className="w-20 z-50 "></img>
        </NavLink>
        <div className="font-anta">
          <ul className="flex justify-center items-center space-x-6 z-50 text-white font-bold text-2xl superSmall:text-lg ">
            <NavLink to={"/movie-app/home"}>
              <li>Home</li>
            </NavLink>
            <NavLink to={"/movie-app/home/popular-movies"}>
              <li>Movies</li>
            </NavLink>
            <NavLink to={"/movie-app/home/popular-series"}>
              <li>Tv Series</li>
            </NavLink>
            <li
              className="cursor-pointer"
              onClick={() => setSearchClicker(!searchClicker)}
            >
              <AiOutlineSearch />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
