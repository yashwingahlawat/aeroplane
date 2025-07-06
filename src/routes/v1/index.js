const express=require('express')
const router=express.Router()
const {InfoController,AeroplaneController,AirportController}=require('../../controllers')

const aeroplaneRoutes=require('./aeroplane-routes')

const airportRoutes=require('./airport-routes')

const flightRoutes=require('./flight-routes')

const cityRoutes=require('./city-routes')

router.get('/info',InfoController.info)

router.use('/aeroplanes',aeroplaneRoutes)

router.use('/cities',cityRoutes)

router.use('/airports',airportRoutes)

router.use('/flights',flightRoutes)


module.exports=router