import logo from "./../../../assets/MotionArtEffect-logo.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between mt-16">
      <div>
        <img src={logo} alt={logo} />
      </div>
      <button className="px-6 py-3 font-outfit bg-white border transparent border-white hover:bg-transparent hover:text-white pointer-events-auto text-xl mt-3 rounded-md duration-300 ease-in">
        Purchase Now
      </button>
    </nav>
  );
};

export default Navbar;
