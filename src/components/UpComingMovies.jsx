import { useDispatch, useSelector } from "react-redux";
import SingleUpcomingMovie from "./SingleUpcomingMovie";
import { useEffect } from "react";
import { upcomingMovie } from "../../Api";

const UpComingMovies = () => {
  const upcomingMoviee = useSelector((state) => state.movie.upcomingMovie);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(upcomingMovie());
  }, []);
  return (
    <div className="h-screen w-full max-w-7xl mt-80 ">
      <div className="text-center mb-10 text-3xl font-bold font-mono">
        Upcoming Movies
      </div>

      <div className=" w-full h-full grid gap-3 grid-cols-minmax-cols grid-rows-minmax-rows min-h-full  ">
        <SingleUpcomingMovie />
        {upcomingMoviee.map((movie) => (
          <SingleUpcomingMovie movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default UpComingMovies;
