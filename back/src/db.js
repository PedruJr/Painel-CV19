const mongoClient = require("mongodb").MongoClient;
MongoClient.connect("mongodb://leonardovieira:l1e2o3v4@cluster0.d9sok.mongodb.net/painelcv-19"
    ,(error, connection) => {
        if(error) return console.log(error);
        global.connection = connection.db("painelcv-19")
    }
);

module.exports = {}