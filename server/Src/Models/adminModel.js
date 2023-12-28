const mongoose = require('mongoose');

const adminData = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true,
        select: false
    },
    image: {
        type: String,
        require: true
    },
    role: {
        type: String,
        require: true
    }
});

const AdminDataModel = mongoose.model('admins', adminData);
module.exports = AdminDataModel;