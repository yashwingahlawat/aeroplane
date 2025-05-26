const { StatusCodes } = require('http-status-codes')
const {AeroplaneService}=require('../services')

const {ErrorResponse,SuccessResponse}=require('../utils/common')
/*
 * POST :/aeroplanes
 * req-body: {modelNumer:'ok,capacity:20}
 */
const createAeroplane=async(req,res)=>{
    try{
        const aeroplane=await AeroplaneService.createAeroplane({
            modelNumber:req.body.modelNumber,
            capacity:Number(req.body.capacity)
        })
        SuccessResponse.data=aeroplane
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    }
    catch(error){
        ErrorResponse.error=error
        return res.status(error.statusCode).json(ErrorResponse)
    }
}

module.exports={
    createAeroplane
}