const { StatusCodes } = require('http-status-codes')
const {AeroplaneService}=require('../services')

const {ErrorResponse,SuccessResponse}=require('../utils/common')
/*
 * POST :/aeroplanes
 * req-body: {modelNumer:'ok',capacity:20}
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

const getAeroplanes=async (req,res) => {
    try{
        const aeroplanes=await AeroplaneService.getAeroplanes()
        SuccessResponse.data=aeroplanes
        return res.status(StatusCodes.OK).json(SuccessResponse)
    }
    catch(error){
        ErrorResponse.error=error
        return res.status(error.statusCode).json(ErrorResponse)
    }
}

/*
 * GET :/aeroplanes/:id
 * req-body: {}
 */
const getAeroplane=async (req,res) => {
    try{
        const aeroplanes=await AeroplaneService.getAeroplane(req.params.id)
        SuccessResponse.data=aeroplanes
        return res.status(StatusCodes.OK).json(SuccessResponse)
    }
    catch(error){
        ErrorResponse.error=error
        return res.status(error.statusCode).json(ErrorResponse)
    }
}

/*
 * DELETE :/aeroplanes/:id
 * req-body: {}
 */
const destroyAeroplane=async (req,res) => {
    try{
        const aeroplanes=await AeroplaneService.destroyAeroplane(req.params.id)
        SuccessResponse.data=aeroplanes
        return res.status(StatusCodes.OK).json(SuccessResponse)
    }
    catch(error){
        ErrorResponse.error=error
        return res.status(error.statusCode).json(ErrorResponse)
    }
}

/*
 * PATCH :/aeroplanes/:id
 * req-body: {modelNumer:'ok',capacity:20}
 */
const updateAeroplane=async (req,res) => {
    try{
        const aeroplanes=await AeroplaneService.updateAeroplane(req.params.id,req.body)
        SuccessResponse.data=aeroplanes
        return res.status(StatusCodes.OK).json(SuccessResponse)
    }
    catch(error){
        ErrorResponse.error=error
        return res.status(error.statusCode).json(ErrorResponse)
    }
}

module.exports={
    createAeroplane,
    getAeroplanes,
    getAeroplane,
    destroyAeroplane,
    updateAeroplane
}