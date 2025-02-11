/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   let str=x.toString()
let reversedStr=str.split("").reverse().join("")

if(str===reversedStr){
    console.log("it is palindrome")
}else{
    console.log("it is not paloindrome")
}
return str==reversedStr
 
    
};