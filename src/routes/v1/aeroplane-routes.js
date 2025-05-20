const express=require('express')

const router=express.Router()

const {AeroplaneController}=require('../../controllers')

router.post('/',AeroplaneController.createAeroplane)

module.exports=router