const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Mongo connected at", conn.connection.host);
    } catch (error) {
        console.log("Error message", error);
    }
};

module.exports = connectDB;