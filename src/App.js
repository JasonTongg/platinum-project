import Banner from "./Components/Banner";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchCars from "./Pages/SearchCars";


function App() {
  return (
    <div className="App">
      <Banner />
      <Faq />
      <Footer />
      <SearchCars />
    </div>
  );
}

export default App;
