const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const notActiveSchema = new Schema({
    disabledAccount: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const NotActiveAccounts = mongoose.model('NotActiveAccounts', notActiveSchema)
module.exports = NotActiveAccounts