const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    role_id: {type:mongoose.SchemaTypes.ObjectId,required:true,},
    user_id:{type:mongoose.SchemaTypes.ObjectId,required:true,},
},{
    versionKey: false,
    timestamps: {// "true" yazarsam aşşağıdaki kodlara gerek kalmaz
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

class UserRoles extends mongoose.Model{

}

Schema.loadClass(UserRoles);
module.exports = mongoose.model('user_roles',schema);