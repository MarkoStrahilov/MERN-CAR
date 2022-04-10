const Car = require('../models/car')

module.exports.listingOffers = async(req, res) => {

    try {

        const foundCars = await Car.find({ offer: true })

        if (!foundCars) {

            return res.status(404).send({
                status: 'fail',
                message: "no offers yet",
                data: null
            });

        }

        return res.status(200).send({
            status: 'success',
            messasge: 'car listing offers',
            data: { foundCars }
        })


    } catch (error) {


        return res.status(400).send({
            status: 'fail',
            message: "something went wrong",
            data: null
        });

    }

}