const {CrudRepository}=require('./crud-repository')
const {Flight,Aeroplane,Airport,City}=require('../models')
const { Sequelize } = require('sequelize')
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
}

module.exports=FlightRepositor