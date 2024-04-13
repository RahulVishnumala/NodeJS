// Callback Function

// let add = (a,b) => {
//     return a+b;
// }
// console.log(add(5,3));

// function callback(){
//     console.log("This is callback function");
// }

// const add = function(a,b,callback){
//     var result = a + b;
//     console.log('Result: '+result);
//     callback();
// }
// add(2, 4, callback);

let mul = function(a,b,callback){
    let res = a*b;
    console.log("Result: "+res)
    callback();
}
mul(2,3,()=>{
    console.log("Callback executed");
})