const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contactDetailsSchema = new Schema({
    phoneNumber: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    }
}, { timestamps: true })

const ContactDetails = mongoose.model('ContactDetails', contactDetailsSchema)
module.exports = ContactDetails