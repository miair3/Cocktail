const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8"> {/* Фоновый цвет и текст для нижнего колонтитула */}
      <div className="container mx-auto px-4"> {/* Контейнер с отступами по центру */}
        <div className="flex flex-col sm:flex-row justify-between"> {/* Flex-контейнер для вертикального/горизонтального расположения */}
          
          <div className="mb-4 sm:mb-0"> {/* Контейнер для контактной информации */}
            <h2 className="text-2xl font-bold mb-2">Contact Us</h2> {/* Заголовок раздела */}
            <p className="text-gray-400"> {/* Текст с серым цветом */}
              Address: 123 Main Street, City, State Zip
              <br />
              Email: gargabayuliberdimurat@gmail.com
              <br />
              Phone: (123) 456-7890
            </p>
          </div>

          <div className="mb-4 sm:mb-0"> {/* Контейнер для ссылок */}
            <h2 className="text-2xl font-bold mb-2">Links</h2> {/* Заголовок раздела */}
            <ul className="text-gray-400"> {/* Список ссылок */}
              <li><a href="#">About Us</a></li> {/* Ссылка на страницу "О нас" */}
              <li><a href="#">Blog</a></li> {/* Ссылка на блог */}
              <li><a href="#">Privacy Policy</a></li> {/* Ссылка на политику конфиденциальности */}
              <li><a href="#">Terms of Service</a></li> {/* Ссылка на условия обслуживания */}
            </ul>
          </div>

          <div className="mb-4 sm:mb-0"> {/* Контейнер для социальных сетей */}
            <h2 className="text-2xl font-bold mb-2">Social Media</h2> {/* Заголовок раздела */}
            <ul className="flex space-x-4"> {/* Список иконок социальных сетей */}
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li> {/* Иконка Facebook */}
              <li><a href="#"><i className="fab fa-twitter"></i></a></li> {/* Иконка Twitter */}
              <li><a href="#"><i className="fab fa-instagram"></i></a></li> {/* Иконка Instagram */}
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400"> {/* Центрированный текст для копирайта */}
          <p>&copy; 2024 MIAIR3.</p> {/* Копирайт с годом */}
        </div>
      </div>
    </footer>
  );
};

export default Footer; // Экспортируем компонент Footer
