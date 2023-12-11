import { useDispatch, useSelector } from "react-redux";
import SingleUpcomingMovie from "./SingleUpcomingMovie";
import { useEffect, useState } from "react";
import { upcomingMovie } from "../../Api";

const UpComingMovies = () => {
  const upcomingMoviee = useSelector((state) => state.movie.upcomingMovie);
  const dispatch = useDispatch();
  const [currentIdx, setCurrentIdx] = useState(1);
  useEffect(() => {
    dispatch(upcomingMovie(currentIdx));
    console.log(currentIdx);
  }, [currentIdx, dispatch]);
  const idxhandler = (idx) => {
    setCurrentIdx((previdx) => previdx + idx);
  };
  return (
    <div className="min-h-screen w-full max-w-7xl mt-48 ">
      <div className="text-center mb-10 text-3xl font-bold font-mono">
        Upcoming Movies
      </div>

      <div className=" w-full h-full grid gap-3 grid-cols-minmax-cols grid-rows-minmax-rows min-h-[180vh]  ">
        <SingleUpcomingMovie />
        {upcomingMoviee.map((movie) => (
          <SingleUpcomingMovie movie={movie} key={movie.id} />
        ))}
      </div>
      <div className="flex gap-4 text-white items-center justify-center mt-8 cursor-pointer px-6">
        {currentIdx > 2 && (
          <div
            onClick={() => idxhandler(currentIdx - currentIdx - currentIdx + 1)}
          >
            {currentIdx - currentIdx + 1}
          </div>
        )}
        {currentIdx > 1 && (
          <div onClick={() => idxhandler(-1)}>{currentIdx - 1}</div>
        )}
        <div
          onClick={() => {
            idxhandler(0);
          }}
          className="shadow-2xl bg-red-600 px-2 rounded-md"
        >
          {currentIdx}
        </div>
        {/* {currentIdx > 1 && ()} */}
        <div
          onClick={() => {
            idxhandler(1);
          }}
        >
          {currentIdx + 1}
        </div>
      </div>
    </div>
  );
};

export default UpComingMovies;
