const express = require('express');
const morgan = require('morgan');

const app = express();

// 使用 morgan 中间件（开发模式下）
app.use(morgan('dev'));

app.get('/', (req, res) => {
	res.send('Hello, Morgan!');
});
console.log('dadada')

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
