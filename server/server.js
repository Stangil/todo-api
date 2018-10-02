var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});
var Users = mongoose.model('Users',{
    email: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    }
})

var newUser = new Users({
    email: ' '
}) ;
 
newUser.save().then((doc)=>{
    console.log('Saved user', doc);
}, (e)=>{
    console.log('Unable  to save user', e);
});

// var aNewerTodo = new Todo({
//     text: 'Doing something'
// });

// aNewerTodo.save().then((doc)=>{
//     console.log('Saved todo', doc);
// }, (e)=>{
//     console.log('Unable  to save todo');
// });

//User
//email -require -trim - set type to a string min length to 1
