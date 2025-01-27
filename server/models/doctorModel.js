const mongoose = require("mongoose");
const doctorSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    feePerCunsultation: {
      type: Number,
      required: true,
    },
    status:{
      type: String,
      default: "pending"
    },
    availability:{
      type:[
        {
          day:{type:String,required:true},
          slots:{type:[String],default:[]},
        }
      ],
      default:[]
    }
  },
  {
    timestamps: true,
  }
);
const doctorModel = mongoose.model("doctors", doctorSchema);
module.exports = doctorModel;
