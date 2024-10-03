import React, { useState } from "react";
import Ingredient from "./Ingredient";
import Options from "./Options";

const Choose = () => {
  // API-ключ и URL загружаются из переменных окружения
  const apikey = import.meta.env.VITE_API_KEY;
  const apiurl = import.meta.env.VITE_API_URL;

  // Состояния для управления выбранными ингредиентами и сгенерированным контентом
  const [infoFromOptions, setInfoFromOptions] = useState();
  const [imageUrl, setImageUrl] = useState("");
  const [gptPromptText, setGptPromptText] = useState([]);
  const [generatedText, setGeneratedText] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Состояние загрузки для процесса генерации

  // Данные об ингредиентах с их названиями и путями к изображениям
  const ingredientsData = [
    { name: "Apple", imageSrc: "/images/apple.png" },
    { name: "Banana", imageSrc: "/images/banana.png" },
    { name: "Avocado", imageSrc: "/images/avocado.png" },
    { name: "Strawberry", imageSrc: "/images/strawberry.png" },
    { name: "watermelon", imageSrc: "/images/watermelon.png" },
    { name: "cherry", imageSrc: "/images/cherry.png" },
    { name: "grape", imageSrc: "/images/grape.png" }, // Исправлен лишний символ в 'grape'
  ];

  // Функция для создания текста запроса для API GPT
  const createPromptText = () => {
    let text = "Создайте коктейль: " + gptPromptText.toString();
    console.log("текст запроса: ", text);
    return text;
  };

  // Обработка выбора ингредиента, обновление состояния текста запроса
  const handleIngredientClick = (ingredient) => {
    setGptPromptText([...gptPromptText, ingredient.name]);
  };

  // Функция для генерации рецепта коктейля с использованием API GPT
  const generateText = async () => {
    let text = 'Создайте рецепт коктейля с этими ингредиентами: ' + gptPromptText.toString();
    console.log('начата генерация текста...');

    try {
      const response = await fetch(apiurl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apikey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: text,
          max_tokens: 350,
        }),
      });
      const data = await response.json();
      console.log('данные: ', data);
      setGeneratedText(data.choices[0].text); // Сохранение сгенерированного текста в состояние

      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  // Функция для генерации изображения по текстовому запросу
  const generateImage = async (promptText) => {
    setIsLoading(true);
    console.log("генерация изображения");
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apikey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: promptText,
        n: 1,
        size: "512x512",
      }),
    };

    try {
      const response = await fetch(
        "https://api.openai.com/v1/images/generations",
        options
      );
      const data = await response.json();
      console.log("данные: ", data);
      setImageUrl(data.data[0].url); // Сохранение URL сгенерированного изображения

      await generateText(); // Генерация текста после получения изображения
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="flex flex-col items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url("/images/cocktailclass.jpg")', // Замените на свой путь к фоновому изображению
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-wrap pt-[120px]">
        {ingredientsData.map((ingredient, index) => (
          <Ingredient
            key={index}
            imageSrc={ingredient.imageSrc}
            onClick={() => handleIngredientClick(ingredient)} // Обработка клика на ингредиент
          />
        ))}
        <div className="text-white">
          <h3>Выбранные ингредиенты:</h3>
          <ul>
            {gptPromptText.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <button
          onClick={() => generateImage(createPromptText())} // Генерация изображения по тексту запроса
          className="px-4 h-[50px] m-4 rounded-full bg-slate-900 text-white"
          disabled={isLoading} // Дизаблирование кнопки при загрузке
        >
          {isLoading ? <div>Загрузка ... </div> : <div>Сгенерировать блюдо</div>}
        </button>
      </div>
      {imageUrl && (
        <img src={imageUrl} width={400} height={400} alt="сгенерированное блюдо" />
      )}
      
      <Options setInfoFromOptions={setInfoFromOptions} />
      <div className="text-white">Сгенерированный текст: {generatedText}</div>
    </div>
  );
};

export default Choose;
