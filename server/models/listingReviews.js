const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const listingReviewSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    reviewText: {
        type: String,
        required: true,
        trim: true
    },
    reviewRating: {
        type: Number,
        required: true
    }
})

const Review = mongoose.model('Review', listingReviewSchema);
module.exports = Review