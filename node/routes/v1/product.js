var express = require('express');
const router=express.Router()

const controller = require('../../controller/product')

router.post('/addProduct',controller.addProduct)
router.get('/getProduct',controller.getProduct)

module.exports = router