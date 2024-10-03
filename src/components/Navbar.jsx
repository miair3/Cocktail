import logo from "../../public/images/ArtDriveColorLogo.png"; // Импортируем логотип
import { Link } from "react-router-dom"; // Импортируем компонент Link для навигации

const Navbar = () => {
  return (
    <div className="w-full z-50 flex justify-between items-center pr-5 pl-5 h-[100px] fixed bg-black bg-opacity-90">
      {/* Основной контейнер навигационной панели с фиксированной позицией и фоновым цветом */}
      
      <Link to="/"> {/* Ссылка на главную страницу */}
        <img src={logo} alt="logo" width={100} height={100} /> {/* Логотип */}
      </Link>
      
      <div className="hidden md:flex gap-4"> {/* Блок ссылок, скрытый на малых экранах */}
        <Link
          to="/"
          className="text-white rounded-full px-4 py-2 hover:bg-gray-200 hover:text-black transition duration-300 ease-in-out"
        >
          Main Page {/* Ссылка на главную страницу */}
        </Link>
        <Link
          to="/generate"
          className="text-white rounded-full px-4 py-2 hover:bg-gray-200 hover:text-black transition duration-300 ease-in-out"
        >
          Generate {/* Ссылка для перехода на страницу генерации */}
        </Link>
      </div>
      
      <div className="md:hidden">burger button</div> {/* Кнопка "бургер", скрытая на больших экранах */}
    </div>
  );
};

export default Navbar; // Экспортируем компонент навигационной панели
