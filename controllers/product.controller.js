import product from "../models/product.model.js";

const getProducts = async (req, res) => {
  try {
    const findProducts = await product.find({});
    res.status(200).json(findProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const foundProduct = await product.findById(id);
    res.status(200).json(foundProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const madeProduct = await product.create(req.body);
    res.status(200).json(madeProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const foundProduct = await product.findByIdAndUpdate(id, req.body);
    if (!foundProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getProducts, getProduct, createProduct, updateProduct, deleteProduct };
