const Users = require('./users.models')
const Messages=require('./messages.models')
const RecoveryPasswords = require('./recoveryPasswords.models')
const Conversations = require('./conversations.models')
const Participants = require('./participants.models')

const initModels = () => {
    //? FK = RecoveryPasswords
    Users.hasMany(RecoveryPasswords)
    RecoveryPasswords.belongsTo(Users)



    //?FK Messages
    Users.hasMany(Messages)
    Messages.belongsTo(Users)


    //? FK Messages
    Conversations.hasMany(Messages)
    Messages.belongsTo(Conversations)

    //? FK Participants
    Conversations.hasMany(Participants)
    Participants.belongsTo(Conversations)

    //? FK Conversations
    Users.hasMany(Conversations)
    Conversations.belongsTo(Users)

    //? FK Participants
    Users.hasMany(Participants)
    Participants.belongsTo(Users)

}

module.exports = initModels