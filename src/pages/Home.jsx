import HomeMovie from "../components/HomeMovie";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { upcomingMovie, verfiy } from "../../Api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import MovieGrid from "../components/MovieGrid";

const Home = () => {
  const movie = useSelector((state) => state.movie.movie);
  const upcomingMoviee = useSelector((state) => state.movie.upcomingMovie);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(verfiy());
    dispatch(upcomingMovie());
  }, []);
  return (
    <div className="  flex flex-col overflow-hidden relative">
      <div className=" flex-row h-full w-full flex mx-auto  overflow-hidden relative   ">
        <Swiper loop={true} draggable={true}>
          {movie.map((movie) => (
            <SwiperSlide key={movie.id}>
              <HomeMovie movie={movie} key={movie.id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <h1>Upcoming Movie</h1>

        <Swiper slidesPerView={6} loop={true} draggable={true}>
          {upcomingMoviee.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieGrid movie={movie} key={movie.id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
