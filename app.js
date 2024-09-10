const HTTP = require('http');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const paymentRoutes = require('./routes/paymentRoutes');

const app = express();

// Настройки Express
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(paymentRoutes);

// Маршрут для корневого URL, который теперь показывает payment.ejs
app.get('/', (req, res) => {
    res.render('payment');
});

// Создаем HTTP-сервер и передаем в него приложение Express
const WebServer = HTTP.createServer(app);

// Прослушивание порта и хоста из переменных среды
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '185.70.111.248'; // Измените хост


WebServer.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
