const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://fuckfourplus:fuckmmslab@ds147905.mlab.com:47905/bn-linebot';
// Database Name
const dbName = 'bn-linebot';
// Collection Name
const colName = 'Persons';

exports.findUser = function (userId, callback) {
    console.log(' userId = ' + userId + ' , dbName =' + dbName + " , colName" + colName);
    MongoClient.connect(url, (err, client) => {
        if (err) callback(err.message, null);
        else {
            const db = client.db(dbName);
            var query = {
                userId: userId
            }
db.collection(colName).findOne(query, (err, res) => {
                client.close();
                console.log("err == " + err);
                console.log("res == " + res);
                if (err) {
                    callback(err.message, null);
                }
                else {
                    console.log("Hello World");
                    callback(null, res);
                };
            });
        };
    });
};
exports.eventLog = (event, callback) => {
    MongoClient.connect(url, (err, client) => {
        if (err) callback(err.message, null);
        else {
            const db = client.db(dbName);
var query = {
                userId: event.source.userId
            };
db.collection(colName).find(query).toArray((err, res) => {
                if (err) console.log(err.message, null);
                else {
                    if (res.length) { //res is a array, if not find res is [], but if([]) is turem so use res.length.
                        var update = {
                            $push: {
                                eventLog: event
                            }
                        };
db.collection(colName).updateOne(query, update, (err, res) => {
                            if (err) callback(err.message, null);
                            //assert.equal(1, res.matchedCount);
                            //assert.equal(1, res.modifiedCount);
                            else {
                                client.close();
                                callback(null, res);
                            };
                        });
} else {
                        var doc = {
                            userId: event.source.userId,
                            registrationStatus: 0,
                            eventLog: [event],
                            block: false
                        };
db.collection(colName).insertOne(doc, (err, res) => {
                            if (err) callback(err.message, null);
                            //assert.equal(1, res.insertedCount);
                            else {
                                client.close();
                                callback(null, res);
                            };
                        });
                    };
                };
            });
        };
    });
};
exports.updateStatus = (userId, status, callback) => {
    MongoClient.connect(url, (err, client) => {
        if (err) callback(err.message, null);
        else {
            const db = client.db(dbName);
var query = {
                userId: userId
            };
var update = {
                $set: {
                    registrationStatus: status
                }
            };
db.collection(colName).updateOne(query, update, (err, res) => {
                if (err) callback(err.message, null);
                //assert.equal(1, res.matchedCount);
                //assert.equal(1, res.modifiedCount);
                else {
                    client.close();
                    callback(null, res.result);
                };
            });
        };
    });
};
exports.updateBNuserid = (userId, BNuserid, callback) => {
    MongoClient.connect(url, (err, client) => {
        if (err) callback(err.message, null);
        else {
            const db = client.db(dbName);
var query = {
                userId: userId
            };
var update = {
                $set: {
                    BNuserid: BNuserid
                }
            };
db.collection(colName).updateOne(query, update, (err, res) => {
                if (err) callback(err.message, null);
                //assert.equal(1, res.matchedCount);
                //assert.equal(1, res.modifiedCount);
                else {
                    client.close();
                    callback(null, res.result);
                };
            });
        };
    });
};
exports.updateGuestKey = (userId,guestKey,callback) => {
    MongoClient.connect(url, (err, client) => {
        if (err) callback(err.message, null);
        else {
            const db = client.db(dbName);
var query = {
                userId: userId
            };
var update = {
                $set: {
                    guestKey: guestKey
                }
            };
db.collection(colName).updateOne(query, update, (err, res) => {
                if (err) callback(err.message, null);
                //assert.equal(1, res.matchedCount);
                //assert.equal(1, res.modifiedCount);
                else {
                    client.close();
                    callback(null, res.result);
                };
            });
        };
    });
}
exports.updateAccessKey = (userId,accessKey,callback) => {
    MongoClient.connect(url, (err, client) => {
        if (err) callback(err.message, null);
        else {
            const db = client.db(dbName);
var query = {
                userId: userId
            };
var update = {
                $set: {
                    accessKey: accessKey
                }
            };
db.collection(colName).updateOne(query, update, (err, res) => {
                if (err) callback(err.message, null);
                //assert.equal(1, res.matchedCount);
                //assert.equal(1, res.modifiedCount);
                else {
                    client.close();
                    callback(null, res.result);
                };
            });
        };
    });
}
exports.updatePhone = (userId,phoneNumber,callback) => {
    MongoClient.connect(url, (err, client) => {
        if (err) callback(err.message, null);
        else {
            const db = client.db(dbName);
var query = {
                userId: userId
            };
var update = {
                $set: {
                    phoneNumber: phoneNumber
                }
            };
db.collection(colName).updateOne(query, update, (err, res) => {
                if (err) callback(err.message, null);
                //assert.equal(1, res.matchedCount);
                //assert.equal(1, res.modifiedCount);
                else {
                    client.close();
                    callback(null, res.result);
                };
            });
        };
    });
}

exports.insertNew = (event,callback) => {
    var doc = {
        userId: event.source.userId,
        registrationStatus: 0,
        eventLog: [event],
        block: false
    };
    db.collection(colName).insertOne(doc, (err, res) => {
        if (err) callback(err.message, null);
        //assert.equal(1, res.insertedCount);
        else {
            client.close();
            callback(null, res.result);
        };
    });
}
