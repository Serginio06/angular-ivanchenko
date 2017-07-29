function Counter(count) {
    this.count = count;
    // console.log('arguments: %j\n', arguments);
    // return {count:count}   // uncomment for OPTION 1
};


// OPTION1
// module.exports = Counter;


// OPTION2
module.exports = function (x) {
    return new Counter(x)
};