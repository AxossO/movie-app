import { useState } from "react";
import OnHoverMovie from "./OnHoverMovie";
import { useNavigate } from "react-router-dom";

const SingleUpcomingMovie = ({ movie, id }) => {
  const imgSrc = "https://image.tmdb.org/t/p/original/";
  const [ishovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const handleMovieClick = () => {
    if (movie.original_title) navigate(`/movie/${movie.id}`);
    if (movie.original_name) navigate(`/tv/${movie.id}`);
  };

  return (
    <>
      {movie && (
        <div
          onClick={() => handleMovieClick()}
          className=" h-full relative "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={` bg-cover bg-no-repeat w-full h-full rounded-2xl relative cursor-pointer`}
            style={{ backgroundImage: `url(${imgSrc + movie.poster_path})` }}
          >
            <div> {ishovered ? <OnHoverMovie movie={movie} /> : ""}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleUpcomingMovie;
