import { useState, useEffect } from "react"; // Импортируем необходимые хуки из React

const Options = ({ setInfoFromOptions }) => {
  // Определяем состояния для различных параметров коктейля
  const [typeofcocktail, setTypeofcocktail] = useState(""); // Тип коктейля
  const [yourchiefabilities, setYourchiefabilities] = useState(""); // Уровень навыков повара
  const [sizeofacup, setSizeofacup] = useState(""); // Размер чашки
  const [temperature, setTemperature] = useState(""); // Температура коктейля
  const [addextraingredients, setAddextraingredients] = useState(""); // Дополнительные ингредиенты
  const [baningredients, setBaningredients] = useState(""); // Запрещенные ингредиенты

  // Функция для отправки информации о выбранных параметрах
  const sendInfoOptions = () => {
    console.log("clicked"); // Лог для отладки
    setInfoFromOptions(
      `Type of cocktail: ${typeofcocktail}, Chief abilities: ${yourchiefabilities}, Size of a cup: ${sizeofacup}, Temperature: ${temperature}, Extra ingredients: ${addextraingredients}, Ban ingredients: ${baningredients}`
    );
  };

  // Эффект, который вызывается при изменении любого из состояний
  useEffect(() => {
    sendInfoOptions(); // Отправляем информацию о параметрах
  }, [
    typeofcocktail,
    yourchiefabilities,
    sizeofacup,
    temperature,
    addextraingredients,
    baningredients,
  ]);

  return (
    <div className="mx-auto p-4 mt-4 bg-black bg-opacity-75 w-[70%] h-[400px] rounded-3xl flex flex-col items-center text-white">
      {/* Основной контейнер для опций с фоном и закругленными углами */}
      <div className="text-3xl font-bold">Options</div> {/* Заголовок секции */}
      <p>Lorem, ipsum dolor.</p> {/* Вспомогательный текст */}

      <div className="flex gap-10 mt-10"> {/* Контейнер для выбора параметров */}
        <div>
          <div className="flex flex-col">
            <label>Type of cocktail</label> {/* Метка для выбора типа коктейля */}
            <select
              name="dish"
              id="dish"
              onChange={(e) => setTypeofcocktail(e.target.value)} // Обработка изменения типа коктейля
              className="w-[200px] h-[35px] rounded-3xl text-black border-black border-2"
            >
              <option value="milky">Milky</option>
              <option value="Chocolate">Chocolate</option>
              <option value="Caramel">Caramel</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label>Your chief abilities</label> {/* Метка для выбора навыков повара */}
            <select
              name="cuisine"
              id="cuisine"
              onChange={(e) => setYourchiefabilities(e.target.value)} // Обработка изменения навыков
              className="w-[200px] h-[35px] rounded-3xl text-black border-black border-2"
            >
              <option value="novice">Novice</option>
              <option value="intermediate">Intermediate</option>
              <option value="expert">Expert</option>
            </select>
          </div>
        </div>
        <div>
          <div>
            <p>Size of a cup</p> {/* Заголовок для выбора размера чашки */}
            <select
              onChange={(e) => setSizeofacup(e.target.value)} // Обработка изменения размера чашки
              className="w-[200px] h-[35px] rounded-3xl text-black border-black border-2"
            >
              <option value="small">S size</option>
              <option value="medium">M size</option>
              <option value="large">L size</option>
            </select>
          </div>

          <div>
            <p>Temperature</p> {/* Заголовок для выбора температуры */}
            <select
              onChange={(e) => setTemperature(e.target.value)} // Обработка изменения температуры
              className="w-[200px] h-[35px] rounded-3xl text-black border-black border-2"
            >
              <option value="+100 C">+100 C</option>
              <option value="0 C">0 C</option>
              <option value="-10 F">-10 F</option>
            </select>
          </div>
        </div>
        <div>
          <div>
            <p>Add extra ingredients</p> {/* Заголовок для дополнительных ингредиентов */}
            <input
              onChange={(e) => setAddextraingredients(e.target.value)} // Обработка ввода дополнительных ингредиентов
              placeholder="extra ingredients"
              className="w-[200px] h-[35px] rounded-3xl border-2 text-black border-black "
            />
          </div>

          <div>
            <p>Ban ingredients</p> {/* Заголовок для запрещенных ингредиентов */}
            <input
              onChange={(e) => setBaningredients(e.target.value)} // Обработка ввода запрещенных ингредиентов
              placeholder="ban ingredient"
              className="w-[200px] h-[35px] rounded-3xl border-2 text-black border-black "
            />
          </div>
        </div>
      </div>

      {/* Отображение выбранных параметров */}
      <p>Selected type of cocktail: {typeofcocktail}</p>
      <p>Selected your chief abilities: {yourchiefabilities}</p>
      <p>Selected size of cup: {sizeofacup}</p>
      <p>Selected temperature: {temperature}</p>
      <p>Selected extra ingredients: {addextraingredients}</p>
      <p>Selected ban ingredients: {baningredients}</p>
    </div>
  );
};

export default Options; // Экспортируем компонент Options
