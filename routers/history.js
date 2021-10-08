const express = require('express')
const router = express.Router()
const History = require('../models/history')

router.post('/addHistory', async(req,res) => {
    const task = new History({
        ...req.body
    })

    try {
        await task.save()
        res.status(200).send(task)
    }
    catch(e) {
        console.log(e)
        res.status(400).send({e})
    }

})

module.exports = router

