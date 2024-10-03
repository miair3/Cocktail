import { Link } from "react-router-dom"; // Импортируем компонент Link для навигации
import dish from "../../public/images/dish.png"; // Импортируем изображение для фона

const InfoBlock = () => {
  return (
    <div
      className="w-full h-screen caveat flex flex-col lg:flex-row items-center justify-evenly bg-cover bg-center"
      style={{ backgroundImage: `url(${dish})` }} // Устанавливаем фоновое изображение
    >
      <div className="p-8 lg:ml-5 lg:mr-auto"> {/* Левый блок с текстом и кнопками */}
        <h1 className="text-3xl font-bold text-white">
          Making cocktails for a special life. {/* Заголовок с текстом */}
        </h1>
        <button className="px-3 h-[30px] text-white rounded-full hover:bg-gray-200 hover:text-black transition duration-300 ease-in-out">
          Off {/* Кнопка с текстом "Off" */}
        </button>
        <button className="px-3 h-[30px] text-white rounded-full hover:bg-gray-200 hover:text-black transition duration-300 ease-in-out">
          Open {/* Кнопка с текстом "Open" */}
        </button>
        <div className="relative mt-5">
          <video className="w-full lg:w-[800px] h-[450px]" autoPlay loop muted> {/* Видеоплеер */}
            <source src="/video/videoreclama.mp4" type="video/mp4" /> {/* Исходник видео */}
            Your browser does not support the video tag. {/* Сообщение для неподдерживаемых браузеров */}
          </video>
        </div>
      </div>

      {/* Новый раздел с текстом и кнопкой */}
      <div className="p-8 lg:mr-5 lg:ml-auto text-center lg:text-left"> {/* Правый блок с текстом */}
        <p className="text-4xl w-[500px] text-white mb-4">
          Generate a cocktail for yourself with the help of my website—you have not tried such cocktails yet! {/* Описание с приглашением */}
        </p>
        <Link to="/generate" className="px-5 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition duration-300 ease-in-out">
          Generate {/* Кнопка для перехода на страницу генерации коктейлей */}
        </Link>
      </div>
    </div>
  );
};

export default InfoBlock; // Экспортируем компонент
