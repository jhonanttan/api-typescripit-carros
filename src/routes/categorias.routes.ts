import { response, Router } from 'express';
import multer from 'multer';

import { CategoriesRepository } from "../Modules/cars/repositories/implementations/categoriesRepository";
import { createCategoryController } from '../Modules/cars/useCases/createCategory';
import { listCategoriesController } from '../Modules/cars/useCases/ListCategories';
import { importCategoryController } from '../Modules/cars/useCases/importCategory';


const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp",
})

const categoriesRepository = new CategoriesRepository();


categoriesRoutes.post("/", (request, response) => {
    console.log("Reload Funcionando")
    return createCategoryController.handle(request, response);
})

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController.handle(request, response);
})

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    return importCategoryController.handle(request, response);
})

export { categoriesRoutes };