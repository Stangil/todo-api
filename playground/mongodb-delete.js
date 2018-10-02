// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        console.log('Unable to connect to mongodb server...');
    }
    console.log('Connected to mongodb server...');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    //deleteOne deletes first item it sees that meets criteria then stops
        // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>{
        //     console.log(result);
        // });
    //findOneAndDelete gets object back (returns) and deletes it
        // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
        //     console.log(result);
        // });


        // db.collection('Users').deleteMany({name: 'Stan'}).then((result)=>{
        //     console.log(result);
        // });

        db.collection('Users').findOneAndDelete({_id: new ObjectID("5bb280e07bd2a829e1813bf6")}).then((result)=>{
            console.log(result);
        });

   // db.close();
});

//ObjectId("5bb280e07bd2a829e1813bf6")