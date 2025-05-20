const {AeroplaneRepositor}=require('../repositories')

const aeroplaneRepositor=new AeroplaneRepositor()

const createAeroplane=async(data)=>{
    try{
        const aeroplane=await aeroplaneRepositor.create(data)
        return aeroplane
    }
    catch(err){

    }
}

module.exports={createAeroplane}