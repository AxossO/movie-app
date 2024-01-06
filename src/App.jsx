import AppLayout from "./components/AppLayout";
import Error from "./components/Error";
import MoviePage from "./components/MoviePage";
import UpComingMovies from "./components/UpComingMovies";
import Home from "./pages/Home";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
const categories = ["upcoming-movies", "popular-movies", "popular-series"];
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
        ...categories.map((category) => ({
          path: `home/${category}`,
          element: <UpComingMovies category={category} />,
        })),

        {
          path: "movie/:id",
          element: <MoviePage />,
        },
        {
          path: "tv/:id",
          element: <MoviePage />,
        },
        {
          path: "*",
          element: <Error />,
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
