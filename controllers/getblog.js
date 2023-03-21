const User = require('../models/user')
const Blog = require('../models/blog')
const { request } = require('express');

exports.getAllBlog = (req, res , next ) => {
    // const blog = new Blog()

    // blog.getBlogs(req.user._id)
    // .find()
    // .then( blogs => {
    //     blogs.filter().map( 
    //         blogs => {
    //             return blogs.userId = req.user._id
    //         }
    //     )
    // })

    Blog
    .find({'userId' : req.user._id })
    .populate('userId')
    .then( result => {
        console.log(result)
        res.send(result)
    })
}


exports.deleteBlog = (req, res, next ) => {

    const id = req.params.id
    console.log('id->'+id)
    Blog
    .findByIdAndRemove(id)
    .then( result => {
        console.log(result)
    }).catch( err => {
        console.log(err)
    })
    // Blog
    // .deleteById('_id')

}

exports.editBlog = ( req, res, next) => {
    blogId = req.params.id
    Blog.findById(blogId).then( result => {
        console.log(result)
        return result
    }).catch( err => {
        console.log(err)
    })
}


exports.postEditBlog = (req, res, next) => {
        console.log('zsla')
    const blogId = req.body.blogId;
    const headine = req.body.headline;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;

    Blog
    .findById(blogId)
    .then( blog => {
        blog.headine = headine,
        blog.imageUrl = imageUrl,
        blog.description = description
        return blog.save()
    })
    .then( result => {
        res.send('product edited')
    })
    .catch( err => {
        console.log(err)
    })

}