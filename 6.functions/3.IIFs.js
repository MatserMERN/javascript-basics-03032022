// var add = function(){
//     return 1 + 1
// }

(function(a,b){
    console.log(a + b)
})(1,2);

var total = (function confirm(a,b){
                return a +b
            })(1,2)

console.log(total)

console.log(window)

var message = (function confirm(message){
    return message
})('do you want to proceed ?')

console.log(message)
// console.log(confirm('You made the payment'))