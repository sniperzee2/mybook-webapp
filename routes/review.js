const express = require('express')
const router = express.Router()
const {ensureAuth} = require('../middleware/auth')

const Review = require('../models/Review')

router.get('/' , ensureAuth,  (req,res) => {
    res.render('review/add')
})

router.post('/' ,ensureAuth, async(req,res) => {
    try {
        req.body.user = req.user.id
        await Review.create(req.body)
        res.redirect('review/viewreview')
    } catch (err) {
        console.error(err)
        res.render('./500')
    }
})

router.get('/viewreview' , ensureAuth,  async (req,res) => {
    try {
        const reviews = await Review.find ({status: 'publish'})
            .populate('user')
            .sort({createdAt: 'desc'})
            .lean()
        res.render('review/show',{
            reviews
        })
    } 
    catch (err) {
        console.log(err)
        res.render('./500')
    }
})




module.exports = router