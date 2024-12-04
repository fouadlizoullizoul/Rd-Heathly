const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const authMiddleware = require("../middlewares/authMiddelware");
const Doctor = require('../models/doctorModel')
router.get('/get-all-doctors',authMiddleware,async (req,res)=>{
    try{
        const doctors = await Doctor.find({});
        res.status(200).send({
            data:doctors,
            success: true,
            messsage:"Doctors fetched successfully",
        })
    }catch(error){
        console.log(error);
        res.status(500).send({
            message: "Error applying authentication",
            success: false
        })
    }
})
router.get("/get-all-users",authMiddleware,async (req,res)=>{
    try{
        const users = await User.find({});
        res.status(200).send({
            data:users,
            success: true,
            messsage:"Users fetched successfully",
        })
    }catch(error){
        console.log(error);
        res.status(500).send({
            message: "Error applying authentication",
            success: false
        })
    }
})
router.post("/change-doctor-status",authMiddleware,async (req,res)=>{
    try{
        const {doctorId,status}=req.body
        const doctor=await Doctor.findByIdAndUpdate(doctorId,{status})
        const user=await User.findOne({_id:doctor.userId});
        const unseenNotifications = user.unseenNotifications;
        unseenNotifications.push({
          type: "new-docotor-request-changed",
          message: `Your doctor account has been ${status}`,
          onClickPath: "/notifications",
        });
        user.isDoctor = status === "approved" ? true :false
        await user.save()
        res.status(200).send({
            data:doctor,
            success: true,
            message:"Doctor status updated successfully",
        })
    }catch(error){
        console.log(error);
        res.status(500).send({
            message: "Error applying authentication",
            success: false
        })
    }
})
module.exports = router;
