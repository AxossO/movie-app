import HomeMovie from "../components/HomeMovie";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verfiy } from "../../Api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Nav from "../components/Nav";

const Home = () => {
  const movie = useSelector((state) => state.movie.movie);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(verfiy());
  }, []);
  return (
    <div className="  flex flex-col overflow-hidden relative">
      <div className=" flex-row h-full w-full flex mx-auto  overflow-hidden relative   ">
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
