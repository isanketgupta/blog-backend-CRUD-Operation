const Blog = require('../models/blog')
const { request } = require('express');


exports.addNewBlog = ( req, res, next) => {
    // console.log('data')
    // res.end()
    // res.end()
    const headine = req.body.headline;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    console.log('data'+headine+imageUrl+description)

    const newBlog = new Blog({
        'headline' : headine,
        'imageUrl': imageUrl,
        'description': description,
        'userId': req.user._id
    })
    newBlog.save()
    res.end()
}


