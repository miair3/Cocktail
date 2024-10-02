import { Link } from "react-router-dom";
import dish from "../../public/images/dish.png";

const InfoBlock = () => {
  return (
    <div
      className="w-full h-screen caveat flex flex-col lg:flex-row items-center justify-evenly bg-cover bg-center"
      style={{ backgroundImage: `url(${dish})` }}
    >
      <div className="p-8 lg:ml-5 lg:mr-auto">
        <h1 className="text-3xl font-bold text-white">
          Making cocktails for a special life.
        </h1>
        <button className="px-3 h-[30px] text-white rounded-full hover:bg-gray-200 hover:text-black transition duration-300 ease-in-out">
          Off
        </button>
        <button className="px-3 h-[30px] text-white rounded-full hover:bg-gray-200 hover:text-black transition duration-300 ease-in-out">
          Open
        </button>
        <div className="relative mt-5">
          <video className="w-full lg:w-[800px] h-[450px]" autoPlay loop muted>
            <source src="/video/videoreclama.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* New Text and Button Section */}
      <div className="p-8 lg:mr-5 lg:ml-auto text-center lg:text-left">
        <p className="text-4xl w-[500px] text-white mb-4">
          Generate a cocktail for yourself with the help of my website—you have not tried such cocktails yet!
        </p>
        <Link to="/generate" className="px-5 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition duration-300 ease-in-out">
        Generate
        </Link>
      </div>
    </div>
  );
};

export default InfoBlock;
