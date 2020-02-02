const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let avatarSchema = new Schema({
    name: String,
    stats:{
        level: Number
    }
});


module.exports = mongoose.model('Avatar', avatarSchema);