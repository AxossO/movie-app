const SingleUpcomingMovie = ({ movie }) => {
  const imgSrc = "https://image.tmdb.org/t/p/original/";

  return (
    <>
      {movie && (
        <div className=" ">
          <div
            className={` bg-cover bg-no-repeat w-full h-full rounded-2xl`}
            style={{ backgroundImage: `url(${imgSrc + movie.poster_path})` }}
          ></div>
        </div>
      )}
    </>
  );
};

export default SingleUpcomingMovie;
