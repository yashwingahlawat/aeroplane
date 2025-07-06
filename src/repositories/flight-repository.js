const {CrudRepository}=require('./crud-repository')
const {Flight}=require('../models')
class FlightRepositor extends CrudRepository{
    constructor(){
        super(Flight)
    }
    async getAllFlights(customFilter,sortFilter) {
        const response=await Flight.findAll({
            where:customFilter,
            order:sortFilter
        })
        return response
    }
}

module.exports=FlightRepositor