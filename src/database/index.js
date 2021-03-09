const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27018/noderest', 
    { useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true});

module.exports = mongoose;