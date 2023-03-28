const mongoose = require('mongoose')

mongoose.set('strictQuery',true)
mongoose.connect("mongodb+srv://Chaitanya012:uEEYLDPlUa999wEK@cluster0.0zsen34.mongodb.net/E-commerce-com?retryWrites=true&w=majority",{
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )