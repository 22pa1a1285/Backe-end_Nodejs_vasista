const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firm:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Firm"
    }]
});

// Make sure this line is present to define the model
const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;  // Make sure you export the model like this
