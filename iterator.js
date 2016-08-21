function makeIterator(array){
    var nextIndex = 0;
    
    return {
       next: function(){
           return nextIndex < array.length ?
               {value: array[nextIndex++], done: false} :
               {done: true};
       }
    }
}



var it = makeIterator([1,2,3,4,5])

var done = false;
while(!done) {
	array = it.next()
	if (array.done) break
	console.log(array)
	done = array.done
}

// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
