import { useSelector } from "react-redux";

const HomeMovie = ({ movie, isActive }) => {
  const status = useSelector((state) => state.movie.status);
  const imgSrc = "https://image.tmdb.org/t/p/original/";
  // if (status === "fulfilled") console.log("fullfiled");
  // if (status === "loading") console.log("loading");
  return (
    <>
      {status === "fulfilled" && (
        <div
          className={`w-full flex items-center justify-center `}
        >
          <div className="space-y-10">
            <h1 className="text-8xl text-lime-800">{movie.original_title}</h1>
            <p className="max-w-xl text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              ducimus quod, voluptate esse nulla autem voluptas tempore eaque ea
              natus quis, exercitationem facilis possimus? Quis sapiente
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
            <img src={imgSrc + movie.backdrop_path} alt="" />
          </div>
        </div>
      )}
    </>
  );
};

export default HomeMovie;
