const express = require('express');
const Model = require('../models/model');
const router = express.Router();



//Adding a person
router.post('/', async (req, res) => {
    const data = new Model({
                name: req.body.name
            })
        
            try {
                const dataToSave = await data.save();
                res.status(200).json(dataToSave)
            }
            catch (error) {
                res.status(400).json({ message: error.message })
            }
        });
//Fetching details of a person
router.get('/:user_id', async (req, res) => {
    try {
        const user_id = req.params.id;
        const data = await Model.findById(req.params.user_id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
    });

//Update the  details of a person
router.patch('/:user_id', async (req, res) => {
    try {
        const user_id = req.params.user_id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            user_id, updatedData, options
        )
 
        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete a person
router.delete('/:user_id', async (req, res) => {
    try {
        const user_id = req.params.user_id;
        const data = await Model.findByIdAndDelete(user_id)
        res.send(`The Person with the ${data.id} id has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;