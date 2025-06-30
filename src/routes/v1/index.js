const express=require('express')
const router=express.Router()
const {InfoController,AeroplaneController}=require('../../controllers')

const aeroplaneRoutes=require('./aeroplane-routes')

const cityRoutes=require('./city-routes')

router.get('/info',InfoController.info)

router.use('/aeroplanes',aeroplaneRoutes)

router.use('/cities',cityRoutes)

module.exports=router