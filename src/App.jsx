import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="bg-[#888] min-h-screen">
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />}></Route>
            <Route path="home" element={<Home />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
