const express=require('express');
const router =express.Router();
const Doctor = require('../models/doctorModel')
const authMiddleware = require("../middlewares/authMiddelware");
router.post('/get-doctor-info-by-user-id',authMiddleware,async (req,res)=>{
    try{
        const doctor = await Doctor.findOne({_id:req.body.userId});
        if(!doctor){
            return res.status(200).send({message: "Doctor does not exist"});
        }
        res.status(200).send({
            data:doctor,
            success: true,
            message:"Doctor fetched successfully",
        })
    }catch(error){
        res.status(500).send({message:"Error getting doctor info",success:false,error});
    }
})
module.exports=router