var UI = require('ui');
var ajax = require('ajax');

// Create a Card with title and sub.replace(",", "\n -");title
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
    console.log(typeof(data[0].sub));
    card.scrollable(true);
    var body = '';
    var name = '';
    data.map(function(info) {
      if(body.length > 0){
        body = body + '\n\n' + info.name;
      } else {
        body = info.name;
      }
      var meal = String(info.sub).split(',');
      body = body + '\n' + meal ;
    });
    card.body(body);
  },
  function(error) {
  }
);
