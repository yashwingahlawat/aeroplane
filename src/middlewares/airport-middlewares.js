const { StatusCodes } = require("http-status-codes");

const {ErrorResponse}=require('../utils/common');
const { AppError } = require("../utils/errors/app-error");
function validateCreateRequest(req,res,next){
    if(!req.body || !req.body.name){
        ErrorResponse.message='Something went wrong while creating an aeroplane'
        ErrorResponse.error=new AppError(["Airport name can't be fount correctly"],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body || !req.body.code){
        ErrorResponse.message='Something went wrong while creating an aeroplane'
        ErrorResponse.error=new AppError(["Airport code can't be fount correctly"],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body || !req.body.cityId){
        ErrorResponse.message='Something went wrong while creating an aeroplane'
        ErrorResponse.error=new AppError(["CityId can't be fount correctly"],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    next()
}
module.exports={
    validateCreateRequest
}