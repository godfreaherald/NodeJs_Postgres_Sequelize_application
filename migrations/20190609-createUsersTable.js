'use strict'


module.exports = {
    
    up:(queryInterface,Sequelize)=>{
        return queryInterface.createTable('Users',{
            id:{
                allowNull:false,
                type:Sequelize.UUID,
                defaultValue:Sequelize.UUIDV4,
                primaryKey :true
            },
            username:{
                allowNull:true,
                type:Sequelize.STRING
            },
            firstname:{
                allowNull:true,
                type:Sequelize.STRING
            },
            lastname:{
                allowNull:true,
                type:Sequelize.STRING
            },
            email:{
                allowNull:false,
                type:Sequelize.STRING,
                unique:true
            },
            password:{
                allowNull:false,
                type:Sequelize.STRING
            },
            createdAt:{
                allowNull:false,
                type:Sequelize.DATE
            },
            updatedAt:{
                allowNull:false,
                type:Sequelize.DATE
            }
           


        });
    },
    down:(queryInterface,Sequelize)=>{
        return queryInterface.dropTable('Users');
    }
}

