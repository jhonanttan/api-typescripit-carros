import { Specification } from "../model/Specification";

interface ICreatSpacificationDTO {
    name: string;
    description: string;

}

interface ISpecificationRepository {

    create({ description, name }: ICreatSpacificationDTO): void;
    findByName(name: string): Specification;
}

export { ISpecificationRepository, ICreatSpacificationDTO }