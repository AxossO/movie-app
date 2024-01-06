import { useSelector } from "react-redux";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

const HomeMovie = ({ movie }) => {
  const status = useSelector((state) => state.movie.status);
  const imgSrc = "https://image.tmdb.org/t/p/original/";
  // if (status === "fulfilled") console.log("fullfiled");
  // if (status === "loading") console.log("loading");
  const navigate = useNavigate();

  const handleMovieClick = () => {
    navigate(`/movie/${movie.id}`);
  };
  return (
    <>
      {status === "fulfilled" && (
        <div
          className={`w-full h-screen bg-cover bg-no-repeat flex flex-col items-center justify-center relative  `}
          style={{ backgroundImage: `url(${imgSrc + movie.backdrop_path})` }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
          <Nav />
          <div className="flex flex-row items-center space-x-5  z-40 max-w-7xl w-full  mb-20">
            <div className="space-y-10 ">
              <h2 className="text-8xl text-white max-w-2xl font-bold">
                {movie.original_title}
              </h2>

              <p className="max-w-2xl text-lg text-white font-bold ">
                {movie.overview}
                <h4 className="text-white font-bold mt-2">
                  Release Date :{" "}
                  <span className="text-red-700">{movie.release_date}</span>
                </h4>
              </p>

              <div className="space-x-4 rounded-md ">
                <button
                  className="rounded-2xl text-2xl bg-red-600 text-white  shadow-[0px_0px_7px_6px_#670b0b]  px-8 py-2 -"
                  onClick={() => handleMovieClick()}
                >
                  Watch Now
                </button>
                <button className="rounded-2xl text-2xl border text-white px-8 py-2 shadow-xl">
                  Watch Trailer
                </button>
              </div>
            </div>
            <div>
              <img
                className="w-96 shadow-[0px_0px_7px_6px_#101010]  rounded-2xl"
                src={imgSrc + movie.poster_path}
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeMovie;
