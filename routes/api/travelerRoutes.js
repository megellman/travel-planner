const router = require('express').Router();
const { Traveler, Location, Trips } = require('../../models');

// GET route /api/travelers returns all traveler data without associated trips
router.get('/', async (req, res) => {
    try {
        const TravelerData = await Traveler.findAll({});
        res.status(200).json(TravelerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// POST route /api/travelers creates traveler data
router.post('/', async (req, res) => {
    try {
        const data = await Traveler.create({
            name: req.body.name,
            email: req.body.email,
        });
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json(err);
    }
});

// GET route /api/travellers/:id returns a single traveller's data with their associated trips and a list of locations
router.get('/:id', async (req, res) => {
    try {
        const TravelerData = await Traveler.findByPk(req.params.id, {
            include: [{ model: Trips, model: Location }],
        });

        if (!TravelerData) {
            res.status(404).json({ message: 'No Traveler found with that id!' });
            return;
        }

        res.status(200).json(TravelerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE route /api/travellers/:id removes a traveller and any trips associated with them 
router.delete('/:id', async (req, res) => {
    try {
        const TravelerData = await Traveler.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!TravelerData) {
            res.status(404).json({ message: 'No Traveler card found with that id!' });
            return;
        }

        res.status(200).json(TravelerData);
    } catch (err) {
        res.status(500).json(err);
    }
});