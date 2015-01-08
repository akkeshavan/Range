var Range=function (from,to, increment){
	if(typeof(from) !="number"
		|| typeof(to) !="number")
		throw "Range() args 'from' and 'to' must be of type number";
	
		
	this.from=from;
	this.to=to;
	this.negative=this.from>this.to;
	 
	if(this.negative && (increment && increment>0))
		throw "Ranges with decreasing elements must have 'increment' less than 0";
	else if(!this.negative && (increment && increment<0))
		throw "Ranges with increasing numbers must have 'increment' (3rd arg) > 0";
	this.inc=increment || (this.negative?-1:1);
 
	this.current=this.from;
}

Range.prototype.forEach=function (fn){
	 var elem=this.first();
	 while(elem){
		 fn(elem);
		 elem=this.next();
	 }
 return this;
};

Range.prototype.map= function (fn){
	var result=[];
	var elem=this.first();
	
	while(elem){
		result.push(fn(elem));
		elem=this.next();
	}
return result;
};

Range.prototype.reduce=function(fn,initial){
	var result=initial?initial:this.first();
	
	var elem=initial?this.first():this.next();
	while(elem){
		result=fn(result,elem);
		elem=this.next();
	}
return result;
};

Range.prototype.filter=function(fn,mapfn){
	var result=[];
	var elem;
	
	elem=this.first();
	while(elem){
		if((fn(elem)))
			result.push(mapfn?mapfn(elem):elem);
	elem=this.next();
	}
return result;
};

Range.prototype.first=function(){
	this.current=this.from;
	return this.next();
};


 
Range.prototype.next=function (){
	var ret= this.overflow()?null:this.current;
	this.current=ret?this.current+this.inc:this.current; 
	return ret;
	
};

Range.prototype.overflow=function(){
	return ((this.negative && (this.current<=this.to))|| (!this.negative && (this.current>=this.to)));
};
 
 


module.exports={
		Range:Range
};
