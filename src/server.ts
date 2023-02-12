import express from "express";

import { categoriesRoutes } from "./routes/categorias.routes";

const app = express();

app.use(express.json())

app.use("/categories", categoriesRoutes)

app.listen(3333, () => console.log("server is running"));
