import { useRef, useState } from "react";
import OnHoverMovie from "./OnHoverMovie";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { fade } from "../animation";
const MovieGrid = ({ movie }) => {
  const imgSrc = "https://image.tmdb.org/t/p/original/";
  const [ishovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "1px 0px 0px 0px" });

  const handleMovieClick = () => {
    if (movie.original_title) navigate(`/movie-app/movie/${movie.id}`);
    if (movie.original_name) navigate(`/movie-app/tv/${movie.id}`);
  };
  return (
    <motion.div
      variants={fade}
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
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
    </motion.div>
  );
};

export default MovieGrid;
