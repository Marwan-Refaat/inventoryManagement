const express = require('express')
const router = express.Router()
const Inventory = require('../models/inventory')

router.post('/addInventory', async(req,res) => {
    const inventory = new Inventory({
        ...req.body
    })

    try {
        await inventory.save()
        res.status(200).send(inventory)
    }
    catch(e) {
        console.log(e)
        res.status(400).send({e})
    }

})

module.exports = router

