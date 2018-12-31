
let log = console.log;

function diffArray(arr1, arr2) {
  var newArr = [];
  
   for (var i=0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1){
      newArr.push(arr1[i]);
    } 
  }
  // Looping through arr2 to find elements that do not exist in arr1
  for (var j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) === -1){
      // Pushing the unique to arr2 elements to the newArr    
      newArr.push(arr2[j]);
    } 
  }
  return newArr;
}
console.log(
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5,"pizza"]));//[ 4, 'pizza' ]




function diffArray2(arr1, arr2) {

	return arr1.concat(arr2).filter(item => !arr2.includes(item) || !arr1.includes(item));
}
console.log(
diffArray2([1,2,3,5,126], [1,2,2,3,4,"wagon"]));//[ 5, 126, 4, 'wagon' ]




function diffArray3(arr1, arr2) {
  
  function diff(a, b) {
    return a.filter(item => b.indexOf(item) === -1);
  }

	 return [
    ...diff(arr1, arr2),
    ...diff(arr2, arr1)
  ]
}
console.log(
diffArray2([1,2,3,5,126], [1,2,2,3,4,"spice"]));//[ 5, 126, 4, 'spice' ]
