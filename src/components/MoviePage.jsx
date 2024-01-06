import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cast, image, movieId, video } from "../../Api";
import { useLocation, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
const MoviePage = () => {
  const movie = useSelector((state) => state.movie.movieDetails.listOfId);
  const movieCast = useSelector((state) => state.movie.movieDetails.casts);
  const videos = useSelector((state) => state.movie.movieDetails.videos);
  const movieImage = useSelector((state) => state.movie.movieDetails.images);
  const imgSrc = "https://image.tmdb.org/t/p/original/";
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = useParams();
  useEffect(() => {
    const endpoint = location.pathname.includes("/tv/") ? "tv" : "movie";
    dispatch(movieId({ id, endpoint }));
    dispatch(cast({ id, endpoint }));
    dispatch(video({ id, endpoint }));
    dispatch(image({ id, endpoint }));
  }, [dispatch, id]);

  return (
    <>
      {movie && (
        <div className="w-full">
          <div
            className={` w-full h-screen bg-cover bg-no-repeat flex flex-col items-center justify-center relative`}
            style={{ backgroundImage: `url(${imgSrc + movie.backdrop_path})` }}
          >
            <div className="absolute w-full h-full   inset-0 bg-gradient-to-t from-[#0D0C0D]  to-transparent "></div>
            <div className="absolute bg-gradient-to-b inset-0 from-[#0E0E0E] to-transparent via-black top-1/2  w-full h-full opacity-90"></div>
            <div className="z-30 flex flex-row gap-5 mt-20">
              <div className="">
                <img
                  className=" max-w-sm h-full rounded-2xl  "
                  src={imgSrc + movie.poster_path}
                  alt=""
                />
              </div>
              <div className="space-y-5">
                <div className="text-7xl text-white max-w-2xl font-bold">
                  {movie.original_title}
                </div>
                <div className="">
                  {movie.status === "Released" && (
                    <span className=" text-lg  text-white px-2 font-bold ">
                      <span className="text-2xl text-[#E10907]">Status: </span>
                      Released
                    </span>
                  )}
                </div>

                {movie.genres && (
                  <div className="flex gap-5">
                    {movie.genres.map((genre) => (
                      <div
                        className="text-white bg-[#E10907]  rounded-lg  px-4 py-1"
                        key={genre.id}
                      >
                        {genre.name}
                      </div>
                    ))}
                  </div>
                )}
                <p className="max-w-2xl text-lg text-[#eee] font-bold">
                  {movie.overview}
                </p>
                <div className="relative text-white">
                  <div className="red-line relative">Cast</div>
                  <div className="relative top-4 ">
                    {movieCast && (
                      <div className="flex gap-3 relative ">
                        {movieCast.map((cast) => (
                          <div key={cast.id} className=" relative ">
                            <img
                              className={`w-32 flex relative`}
                              src={`${imgSrc + cast.profile_path}`}
                            />
                            <div className="absolute bottom-0  w-full">
                              <div className=" bg-black bg-opacity-70 h-10 relative">
                                <div className=" text-white text-sm p-2 text-left  max-w-xs bottom-0 absolute font-normal">
                                  {cast.name.split(" ").slice(0, 2).join(" ")}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" main-section-container divider">
            <div className=" red-line w-full mb-8">Videos</div>

            {videos && (
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={true}
                className="max-w-7xl h-[80vh] px-8 w-full"
                spaceBetween={10}
                loop={true}
                grabCursor={true}
                initialSlide={1}
                pagination={{
                  clickable: true,
                }}
              >
                <div className="flex  ">
                  {videos.map((video) => (
                    <div
                      className="flex justify-center items-center w-full  "
                      key={video.id}
                    >
                      {video.site === "YouTube" && (
                        <SwiperSlide>
                          <YouTube
                            className="w-full flex justify-center items-center  video h-full  "
                            key={video.key}
                          ></YouTube>
                        </SwiperSlide>
                      )}
                    </div>
                  ))}
                </div>
              </Swiper>
            )}
          </div>
          <div className=" main-section-container divider">
            <div className=" red-line w-full mb-8 ">Backdrops</div>
            {movieImage.backdrops && (
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={true}
                className="max-w-7xl h-[80vh] px-8 w-full"
                spaceBetween={10}
                initialSlide={1}
                grabCursor={true}
                loop={true}
                pagination={{
                  clickable: true,
                }}
              >
                <div className="flex justify-center items-center w-full  ">
                  {movieImage.backdrops.map((imagee) => (
                    <div key={imagee.id}>
                      <SwiperSlide>
                        <img
                          className="w-full flex justify-center items-center h-full  "
                          src={imgSrc + imagee.file_path}
                        />
                      </SwiperSlide>
                    </div>
                  ))}
                </div>
              </Swiper>
            )}
          </div>
          <div className=" main-section-container  movie-grid ">
            <div className=" red-line w-full mb-8 ">Posters</div>
            {movieImage.posters && (
              <Swiper
                slidesPerView={"auto"}
                loop={true}
                draggable={true}
                grabCursor={true}
                rewind={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
              >
                <div className="flex justify-center items-center w-full h-full  ">
                  {movieImage.posters.map((poster) => (
                    <div key={poster.id}>
                      <SwiperSlide>
                        <img
                          className="h-full w-full"
                          src={imgSrc + poster.file_path}
                        />
                      </SwiperSlide>
                    </div>
                  ))}
                </div>
              </Swiper>
            )}
          </div>
          <div className="main-section-container  movie-grid">
            <div className=" red-line w-full mt-8 ">You May Also like</div>
          </div>
        </div>
      )}
    </>
  );
};

export default MoviePage;
