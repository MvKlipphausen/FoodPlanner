const
    mongoose = require('mongoose');

const connect = async (uri) => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Successfully connected to the database: " + uri);
    } catch (err) {
        console.log("Could not connect to the database", err);
        process.exit();
    };
    
};

module.exports = {
    connect
};