const express=require('express');
const router =express.Router();
const Doctor = require('../models/doctorModel')
const authMiddleware = require("../middlewares/authMiddelware");
router.post('/get-doctor-info-by-user-id',authMiddleware,async (req,res)=>{
    try{
        const doctor = await Doctor.findOne({userId:req.body.userId});
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

router.post('/update-doctor-profile',authMiddleware,async (req,res)=>{
    try{
        const doctor = await Doctor.findOneAndUpdate({userId:req.body.userId},req.body)
        res.status(200).send({
            data:doctor,
            success: true,
            message:"Doctor profile update successfully",
        })
    }catch(error){
        res.status(500).send({message:"Error updated doctor info",success:false,error});
    }
})
module.exports=router