const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    role_id:{type:mongoose.SchemaTypes.ObjectId},
    permission:{type:String,required:true},
    created_by:{type:mongoose.SchemaTypes.ObjectId, required:true},
},{
    versionKey: false,
    timestamps: {// "true" yazarsam aşşağıdaki kodlara gerek kalmaz
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

class RolePrivileges extends mongoose.Model{

}

Schema.loadClass(RolePrivileges);
module.exports = mongoose.model('RolePrivileges',schema);