const { StatusCodes } = require('http-status-codes')
const {AeroplaneService}=require('../services')
/*
 * POST :/aeroplanes
 * req-body: {modelNumer:'ok,capacity:20}
 */
const createAeroplane=async(req,res)=>{
    try{
        const aeroplane=await AeroplaneService.createAeroplane({
            modelNumber:req.body.modelNumber,
            capacity:Number(req.body.capacity)
        })
        return res.status(StatusCodes.CREATED).json({
            success:true,
            msg:'Successfully created an aeroplane',
            data:aeroplane,
            error:{}
        })
    }
    catch(err){
        // console.log(err,1);
        
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            msg:'Something went wrong',
            data:{},
            error:err
        })
    }
}

module.exports={
    createAeroplane
}