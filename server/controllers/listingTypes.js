const Car = require('../models/car')

module.exports.listingsForSale = async(req, res) => {

    try {

        const foundCars = await Car.find({ listingType: 'sale' }).sort({ createdAt: -1 }).populate('owner')

        if (!foundCars.length) {

            return res.status(404).send({
                status: 'fail',
                message: 'cannot find cars for sale',
                data: null
            });

        }

        return res.status(200).send({
            status: 'success',
            message: 'Cars For Sale',
            data: { foundCars }
        })

    } catch (error) {

        return res.status(400).send({
            status: 'fail',
            message: 'something went wrong',
            data: null
        });


    }

}

module.exports.listingsForRent = async(req, res) => {

    try {

        const foundCars = await Car.find({ listingType: 'rent' }).sort({ createdAt: -1 }).populate('owner')

        if (!foundCars.length) {

            return res.status(404).send({
                status: 'fail',
                message: 'cannot find cars for rent',
                data: null
            });

        }

        return res.status(200).send({
            status: 'success',
            message: 'Cars For Sale',
            data: { foundCars }
        })

    } catch (error) {

        return res.status(400).send({
            status: 'fail',
            message: 'something went wrong',
            data: null
        });


    }

}