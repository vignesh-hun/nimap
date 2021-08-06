var express = require('express');
const router=express.Router()

const productRoute = require('./v1/product');
const categoryRoute = require('./v1/category');


router.use('/product',productRoute)
router.use('/category', categoryRoute)

module.exports = router

