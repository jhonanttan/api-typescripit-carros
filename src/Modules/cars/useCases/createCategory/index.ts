import { CategoriesRepository } from "../../repositories/implementations/categoriesRepository";
import { CreategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";


const categoriesRepository = CategoriesRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)


const createCategoryController = new CreategoryController(
    createCategoryUseCase
);

export { createCategoryController }