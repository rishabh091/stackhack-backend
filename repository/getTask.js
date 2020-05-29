const MongoClient = require('mongodb').MongoClient;

const url = "mongodb+srv://Rishabh:SyncMasterB1930@stackhack-gahij.mongodb.net/test?retryWrites=true&w=majority";

const getTask = () => {
    return new Promise((resolve, reject) => {

        MongoClient.connect(url, (err, db) => {
            if(err) {
                reject('Cannot connect to the database');
            }

            const dbo = db.db('stackhack');
            dbo.collection('tasks').find({}).toArray((err, data) => {
                if(err) {
                    reject(err);
                }

                resolve(data);
                db.close();
            });
        });
    });
}

module.exports = {
    get: getTask
}