import logo from "../../public/images/ArtDriveColorLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full z-50 flex justify-between items-center pr-5 pl-5 h-[100px] fixed bg-black bg-opacity-90">
      <Link to="/">
        <img src={logo} alt="logo" width={100} height={100} />
      </Link>
      <div className="hidden md:flex gap-4">
        <Link
          to="/"
          className="text-white rounded-full px-4 py-2 hover:bg-gray-200 hover:text-black transition duration-300 ease-in-out"
        >
          Main Page
        </Link>
        <Link
          to="/generate"
          className="text-white rounded-full px-4 py-2 hover:bg-gray-200 hover:text-black transition duration-300 ease-in-out"
        >
          Generate
        </Link>
      </div>
      <div className="md:hidden">burger button</div>
    </div>
  );
};

export default Navbar;
