let log = console.log;

function destroyer(arr) {
  
	var args = Array.prototype.slice.call(arguments);
	//used this method ^^^^ to create an array of the second argument

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
	// ^^^^ deletes the undefined spaces that are left after delete
}
console.log(destroyer([1, 2, 3, 75,"hemp", 2, 3,69],1,2,3,8));

//Intermediate solutions

function destroyer(arr) {
  var args = Array.from(arguments).slice(1);
	/*creates an array of arguments using 
	Array.prototype.slice.call() and stores it in the variable args.
	The slice() method on args starting from the second index, 1,
	This separates the arguments used for filtering into their own array of args.
	
	*/
  return arr.filter(function(val) {
    return !args.includes(val);
  });
}
console.log(destroyer([1, 2, 3, 75,"hemp", 2, 3,69],1,2,3,8));

function restOperatorWay(arr,...restOfArgs) {
  //using rest operator to get the rest of the arguments on an array 
  return arr.filter(function(val) {
    return !restOfArgs.includes(val);
  });
}
console.log(restOperatorWay([1, 2, 3, 75,"hemp", 2, 3,69],1,2,3,8));


const advanced = (arr, ...args) => arr.filter(i => !args.includes(i));
console.log(advanced([1, 2, 3, 75,"hemp", 2, 3,69],1,2,3,8));



