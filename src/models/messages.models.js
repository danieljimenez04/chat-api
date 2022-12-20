const {DataTypes}=require('sequelize')

const db=require('../utils/database')

const Users=require('./users.models')

const Conversations=require('./conversations.models')

const Messages=db.define('messages',
{
    id:{
        type:DataTypes.UUID,
        primaryKey:true
    },
    message:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[2,255]
        }
    },
    userId:{
        type:DataTypes.UUID,
        allowNull:false,
        references:{
            key:'id',
            model:Users
        }
    },
    conversationId:{
        type:DataTypes.UUID,
        allowNull:false,
        references:{
            key:'id',
            model:Conversations
        }
    }
})


module.exports=Messages