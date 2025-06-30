const {CrudRepository}=require('./crud-repository')
const {City}=require('../models')
class CityRepositor extends CrudRepository{
    constructor(){
        super(City)
    }
}

module.exports=CityRepositor