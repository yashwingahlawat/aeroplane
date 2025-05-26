const { StatusCodes } = require("http-status-codes");

const {ErrorResponse}=require('../utils/common')
function validateCreateRequest(req,res,next){
    if(!req.body.modelNumber){
        ErrorResponse.message='Something went wrong while creating an aeroplane'
        ErrorResponse.error={explanation:"Model Number can't be fount correctly"}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    next()
}

module.exports={validateCreateRequest}