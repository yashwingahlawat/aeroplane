const { StatusCodes } = require('http-status-codes')
const {CityService}=require('../services')

const {ErrorResponse,SuccessResponse}=require('../utils/common')

const createCity=async(req,res)=>{
    try{
        const city=await CityService.createCity({
            name:req.body.name,
        })
        SuccessResponse.data=city
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    }
    catch(error){
        ErrorResponse.error=error
        return res.status(error.statusCode).json(ErrorResponse)
    }
}

const destroyCity=async(req,res)=>{
    try{
        const city=await CityService.destroyCity(req.params.id)
        SuccessResponse.data=city
        return res.status(StatusCodes.OK).json(SuccessResponse)
    }
    catch(error){
        ErrorResponse.error=error
        return res.status(error.statusCode).json(ErrorResponse)
    }
}

const updateCity=async(req,res)=>{
    try{
        const city=await CityService.updateCity(req.params.id,req.body)
        SuccessResponse.data=city
        return res.status(StatusCodes.OK).json(SuccessResponse)
    }
    catch(error){
        ErrorResponse.error=error
        return res.status(error.statusCode).json(ErrorResponse)
    }
}

const getCity=async(req,res)=>{
    try{
        const city=await CityService.getCity(req.params.id)
        SuccessResponse.data=city
        return res.status(StatusCodes.OK).json(SuccessResponse)
    }
    catch(error){
        ErrorResponse.error=error
        return res.status(error.statusCode).json(ErrorResponse)
    }
}

const getCities=async(req,res)=>{
    try{
        const city=await CityService.getCities()
        SuccessResponse.data=city
        return res.status(StatusCodes.OK).json(SuccessResponse)
    }
    catch(error){
        ErrorResponse.error=error
        return res.status(error.statusCode).json(ErrorResponse)
    }
}

module.exports={
    createCity,
    destroyCity,
    updateCity,
    getCity,
    getCities
}