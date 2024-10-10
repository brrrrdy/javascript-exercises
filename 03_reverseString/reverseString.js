const reverseString = function(string) {
    let result = '';
    for (let i = string.length - 1; i>=0; i--) {
        result += string[i];
    }
    return result
};

// Do not edit below this line
module.exports = reverseString;


/*

declare variable for reversed string
for loop through the string starting from the end
log each character from the reverse loop into the reversed string variable
return reversed string

*/
