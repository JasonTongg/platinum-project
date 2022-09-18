import { Navigate, Routes, Route, BrowserRouter } from "react-router-dom";
import Search from "../Pages/Search";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";

const Router = () => {
  const isLogin = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <Routes>
        <Route />
        <Route
          path="/cars"
          element={isLogin ? <Navigate to="/cars" /> : <SignIn />}
        />
        <Route
          path="/cars/:id"
          element={isLogin ? <Navigate to="/cars/:id" /> : <SignIn />}
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
