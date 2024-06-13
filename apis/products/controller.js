const products = require("../../data.js");
const Product = require("../../models/Product.js");

const getAllProducts = async (req, res, next) => {
  //this endpoint gets all products
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

const getOneProduct = async (req, res, next) => {
  const id = req.params.id;
  try {
    mongoose.isObjectIdorHexString(id);
    const product = await Product.findById(id);
    if (product) {
      return res.status(200).json(product);
    } else {
      return res.status(404).json({ msg: "Product with this id isn't found" });
    }
  } catch (error) {
    next(error);
  }
};

// const getOneProduct = (req, res) => {
//   const id = req.params.id;
//   const product = products.find((product) => {
//     return product.id == id;
//   });
//   if (product) return res.json(product);
//   else {
//     return res.json("there is no product with this name");
//   }
// };

const createProduct = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = req.file.path;
    } // here i would change "civilID" if it's an array
    const newProduct = await Product.create(req.body);
    return res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

// const createProduct = (req, res) => {
//   products.push(req.body);
//   return res.json(products);
// };

const deleteProduct = async (req, res, next) => {
  const id = req.params.id;
  try {
    const product = await Product.findByIdAndDelete(id);
    return res.status(200).json({ msg: "product deleted successfully" });
  } catch (error) {
    next(error);
  }
};

// const deleteProduct = (req, res) => {
//   const id = req.params.id;
//   const product = products.filter((product) => {
//     if (product.id == id) return false;
//   });
//   return res.json(product);
// };

const updateProduct = async (req, res, next) => {
  const id = req.params.id;
  try {
    const product = await Product.findByIdAndUpdate(id, req.body);
    return res.status(200).json({ msg: "product updated successfully" });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllProducts,
  getOneProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};
