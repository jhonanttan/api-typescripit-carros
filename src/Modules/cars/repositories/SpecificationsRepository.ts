import { Specification, Specification } from "../model/Specification";
import { ISpecificationRepository, ICreatSpacificationDTO } from "./ISpecificantiosRepository";



class SpecificationrRepository implements ISpecificationRepository {

    private spacifications: Specification[];

    constructor() {
        this.spacifications = []
    }
    
    
    create({ description, name }: ICreatSpacificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        })

        this.spacifications.push(specification);
    }

    findByName(name: string): Specification {
        const specification = this.spacifications.find(
            (specification) => specification.name === name
             );
             return specification;
    }

}

export { SpecificationrRepository }