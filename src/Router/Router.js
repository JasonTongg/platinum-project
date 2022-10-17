import { Routes, Route, BrowserRouter } from "react-router-dom";
import Search from "../Pages/Search";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import Home from "../Pages/Home";
import ListCar from "../Components/ListCar";
import DetailCar from "../Components/DetailCar";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route />
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cars" element={<ListCar />} />
        <Route path="/cars/:id" element={<DetailCar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
