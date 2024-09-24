require("dotenv").config({ path: "./config/config.env" });const mongoose = require('mongoose');
const UserModel = require('./models/userModel');
const ProductModel = require('./models/productModel');
const { faker } = require('@faker-js/faker');
const axios = require('axios');
const fs = require('fs');
const { parse } = require('csv-parse');
const cloudinary=require("cloudinary");

console.log(process.env.DB_URI);

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const initCategory = async () => {
  list = [
    'Apple',
    'Avocado',
    'Banana',
    'Kiwi',
    'Lemon',
    'Lime',
    'Mango',
    'Melon',
    'Nectarine',
    'Orange',
    'Papaya',
    'Passion-Fruit',
    'Peach',
    'Pear',
    'Pineapple',
    'Plum',
    'Pomegranate',
    'Red-Grapefruit',
    'Satsumas',
    'Juice',
    'Milk',
    'Oatghurt',
    'Oat-Milk',
    'Soyghurt',
    'Soy-Milk',
    'Yoghurt',
    'Asparagus',
    'Aubergine',
    'Cabbage',
    'Carrots',
    'Cucumber',
    'Garlic',
    'Ginger',
    'Leek',
    'Mushroom',
    'Onion',
    'Pepper',
    'Potato',
    'Red-Beet',
    'Tomato',
    'Zucchini',
  ];
  for (let element of list) {
    try {
      const userDoc = await CategoryModel.create({
        name: element,
      });
      console.log(userDoc);
    } catch (error) {
      console.log(error);
    }
  }
  console.log('Added Categories!!');
};

const initSellers = async (n) => {
  axios.defaults.baseURL = 'http://localhost:4000/';

  for (i = 0; i < n; i++) {
    const name = faker.name.fullName();
  console.log({
      name: name,
      email: faker.internet.email(...name.split(' ').slice(-2)),
      password: faker.internet.password(),
      avatar:faker.internet.avatar(),
      role: 'user',
    });
    await axios.post('/api/v1/register', {
      name: name,
      email: faker.internet.email(...name.split(' ').slice(-2)),
      password: faker.internet.password(),
      avatar:faker.internet.avatar(),
      role: 'user',
    });
  }
  console.log('Added Sellers!!');
};

const getSellerId = async () => {
  const arr = [];
  try {
    const result = await UserModel.find({ role: 'admin' });
    for (let elements of result) {
      arr.push(elements._id);
    }
  } catch (err) {}
  return arr;
};

const initProducts = async () => {
  fs.readFile('./output.csv', 'utf8', (error, data) => {
    if (error) {
      console.error(error);
    } else {
      parse(
        data,
        {
          columns: true,
          skip_empty_lines: true,
        },
        async (parseError, output) => {
          if (parseError) {
            console.error(parseError);
          } else {
            const arr = await getSellerId();
            for (let elements of output) {
              try {
                const result = await cloudinary.v2.uploader.upload("."+elements['Iconic Image Path (str)'], {
                  folder: "products",
                });
                obj = {
                  name: elements['Class Name (str)'],
                  description: elements['Product Description Path (str)'],
                  price: Math.floor(Math.random() * (300 - 50 + 1)) + 50,
                  ratings: Math.floor(Math.random() * (5 - 0 + 1)),
                  images: [{
                    public_id: result.public_id,
                    url: result.secure_url,
                  }],
                category: elements['Coarse Class Name (str)'],
                Stock: Math.floor(Math.random() * (100 - 5 + 1)) + 5,
                user: arr[Math.floor(Math.random() * arr.length)],
                }
                console.log(obj);
                const userDoc = await ProductModel.create(obj);
                console.log(userDoc);
              } catch (err) {
                console.log(err);
              }
            }
          }
        }
      );
    }
  });
  console.log('Added Products!!');
};
// 8XLZbcpdu6LP34Dc
// initCategory();
// initSellers(10);
initProducts();

// mongoose.connection.close()
