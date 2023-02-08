let str = "Hello";
let resultStr = "";
for (i = 0; i < str.length; i++) {
    resultStr += str[str.length-1-i];
}
console.log(resultStr);