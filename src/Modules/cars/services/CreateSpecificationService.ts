import { ISpecificationRepository } from "../repositories/ISpecificantiosRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {

    constructor(private specificationsRepository: ISpecificationRepository) {}


    execute({name, description}: IRequest): void {
        const specificationAlredyExists = this.specificationsRepository.findByName(name);

        if(specificationAlredyExists) {
            throw new Error("Especificação já existe!");    
        }

        this.specificationsRepository.create({
            name,
            description,
        })
    }


}

export { CreateSpecificationService }