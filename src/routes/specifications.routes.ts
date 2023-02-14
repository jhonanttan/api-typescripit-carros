import { Router } from 'express';

import { createSpecificationController } from '../Modules/cars/useCases/createSpacifications';

const specificationsRoutes = Router();


specificationsRoutes.post("/", (request, response) => {

    return createSpecificationController.handle(request, response);
})

export { specificationsRoutes }