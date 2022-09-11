import SectionHero from "../components/SectionHero";
import Navbar from "../components/Navbar";
import SectionHero2 from "../components/SectionHero2";
import Whyus from "../components/Wyus";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";

const Home = () => {
    return (
        <>
            <Navbar />
            <SectionHero />
            <SectionHero2 />
            <Whyus />
            <Banner />
            <Footer />
        </>
    )
}

export default Home;