import AppLayout from "./components/AppLayout";
import MoviePage from "./components/MoviePage";
import UpComingMovies from "./components/UpComingMovies";
import Home from "./pages/Home";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,

      children: [
        {
          path: "/",
          element: <Navigate replace to="home" />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "home/upcomingmovies",
          element: <UpComingMovies />,
        },
        {
          path: "movie/:id",
          element: <MoviePage />,
        },
      ],
    },
  ]);
  return (
    <>
      <div className="bg-[#100F10]  relative">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
