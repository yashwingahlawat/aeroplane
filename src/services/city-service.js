const { StatusCodes } = require('http-status-codes')
const {CityRepositor}=require('../repositories')
const { AppError } = require('../utils/errors/app-error')

const cityRepositor=new CityRepositor()

const createCity=async (data) => {
    try{
        const city=await cityRepositor.create(data)
        return city
    }
    catch(error){
        if(error.name=='TypeError'){            
            throw new AppError('Cannot create a new city object',StatusCodes.INTERNAL_SERVER_ERROR)
        }
        else if(error.name=='SequelizeValidationError' || error.name=='SequelizeUniqueConstraintError'){    
            let explanation=[]
            error.errors.forEach(element => {
                explanation.push(element.message)
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST)
        }
        throw error
    }
}

const destroyCity=async(id)=>{
    try{
        const city=await cityRepositor.destroy(id)
        return city
    }
    catch(error){
        if(error.statusCode==StatusCodes.NOT_FOUND)
            throw new AppError('The city you requested to delete is not present',error.statusCode)
        throw new AppError('Cannot fetch data of all the cities',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

const updateCity=async(id,data)=>{
    try{
        const city=await cityRepositor.update(id,data)
        return city
    }
    catch(error){
        if(error.statusCode==StatusCodes.NOT_FOUND)
            throw new AppError('The city you requested to update is not present',error.statusCode)
        throw new AppError('Cannot fetch data of all the cities',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

const getCity=async(id)=>{
    try{
        const city=await cityRepositor.get(id)
        return city
    }
    catch(error){
        console.log(error)
        if(error.statusCode==StatusCodes.NOT_FOUND)
            throw new AppError('The city you requested does not exist.',error.statusCode)
        throw new AppError('Cannot fetch data of all the cities',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

const getCities=async()=>{
    try{
        const cities=await cityRepositor.getAll()
        return cities
    }
    catch(error){
        console.log(error)
        if(error.statusCode==StatusCodes.NOT_FOUND)
            throw new AppError('The city you requested does not exist.',error.statusCode)
        throw new AppError('Cannot fetch data of all the cities',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

module.exports={
    createCity,
    destroyCity,
    updateCity,
    getCity,
    getCities
}