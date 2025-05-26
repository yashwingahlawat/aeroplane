const { where } = require('sequelize')
const {Logger}=require('../config')

class CrudRepository{
    constructor(model){
        this.model=model
    }
    async create(data){
        const response=await this.model.creat(data)
        return response
    }
    async destroy(data){
        try{
            const response=await this.model.destroy({
                where:{
                    id:data
                }
            })
            return response
        }
        catch(err){
            Logger.error('Somethhing went wrong in the CRUD Repo: destroy')
            throw err;
        }
    }
    async get(data){
        try{
            const response=await this.model.findByPK(data)
            return response
        }
        catch(err){
            Logger.error('Somethhing went wrong in the CRUD Repo: get')
            throw err;
        }
    }
    async getAll(){
        try{
            const response=await this.model.findAll()
            return response
        }
        catch(err){
            Logger.error('Somethhing went wrong in the CRUD Repo: getAll')
            throw err;
        }
    }
    async update(id,data){// data ->{col:val, ...}
        try{
            const response=await this.model.update(data,{
                where:{
                    id:id
                }
            })
            return response
        }
        catch(err){
            Logger.error('Somethhing went wrong in the CRUD Repo: update')
            throw err;
        }
    }
}

module.exports={CrudRepository}