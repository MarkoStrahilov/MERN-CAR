const mongoose = require('mongoose')
const Schema = mongoose.Schema

const carSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    listingType: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        maxlength: [500, 'car description must not have more then 500 characters'],
        trim: true
    },
    images: [{
        type: String,
    }],
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review',
        trim: true
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    insurance: {
        type: String,
        trim: true
    },
    category: {
        type: String,
        trim: true
    },
    features: [{
        type: String,
        trim: true
    }],
    guidelines: [{
        type: String,
        trim: true
    }],
    location: {
        pickup: {
            type: String
        },
        return: {
            type: String
        },
    },
    offer: {
        type: Boolean
    },
    regularPrice: {
        type: Number
    },
    discountedPrice: {
        type: Number
    }
}, { timestamps: true })


const Car = mongoose.model('Car', carSchema)

module.exports = Car