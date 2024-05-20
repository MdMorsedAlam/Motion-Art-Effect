import Banner from "../Components/Home/Banner";
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
        </section>
    );
};

export default Home;