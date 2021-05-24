const express = require('express')
const router = express.Router()
const {ensureAuth} = require('../middleware/auth')

const Story = require('../models/Story')

//@desc about page
// @route GET/about
router.get('/',ensureAuth , (req,res) => {
    res.render('about')
})


module.exports = router