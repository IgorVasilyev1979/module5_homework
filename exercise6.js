let arr = [1, "asd", undefined, "asd"];
let compareResult = true;
arr.forEach(function(item) {
    if (item !== arr[0]) {
        compareResult = false;
    }
});
console.log(compareResult);