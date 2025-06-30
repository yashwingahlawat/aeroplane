const { StatusCodes } = require("http-status-codes");

const {ErrorResponse}=require('../utils/common');
const { AppError } = require("../utils/errors/app-error");
function validateCreateRequest(req,res,next){
    if(!req.body || !req.body.name){
        ErrorResponse.message='Something went wrong while creating an city'
        ErrorResponse.error=new AppError(["City name can't be fount correctly"],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    next()
}

function validateUpdateRequest(req,res,next){
    if(!req.body || !req.body.name){
        ErrorResponse.message='Something went wrong while updating an city'
        ErrorResponse.error=new AppError(["City name can't be fount correctly"],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    next()
}


module.exports={
    validateCreateRequest,
    validateUpdateRequest
}