const { StatusCodes } = require('http-status-codes')
const {FlightService}=require('../services')

const {ErrorResponse,SuccessResponse}=require('../utils/common')
/*
 * POST :/airport
 * req-body: {modelNumer:'ok',capacity:20}
 */
const createFlight=async(req,res)=>{
    try{
        const flight=await FlightService.createFlight({
            flightNumber:req.body.flightNumber,
            aeroplaneId:req.body.aeroplaneId,
            departureAirportId:req.body.departureAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            arrivalTime:req.body.arrivalTime,
            departureTime:req.body.departureTime,
            price:req.body.price,
            totalSeats:req.body.totalSeats,
            boardingGate:req.body.boardingGate
        })
        SuccessResponse.data=flight
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    }
    catch(error){
        console.log(error)
        ErrorResponse.error=error
        resStatuseCode=error.statusCode?error.statusCode:StatusCodes.INTERNAL_SERVER_ERROR
        return res.status(resStatuseCode).json(ErrorResponse)
    }
}

const getAllFlights=async (req,res) => {
    try{
        const flights=await FlightService.getAllFlights(req.query)
        SuccessResponse.data=flights
        return res.status(StatusCodes.OK).json(SuccessResponse)
    }
    catch(error){
        console.log(error)
        ErrorResponse.error=error
        resStatuseCode=error.statusCode?error.statusCode:StatusCodes.INTERNAL_SERVER_ERROR
        return res.status(resStatuseCode).json(ErrorResponse)
    }
}
module.exports={
    createFlight,
    getAllFlights
}