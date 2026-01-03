const express = require('express');
const app = express();
// Подключаем маршруты из твоей папки /routes
const routes = require('./routes/index'); // Проверь путь к файлу маршрутов

app.use(express.json());

// Обязательно добавляем обработку корня, чтобы не было ошибки "root"
app.get('/', (req, res) => {
  res.send('API работает успешно!');
});

app.use('/api', routes);

// Экспорт для Vercel
module.exports = app;

// Запуск только для локальной разработки
if (process.env.NODE_ENV !== 'production') {
  app.listen(3000, () => console.log('Локальный сервер на порту 3000'));
}
