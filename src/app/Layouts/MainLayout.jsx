import Home from "../Pages/Home";



const MainLayout = () => {
    
  return (
    <main className="absolute pointer-events-none top-0 left-0 z-50 w-[100%] h-[100%]">
      <div className="container mx-auto">
      <Home/>
      </div>
      
        
    </main>
  );
};

export default MainLayout;
