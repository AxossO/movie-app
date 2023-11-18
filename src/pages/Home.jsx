import HomeMovie from "../components/HomeMovie";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { upcomingMovie, verfiy } from "../../Api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

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
            <SwiperSlide key={movie.id}>
              <HomeMovie movie={movie} key={movie.id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <div className="movie-grid mx-20">
          <div className="text-xl my-8 text-white font-bold flex items-center justify-between">
            <h1 className="">Upcoming Movie</h1>
            <h1 className="text-right">View More</h1>
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
    </div>
  );
};

export default Home;
