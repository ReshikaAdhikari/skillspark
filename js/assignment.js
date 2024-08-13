//1.	Palindrome Checker: Write a function isPalindrome(str) that checks if a given string is a palindrome, ignoring case and non-alphanumeric characters.
function isPalindrome(str) {
    let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    

    let reversedStr = cleanedStr.split('').reverse().join('');
    
    return cleanedStr === reversedStr;
}
console.log(isPalindrome("A man, a plan, a canal: Panama")); 
console.log(isPalindrome("race a car")); 
console.log(isPalindrome(""));


//2.	Fibonacci Sequence: Create a function fibonacci(n) that returns an array containing the first n numbers in the Fibonacci sequence.
function fibonacci(n) {
    let fibSequence = [0, 1];
    
    for (let i = 2; i < n; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }
    return fibSequence.slice(0, n);
}
console.log(fibonacci(5));
console.log(fibonacci(10)); 
console.log(fibonacci(1)); 


//3.	Array Chunking: Write a function chunkArray(arr, size) that splits an array into groups of the specified size and returns them as a two-dimensional array.
function chunkArray(arr, size) {
    let chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    
    return chunks;
}
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2)); 
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 4));


// Create a function areAnagrams(str1, str2) that checks if two strings are anagrams of each other.
function areAnagrams(str1, str2) {
    function cleanAndSort(str) {
        return str
            .replace(/[^a-zA-Z0-9]/g, '') 
            .toLowerCase()               
            .split('')                   
            .sort()                      
            .join('');                   
    }
    let cleanedStr1 = cleanAndSort(str1);
    let cleanedStr2 = cleanAndSort(str2);
    return cleanedStr1 === cleanedStr2;
}
console.log(areAnagrams("listen", "silent")); 
console.log(areAnagrams("triangle", "integral"));
console.log(areAnagrams("apple", "pale")); 
console.log(areAnagrams("A gentleman", "Elegant man!")); 


//Write a function arrayIntersection(arr1, arr2) that returns a new array containing the elements that are present in both input arrays.
function arrayIntersection(arr1, arr2) {

    let set2 = new Set(arr2);
    return arr1.filter(element => set2.has(element));
}
console.log(arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6]));
console.log(arrayIntersection(['apple', 'banana', 'cherry'], ['cherry', 'date', 'apple'])); // ['apple', 'cherry']
console.log(arrayIntersection([1, 2, 3], [4, 5, 6]));
//Write a function flattenArray(arr) that flattens a deeply nested array.
function flattenArray(arr) {
    let result = [];

    function flatten(item) {
        if (Array.isArray(item)) {
            item.forEach(flatten);
        } else {
            result.push(item);
        }
    }

    flatten(arr);
    return result;
}
console.log(flattenArray([1, [2, [3, 4], 5], 6])); 
console.log(flattenArray([[1, 2, [3]], 4, [[5, 6]], 7])); 
console.log(flattenArray([1, [2, [3, [4, [5]]]]]));


//Create a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a given string.
function countVowels(str) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;
    
    for (let char of str.toLowerCase()) {
        if (vowels.has(char)) {
            count += 1;
        }
    }
    
    return count;
}
console.log(countVowels("Hello World")); // 3
console.log(countVowels("Javascript is fun")); // 5
console.log(countVowels("AEIOU aeiou"));

//Write a function isPrime(num) that checks if a given number is a prime number.
function isPrime(num) {
    // Handle edge cases
    if (num <= 1) return false;
    if (num <= 3) return true;
    
    // Check for even numbers and multiples of 3
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    // Check for factors up to the square root of the number
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    
    return true;
}
console.log(isPrime(2));
console.log(isPrime(3)); 
console.log(isPrime(4)); 
console.log(isPrime(17)); 
console.log(isPrime(18)); 
console.log(isPrime(19));
//Create a function factorial(n) that returns the factorial of a given number n.
function factorial(n) {
    
    if (n < 0) return undefined; 
    if (n === 0 || n === 1) return 1; 
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    
    return result;
}


console.log(factorial(0));
console.log(factorial(1)); 
console.log(factorial(5));
console.log(factorial(10));
//Write a function reverseString(str) that reverses a given string.
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage:
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("world")); // "dlrow"
console.log(reverseString("JavaScript")); // "tpircSavaJ"
//Create a function sumArray(arr) that returns the sum of all elements in an array.
function sumArray(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5];
  console.log(sumArray(numbers)); 
//Write a function removeDuplicates(arr) that removes duplicate elements from an array.
function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  
  // Example usage
  const numbers1 = [1, 2, 2, 3, 4, 4, 5];
  console.log(removeDuplicates(numbers1)); 
  //Create a function findMax(arr) that returns the maximum number in an array.
  function findMax(arr) {
    return Math.max(...arr);
  }
  
  // Example usage
  const numbers2 = [3, 5, 7, 2, 8, 1];
  console.log(findMax(numbers2)); 
  //Write a function mergeArrays(arr1, arr2) that merges two sorted arrays into a single sorted array.
  function mergeArrays(arr1, arr2) {
    let merged = [];
    let i = 0;
    let j = 0;
  
    // Traverse both arrays and merge them
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        merged.push(arr1[i]);
        i++;
      } else {
        merged.push(arr2[j]);
        j++;
      }
    }
  
    // If there are remaining elements in arr1, add them to merged
    while (i < arr1.length) {
      merged.push(arr1[i]);
      i++;
    }
  
    // If there are remaining elements in arr2, add them to merged
    while (j < arr2.length) {
      merged.push(arr2[j]);
      j++;
    }
  
    return merged;
  }
  
  // Example usage
  const array1 = [1, 3, 5, 7];
  const array2 = [2, 4, 6, 8];
  console.log(mergeArrays(array1, array2)); 
  //Create a function longestWord(sentence) that finds the longest word in a given sentence.
//   
////Create a function randomNumber(min, max) that generates a random number between min and max.
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Example usage
  const min = 1;
  const max = 10;
  console.log(randomNumber(min, max));
  //Write a function sumDigits(num) that returns the sum of the digits of a given number.
  function sumDigits(num) {
    // Convert the number to a string and remove any negative sign
    const numStr = Math.abs(num).toString();
  
    // Sum the digits by converting each character back to a number and adding them
    const sum = numStr.split('')
      .map(digit => parseInt(digit, 10))
      .reduce((acc, current) => acc + current, 0);
  
    return sum;
  }
  
  // Example usage
  const number = 1234;
  console.log(sumDigits(number));
  //Create a function countOccurrences(arr, value) that counts the number of occurrences of a given value in an array.
  function countOccurrences(arr, value) {
    return arr.filter(item => item === value).length;
  }
  
  // Example usage
  const array = [1, 2, 3, 4, 2, 2, 5];
  const valueToCount = 2;
  console.log(countOccurrences(array, valueToCount));
  //Write a function binaryToDecimal(binary) that converts a binary number (as a string) to its decimal equivalent.
  function binaryToDecimal(binary) {
    return parseInt(binary, 2);
  }
  
  // Example usage
  const binaryString = '1011';
  console.log(binaryToDecimal(binaryString));