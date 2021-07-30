var express = require('express');
const router=express.Router()

const controller = require('../../controller/category')

router.post('/addCategory',controller.addCategory)
router.get('/getCategory',controller.getCategory)

module.exports = router