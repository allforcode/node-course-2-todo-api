// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect mongodb service', error);
    }
    console.log('Connected to mongodb service');

    // db.collection('Todos').insertOne({
    //      text: 'connecting for us',
    //      success: true
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert mongodb', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));

    // });

    // db.collection('Users').insertOne({
    //     name: 'Paul',
    //     age: 33,
    //     location: 'Auckland'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert mongodb', err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());

    // });

    db.close();
});