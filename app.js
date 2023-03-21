const express = require('express');
const mongoose = require('mongoose');
const app = express();

const User = require('./models/user')
const getblog = require('./routes/getblog')
const postblog = require('./routes/postblog')

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use( ( req, res, next) => {
    console.log('data-body->'+JSON.stringify(req.body.headline))
    User.findById('64180e7bf4bf7435af44d946')
    .then( user => {
        req.user = user
        console.log('user'+req.user)
        next()
    })
    .catch( err => { 
        console.log(err)
    });
})


// app.use((req, res , next) => {
    
// })


app.use('/addblog', postblog )
app.use( getblog )



mongoose.connect('mongodb+srv://user2:LTHA8PaU7rYCFzFY@cluster0.l8xmgxg.mongodb.net/blog?retryWrites=true&w=majority')
.then( result=> {
    User.findOne()
    .then( user => {
        if (!user){
            const newuser = new User({
                name:'sanket',
                mail:'sanket@123'
            })
            newuser.save();
        }else{
            console.log(user)
        }
        app.listen(3000);
    })
})
.catch( err => {
    console.log('unable to connect');
    console.log(err);
})

// app.listen(3000);