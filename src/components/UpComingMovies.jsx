import { useDispatch, useSelector } from "react-redux";
import SingleUpcomingMovie from "./SingleUpcomingMovie";
import { useEffect, useState } from "react";
import { upcomingMovie } from "../../Api";
import { Link, useLocation } from "react-router-dom";

const UpComingMovies = () => {
  const upcomingMoviee = useSelector((state) => state.movie.upcomingMovie);
  const dispatch = useDispatch();
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const pageParam = parseInt(urlParams.get("page") || "1");

  const [currentIdx, setCurrentIdx] = useState(pageParam);

  useEffect(() => {
    const newPageParam = pageParam;
    setCurrentIdx(newPageParam);
  }, [urlParams]);
  useEffect(() => {
    if (currentIdx > 0) {
      dispatch(upcomingMovie(currentIdx));
    }
  }, [currentIdx, dispatch]);
  const idxhandler = (idx) => {
    setCurrentIdx((previdx) => previdx + idx);
  };
  return (
    <div className="min-h-screen w-full max-w-7xl mt-48 ">
      <div className="text-center text-white mb-10 text-3xl font-bold font-mono">
        Upcoming Movies
      </div>

      <div className=" w-full h-full grid gap-3 grid-cols-minmax-cols grid-rows-minmax-rows min-h-[180vh]  ">
        <SingleUpcomingMovie />
        {upcomingMoviee.map((movie) => (
          <SingleUpcomingMovie movie={movie} key={movie.id} id={movie.id} />
        ))}
      </div>
      <div className="flex gap-4 text-white items-center justify-center mt-8 cursor-pointer px-6">
        {currentIdx > 2 && (
          <Link to={`?page=${currentIdx - currentIdx + 1}`}>
            <div
              onClick={() =>
                idxhandler(currentIdx - currentIdx - currentIdx + 1)
              }
            >
              {currentIdx - currentIdx + 1}
            </div>
          </Link>
        )}
        {currentIdx > 1 && (
          <Link to={`?page=${currentIdx - 1}`}>
            <div onClick={() => idxhandler(-1)}>{currentIdx - 1}</div>
          </Link>
        )}
        <Link to={`?page=${currentIdx}`}>
          <div
            onClick={() => {
              idxhandler(0);
            }}
            className="shadow-2xl bg-red-600 px-2 rounded-md"
          >
            {currentIdx}
          </div>
        </Link>
        {/* {currentIdx > 1 && ()} */}
        <Link to={`?page=${currentIdx + 1}`}>
          <div
            onClick={() => {
              idxhandler(1);
            }}
          >
            {currentIdx + 1}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UpComingMovies;
