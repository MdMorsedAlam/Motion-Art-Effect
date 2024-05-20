import Footer from "../Components/Home/Footer";
import Home from "../Pages/Home";

const MainLayout = () => {
  return (
    <main className="absolute pointer-events-none w-full">
      <Home />

      <Footer />
    </main>
  );
};

export default MainLayout;
