const cloudinary = require("cloudinary").v2;
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: "966298444182116",
  api_secret: process.env.CLOUD_SECRET,
  secure: true,
});

module.exports = cloudinary;
