const MovieGrid = ({ movie }) => {
  const imgSrc = "https://image.tmdb.org/t/p/original/";

  return (
    <div>
      <div className="">
        <img className="px-2 rounded-2xl" src={imgSrc + movie.poster_path}></img>
      </div>
    </div>
  );
};

export default MovieGrid;
