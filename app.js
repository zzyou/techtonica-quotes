var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');
var mongojs = require('mongojs');

var db = mongojs('quotesapp', ['users']);

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next){
    res.locals.errors = null;
    next();
});

app.use(expressValidator());

// var users = [
//     {
//         id: 1,
//         name: "Anonymous",
//         quote: "Meditate! Relaxation and self-reflection will help you focus and grow."
//     },
//     {
//         id: 2,
//         name: "Anonymous",
//         quote: "Everybody has imposter syndrome, some just hide it better."
//     },
//     {
//         id: 3,
//         name: "Anonymous",
//         quote: "Create the type of work culture you want."
//     }
// ];

app.get('/', function(req, res) {
    db.users.find(function(err, docs) {
        res.render('index', {
            users: docs
        });
    })
});

app.post('/users/add', function(req, res) {
    req.checkBody('name', 'Name is Required').notEmpty();
    req.checkBody('quote', 'Quote is Required').notEmpty();

    var errors = req.validationErrors();

    if (errors) {
        res.render('index', {
            users: users,
            errors: errors
        });
    } else {
        var newUser = {
            name: req.body.name,
            quote: req.body.quote
        };
        db.users.insert(newUser, function(err, result) {
            if (err) {
                console.log(err);
            }
            res.redirect('/');
        });
    }
});

app.listen(3000, function() {
    console.log('Server Started on Port 3000...');
})
