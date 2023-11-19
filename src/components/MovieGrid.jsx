import { useState } from "react";
import OnHoverMovie from "./OnHoverMovie";

const MovieGrid = ({ movie }) => {
  const imgSrc = "https://image.tmdb.org/t/p/original/";
  const [ishovered, setIsHovered] = useState(false);
  return (
    <div className="hover:scale-110  duration-300 relative">
      <div className="">
        <img
          className=" rounded-2xl hover:rounded-[2rem] duration-300 relative  "
          src={imgSrc + movie.poster_path}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          alt=""
        ></img>
        {ishovered ? <OnHoverMovie movie={movie} /> : ""}
      </div>
    </div>
  );
};

export default MovieGrid;
