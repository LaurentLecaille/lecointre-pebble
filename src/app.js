var UI = require('ui');
var ajax = require('ajax');

// Create a Card with title and subtitle
var card = new UI.Card({
  title:'Lecointre',
  subtitle:'Fetching...'
});

// Display the Card
card.show();

// Construct URL
var URL = 'http://lecointre.herokuapp.com/';

// Make the request
ajax(
  {
    url: URL,
    type: 'json'
  },
  function(data) {
    // Success!
    card.subtitle('');
    card.scrollable(true);
    card.body(data[0].name + '\n' +data[0].sub + '\n\n' + data[1].name + '\n' + data[1].sub+ '\n\n' + data[2].name + '\n' + data[2].sub + '\n\n' + data[3].name + '\n' + data[3].sub+ '\n\n' + data[4].name + '\n' + data[4].sub + + '\n\n' + data[5].name + '\n' + data[5].sub);
  },
  function(error) {
    // Failure!
    console.log('Failed fetching weather data: ' + error);
  }
);
