const express = require("express");
const products = require("./data");
const productsRouter = require("./apis/products/routes");
const connectDB = require("./database");
const morgan = require("morgan");
const cors = require("cors");
const notFound = require("./middlewares/notFoundHandler.js");
const errorHandler = require("./middlewares/errorHandler.js");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/media", express.static(path.join(__dirname, "media")));
app.use("/products", productsRouter);
app.use(notFound);
app.use(errorHandler);

connectDB();
app.listen(8000, () => {
  console.log("im running on 8000");
});
