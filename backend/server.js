require('dotenv').config({ path: __dirname + '/./../../.env' })
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');


connectDB();
app.use(express.json());

app.use('/api/products', productRoutes);

const PORT = process.env.IP || 5000;

app.listen(PORT, () => console.log(`SERVER STARTS AT PORT ${PORT}`));