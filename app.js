// Program to generate fibonacci series up to a certain number


const number = parseInt(prompt('Enter a positive number: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');
console.log(n1); // print 0
console.log(n2); // print 1

nextTerm = n1 + n2;

while (nextTerm <= number) {

  
    console.log(nextTerm);

    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}



// Program to check if the string is palindrome or not

function checkPalindrome(str) {

   
    const len = string.length;

  
    for (let i = 0; i < len / 2; i++) {

        
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

const string = prompt('Enter a string: ');

const value = checkPalindrome(string);

console.log(value);