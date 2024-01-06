import { useState } from "react";
import OnHoverMovie from "./OnHoverMovie";
import { useNavigate } from "react-router-dom";

const MovieGrid = ({ movie }) => {
  const imgSrc = "https://image.tmdb.org/t/p/original/";
  const [ishovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMovieClick = () => {
    if (movie.original_title) navigate(`/movie/${movie.id}`);
    if (movie.original_name) navigate(`/tv/${movie.id}`);
  };
  return (
    <div
      className="hover:scale-110  duration-300 relative hover:rounded-[2rem] cursor-pointer "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => handleMovieClick()}
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
