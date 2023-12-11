import { useState } from "react";
import OnHoverMovie from "./OnHoverMovie";

const SingleUpcomingMovie = ({ movie }) => {
  const imgSrc = "https://image.tmdb.org/t/p/original/";
  const [ishovered, setIsHovered] = useState(false);

  return (
    <>
      {movie && (
        <div
          className=" h-full relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={` bg-cover bg-no-repeat w-full h-full rounded-2xl relative`}
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
