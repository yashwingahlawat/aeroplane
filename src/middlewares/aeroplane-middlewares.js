const { StatusCodes } = require("http-status-codes");

const {ErrorResponse}=require('../utils/common');
const { AppError } = require("../utils/errors/app-error");
function validateCreateRequest(req,res,next){
    if(!req.body || !req.body.modelNumber){
        ErrorResponse.message='Something went wrong while creating an aeroplane'
        ErrorResponse.error=new AppError(["Model Number can't be fount correctly"],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    next()
}

function validateUpdateRequest(req,res,next) {
    if(!req.body || (!req.body.modelNumber && !req.body.capacity)){
        ErrorResponse.message='Invalid updation request'
        ErrorResponse.error=new AppError(["Model Number or capacity needs to been entered"],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    next()
}
module.exports={
    validateCreateRequest,
    validateUpdateRequest
}