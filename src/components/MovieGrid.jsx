import { useState } from "react";
import OnHoverMovie from "./OnHoverMovie";

const MovieGrid = ({ movie }) => {
  const imgSrc = "https://image.tmdb.org/t/p/original/";
  const [ishovered, setIsHovered] = useState(false);
  return (
    <div
      className="hover:scale-110  duration-300 relative hover:rounded-[2rem] "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="">
        <img
          className=" rounded-2xl  duration-300 "
          src={imgSrc + movie.poster_path}
          alt=""
        ></img>
        {ishovered ? <OnHoverMovie movie={movie} /> : ""}
      </div>
    </div>
  );
};

export default MovieGrid;
