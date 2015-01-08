
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
	 var that=this;
	 var feach=function(elem){
		 if(!elem) return;
		 fn(elem), feach(that.next());
	 }
	 feach(this.first());
 return this;
};

Range.prototype.map= function (fn){
	var res=[];
	var that=this;
	var fmap=function(elem,result){
		if(!elem)
			return result;
		result.push(fn(elem));
		return fmap(that.next(),result);
	}
 
return fmap(this.first(),res);
};

Range.prototype.reduce=function(fn,initial){
	var result=initial?initial:this.first();
	var elem=initial?this.first():this.next();
	var that=this;
	var freduce=function (result,elem){
		if(!elem)
			return result;
		return freduce(fn(result,elem),that.next());
	}
 return freduce(result,elem);
};

Range.prototype.filter=function(fn,mapfn){
	var res=[];
	var that=this;
	var fltr=function(elem,result){
		if(!elem)
			return result;
		if(fn(elem))
			result.push(mapfn?mapfn(elem):elem);
		return fltr(that.next(),result);
	}
	
	 
return fltr(this.first(),res);
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
