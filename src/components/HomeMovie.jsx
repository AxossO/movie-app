const HomeMovie = () => {
  const handlerme = () =>{
    console.log(`${process.env.API_KEY}`)
  }
  return (
    <>
      <div className="flex max-w-4xl mx-auto mt-14 justify-between items-center">
        <div className="space-y-10">
          <h1 className="text-8xl text-lime-800">title</h1>
          <p className="max-w-xl text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            ducimus quod, voluptate esse nulla autem voluptas tempore eaque ea
            natus quis, exercitationem facilis possimus? Quis sapiente voluptate
            voluptatum laborum esse!
          </p>
          <div className="space-x-4 rounded-md ">
            <button onClick={handlerme} className="rounded-lg bg-red-700 px-6 py-2 shadow-xl">
              Watch Now
            </button>
            <button className="rounded-lg border bg-slate-500 px-6 py-2 shadow-xl">Watch Trailer</button>
          </div>
        </div>
        <div>IMG</div>
      </div>
    </>
  );
};

export default HomeMovie;
