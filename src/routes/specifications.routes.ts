import { Router } from 'express';
import { SpecificationrRepository } from '../Modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../Modules/cars/services/CreateSpecificationService';

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationrRepository()


specificationsRoutes.post("/", (request, response) => {

    const { name, description } = request.body

    const createSpecificationService = new CreateSpecificationService(
        specificationsRepository
    );
    

    createSpecificationService.execute({ name, description });

    return response.status(201).send();
})

export { specificationsRoutes }