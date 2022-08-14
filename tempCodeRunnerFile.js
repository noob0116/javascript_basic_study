function sum() {
    var i, _sum = 0;
    for(i = 0; i < arguments.length; i++) {
        console.log(i+' : '+arguments[i]);
        _sum += arguments[i]
    }
}

console.log(sum());