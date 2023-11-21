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
    <div className="mt-80 grid grid-cols-5 w-full h-full">
      <SingleUpcomingMovie />
      {upcomingMoviee.map((movie) => (
        <SingleUpcomingMovie movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default UpComingMovies;
