import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import SearchCars from "./Pages/SearchCars";
import { Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchCars />} />
      </Routes>
    </div>
  );
}

export default App;
