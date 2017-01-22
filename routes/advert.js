/**
 * Created by mypc on 1/21/2017.
 */
var express = require('express');
var router = express.Router();
var fb = require('../public/javascripts/fb');


router.get('/', function (req, res, next) {
    res.send("hi");
    //response.render('advertise');
});

router.get('/a', function (req, res, next) {
    res.send("hi");
    //response.render('advertise');
});



/*
db.collection('UserLikes',function(err,collection)
{
    var a = collection.find({},{ "data.name" : 1,"data.category":1}).toArray(function(err,returnResult)
    {
        if(err){
            console.log(err);
            return;
        }
        console.log(returnResult);
    });
})*/

module.exports = router;