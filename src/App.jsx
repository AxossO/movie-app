import AppLayout from "./components/AppLayout";
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
      ],
    },
  ]);
  return (
    <>
      <div className="bg-[#888] min-h-screen">
        <RouterProvider router={router} />;
      </div>
    </>
  );
}

export default App;
