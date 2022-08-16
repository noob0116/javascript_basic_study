var arr = new Array('seoul', 'new york', 'ladarkh', 'pusan', 'Tsukuba');
function getRandomValueFromArray(arr) {
    var index = Math.floor(arr.length * Math.random());
    return arr[index];
}

console.log(getRandomValueFromArray(arr));