import HomeMovie from "../components/HomeMovie";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verfiy } from "../../Api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Home = () => {
  const movie = useSelector((state) => state.movie.movie);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(verfiy());
  }, []);
  return (
    <div className=" flex-row overflow-hidden flex px-4 ">
      <div className="relative flex-row flex mx-auto max-w-7xl overflow-hidden  ">
        <Swiper loop={true}>
          {movie.map((movie) => (
            <SwiperSlide key={movie.id}>
              <HomeMovie movie={movie} key={movie.id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
