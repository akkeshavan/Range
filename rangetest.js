var Range=require("./rangeFn.js").Range;

console.log("Range(1,20");
var r1=new Range(1,20).forEach(function(x){
						console.log(x);
	});
console.log("Range(19,0)");
var r2=new Range(19,0).forEach(function(x){
	console.log(x);
});

console.log("Range(1,20,2)"); //range of numbers x>=1 and x<20  increments of 2
r1=new Range(1,20,2).forEach(function(x){
	console.log(x);
});

console.log("Range(19,0,2)"); //range of numbers x<=19 and x>0  increments of 2 => error
try {
	r1=new Range(19,0,2).forEach(function(x){
		console.log(x);
	});
}
catch (e){
	console.log(e);
}

console.log("Range(1,20,0)"); //range of numbers x>=1 and x<20  increments of 0 => error
try {
	r1=new Range(1,20,-1).forEach(function(x){
		console.log(x);
	});
}
catch (e){
	console.log(e);
}

console.log("Range(19,1,0)"); //range of numbers x<=19 and x>0  increments of 0 => error
try {
	r1=new Range(1,20,-1).forEach(function(x){
		console.log(x);
	});
}
catch (e){
	console.log(e);
}

//map
console.log("Map (x)=>x*x in Range(1,10)"); // array [1,4,9... ,81]
r1=new Range(1,10);
console.log(r1.map(function(x){
	return x*x;
}));

console.log("Map (x)=>x*x in Range(-1,-10)"); // array [1,4,9... ,81]
r1=new Range(-1,-10);
console.log(r1.map(function(x){
	return x*x;
}));

console.log("Map (x)=>x*x in Range(-1,-10,-2)"); // array [1,9,25.. ,81]
r1=new Range(-1,-10,-2);
console.log(r1.map(function(x){
	return x*x;
}));

//filter => returns an array ofitems that satisfy the condn fn

var odd=function(x) {return x%2;};
var even=function(x) {return x%2==0;};
var square=function(x) {return x*x;};
var print=function(x){ console.log(x)};

print("Odd numbers in Range(1,20"); // [1,3,...19];
r1=new Range(1,20);
print(r1.filter(odd));

print("Even numbers in Range(1,20"); // [1,3,...19];
 
print(r1.filter(even));

//filter and map 
// a second function can be sent to filter whihc will map the filtered elements to the result

print("Squares of odd numbers in Range(1,20"); //[1,9,25...,361]
print(r1.filter(odd,square));
print("Squares of odd numbers in Range(1,20"); //[4,16...,324]
print(r1.filter(even,square));

//fizzBuzz
print("Classic FizzBuzz");
var fbtest=function(x){
	var ret=x;
	ret+= (x%3==0)?" Fizz":"";
	ret+= (x%5==0)?" Buzz":"";
	return ret;
}
new Range(1,101).map(fbtest).forEach(print);

//Reduce
print("Rediuce Range (1,6"); // sum of 1..5 =15
r1=new Range(1,6);
print(r1.reduce(function(prev,cur){return prev+cur;}));

print("Reduce Range (1,6) with initial value set to 100 for reduce"); // initial value set t0 100 sum of 1..5 => 115
r1=new Range(1,6);
print(r1.reduce(function(prev,cur){return prev+cur;},100));
//Factorial
var fact=function (n){
	return new Range(1,n+1).reduce(function (prev,cur){
		return prev*cur;
	});
	/*
	 alternatively:
	 return new Range(n,0).reduce(function(prev,cur){
	 					return prev*cur;
	 				});
	 */

};

print("Fact (5)");
print(fact(5));
//fizzBuzz
print("Classic FizzBuzz");
var fbtest=function(x){
	var ret=x+ " ";
	ret+= (x%3==0)?"Fizz":"";
	ret+= (x%5==0)?"Buzz":"";
	print(ret);
}
new Range(1,31).forEach(fbtest);



