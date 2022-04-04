const User = require('../models/user');
const Car = require('../models/car')

module.exports.getCarListings = async(req, res) => {

    try {

        res.send('get car listings')

    } catch (error) {

        res.send('error something went wrong')

    }



}

module.exports.getCarListing = async(req, res) => {

    try {

        const { id } = req.params

        const foundCarListing = await Car.findOne({ _id: id })

        if (!foundCarListing) {

            res.status(404).send({
                status: 'fail',
                message: "Can't find car listing with provided id",
                data: null
            })

        }

        res.status(200).send({
            status: 'success',
            message: 'GET car listing data',
            data: foundCarListing,
        })


    } catch (error) {

        res.status(404).send({
            status: 'fail',
            message: error,
            data: null
        })

    }

}

module.exports.createCarListing = async(req, res) => {

    try {

        const newCarListing = new Car(req.body)

        if (!newCarListing) {

            res.status(406).send({
                status: 'fail',
                message: error,
                data: null
            })

        }

        await newCarListing.save()

        res.status(200).send({
            status: 'success',
            message: 'successfuly created new car listing',
            data: newCarListing
        })

    } catch (error) {

        res.status(400).send({
            status: 'fail',
            message: error,
            data: null
        })


    }

}