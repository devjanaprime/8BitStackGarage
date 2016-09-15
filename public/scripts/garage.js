console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );

  // button to select a cars
  $( 'body' ).on( 'click', '.carSelect', function(){
    console.log( 'in body on click for carSelect class');
    // assemble object to send
    var selectInfo ={
      index: $( this ).attr( 'index' )
    }; // ed object
    // ajax call to get car
    $.ajax({
      type: 'POST',
      url: '/selectCar',
      data: selectInfo,
      success: function( data ){
        console.log( 'selected:', data );
      }
    }); // end ajax
  }); // end body on click for carSelect class

  // get cars and display on dom
  getCars();
});

var displayCars = function( cars ){
  console.log( 'in displayCars', cars );
  // display on dom
  var outDiv = $( '#outputDiv' );
  outDiv.empty();
  outDiv.append( '<ul>' );
  for (var i = 0; i < cars.length; i++) {
    outDiv.append( '<li><img src="' + cars[i].imageUrl + '">' + cars[i].year + ' ' + cars[ i ].make + ' ' + cars[ i ].model + '<button class="carSelect" index="' + i + '">Select Car</button>' );
  }
  outDiv.append( '</ul>' );
} // end display cars

var getCars = function(){
  console.log( 'in getCars' );
  // get cars from server
  $.ajax({
    url: '/getCars',
    type: 'GET',
    success: function( data ){
      console.log( data );
      displayCars( data );
    } // end success
  });
} // end getCars
