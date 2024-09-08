const mongoose = require('mongoose');

const Schema = mongoose.Schema({
   is_active:{type:Boolean, default:true},
   created_by:{type:mongoose.SchemaTypes.ObjectId, required:true},
},{
    versionKey: false,
    timestamps: {// "true" yazarsam aşşağıdaki kodlara gerek kalmaz
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

class Categories extends mongoose.Model{

}

Schema.loadClass(Categories);
module.exports = mongoose.model('Categories',schema);