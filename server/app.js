var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var urlencodedParser = bodyParser.urlencoded( { extended: false } );
var port = process.env.PORT || 8080;

// spin up server
app.listen( port, function(){
  console.log( 'server up on ' + port );
});

// base url
app.get( '/', function( req, res ){
  console.log( 'base url hit' );
  res.sendFile( path.resolve( 'public/index.html' ) );
}); // end base url

app.get( '/getCars', function( req, res ){
  console.log( 'get cars hit' );
  return res.json( cars );
});

app.post( '/selectCar', urlencodedParser, function( req, res ){
  console.log( 'seletCar hit', req.body );
  var selectedCar = cars[ req.body.index ];
  res.send( selectedCar );
});

// static folder
app.use( express.static( 'public' ) );

// hard coded test array
var cars=[
  { year: 1992, make: 'Dodge', model: 'Viper', imageUrl:'http://assets.hemmings.com/story_image/412621-1000-0.jpg' },
  { year: 1986, make: 'Lamborghini', model: 'Countach', imageUrl:'http://gtspirit.com/wp-content/uploads/2014/01/Lamborghini-Countach-LP5000-QV-1.jpg' },
  { year: 1985, make: 'Alpha Romeo', model: 'Spider', imageUrl: 'http://www.skunkriverrestorations.com/wp-content/uploads/2014/01/YY1A3063.jpg' }
]; // end hard coded test array
