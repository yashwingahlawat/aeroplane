const { StatusCodes } = require('http-status-codes')
const {FlightRepositor}=require('../repositories')
const { AppError } = require('../utils/errors/app-error')
const { compareTime } = require('../utils/helpers/datetime-helpers')
const { Op } = require('sequelize')

const flightRepositor=new FlightRepositor()

const createFlight=async(data)=>{
    try{
        if(compareTime(data.departureTime,data.arrivalTime))throw new AppError('Invalid Arrival and Departure time',StatusCodes.BAD_REQUEST)
        if(data.departureAirportId==data.arrivalAirportId)throw new AppError('Same Arrival and Departure Airport',StatusCodes.BAD_REQUEST)
        const flight=await flightRepositor.create(data)
        return flight
    }
    catch(error){
        if(error.name=='TypeError'){            
            throw new AppError('Cannot create a new flight object',StatusCodes.INTERNAL_SERVER_ERROR)
        }
        else if(error.name=='SequelizeValidationError'){    
            let explanation=[]
            error.errors.forEach(element => {
                explanation.push(element.message)
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST)
        }
        throw error
    }
}

const getAllFlights=async(query)=>{
    let customFilter={}
    let sortFilter=[]
    const endingTripTime=' 23:59:00'
    if(query.trips){
        [departureAirportId,arrivalAirportId]=query.trips.split('-')
        if(departureAirportId==arrivalAirportId)throw new AppError(`Arrival and Departure airport can't be same`,StatusCodes.BAD_REQUEST)
        customFilter.departureAirportId=departureAirportId
        customFilter.arrivalAirportId=arrivalAirportId
    }
    if(query.price){
        [minPrice,maxPrice]=query.price.split('-')
        customFilter.price={
            [Op.between]:[minPrice,maxPrice]
        }
    }
    if(query.travellers){
        customFilter.totalSeats={
            [Op.gte]:query.travellers
        }
    }
    if(query.tripDate){
        customFilter.departureTime={
            [Op.between]:[query.tripDate,query.tripDate+endingTripTime]
        }
    }
    if(query.sort){
        const params=query.sort.split(',')
        sortFilter=params.map(param=>param.split('_'))
    }
    try {
        const flights=await flightRepositor.getAllFlights(customFilter,sortFilter)
        return flights
    } catch (error) {
        throw new AppError('Cannot fetch data of all the flight',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

const getFlight=async(id)=>{
    try{
        const flight=await flightRepositor.get(id)
        return flight
    }
    catch(error){
        if(error.statusCode==StatusCodes.NOT_FOUND)
            throw new AppError('The flight you requested is not present',error.statusCode)
        throw new AppError('Cannot fetch data of all the aeroplanes',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

const updateSeats=async(data)=>{
    try{
        const flight=await flightRepositor.updateRemainingSeats(data.flightId,data.seats,data.dec)
        return flight
    }
    catch(error){
        if(error.statusCode==StatusCodes.NOT_FOUND)
            throw new AppError('The flight you requested is not present',error.statusCode)
        throw new AppError('Cannot fetch data of all the aeroplanes',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

module.exports={
    createFlight,
    getAllFlights,
    getFlight,
    updateSeats
}