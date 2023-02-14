import { CategoriesRepository } from "../../repositories/categoriesRepository";
import { ICategoriesRepository, ICreateCategoryDTO } from "../../repositories/ICategoriesRepository";


interface IRequest {
    name: string;
    description: string;
}



class CreateCategoryUseCase {

    constructor(private categoriesRepository: ICategoriesRepository) {

    }

    execute({description, name}: IRequest): void {

        

        const categoryAlredyExists = this.categoriesRepository.findByName(name);

        if (categoryAlredyExists) {
            throw new Error("Categoria já existe!");    
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase }