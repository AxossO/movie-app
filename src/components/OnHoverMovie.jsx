const OnHoverMovie = ({ movie }) => {
  return (
    <div className="absolute w-full h-full top-0 bottom-0 ">
      <div className=" text-white  flex justify-center  items-center z-30 duration-500">
        <div className="text-center text-2xl z-30 absolute bottom-1/2 font-bold duration-500 ">
          {movie.original_title}
        </div>
      </div>
      <div className="opacity-60 bg-black w-full h-full top-0 z-10 duration-500"></div>
    </div>
  );
};

export default OnHoverMovie;
