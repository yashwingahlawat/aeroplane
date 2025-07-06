const {CrudRepository}=require('./crud-repository')
const {Airport}=require('../models')
class AirportRepositor extends CrudRepository{
    constructor(){
        super(Airport)
    }
}

module.exports=AirportRepositor