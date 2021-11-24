require('dotenv').config({ path: __dirname + '/./../../.env' });

const productData = require('./data/products');
const connectDB = require('./config/db');
const Product = require('./models/Products');

connectDB();

const importdata = async () => {
    console.log("Hii")
    try {
        await Product.deleteMany({});
        await Product.insertMany(productData);
        console.log('Data inserted Succesfully');
        process.exit();
    } catch (error) {
        console.error('Error');
        process.exit(1);
    }
}

importdata();