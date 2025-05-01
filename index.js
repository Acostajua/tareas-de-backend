import express from 'express';
import bodyParser from 'body-parser';
import productRouter from './routes/products.routes.js';

const app = express();
app.use(bodyParser.json());
app.use(express.json());

app.use('/productos', productRouter);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`); //colocar en postman http://127.0.0.1:8000/productos
});