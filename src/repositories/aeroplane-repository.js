const {CrudRepository}=require('./crud-repository')
const {Aeroplane}=require('../models')
class AeroplaneRepositor extends CrudRepository{
    constructor(){
        super(Aeroplane)
    }
}

module.exports=AeroplaneRepositor