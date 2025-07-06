const { StatusCodes } = require('http-status-codes')
const {AirportService}=require('../services')

const {ErrorResponse,SuccessResponse}=require('../utils/common')
/*
 * POST :/airport
 * req-body: {modelNumer:'ok',capacity:20}
 */
const createAirport=async(req,res)=>{
    try{
        const airport=await AirportService.createAirport({
            name:req.body.name,
            code:req.body.code,
            address:req.body.address,
            cityId:req.body.cityId,
        })
        SuccessResponse.data=airport
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    }
    catch(error){
        ErrorResponse.error=error
        return res.status(error.statusCode).json(ErrorResponse)
    }
}

const getAirports=async (req,res) => {
    try{
        const airports=await AirportService.getAirports()
        SuccessResponse.data=airports
        return res.status(StatusCodes.OK).json(SuccessResponse)
    }
    catch(error){
        ErrorResponse.error=error
        return res.status(error.statusCode).json(ErrorResponse)
    }
}

/*
 * GET :/airport/:id
 * req-body: {}
 */
const getAirport=async (req,res) => {
    try{
        const airports=await AirportService.getAirport(req.params.id)
        SuccessResponse.data=airports
        return res.status(StatusCodes.OK).json(SuccessResponse)
    }
    catch(error){
        ErrorResponse.error=error
        return res.status(error.statusCode).json(ErrorResponse)
    }
}

/*
 * DELETE :/airport/:id
 * req-body: {}
 */
const destroyAirport=async (req,res) => {
    try{
        const airports=await AirportService.destroyAirport(req.params.id)
        SuccessResponse.data=airports
        return res.status(StatusCodes.OK).json(SuccessResponse)
    }
    catch(error){
        ErrorResponse.error=error
        return res.status(error.statusCode).json(ErrorResponse)
    }
}

/*
 * PATCH :/airport/:id
 * req-body: {modelNumer:'ok',capacity:20}
 */
// const updateAirport=async (req,res) => {
//     try{
//         const airports=await AirportService.updateAirport(req.params.id,req.body)
//         SuccessResponse.data=airports
//         return res.status(StatusCodes.OK).json(SuccessResponse)
//     }
//     catch(error){
//         ErrorResponse.error=error
//         return res.status(error.statusCode).json(ErrorResponse)
//     }
// }

module.exports={
    createAirport,
    getAirport,
    getAirports,
    destroyAirport,
    // updateAirport
}