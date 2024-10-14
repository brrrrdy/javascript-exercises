const sumAll = function(int1, int2) {
    if (int1 < 0 || int2 < 0 || !Number.isInteger(int1) || !Number.isInteger(int2)) {
        return 'ERROR';
    }
    
    let numHigh = Math.max(int1, int2);
    let numLow = Math.min(int1, int2);
    let sum = 0;

    for (let i = numLow; i <= numHigh; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
