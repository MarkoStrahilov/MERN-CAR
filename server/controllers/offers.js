const Car = require('../models/car')

module.exports.listingOffers = async(req, res) => {

    try {

        res.send('explore listings offers')

    } catch (error) {

        res.send(error)

    }

}