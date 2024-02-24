import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { video } from "../../Api";
import { Swiper, SwiperSlide } from "swiper/react";
import YouTube from "react-youtube";

const Trailer = ({ movie }) => {
  const id = movie.id;
  const endpoint = "movie";
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.movie.movieDetails.videos);

  useEffect(() => {
    dispatch(video({ id, endpoint }));
    console.log(movie.id);
  }, [dispatch, id, endpoint]);
  return (
    <div className="">
      {videos && (
        <Swiper
          className="max-w-5xl h-[70vh] w-full medium:px-2 medium:max-w-4xl  medium:h-[70vh] semiMedium:h-[60vh] semiMedium:max-w-3xl small:h-[50vh] superSmall:h-[40vh] small:max-w-md superSmall:max-w-sm "
          spaceBetween={10}
          initialSlide={1}
        >
          <div className="flex  ">
            {videos.map((video) => (
              <div
                className="flex justify-center items-center w-full  "
                key={video.id}
              >
                {
                  (video.site === "YouTube",
                  video.type === "Trailer" && (
                    <SwiperSlide>
                      <YouTube
                        className="w-full flex justify-center items-center  video h-full  "
                        videoId={video.key}
                        key={video.id}
                      ></YouTube>
                    </SwiperSlide>
                  ))
                }
              </div>
            ))}
          </div>
        </Swiper>
      )}
    </div>
  );
};

export default Trailer;
