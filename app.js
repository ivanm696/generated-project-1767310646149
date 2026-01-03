const express = require('express');
const app = express();
const routes = require('./routes'); // Убедись, что файл ./routes.js существует

app.use(express.json());

// Основной маршрут для проверки, что сервер жив
app.get('/', (req, res) => {
  res.send('Сервер успешно запущен!');
});

// Твои API маршруты
app.use('/api', routes);

// Настройка для локального запуска (не мешает Vercel)
if (process.env.NODE_ENV !== 'production') {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Сервер запущен локально на http://localhost:${PORT}`);
  });
}

// Экспортируем приложение для Vercel
module.exports = app;
