const MongoClient = require('mongodb').MongoClient;

const url = "mongodb+srv://Rishabh:SyncMasterB1930@stackhack-gahij.mongodb.net/test?retryWrites=true&w=majority";

const save = (data) => {
    const email = data.email;
    
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, (err, db) => {
            if(err) {
                reject(err);
            }

            const dbo = db.db('stackhack');
            dbo.collection('users').findOne({email: email}, (err, result) => {
                if(err) {
                    reject(err);
                }

                if(result !== null) {
                    reject(false);
                }
                else{
                    dbo.collection('users').insertOne(data, (err, result) => {
                        if(err) {
                            reject(err);
                        }

                        resolve(true);
                        db.close();
                    });
                }
            });
        });
    });
}

module.exports = {
    save: save
}