const {CrudRepository}=require('./crud-repository')
const {Flight,Aeroplane,Airport,City}=require('../models')
const { Sequelize } = require('sequelize')
const { parseBool } = require('../utils/helpers/boolean-heplers')
const db=require('../models')
const { addRowLockOnFlights } = require('./queries')

class FlightRepositor extends CrudRepository{
    constructor(){
        super(Flight)
    }
    async getAllFlights(customFilter,sortFilter) {
        const response=await Flight.findAll({
            where:customFilter,
            order:sortFilter,
            include:[
                {
                    model:Aeroplane,
                    require:true,
                    as:'aeroplaneDetail'
                },
                {
                    model:Airport,
                    require:true,
                    as:'departureAirport',
                    on:{
                        col1:Sequelize.where(Sequelize.col('Flight.departureAirportId'),'=',Sequelize.col('departureAirport.code'))
                    },
                    include:{
                        model:City,
                        require:true
                    }
                },
                {
                    model:Airport,
                    require:true,
                    as:'arrivalAirport',
                    on:{
                        col1:Sequelize.where(Sequelize.col('Flight.arrivalAirportId'),'=',Sequelize.col('arrivalAirport.code'))
                    },
                    include:{
                        model:City,
                        require:true
                    }
                }
            ]
        })
        return response
    }
    
    async updateRemainingSeats(flightId,seats,dec=true) {
        await db.sequelize.query(addRowLockOnFlights(flightId));
        const flight=await Flight.findByPk(flightId)
        if(parseBool(dec))await flight.decrement('totalSeats',{by:seats})
        else await flight.increment('totalSeats',{by:seats})
        const response=await Flight.findByPk(flightId)
        return response
    }
}

module.exports=FlightRepositor