const router=require('express').Router()

const conversationsServices=require('./conversations.services')

const passportJWT=require('../middlewares/auth.middleware')

const messageServices=require('../messages/messages.services')

const participantValidate=require('../middlewares/participantValidate.middleware')


router.route('/')
    .get(passportJWT.authenticate('jwt',{session:false}),conversationsServices.getAllConversations)
    .post(passportJWT.authenticate('jwt',{session:false}),conversationsServices.postConversation)

router.route('/me')
      .get(passportJWT.authenticate('jwt',{session:false}),conversationsServices.getMyConversations)

router.route('/:conversation_id')
      .get(passportJWT.authenticate('jwt',{session:false}),conversationsServices.getConversationById)
      .patch(passportJWT.authenticate('jwt',{session:false}),conversationsServices.patchConversation)
      .delete(passportJWT.authenticate('jwt',{session:false}),conversationsServices.deleteConversation)

router.route('/:conversation_id/messages')
      .get(passportJWT.authenticate('jwt',{session:false}),participantValidate,messageServices.getAllMesages)
      .post(passportJWT.authenticate('jwt',{session:false}),participantValidate,messageServices.postMessage)


//? obtener y eliminar por id
router.route('/:conversation_id/messages/:message_id')
      .get(passportJWT.authenticate('jwt',{session:false}),participantValidate,messageServices.getMessageById)
      .delete(passportJWT.authenticate('jwt',{session:false}),participantValidate,messageServices.deleteMessage)
module.exports=router