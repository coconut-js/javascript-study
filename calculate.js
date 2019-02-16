var add = function(a,b){
    return a+b;
}
var add2 = function(a,b,callback){
    var add3 = function(a,b){
        callback(a+b);
    }
}
console.log("add")
console.log(add(2,3))

