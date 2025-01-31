const palindromes = function (p) {
    const cleanedPalindrome = p.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let isPalindrome = '';
    for (let i = cleanedPalindrome.length - 1; i >= 0; i--) {
        isPalindrome += cleanedPalindrome[i];
    }
    return cleanedPalindrome === isPalindrome;

    // let cleanedPalindrome (remmove non alphanumeric and special characters from given string, convert all to lowercase)
    // let isPalindrome



    // let isPalindrome = '';
    // for (let i = p.length - 1; i >= 0; i--) {
    //     isPalindrome += p[i]; 
    //     if (isPalindrome === p) {
    //         return true;
    //     }
    // }

    // loop backwards over string and log to variable
    // is this same as string
};

// Do not edit below this line
module.exports = palindromes;
