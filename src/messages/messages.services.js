const messageControllers=require('./messages.controllers')



const getAllMesages=(req,res)=>{
    const id=req.params.conversation_id 
    messageControllers.findAllMessages(id)
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>
            res.status(400).json({message:err.message }))
}




const getMessageById=(req,res)=>{
    const id=req.params.message_id 
    messageControllers.findMessageById(id)
        .then(data=>{
            if (data){
                res.status(200).json(data)
            }else{
                res.status(404).json({message:`Message with id:${id}, Not Found`})
            }
        })
        .catch(err=>
            {res(400).status.json({message:err.message})})
}



const postMessage=(req,res)=>{
    const userId=req.user.id 
    const conversationId=req.params.conversation_id 
    const {message}=req.body

    messageControllers.createMessage({
        userId,
        conversationId,
        message
    })
        .then(data=>{
            res.status(201).json(data)
        })
        .catch(err=>{
            res.status(400).json({message:err.message,fields:{
                message:'text'
            }})
        })
}

const deleteMessage=(req,res)=>{
    const id=req.params.message_id 
    messageControllers.removeMessage(id)
        .then(data=>{
            if(data){
                res.status(204).json()
            }else{
                res.status(404).json({message: `Message with id:${id}, Not Found`})
            }
        })
        .catch(err=>{
            res.status(400).json({message: err.message})
        })
}




module.exports={postMessage,getMessageById,deleteMessage,getAllMesages}