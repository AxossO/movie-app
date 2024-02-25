import { useSelector } from "react-redux";
// import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fade, titleAnime } from "../animation";
import { useEffect, useState } from "react";
const HomeMovie = ({ movie, setClicked }) => {
  const status = useSelector((state) => state.movie.status);
  const imgSrc = "https://image.tmdb.org/t/p/original/";

  // if (status === "fulfilled") console.log("fullfiled");
  // if (status === "loading") console.log("loading");
  const navigate = useNavigate();
  const [letters, setLetters] = useState(false);

  useEffect(() => {
    if (movie.original_title.length >= 40) {
      setLetters(true);
    }
    // console.log(movie.id);
  }, [movie.original_title]);
  const handleMovieClick = () => {
    navigate(`/movie-app/movie/${movie.id}`);
  };

  return (
    <>
      {status === "fulfilled" && (
        <motion.div
          className={`w-full h-screen bg-cover bg-no-repeat flex flex-col items-center justify-center relative   `}
          style={{ backgroundImage: `url(${imgSrc + movie.backdrop_path})` }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
          {/* <Nav /> */}
          <div className="flex flex-row items-center space-x-5  z-40 max-w-7xl w-full  mb-20 mx-auto  medium:flex-col-reverse average:mx-auto justify-center mt-8 superSmall:mt-20">
            <motion.div className="space-y-10 medium:space-y-5 medium:px-8 medium:mx-auto ">
              <motion.h2
                variants={titleAnime}
                initial="hidden"
                animate="show"
                className={`${
                  letters ? "text-7xl" : "text-8xl"
                } text-white max-w-2xl font-bold medium:text-3xl medium:text-center medium:mt-2 small:text-2xl"`}
              >
                {movie.original_title}
              </motion.h2>

              <motion.p
                variants={titleAnime}
                initial="hidden"
                animate="show"
                className="max-w-2xl text-lg text-white font-bold medium:text-lg medium:text-center  small:text-sm"
              >
                {movie.overview}
                <motion.h4
                  variants={titleAnime}
                  className="text-white font-bold mt-2 medium:text-center"
                >
                  Release Date :{" "}
                  <motion.span
                    variants={fade}
                    initial="hidden"
                    animate="show"
                    className="text-red-700"
                  >
                    {movie.release_date}
                  </motion.span>
                </motion.h4>
              </motion.p>

              <div className="space-x-4 rounded-md medium:text-center superSmall:flex">
                <motion.button
                  variants={fade}
                  initial="hidden"
                  animate="show"
                  className="rounded-2xl text-2xl bg-red-600 text-white  shadow-[0px_0px_7px_6px_#670b0b] px-8 py-2 small:text-lg"
                  onClick={() => handleMovieClick()}
                >
                  Watch Now
                </motion.button>
                <motion.button
                  variants={fade}
                  initial="hidden"
                  animate="show"
                  className="rounded-2xl text-2xl border text-white px-8 py-2 shadow-xl small:text-lg"
                  onClick={() => setClicked()}
                >
                  Watch Trailer
                </motion.button>
              </div>
            </motion.div>
            <div>
              <img
                className="w-96 shadow-[0px_0px_7px_6px_#101010]  rounded-2xl medium:w-56 "
                src={imgSrc + movie.poster_path}
                alt=""
              />
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default HomeMovie;
