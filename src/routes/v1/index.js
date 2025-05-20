const express=require('express')
const router=express.Router()
const {InfoController,AeroplaneController}=require('../../controllers')

const aeroplaneRoutes=require('./aeroplane-routes')

router.get('/info',InfoController.info)

router.use('/aeroplanes',aeroplaneRoutes)


module.exports=router