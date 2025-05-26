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
        if(error.name='TypeError'){
            throw new AppError('Cannot create a new aeroplane object',StatusCodes.INTERNAL_SERVER_ERROR)
        }
        throw error
    }
}

module.exports={createAeroplane}