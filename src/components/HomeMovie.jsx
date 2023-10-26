import { useSelector } from "react-redux";
import Nav from "./Nav";

const HomeMovie = ({ movie }) => {
  const status = useSelector((state) => state.movie.status);
  const imgSrc = "https://image.tmdb.org/t/p/original/";
  // if (status === "fulfilled") console.log("fullfiled");
  // if (status === "loading") console.log("loading");
  return (
    <>
      {status === "fulfilled" && (
        <div
          className={`w-full h-screen bg-cover bg-no-repeat flex flex-col items-center justify-center relative  `}
          style={{ backgroundImage: `url(${imgSrc + movie.backdrop_path})` }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
          <Nav />
          <div className="flex flex-row z-40">
            <div className="space-y-10 ">
              <h1 className="text-8xl text-white max-w-2xl">{movie.original_title}</h1>
              <p className="max-w-xl text-sm text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                ducimus quod, voluptate esse nulla autem voluptas tempore eaque
                ea natus quis, exercitationem facilis possimus? Quis sapiente
                voluptate voluptatum laborum esse!
              </p>
              <div className="space-x-4 rounded-md ">
                <button className="rounded-lg bg-red-700 px-6 py-2 shadow-xl">
                  Watch Now
                </button>
                <button className="rounded-lg border bg-slate-500 px-6 py-2 shadow-xl">
                  Watch Trailer
                </button>
              </div>
            </div>
            <div>
              <img className="w-80" src={imgSrc + movie.poster_path} alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeMovie;
