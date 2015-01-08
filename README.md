# Range object in JavaScript

Range object allows you to eliminate loops (for/while/do=while) loops. To some extent the
Array object can be use for replacing loops ( map,forEach), but this involves initialising an array.
For big loops this can be expensive.

Range allows you to perform forEach, map, forEach, filter and reduce operations on a range of values.

rangetest.js gives will give you an idea of how to use this object.

Two implementations are provided here.  range.js defines a classic imperative implementation-- that is 
the methods  are defined using loops, while rangeFn.js provides a "functional" implementation using 
tail-recursive functions. ( In case of the latter, the stack may blow if the run-time doesn't provide
tail-call optimisation and hence presently it can be considered for studying these concepts and
 comparing the difference between the two approaches).


Both have the node.js exports object- to use it in a browser environment just comment out the exports 
object.


## Usage

1. Range(from, to [,increment])=> constructor
   
   'from', 'to' and 'increment' should be integral numbers.
   Range doesn't include the 'to' value.
   increment is an optional parameter-
   A. if 'from' is greater than 'to' then 'increment' should be negative
   B. Otherwise it should be a positive integer
   C. if 'increment' is not provided then it defaults to -1 i case of A 
      and 1 in case of B.
   
   Violation of A and B will result in an error being thrown.
   
   returns an object of type Range. ( Must be called with the 'new' keyword)

2. Range.prototype.forEach(fn)
   
   Behaves like the array forEach function.
   
   'fn' is the function that will be called with each element in the range
   in a sequence.
   
   Perfect for replacing loop bodies that are procedural and don't return anything
   
   Returns 'this' of the instance which was used to imvoke this function. 
  
 3.Range.prototype.map= function (fn){    

	Similar to the array map function.
	Applies the "fn" to each element in the range and returns an array which contains the
	resultant values.
	
	Eg.
	
	var ar= new Range(0,100).map(function(x){
	                             return x;
	                             }
	will return an array initialized with value [0,1,...99]
	
4. Range.prototype.reduce(fn[,initial])

Similar to Array.reduce.

The supplied function is called with two arguments- 'prev' and'curr' and must reduce a single value
If 'initial' is supplied then the 'fn' is called with 'initial' and the first element in the range, 
otherwise reduce begins with 'fn' being called with the first and second element. The result of each 
application of 'fn' is passed as the 'prev' in the subsequent calls.

Please refer to the rangetest.js for examples.


5.Range.prototype.filter(fn,[,mapfn])

Returns an array with those elements for which fn(element) returns true. 
If the optional 'mapfn' is provided, then that function is applied to all the
elements in the resultant array.

( When used with mapfn, it creates a crude version of comprehension.)

Please see examples in rangetest.js.


 
## Developing



### Tools
 
 Created using Eclipse   
