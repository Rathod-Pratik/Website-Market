const express = require("express");
const cors=require('cors');
const {connectToMongo}=require('./Function/Connection');
connectToMongo("mongodb+srv://rathodpratik1928:1FfFNvt03nHxKN9N@cluster0.wykng.mongodb.net/Website_Market");

const app = express();
app.use(cors());
app.get("/", (req, res) => {
  const data = [
    {
        "_id": 1,
        "img": "https://res.cloudinary.com/drzkjmawm/image/upload/v1730731615/file_storing_app_dmip5z.webp",
        "name": "CloudFile Storage",
        "description":"A secure and user-friendly file storing application that allows users to upload, store, and share files effortlessly.",
        "price": "1200$",
    },
    {
        "_id":2,
        "img":"https://res.cloudinary.com/drzkjmawm/image/upload/v1730731614/e_commerce_p6npwo.webp",
      "name": "ShopSmart",
      "description":
        "ShopSmart is an online e-commerce platform that offers a wide variety of products, from electronics to fashion. Our user-friendly interface, secure payment options, and fast shipping make online shopping a breeze.",
      "price": "1500$",
    },
    {
        "_id": 3,
        "img": "https://res.cloudinary.com/drzkjmawm/image/upload/v1730731614/coffee_shop_go3sr4.webp",
        "name": "Brewed Awakenings",
        "description": "Brewed Awakenings is a cozy coffee shop offering a variety of freshly brewed coffees, teas, and delicious pastries. Our inviting atmosphere is perfect for relaxing or catching up with friends.",
        "price": "2500$"
      },
      {
        "_id": 4,
        "img": "https://res.cloudinary.com/drzkjmawm/image/upload/v1730731614/content_generator_xlc1iq.webp",
        "name": "ContentCraft",
        "description": "ContentCraft is an advanced AI content generator designed to help businesses and creators produce high-quality written content effortlessly. With customizable templates and SEO optimization features, you can create engaging articles, blogs, and marketing materials in minutes.",
        "price": "1500$"
      },
      {
            "_id": 5,
            "img": "https://res.cloudinary.com/drzkjmawm/image/upload/v1730731614/blog_app_jwtqea.webp",
            "name": "BlogMaster",
            "description": "BlogMaster is an intuitive blogging platform that empowers users to create, publish, and share their stories easily. With customizable templates, SEO tools, and community features, it's perfect for bloggers of all levels.",
            "price": "1000$"
      },
      {
        "_id": 6,
        "img": "https://res.cloudinary.com/drzkjmawm/image/upload/v1730731615/trevel_ap_pdpayj.webp",
        "name": "TravelMate",
        "description": "TravelMate is your ultimate travel companion app, offering personalized trip planning, real-time itinerary management, and local recommendations. Explore new destinations, book accommodations, and connect with fellow travelers all in one place.",
        "price": "2000$"
      },
      {
        "_id": 7,
        "img": "https://res.cloudinary.com/drzkjmawm/image/upload/v1730731615/portfolio_lnumlo.webp",
        "name": "PortfolioPro",
        "description": "PortfolioPro is a sleek and customizable portfolio app that allows creatives to showcase their work professionally. With easy-to-use templates and integration options, you can present your projects and skills to potential clients and employers effortlessly.",
        "price": "1200$"
      }
  ];
  res.json(data);
});

app.use('/CartData',require('./Function/CartData'));
app.listen("5000", () => {
  console.log("server running at localhost:5000");
});

//pass 1FfFNvt03nHxKN9N
// user rathodpratik1928