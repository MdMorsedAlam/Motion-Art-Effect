import Banner from "../Components/Home/Banner";
import BrowserSection from "../Components/Home/BrowserSection";
import Features from "../Components/Home/Features";
import Navbar from "../Components/Home/Navbar";
import PageSection from "../Components/Home/PageSection";
import Review from "../Components/Home/Review";


const Home  = () => {
   

   
    return (
        <section className="container px-5 xl:px-0 mx-auto">
        <Navbar/>
        <Banner/>
        <Review/>
        <PageSection/>
        <BrowserSection/>
        <Features/>
        </section>
    );
};

export default Home;