const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.post('/signup', async(req,res) => {
    const user = new User({
        ...req.body
    })

    try {
        await user.save()
        res.status(200).send(user)
    }
    catch(e) {
        console.log(e)
        res.status(400).send({e})
    }

})

module.exports = router

