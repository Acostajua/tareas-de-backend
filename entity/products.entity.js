let products = [
  { id: 1, name: 'Producto 1', price: 100 },
  { id: 2, name: 'Producto 2', price: 150 },
  { id: 3, name: 'Producto 3', price: 200 }
];

export function getAllProducts() {
  return products;
}

export function getProductById(id) {
  return products.find(p => p.id === id);
}

export function createProduct(product) {
  const newProduct = { ...product, id: Date.now() };
  products.push(newProduct);
  return newProduct;
}

export function updateProduct(id, updatedData) {
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return null;
  products[index] = { ...products[index], ...updatedData };
  return products[index];
}

export function deleteProduct(id) {
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return false;
  products.splice(index, 1);
  return true;
}
