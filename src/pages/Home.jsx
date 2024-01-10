import HomeMovie from "../components/HomeMovie";
import { useEffect } from "react";
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
import { pageAnimation } from "../animation";

const Home = () => {
  const movie = useSelector((state) => state.movie.movie);
  const upcomingMoviee = useSelector((state) => state.movie.upcomingMovie);
  const popular = useSelector((state) => state.movie.pop.popular);
  const series = useSelector((state) => state.movie.pop.series);
  const topSeries = useSelector((state) => state.movie.topRated.topRatedSeries);
  const topMovies = useSelector((state) => state.movie.topRated.topRatedMovies);
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
      <ScrollTop />
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
              <HomeMovie movie={movie} key={movie.id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <div className="movie-grid mx-20 ">
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
        <div className="movie-grid mx-20 ">
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
        <div className="movie-grid mx-20 ">
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
        <div className="movie-grid mx-20 ">
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
        <div className="movie-grid mx-20 ">
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
    </motion.div>
  );
};

export default Home;
