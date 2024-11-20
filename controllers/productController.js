const productModel = require('../models/product');

const addCategory = async (req, res) => {
  const { name, description } = req.body;
  try {
    const category = await productModel.createCategory(name, description);
    res.status(201).json({ message: 'Category added successfully', category });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const addProduct = async (req, res) => {
  const { name, description, price, stockQuantity, categoryId } = req.body;
  try {
    const product = await productModel.createProduct(name, description, price, stockQuantity, categoryId);
    res.status(201).json({ message: 'Product added successfully', product });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { addCategory, addProduct };
