const { StatusCodes } = require('http-status-codes')
const {AeroplaneRepositor}=require('../repositories')
const { AppError } = require('../utils/errors/app-error')

const aeroplaneRepositor=new AeroplaneRepositor()

const createAeroplane=async(data)=>{
    try{
        const aeroplane=await aeroplaneRepositor.create(data)
        return aeroplane
    }
    catch(error){
        if(error.name=='TypeError'){            
            throw new AppError('Cannot create a new aeroplane object',StatusCodes.INTERNAL_SERVER_ERROR)
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

const getAeroplanes=async()=>{
    try{
        const aeroplanes=await aeroplaneRepositor.getAll()
        return aeroplanes
    }
    catch(error){
        throw new AppError('Cannot fetch data of all the aeroplanes',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

const getAeroplane=async(id)=>{
    try{
        const aeroplane=await aeroplaneRepositor.get(id)
        return aeroplane
    }
    catch(error){
        if(error.statusCode==StatusCodes.NOT_FOUND)
            throw new AppError('The aeroplane you requested is not present',error.statusCode)
        throw new AppError('Cannot fetch data of all the aeroplanes',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

const destroyAeroplane=async(id)=>{
    try{
        const aeroplane=await aeroplaneRepositor.destroy(id)
        return aeroplane
    }
    catch(error){
        if(error.statusCode==StatusCodes.NOT_FOUND)
            throw new AppError('The aeroplane you requested to delete is not present',error.statusCode)
        throw new AppError('Cannot fetch data of all the aeroplanes',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

const updateAeroplane=async(id,data)=>{
    try{
        const aeroplane=await aeroplaneRepositor.update(id,data)
        return aeroplane
    }
    catch(error){
        if(error.statusCode==StatusCodes.NOT_FOUND)
            throw new AppError('The aeroplane you requested to delete is not present',error.statusCode)
        throw new AppError('Cannot fetch data of all the aeroplanes',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

module.exports={
    createAeroplane,
    getAeroplanes,
    getAeroplane,
    destroyAeroplane,
    updateAeroplane
}