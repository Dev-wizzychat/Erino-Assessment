const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/blue";

const connectToMongo = () => {
    mongoose
        .connect(mongoURI)
        .then(() => {
            console.log("Connect to Mongo");
        })
        .catch((err) => {
            console.log(err);
        });
};
module.exports = connectToMongo;