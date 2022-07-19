const User = require('../models/user');
const Car = require('../models/car')

module.exports.getCarListings = async(req, res) => {

    try {

        const queryObject = {...req.query }

        const advancedFields = ['page', 'sort', 'limit', 'fields']

        advancedFields.forEach(field => delete queryObject[field])

        const query = Car.find(queryObject);

        if (!query) {

            return res.status(404).send({
                status: 'fail',
                message: "cannot find any cars",
                data: null
            })

        }

        let foundCars = await query;

        if (!foundCars.length) {

            return res.status(404).send({
                status: 'fail',
                message: "cannot find any cars",
                data: null
            })

        }

        return res.status(200).send({
            status: 'success',
            dataLength: foundCars.length,
            data: { foundCars },
        })

    } catch (error) {

        return res.status(400).send({
            status: 'fail',
            message: error,
            data: null
        })

    }

}

module.exports.getCarListing = async(req, res) => {

    try {

        const { id } = req.params

        const foundCarListing = await Car.findOne({ _id: id }).populate('owner')

        if (!foundCarListing) {

            return res.status(404).send({
                status: 'fail',
                message: "Can't find car listing with provided id",
                data: null
            })

        }

        return res.status(200).send({
            status: 'success',
            message: 'GET car listing data',
            data: foundCarListing,
        })


    } catch (error) {

        return res.status(404).send({
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

module.exports.saveCarLising = async() => {

    try {

        const foundUser = await User.findOne({ _id: req.params.userId })
        const foundCarListing = await Car.findOne({ _id: req.params.carId })

        if (!foundUser && !foundCarListing) {

            res.status(400).send({
                status: 'fail',
                message: 'Cannot find the User or Car listing',
            })

        }


        if (foundUser.saveCarLising.includes(foundCarListing._id)) {

            res.status(400).send({
                status: 'fail',
                message: 'This listing has been already saved',
            })

        } else {

            await User.updateOne(foundUser, { $push: { saveCarLising: foundCarListing._id } })

        }

        res.status(200).send({
            status: 'success',
            message: 'Car Listing has been saved',
            data: foundCarListing,
        })

    } catch (error) {

        res.status(400).send({
            status: 'fail',
            message: error,
            data: null
        })

    }

}

module.exports.unSaveCarListing = async() => {

    try {

        const foundUser = await User.findOne({ _id: req.params.userId })
        const foundCarListing = await Car.findOne({ _id: req.params.carId })

        if (!foundUser && !foundCarListing) {

            res.status(400).send({
                status: 'fail',
                message: 'Cannot find the User or Car listing',
            })

        }


        if (foundUser.saveCarLising.includes(foundCarListing._id)) {

            await User.updateOne(foundUser, { $pull: { saveCarLising: foundCarListing._id } })

        } else {

            res.status(400).send({
                status: 'fail',
                message: 'This listing has not been saved yet',
            })


        }

        res.status(200).send({
            status: 'success',
            message: 'Car Listing is not longer saved',
            data: foundCarListing,
        })

    } catch (error) {

        const { message } = error

        res.status(400).send({
            status: 'fail',
            message: message,
        })

    }

}