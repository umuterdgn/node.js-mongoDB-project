const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    role_name: {type:String, required:true},
    is_active:{type:Boolean, default:true},
    created_by:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true,
    },
},{
    versionKey: false,
    timestamps: {// "true" yazarsam aşşağıdaki kodlara gerek kalmaz
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

class Roles extends mongoose.Model{

}

Schema.loadClass(Roles);
module.exports = mongoose.model('roles',schema);