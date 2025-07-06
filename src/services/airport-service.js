const { StatusCodes } = require('http-status-codes')
const {AirportRepositor}=require('../repositories')
const { AppError } = require('../utils/errors/app-error')

const airportRepositor=new AirportRepositor()

const createAirport=async(data)=>{
    try{
        const airport=await airportRepositor.create(data)
        return airport
    }
    catch(error){
        if(error.name=='TypeError'){            
            throw new AppError('Cannot create a new airport object',StatusCodes.INTERNAL_SERVER_ERROR)
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

const getAirports=async()=>{
    try{
        const airports=await airportRepositor.getAll()
        return airports
    }
    catch(error){
        throw new AppError('Cannot fetch data of all the airports',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

const getAirport=async(id)=>{
    try{
        const airport=await airportRepositor.get(id)
        return airport
    }
    catch(error){
        if(error.statusCode==StatusCodes.NOT_FOUND)
            throw new AppError('The airport you requested is not present',error.statusCode)
        throw new AppError('Cannot fetch data of all the airports',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

const destroyAirport=async(id)=>{
    try{
        const airport=await airportRepositor.destroy(id)
        return airport
    }
    catch(error){
        if(error.statusCode==StatusCodes.NOT_FOUND)
            throw new AppError('The airport you requested to delete is not present',error.statusCode)
        throw new AppError('Cannot fetch data of all the airports',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

// const updateAirport=async(id,data)=>{
//     try{
//         const airport=await airportRepositor.update(id,data)
//         return airport
//     }
//     catch(error){
//         if(error.statusCode==StatusCodes.NOT_FOUND)
//             throw new AppError('The airport you requested to delete is not present',error.statusCode)
//         throw new AppError('Cannot fetch data of all the airports',StatusCodes.INTERNAL_SERVER_ERROR)
//     }
// }

module.exports={
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    // updateAirport
}