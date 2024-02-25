import { AnimatePresence } from "framer-motion";
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

const categories = [
  "upcoming-movies",
  "popular-movies",
  "popular-series",
  "top-rated-series",
  "top-rated-movies",
];

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Navigate replace to="/movie-app/home" />,
        },
        {
          path: "/movie-app/home",
          element: <Home />,
        },
        ...categories.map((category) => ({
          path: `/movie-app/home/${category}`,
          element: <UpComingMovies category={category} />,
        })),

        {
          path: "/movie-app/movie/:id",
          element: <MoviePage />,
        },
        {
          path: "/movie-app/tv/:id",
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
        <AnimatePresence mode="wait">
          <RouterProvider router={router} />
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
