const express = require('express');
const app = express();
const routes = require('./routes'); // Проверь, что файл routes.js есть в корне

app.use(express.json());

// Главная страница, чтобы Vercel нашел "root"
app.get('/', (req, res) => {
  res.status(200).send('API Server is running');
});

app.use('/api', routes);

// Экспорт для Vercel
module.exports = app;

// Запуск только при локальной разработке
if (process.env.NODE_ENV !== 'production') {
  app.listen(3000, () => console.log('Server started on port 3000'));
}
