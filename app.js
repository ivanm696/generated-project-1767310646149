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
# const express = require('express');
const mongoose = require('mongoose'); // Подключаем базу данных
const app = express();
const routes = require('./routes/index');

app.use(express.json());

// 1. Подключение к MongoDB (используй свою строку подключения позже)
const MONGODB_URI = process.env.MONGODB_URI || "твоя_временная_ссылка_тут";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Успешное подключение к MongoDB!"))
.catch((err) => console.error("Ошибка подключения к базе:", err));

app.get('/', (req, res) => {
  res.send('API работает и база данных подключается!');
});

app.use('/api', routes);

module.exports = app;

if (process.env.NODE_ENV !== 'production') {
  app.listen(3000, () => console.log('Сервер запущен на порту 3000'));
}
