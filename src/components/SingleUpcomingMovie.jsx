const SingleUpcomingMovie = ({ movie }) => {
  return <>{movie && <div>{movie.original_title}</div>}</>;
};

export default SingleUpcomingMovie;
