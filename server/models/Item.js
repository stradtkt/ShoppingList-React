const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// eslint-disable-next-line no-undef
module.exports = Item = mongoose.model('item', ItemSchema);
