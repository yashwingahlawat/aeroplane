const express=require('express')

const router=express.Router()

const {AirportController}=require('../../controllers')

const {AirportMiddleware}=require('../../middlewares')

// api/v1/aeroplanes :POST
router.post('/',
    AirportMiddleware.validateCreateRequest,
    AirportController.createAirport)

// api/v1/Airports :GET
router.get('/',
    AirportController.getAirports)

// api/v1/Airports/:id :GET    
router.get('/:id',
    AirportController.getAirport)

// api/v1/Airports/:id :GET    
router.delete('/:id',
    AirportController.destroyAirport)

// api/v1/aeroplanes/:id :PATCH    
// router.patch('/:id',
//     AeroplaneMiddleware.validateUpdateRequest,
//     AeroplaneController.updateAeroplane)
module.exports=router