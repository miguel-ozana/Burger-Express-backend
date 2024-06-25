import express from "express";
import cors from "cors";
import authRoute from "./routers/auth.route";
import productsRoute from './routers/products.route';

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use('/auth', authRoute);
app.use('/burguers', productsRoute);

app.listen( port, () => console.log(`Listening on http://localhost:${port}/`));
  