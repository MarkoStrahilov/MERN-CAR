const mongoose = require('mongoose');
const crypto = require('crypto')
const passportLocalMongoose = require('passport-local-mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    accountImage: {
        type: String,
    },
    accountType: {
        type: String,
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }],
    contactDetails: {
        type: Schema.Types.ObjectId,
        ref: 'ContactDetails'
    },
    carListings: [{
        type: Schema.Types.ObjectId,
        ref: 'Car'
    }]
}, { timestamps: true })

userSchema.plugin(passportLocalMongoose)

userSchema.methods.createPasswordResetToken = function() {

    const resetToken = crypto.randomBytes(32).toString('hex')

    this.passwordResetToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');

    this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

    return resetToken;
}

const User = mongoose.model('User', userSchema);

module.exports = User;