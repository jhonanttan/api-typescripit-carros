import { Router } from 'express';

import { CategoriesRepository } from "../Modules/cars/repositories/categoriesRepository";
import { createCategoryController } from '../Modules/cars/useCases/createCategory';
import { listCategoriesController } from '../Modules/cars/useCases/ListCategories';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();


categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
})

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController.handle(request, response);
})

export { categoriesRoutes };