function spinalCase(str) {

 	let regex = (/\s+|_+/g);
 	str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
	return str.replace(regex,"-");

}
console.log(
spinalCase('This Is Spinal_Tap'));

function spinalCaseUsingNonCapturingGrpups(str) {
 	
	str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

	return str.toLowerCase().split(/(?:_| )+/g).join("-");//?: = non capturing group

}
console.log(
spinalCaseUsingNonCapturingGrpups('This Is Spinal_Tap'));

function spinalCasePositiveLookAhead(str) {

 	return str.split(/\s|_|(?=[A-Z])/g).toLowerCase().join("-");

}
console.log(
spinalCasePositiveLookAhead('This Is Spinal_Tap'));
