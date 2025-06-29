const express=require('express')

const router=express.Router()

const {AeroplaneController}=require('../../controllers')

const {AeroplaneMiddleware}=require('../../middlewares')

// api/v1/aeroplanes :POST
router.post('/',
    AeroplaneMiddleware.validateCreateRequest,
    AeroplaneController.createAeroplane)

// api/v1/aeroplanes :GET
router.get('/',
    AeroplaneController.getAeroplanes)

// api/v1/aeroplanes/:id :GET    
router.get('/:id',
    AeroplaneController.getAeroplane)

// api/v1/aeroplanes/:id :GET    
router.delete('/:id',
    AeroplaneController.destroyAeroplane)

// api/v1/aeroplanes/:id :PATCH    
router.patch('/:id',
    AeroplaneMiddleware.validateUpdateRequest,
    AeroplaneController.updateAeroplane)
module.exports=router