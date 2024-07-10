import express from 'express';
import { createProductCategory, deleteProductCategory, updateProductCategory, getProductCategory, getProductCategories } from '../controllers/product_category.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createProductCategory);
router.delete('/delete/:id', verifyToken, deleteProductCategory);
router.post('/update/:id', verifyToken, updateProductCategory);
router.get('/get/:id', getProductCategory);
router.get('/get', getProductCategories);

export default router;
