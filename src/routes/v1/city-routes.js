const express=require('express')

const router=express.Router()

const {CityMiddleware}=require('../../middlewares')

const {CityController}=require('../../controllers')

router.post('/',CityMiddleware.validateCreateRequest,CityController.createCity)

router.delete('/:id',CityController.destroyCity)

router.patch('/:id',CityMiddleware.validateUpdateRequest,CityController.updateCity)

router.get('/:id',CityController.getCity)

router.get('/',CityController.getCities)

module.exports=router