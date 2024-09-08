const mongoose = require('mongoose');

const Schema = mongoose.Schema({
   level:String,
   email:String,
   location:String,
   proc_type:String,
   log:String,

},{
    versionKey: false,
    timestamps: {// "true" yazarsam aşşağıdaki kodlara gerek kalmaz
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

class AuditLogs extends mongoose.Model{

}

Schema.loadClass(AuditLogs);
module.exports = mongoose.model('AuditLogs',schema);