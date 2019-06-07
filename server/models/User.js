const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    registered_date: {
        type: Date,
        default: Date.now
    }
});

// eslint-disable-next-line no-undef
module.exports = User = mongoose.model('user', UserSchema);
