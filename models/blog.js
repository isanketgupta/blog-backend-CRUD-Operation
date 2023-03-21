const express = require('express')
const mongoose = require('mongoose')

const Schema = mongoose.Schema


const blogSchema = new Schema({
    "headline":{
        type: String,
        required: true
    },
    "description":{
        type: String,
        required: true
    },
    "imageUrl":{
        type: String,
        required: true
    },
    "userId": {
        type: Schema.Types.Object,
        ref: 'user'
    }
})

// blogSchema.methods.getBlogs = function (userId) {
//     console.log("getting blog")

//     console.log(this)
//     const blogs = this.filter( blog => {
//         return this.userId.toSrting() === userId.toSrting() 
//     })
//     console.log(blogs)
// }

module.exports = mongoose.model('blog', blogSchema)