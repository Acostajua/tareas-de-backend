import express from 'express';
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} from '../entity/products.entity.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json(getAllProducts());
});

router.get('/:id', (req, res) => {
  const product = getProductById(Number(req.params.id));
  if (!product) return res.status(404).json({ error: 'Producto no encontrado' });
  res.json(product);
});

router.post('/', (req, res) => {
  const { name, price } = req.body;
  if (!name || price == null) return res.status(400).json({ error: 'Datos inválidos' });
  const newProduct = createProduct({ name, price });
  res.status(201).json(newProduct);
});

router.put('/:id', (req, res) => {
  const updated = updateProduct(Number(req.params.id), req.body);
  if (!updated) return res.status(404).json({ error: 'Producto no encontrado' });
  res.json(updated);
});

router.delete('/:id', (req, res) => {
  const deleted = deleteProduct(Number(req.params.id));
  if (!deleted) return res.status(404).json({ error: 'Producto no encontrado' });
  res.json({ message: 'Producto eliminado correctamente' });
});

export default router;
