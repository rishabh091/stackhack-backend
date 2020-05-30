const MongoClient = require('mongodb').MongoClient;

const url = "mongodb+srv://Rishabh:SyncMasterB1930@stackhack-gahij.mongodb.net/test?retryWrites=true&w=majority";

const update = (id) => {
    const query = {
        _id: id
    }
    const newValues = {
        progress: 'completed'
    }

    return new Promise((resolve, reject) => {
        MongoClient.connect(url, (err, db) => {
            if(err) {
                reject(err);     
            }

            const dbo = db.db('stackhack');
            dbo.collection('tasks').updateOne(query, { $set: newValues}, (err, result) => {
                if(err) {
                    reject(err);
                }

                resolve(true);
                db.close();
            });
        });
    });
}

module.exports = {
    update: update
}