const path = require('path');
const addblog = require('../controllers/addblog')

const express = require('express');

const router = express.Router();

router.post( '/', addblog.addNewBlog )

module.exports = router;
