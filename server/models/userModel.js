const mongoose =require('mongoose');
const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trime:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        match: [/.+\@.+\..+/, "Please provide a valid email address"]
    },
    password:{
        type:String,
        required:true,
        minlength: 8
    }
},{
    timestamps:true
})
const userModel =mongoose.model('users',userSchema);
module.exports =userModel