const mongoose= require('mongoose');
const ProjectSchema = mongoose.Schema({
categoryofwork:{type:String,required:true},
projectname:{type:String,required:true},
projectDescription:{type:String,required:true},
skillsRequired:[{type:String,required:true}],
budget:{type:Number,required:true},
Maxtime: {type:Number,required:true},
postedby:{type : _id, ref:'User'},
status: {type:boolean,required:true},
proposals:{
    proposalfrom: [{
        User_id : {type:_id,ref:'User'},
        timeNeeded :{type:String,required:true},
        priceperhour: {type:Number,required:true},
        proposalDescription:{type:String,required:true},
        proposalStatus:{type:boolean,required:true},
    }]

})
const Project = mongoose.model('Project',ProjectSchema)
module.exports = Project; 