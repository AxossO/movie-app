import HomeMovie from "../components/HomeMovie";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  popularMovies,
  popularSeries,
  topRatedMovies,
  topRatedSeries,
  upcomingMovie,
  verfiy,
} from "../../Api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import MovieGrid from "../components/MovieGrid";
import { useNavigate } from "react-router-dom";
import ScrollTop from "../components/ScrollTop";
import { breakPoint, fade, pageAnimation } from "../animation";
import Trailer from "../components/Trailer";

const Home = () => {
  const movie = useSelector((state) => state.movie.movie);
  const upcomingMoviee = useSelector((state) => state.movie.upcomingMovie);
  const popular = useSelector((state) => state.movie.pop.popular);
  const series = useSelector((state) => state.movie.pop.series);
  const topSeries = useSelector((state) => state.movie.topRated.topRatedSeries);
  const topMovies = useSelector((state) => state.movie.topRated.topRatedMovies);
  const [click, setClicked] = useState(false);
  const [clickedMovie, setClickedMovie] = useState(null);

  const trailerClicked = (movie) => {
    setClickedMovie(movie);
    setClicked(!click);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(verfiy());
    dispatch(upcomingMovie());
    dispatch(popularMovies());
    dispatch(popularSeries());
    dispatch(topRatedMovies());
    dispatch(topRatedSeries());
  }, []);
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="flex flex-col overflow-hidden relative w-full"
    >
      <div className=" flex-row h-full w-full flex mx-auto  overflow-hidden relative   ">
        <Swiper
          loop={true}
          navigation={true}
          modules={[Navigation, EffectFade, Pagination]}
          effect={"fade"}
          pagination={{
            clickable: true,
          }}
        >
          {movie.map((movie) => (
            <SwiperSlide key={movie.id} className="relative">
              <HomeMovie
                movie={movie}
                key={movie.id}
                setClicked={() => trailerClicked(movie)}
                click={click}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <div className="movie-grid mx-20 large:mx-10 ">
          <div className="text-xl my-8 text-white font-bold flex items-center justify-between">
            <h1 className="">Upcoming Movie</h1>
            <h2
              className="text-right cursor-pointer"
              onClick={() => navigate(`/home/${"upcoming-movies"}`)}
            >
              View More
            </h2>
          </div>

          <Swiper
            slidesPerView={"auto"}
            loop={true}
            draggable={true}
            spaceBetween={25}
            grabCursor={true}
            breakpoints={breakPoint}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            {upcomingMoviee.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieGrid movie={movie} key={movie.id} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div>
        <div className="movie-grid mx-20 large:mx-10">
          <div className="text-xl my-8 text-white font-bold flex items-center justify-between">
            <h1 className="">Popular Movie</h1>
            <h2
              className="text-right cursor-pointer"
              onClick={() => navigate(`/home/${"popular-movies"}`)}
            >
              View More
            </h2>
          </div>

          <Swiper
            slidesPerView={"auto"}
            loop={true}
            draggable={true}
            spaceBetween={25}
            grabCursor={true}
            breakpoints={breakPoint}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            {popular.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieGrid movie={movie} key={movie.id} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div>
        <div className="movie-grid mx-20 large:mx-10">
          <div className="text-xl my-8 text-white font-bold flex items-center justify-between">
            <h1 className="">Popular Series</h1>
            <h2
              className="text-right cursor-pointer"
              onClick={() => navigate(`/home/${"popular-series"}`)}
            >
              View More
            </h2>
          </div>

          <Swiper
            slidesPerView={"auto"}
            loop={true}
            draggable={true}
            spaceBetween={25}
            grabCursor={true}
            breakpoints={breakPoint}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            {series.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieGrid movie={movie} key={movie.id} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div>
        <div className="movie-grid mx-20 large:mx-10">
          <div className="text-xl my-8 text-white font-bold flex items-center justify-between">
            <h1 className="">Top Rated Movies</h1>
            <h2
              className="text-right cursor-pointer"
              onClick={() => navigate(`/home/${"top-rated-movies"}`)}
            >
              View More
            </h2>
          </div>

          <Swiper
            slidesPerView={"auto"}
            loop={true}
            draggable={true}
            spaceBetween={25}
            grabCursor={true}
            breakpoints={breakPoint}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            {topMovies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieGrid movie={movie} key={movie.id} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div>
        <div className="movie-grid mx-20 large:mx-10 ">
          <div className="text-xl my-8 text-white font-bold flex items-center justify-between">
            <h1 className="">Top Rated Series</h1>
            <h2
              className="text-right cursor-pointer"
              onClick={() => navigate(`/home/${"top-rated-series"}`)}
            >
              View More
            </h2>
          </div>

          <Swiper
            slidesPerView={"auto"}
            loop={true}
            draggable={true}
            spaceBetween={25}
            breakpoints={breakPoint}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            {topSeries.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieGrid movie={movie} key={movie.id} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {click && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-50"
          onClick={() => setClicked(false)}
        >
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Trailer movie={clickedMovie} />
          </div>
        </div>
      )}
      <ScrollTop />
    </motion.div>
  );
};

export default Home;
