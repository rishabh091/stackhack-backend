const MongoClient = require('mongodb').MongoClient;

const url = "mongodb+srv://Rishabh:SyncMasterB1930@stackhack-gahij.mongodb.net/test?retryWrites=true&w=majority";

const addTask = (data) => {
    return new Promise((resolve, reject) => {

        MongoClient.connect(url, (err, db) => {
            if(err) {
                reject('Error in connecting to db');
            }

            let dbo = db.db('stackhack');
            dbo.collection('tasks').insertOne(data, (err, result) => {
                if(err) {
                    reject(err);
                }

                resolve(result);

                db.close();
            });
        });
    });
};

module.exports = {
    add: addTask
}