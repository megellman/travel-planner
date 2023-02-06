const router = require('express').Router();
const { Location, Trips } = require('../../models');

// GET route /api/locations returns all location data
router.get('/', async (req, res) => {
try {
    const locationData = await Location.findAll({
        include: { model: Location },
    });
    res.status(200).json(locationData);
} catch (err) {
    res.status(500).json();
}
})

// POST route /api/locations creates location data 
router.post('/', async (req, res) => {
    try {
    const locationData = await Location.create({
        location_name: req.body.location_name,
    })
        res.status(200).json(locationData);
    } catch (err) {
        res.status(500).json();
    }
    })

// GET route /api/locations/:id returns a single location's data, with its associated trips
router.get('/:id', async (req, res) => {
    try {
        const locationData = await findByPk(req.params.id, {
            include: { model: Trips },
        });
        res.status(200).json(locationData);
    } catch (err) {
        res.status(500).json();
    }
    })

// DELETE route /api/locations/:id removes a location and any trips associated with it
router.delete('/:id', async (req, res) => {
    try {
        const locationData = await Location.destroy({
            where: {
                id: req.params.id,
            },
            include: { model: Trips },
        })
        res.status(200).json(locationData);
    } catch (err) {
        res.status(500).json();
    }
    })