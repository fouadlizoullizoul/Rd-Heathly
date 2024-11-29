const jwt =require('jsonwebtoken')

module.exports =async (req,res,next)=>{
    try {
        const token = req.headers.authorization?.split(' ')[1]
        if(!token){
            return res.status(401).send({message:"Unauthorized",success:false})
        }
        jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
            if(err){
                return res.status(403).send({message:"Auth failed",success:false})
            }
            req.body.userId = decoded.id
            next()
        })
    } catch (error) {
        return res.status(401).send({message:"Auth Failed", success:false})
    }
 
}