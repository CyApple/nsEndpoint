'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var MyTheme = new Module('myTheme');

console.log(__dirname);
/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
MyTheme.register(function(app, auth, database, circles, meanStarter) {

  //We enable routing. By default the Package Object is passed to the routes
  MyTheme.routes(app, auth, database, circles);

  //We are adding a link to the main menu for all authenticated users
  MyTheme.menus.add({
    title: 'myTheme example page',
    link: 'myTheme example page',
    roles: ['authenticated'],
    menu: 'main'
  });
   app.set('views', __dirname + '/server/views');
  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    MyTheme.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    MyTheme.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    MyTheme.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return MyTheme;
});

    var express = require('express'); 
    var app = express(); 
    var bodyParser = require('body-parser');
    var multer = require('multer');

    app.use(function(req, res, next) { //allow cross origin requests
        res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    /** Serving from the same express Server
    No cors required */
    console.log(__dirname);
    app.use('/static', express.static(__dirname + '/client'));
    app.use(bodyParser.json());  

    var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, '../../');
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
        }
    });

    var upload = multer({ //multer settings
                    storage: storage
                }).single('file');

    /** API path that will upload the files */
    app.post('/upload', function(req, res) {
        upload(req,res,function(err){
            if(err){
                 res.json({error_code:1,err_desc:err});
                 return;
            }
             res.json({error_code:0,err_desc:null});
        });
    });

app.listen(3001);

