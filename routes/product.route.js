import express from 'express'
const router = express.Router();
import {getProducts, getProduct, createProduct, updateProduct, deleteProduct} from '../controllers/product.controller.js'

// Get all products
router.get('/', getProducts);

// Get specific product
router.get('/:id', getProduct);

// Create product
router.post('/', createProduct);

// Update a product
router.put('/:id', updateProduct);

// Deletes a product
router.delete('/:id', deleteProduct)

export default router;
