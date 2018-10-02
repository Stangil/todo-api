// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        console.log('Unable to connect to mongodb server...');
    }
    console.log('Connected to mongodb server...');

    // db.collection('Todos').find({
    //     _id: new ObjectID("5bb2b432f1808e817cf1a345")
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=>{
    //     console.log('Unable to fetch todos', err);
    // });


    // db.collection('Todos').find().count().then((count)=>{//counts number of indexes
    //     console.log(`Todos count: ${count}`);
    // }, (err)=>{
    //     console.log('Unable to fetch todos', err);
    // });
    db.collection('Users').find({name:"Stan"}).count().then((count)=>{//counts number of specific indexes
        console.log(`Todos count: ${count}`);
    }, (err)=>{
        console.log('Unable to fetch todos', err);
    });
   // db.close();
});

