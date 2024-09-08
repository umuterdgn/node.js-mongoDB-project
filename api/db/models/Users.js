const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    email:{type:String, required:true},
    password:{type:String, required:true},
    is_active:{type:Boolean, default:true},
    first_name:String,
    last_name:String,
    phone_number:String,

},{
    timestamps: {// "true" yazarsam aşşağıdaki kodlara gerek kalmaz
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

class Users extends mongoose.Model{
     
}

Schema.loadClass(Users);
module.exports = mongoose.model('Users',schema);