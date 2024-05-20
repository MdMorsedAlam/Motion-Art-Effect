import Banner from "../Components/Home/Banner";
import BrowserSection from "../Components/Home/BrowserSection";
import Navbar from "../Components/Home/Navbar";
import PageSection from "../Components/Home/PageSection";
import Review from "../Components/Home/Review";


const Home  = () => {
   

   
    return (
        <section>
        <Navbar/>
        <Banner/>
        <Review/>
        <PageSection/>
        <BrowserSection/>
        </section>
    );
};

export default Home;