import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import { TailSpin } from "react-loader-spinner";
import { useSelector } from "react-redux";

const AppLayout = () => {
  const loading = useSelector((state) => state.movie.isLoading);

  return (
    <>
      <div className="flex overflow-hidden flex-col justify-center  items-center relative">
        {loading && (
          <div className="flex justify-center  items-center z-50 joo absolute  top-0 bottom-0 left-0 right-0 m-auto">
            <TailSpin
              visible={true}
              height="100"
              width="150"
              color="rgb(220 38 38)"
              ariaLabel="tail-spin-loading"
              radius="0"
            />
          </div>
        )}
        <Nav />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
