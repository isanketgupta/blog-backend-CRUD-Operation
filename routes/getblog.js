const express = require('express')

const getBlogContainer = require('../controllers/getblog')
const router = express.Router();

router.get('/', getBlogContainer.getAllBlog)

router.get('/deleteBlog/:id', getBlogContainer.deleteBlog )

router.get('/edit-blog/:id', getBlogContainer.editBlog)

router.post('/edit-blog/', getBlogContainer.postEditBlog)


module.exports = router