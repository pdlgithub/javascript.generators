var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.get('/delay/*', function (req, res) {
	delay = req.params[0]
	console.log('hit delay()', delay)

	setTimeout(function() {
		console.log('back from delay')
		res.send('Hello from Delay - we delayed ' + delay);
	}, delay);
  
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});