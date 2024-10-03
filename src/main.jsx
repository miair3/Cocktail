import { StrictMode } from 'react' // Импортируем StrictMode для обеспечения строгого режима
import { createRoot } from 'react-dom/client' // Импортируем createRoot для рендеринга приложения
import './index.css' // Импортируем CSS стили
import React from 'react' // Импортируем React
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Импортируем необходимые компоненты для маршрутизации

// Импортируем страницы приложения
import MainPage from './pages/MainPage.jsx' // Главная страница
import GenerationPage from './pages/GenerationPage.jsx' // Страница генерации
import PageNotFound from './pages/PageNotFound.jsx' // Страница 404 (не найдено)

// Создаем маршрутизатор с определением маршрутов
const router = createBrowserRouter([
  {
    path: '/', // Путь для главной страницы
    element: <MainPage />, // Компонент, который будет отображаться
    errorElement: <PageNotFound/> // Компонент для отображения в случае ошибки (например, 404)
  },
  {
    path: '/generate', // Путь для страницы генерации
    element: <GenerationPage /> // Компонент, который будет отображаться
  },
]);

// Рендерим приложение
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> // Оборачиваем приложение в RouterProvider для маршрутизации
  </StrictMode>,
);
