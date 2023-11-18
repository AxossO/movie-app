import { useState } from "react";

const MovieGrid = ({ movie }) => {
  const imgSrc = "https://image.tmdb.org/t/p/original/";
  const [ishovered, setIsHovered] = useState(false);
  return (
    <div className="hover:scale-110  duration-300 relative">
      <div className="">
        <div
          className={` ${
            ishovered ? "block" : "block"
          }bg-black opacity-25 absolute w-full h-full `}
          onMouseEnter={() => setIsHovered(!ishovered)}
          onMouseLeave={() => setIsHovered(ishovered)}
        ></div>
        <img
          className=" rounded-2xl hover:rounded-[2rem] duration-300  "
          src={imgSrc + movie.poster_path}
          alt=""
        ></img>
      </div>
    </div>
  );
};

export default MovieGrid;
