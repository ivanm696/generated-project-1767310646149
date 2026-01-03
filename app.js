const express = require('express');
const app = express();
const routes = require('./routes'); // Убедись, что файл routes.js лежит рядом

app.use(express.json());

// Главный маршрут (root), который ищет Vercel
app.get('/', (req, res) => {
  res.status(200).send('Сервер успешно запущен и работает!');
});

// Подключение твоих API маршрутов
app.use('/api', routes);

// Экспорт для Vercel (без этого будет ошибка 500)
module.exports = app;

// Запуск сервера только для локальной разработки
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
  });
}
