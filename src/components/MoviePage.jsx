import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cast, image, movieId, randomMovie, video } from "../../Api";
import { useLocation, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import ScrollTop from "./ScrollTop";
import MovieGrid from "./MovieGrid";
import { backDropbreakPoint } from "../animation";
const MoviePage = () => {
  const movie = useSelector((state) => state.movie.movieDetails.listOfId);
  const movieCast = useSelector((state) => state.movie.movieDetails.casts);
  const videos = useSelector((state) => state.movie.movieDetails.videos);
  const movieImage = useSelector((state) => state.movie.movieDetails.images);
  const random = useSelector((state) => state.movie.randomMovies);
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
    dispatch(randomMovie());
  }, [dispatch, id, location.pathname]);
  return (
    <>
      {movie && (
        <div className="w-full ">
          <ScrollTop />

          <div
            className={` w-full h-screen bg-cover bg-no-repeat flex flex-col items-center justify-center relative px-4`}
            style={{ backgroundImage: `url(${imgSrc + movie.backdrop_path})` }}
          >
            <div className="absolute w-full h-full   inset-0 bg-gradient-to-t from-[#0D0C0D]  to-transparent "></div>
            <div className="absolute bg-gradient-to-b inset-0 from-[#0E0E0E] to-transparent via-black top-1/2  w-full h-full opacity-90"></div>
            <div className="z-30 flex flex-row gap-5 mt-20 small:flex-col small:text-center semiSmall:mt-26 ">
              <div className="mx-auto flex items-center">
                <img
                  className=" max-w-sm h-full rounded-2xl medium:max-w-xs medium:max-h-[60vh] small:w-56 "
                  src={imgSrc + movie.poster_path}
                  alt=""
                />
              </div>
              <div className="space-y-5 small:space-y-2">
                <div className="text-7xl text-white max-w-2xl font-bold medium:text-5xl semiMedium:text-5xl small:text-2xl">
                  {movie.original_title}
                </div>
                <div className="">
                  {movie.status === "Released" && (
                    <span className=" text-lg  text-white px-2 font-bold small:text-base">
                      <span className="text-2xl small:text-base text-[#E10907]">
                        Status:{" "}
                      </span>
                      Released
                    </span>
                  )}
                </div>

                {movie.genres && (
                  <div className="flex gap-5 small:justify-center small:items-center">
                    {movie.genres.map((genre) => (
                      <div
                        className="text-white bg-[#E10907] small:text-base rounded-lg  px-4 py-1 small:text-center text-left"
                        key={genre.id}
                      >
                        {genre.name}
                      </div>
                    ))}
                  </div>
                )}
                <p className="max-w-2xl text-lg text-[#eee] font-bold medium:text-base  small:text-sm ">
                  {movie.overview}
                </p>
                <div className="relative text-white px-5 w-full semiSmall:px-2 ">
                  <div className="red-line relative small:text-left">Cast</div>
                  <div className="relative top-4 w-full">
                    {movieCast && (
                      <div className="flex gap-3 semiSmall:gap-1 relative medium:flex-wrap small:justify-center semiSmall:flex-nowrap  ">
                        {movieCast.map((cast) => (
                          <div key={cast.id} className=" relative  ">
                            <img
                              className={`w-32 flex relative semiMedium:w-24  `}
                              src={`${imgSrc + cast.profile_path}`}
                            />
                            <div className="absolute bottom-0  w-full">
                              <div className=" bg-black bg-opacity-70 h-10 semiMedium:h-12 relative">
                                <div className=" text-white text-sm p-2 text-left max-w-xs bottom-0 absolute font-normal">
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
            <div className=" red-line w-full mb-8 superSmall:mb-2 superSmall:mt-4">
              Videos
            </div>

            {videos && (
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={true}
                className="max-w-7xl h-[80vh] px-8 w-full medium:px-2 medium:w-full medium:h-[70vh] semiMedium:h-[60vh] small:h-[50vh] superSmall:h-[40vh]"
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
          <div className=" main-section-container divider average:px-4 medium:px-4">
            <div className=" red-line w-full mb-8 ">Backdrops</div>
            {movieImage.backdrops && (
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={true}
                className="max-w-7xl h-[80vh] px-8 w-full  semiMedium:h-full "
                spaceBetween={10}
                initialSlide={1}
                grabCursor={true}
                loop={true}
                breakpoints={backDropbreakPoint}
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
          <div className=" main-section-container  movie-edit average:px-4 medium:px-4 ">
            <div className=" red-line w-full  mb-8 ">Posters</div>
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
                <div className="flex justify-center items-center  h-full ">
                  {movieImage.posters.map((poster) => (
                    <div key={poster.id}>
                      <SwiperSlide>
                        <img
                          className="h-full w-full "
                          src={imgSrc + poster.file_path}
                        />
                      </SwiperSlide>
                    </div>
                  ))}
                </div>
              </Swiper>
            )}
          </div>
          <div className="main-section-container  movie-edit">
            <div className=" red-line w-full mt-8 ">You May Also like</div>
            {random && (
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
                <div className="flex justify-center items-center w-full h-full ">
                  {random.map((movie) => (
                    <SwiperSlide className="mt-8">
                      <MovieGrid movie={movie} key={movie.id} />
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MoviePage;
