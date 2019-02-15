const log = console.log;

function whatIsInAName(collection, source) {

	let sourceKeys = Object.keys(source); // ['last'] keys

	return collection.filter(function(obj){
	  return sourceKeys.every(function(key){
		 return obj.hasOwnProperty(key) && obj[key] == source[key];
	  })	
	});	
};
console.log(
whatIsInAName([{ lalapalooza: "Romeo", capital:"France" }, 
{ something: "Mercutio", last: "Capulet" }, 
{ first: "Tybalt", last: "Capulet" }], 
{ last: "Capulet" }));


//////////////////////////////////////////////////////////////////////////////////////////////////////


function whatIsInAName2(collection, source) {

  let sourceKeys = Object.keys(source);
  console.log(sourceKeys); // ['last'] keys
  
  return collection.filter(function (obj) {
    for (let i=0;i<sourceKeys.length;i++){
        if(!obj.hasOwnProperty(sourceKeys[i]) || obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
        return false;
      }       
    }
    return true;
  });
}
console.log(
whatIsInAName2([{ lalapalooza: "Romeo", capital: "Montague" }, 
{ something: "Mercutio", another: "Capulet" }, 
{ first: "Tybalt", last: "Capulet" }], 
{last: "Capulet" }))

/////////////////////////////////////////////////////////////////////////////////////////////////////

function whatIsInAName3(collection, source) {

  let sourceKeys = Object.keys(source); // ['last'] keys
  
  return collection.filter(function (obj) {
		for(let key of sourceKeys){
			if(!obj.hasOwnProperty(key) || obj[key] !== source[key]){
				return false;
			}
		}
		return true;
  });
}
console.log(
whatIsInAName3([{ lalapalooza: "Romeo", capital: "Montague" }, 
{ something: "Mercutio", another: "Capulet" }, 
{ first: "Tybalt", last: "Capulet" }], 
{last: "Capulet" }));

///////////////////////////////////////////////////////////////////////////////////////////////

function whatIsInAName4(collection, source) {
  var srcKeys = Object.keys(source);

  return collection.filter(function (obj) {
    return srcKeys.map(function(key) {
        return obj.hasOwnProperty(key) && obj[key] === source[key];
      }).reduce(function(a, b) {
        return a && b;
      });
  });
}

// test here
console.log(
whatIsInAName4([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, 
{ first: "Tybalt", last: "Capulet" }], 
{ last: "Capulet" }));
