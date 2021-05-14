console.log("----------Named function----------");

function run(a,b){
    console.log(a);
    console.log(b);
    return a+b;
}
console.log(run(10,20));


console.log("----------Function Expression--------");

var sample=function(){
    console.log("Hello");
}
sample();

console.log("OR");

var sample1=function(name){
    console.log(name);
}

sample1("vedith")


console.log("-----------IIFE------------");

(function(){
    console.log("IIFE");
});

console.log("OR");

(function(name){
    console.log(name);
})("Uthaiah");


console.log("---------Arrow Function---------");

var run=() =>{
    console.log("HEY THERE...");
}

run();

console.log("OR");

var run1=(name,age) =>{
    console.log(name+age);
}

run1("vedith",23);


console.log("PASSING FUNCTION AS AN INPUT ARGUMENT TO ANOTHER FUNCTION");

function demo(a,b){ 
    return a+b;
}

function avg(a,b,average){
    var res= demo(a,b);
    var average=res/2;
    console.log("Average is:"+average);
}

avg(10,20);


console.log("Nested Function");

function outFun(a,b){
    var sum=a+b;
    function innFun(){
        console.log(a);
        console.log(b);
        console.log(sum);
    }
    innFun();
}

outFun(10,20);