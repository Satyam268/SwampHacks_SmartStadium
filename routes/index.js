var express = require('express');
var router = express.Router();
var fb = require('../public/javascripts/fb');
var constants = require("../integration/constants");


router.get('/', function(request, response, next) {
  fb.getFbData(constants.AccessToken, "&", 'me?fields=id', function(userID_data){
    console.log(userID_data);

    var parsedData =   JSON.parse(userID_data);
    var user_id = parsedData["id"];
    console.log(user_id);
    fb.getFbData(constants.AccessToken, "&", user_id+'/likes?limit=99', function(data){

      //saves likes into db
      /* MongoClient.connect("mongodb://alberta:gator@ds117849.mlab.com:17849/swamphacks_smartstadium", function (err, db) {
       if (err) throw err;
       var dbdata = JSON.parse(data);
       db.collection('UserLikes', function (err, collection) {
       collection.insert(dbdata);
       })
       });
       */

      console.log(data);
      response.send(data);
    });

  });
});

router.get('/getPathToStadium', function (request, response, next) {
  //gets seat from url and sends in the beacons to cross in order to reach destination
  response.send("[stand:1, seat:12]");
});

router.get('/advertise', function (req, res, next) {
  res.render('advertise');
});


router.get('/a', function(request, response, next){
  res.render('index');
});


/* GET home page. */

//me?fields=friends
//http://graph.facebook.com/me
//GET /v2.8/{user-id}/likes
//gets me id///me?fields=id


/*

 fb.getFbData(constants.AccessToken, "&", '/me?fields=birthday', function(data){
 //var bday = JSON.parse(data)["birthday"];

 // var athletes =  JSON.parse(data)[" "];
 console.log(data);
 response.send(data);

 });
 */


/* fb.getFbData(constants.AccessToken, "?", user_id + '/groups', function(data){
 console.log(data);
 response.send(data);
 });*/

/*fb.getFbData(constants.AccessToken, "&", 'fields=groups', function(data){
 console.log(data);
 response.send(data);
 });*/


//categories:  Product/Service, News/Media Website, Media/News Company,  Company, Local Business


module.exports = router;
