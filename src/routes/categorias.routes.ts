import { Router } from 'express';

import { CategoriesRepository } from "../Modules/cars/repositories/categoriesRepository";
import { PostgresCategoriesRepository } from '../Modules/cars/repositories/PostgresCategoriesRepository';
import { CreateCategoryService } from '../Modules/cars/services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();


categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const createCategoryService = new CreateCategoryService(categoriesRepository)

    createCategoryService.execute({name, description});
    return response.status(201).send()
})

categoriesRoutes.get("/", (request, response) => {
    const all = categoriesRepository.list();

    return response.json(all)
})

export { categoriesRoutes };