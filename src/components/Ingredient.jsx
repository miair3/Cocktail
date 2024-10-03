import React from "react"; // Импортируем React

const Ingredient = ({ imageSrc, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick} // Обработка клика на элементе
      className={`w-[100px] h-[100px] rounded-full flex items-center border-4 justify-center cursor-pointer m-[10px]`} // Классы для стилизации
    >
      <img
        src={imageSrc} // Путь к изображению ингредиента
        alt="ingredient" // Альтернативный текст для изображения
        style={{ width: "80%", height: "80%" }} // Стили для изображения (80% от размеров контейнера)
      />
    </div>
  );
};

export default Ingredient; // Экспортируем компонент Ingredient
