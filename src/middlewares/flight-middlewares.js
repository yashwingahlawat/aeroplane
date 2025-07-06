const { StatusCodes } = require("http-status-codes");

const {ErrorResponse}=require('../utils/common');
const { AppError } = require("../utils/errors/app-error");
function validateCreateRequest(req,res,next){
    console.log(req.body)
    if(!req.body || !req.body.flightNumber){
        ErrorResponse.message='Something went wrong while creating an aeroplane'
        ErrorResponse.error=new AppError(["Airport flightNumber can't be fount correctly"],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body || !req.body.aeroplaneId){
        ErrorResponse.message='Something went wrong while creating an aeroplane'
        ErrorResponse.error=new AppError(["Airport aeroplaneId can't be fount correctly"],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body || !req.body.departureAirportId){
        ErrorResponse.message='Something went wrong while creating an aeroplane'
        ErrorResponse.error=new AppError(["departureAirportId can't be fount correctly"],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body || !req.body.arrivalAirportId){
        ErrorResponse.message='Something went wrong while creating an aeroplane'
        ErrorResponse.error=new AppError(["arrivalAirportId can't be fount correctly"],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body || !req.body.arrivalTime){
        ErrorResponse.message='Something went wrong while creating an aeroplane'
        ErrorResponse.error=new AppError(["arrivalTime can't be fount correctly"],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body || !req.body.departureTime){
        ErrorResponse.message='Something went wrong while creating an aeroplane'
        ErrorResponse.error=new AppError(["departureTime can't be fount correctly"],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body || !req.body.totalSeats){
        ErrorResponse.message='Something went wrong while creating an aeroplane'
        ErrorResponse.error=new AppError(["totalSeats can't be fount correctly"],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body || !req.body.price){
        ErrorResponse.message='Something went wrong while creating an aeroplane'
        ErrorResponse.error=new AppError(["price can't be fount correctly"],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    next()
}
module.exports={
    validateCreateRequest
}