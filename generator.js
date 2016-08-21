//var http = require('http');
var request = require("request");

var promise = request('http://localhost:3000/delay/3000', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body); 
        //callback(body)
    }
    else{
    	console.log(error, response.statusCode);
    }
});

console.log(promise)
return;

doDelay(1000, function (data) {
	console.log(data)
});

//////////////////////////////////////////
// simple request
function doDelay(delay, callback) {
	request('http://localhost:3000/delay/3000', function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	        //console.log(body); 
	        callback(body)
	    }
	    else{
	    	console.log(error, response.statusCode);
	    }
	});
}

/////////////////////////////////////////
// no generator, just nested calls
/*
console.log('send request')
request('http://localhost:3000/delay/1000', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body); 
		console.log('send request')
		request('http://localhost:3000/delay/3000', function (error, response, body) {
		    if (!error && response.statusCode == 200) {
		        console.log(body); 
		    }
		    else{
		    	console.log(error, response.statusCode);
		    }
		});

    }
    else{
    	console.log(error, response.statusCode);
    }
});
*/

// a little awkward
/*
var options = {
  host: 'localhost',
  port: 3000,
  path: '/'
};

http.get(options, function(resp){
  resp.on('data', function(chunk){
    //do something with chunk
    console.log(chunk)
  });
}).on("error", function(e){
  console.log("Got error: " + e.message);
});
*/

return;
/////////////////////////////////////////////

function* idMaker(){
  var index = 0;
  while(true)
    yield index++;
}


function* threeYields(){
  var retval = 0;
    console.log("inside before first yield: ")
    retVal = yield 100;
    console.log("inside after first yield: ", retVal)

    retval = yield 200;

    retval = yield 300;

}

var gen = threeYields();

var x
console.log("outside before first gen")
 console.log(gen.next(1)); // 0
// console.log("outside after first next")
 console.log(gen.next(200)); // 0
// console.log("outside after second next")
