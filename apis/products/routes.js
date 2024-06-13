const express = require("express");
const {
  getAllProducts,
  getOneProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("./controller");
const upload = require("../../middlewares/multer");

// since our data is products, therefore we called the below productsRouter
const productsRouter = express.Router();

productsRouter.get("/", getAllProducts);

productsRouter.get("/:id", getOneProduct);

productsRouter.post("/", upload.single("image"), createProduct);
//if im asking for user to upload more than 1 file, this would change to <upload.array>,
// and instead of "image", i would specify the file, for ex. "civilId". And if so, I would also
// have to replace the word "image" by "civilId" in other places of this code

productsRouter.delete("/:id", deleteProduct);
productsRouter.put("/:id", updateProduct);

module.exports = productsRouter;
