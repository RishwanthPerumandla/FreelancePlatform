const mongoose= require('mongoose');
const UserSchema = mongoose.Schema({
    name : {type:String,required: true},
    email : {type:String,required: true},
    phone_number : {type:Number, required: true},
    role : {type:String},
    photo_url : {type:String},
    joined :{type:Date.now},
    location : {type:String},
    education : {
        college : {type:String},
        nation : {type:String},
        major : {type:String},
        title : {type:String},
        major : {type:String},
        yearofgraduation : {type:Date}
    },
    skills : [{
        skillname : {type:String},
        experiencelevel : {type:String}
    }],
    certification : [{
        certificationname : {type:String},
        certificationfrom : {type:String},
        certifieddate : {type:Date}
    }],
    languages :[{type:String}],
    linkedaccounts :{
        google : {type:String},
        linkedin : {type:String},
        github : {type:String},
        instagram : {type:String}
    },
    industrydomain : {type:String},
    projects : [{
        projectid : {type:_id,ref:'Project'},
        rating : {
            ratingStar: {type:Number},
            ratingDescription : {type:String}
        }
    }
    ]

})

const User = mongoose.model('User',UserSchema)
module.exports = User; 