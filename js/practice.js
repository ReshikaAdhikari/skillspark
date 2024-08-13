//1. Right angle triangle
// function generateStarPattern(rows) {
//     let pattern = "";
//     for (let i = 1; i <= rows; i++) {
//       for (let j = 0; j < i; j++) {
//         pattern += "*";
//       }
//       pattern += "\n"; // New line after each row
//     }
//     return pattern;
//   }
//   const numberOfRows = 5; // Change this to generate more or fewer rows
// console.log(generateStarPattern(numberOfRows));

// //13).  inverted right angle pattern
// function generateInvertedStarPattern(rows) {
//     let pattern = "";
//     for (let i = rows; i >= 1; i--) {
//       for (let j = 0; j < i; j++) {
//         pattern += "*";
//       }
//       pattern += "\n"; // New line after each row
//     }
//     return pattern;
//   }
  
//   console.log(generateInvertedStarPattern(numberOfRows));

  //3) solid 
//   function generateSolidRectangle(rows, columns) {
//     let pattern = "";
//     for (let i = 0; i < rows; i++) {
//       for (let j = 0; j < columns; j++) {
//         pattern += "*";
//       }
//       pattern += "\n"; // New line after each row
//     }
//     return pattern;
//   }
  
//   const numberOfRows = 5; // Change this to set the number of rows
//   const numberOfColumns = 10; // Change this to set the number of columns
//   console.log(generateSolidRectangle(numberOfRows, numberOfColumns));

  //4)pyramid
//   function generatePyramidPattern(rows) {
//     let pattern = "";
//     for (let i = 1; i <= rows; i++) {
//       // Add leading spaces
//       for (let j = 1; j <= rows - i; j++) {
//         pattern += " ";
//       }
//       // Add stars
//       for (let k = 0; k < 2 * i - 1; k++) {
//         pattern += "*";
//       }
//       pattern += "\n"; // New line after each row
//     }
//     return pattern;
//   }
//   const numberOfRows = 5; // Change this to generate more or fewer rows
// console.log(generatePyramidPattern(numberOfRows));

//5)inverted pyramid
// function generateInvertedPyramidPattern(rows) {
//     let pattern = "";
//     for (let i = rows; i >= 1; i--) {
//       // Add leading spaces
//       for (let j = 0; j < rows - i; j++) {
//         pattern += " ";
//       }
//       // Add stars
//       for (let k = 0; k < 2 * i - 1; k++) {
//         pattern += "*";
//       }
//       pattern += "\n"; // New line after each row
//     }
//     return pattern;
//   }
  
//   const numberOfRows = 5; // Change this to generate more or fewer rows
//   console.log(generateInvertedPyramidPattern(numberOfRows));

//6)hollow rectangle
// function drawHollowRectangle(width, height) {
//     for (let i = 0; i < height; i++) {
//         let row = '';
//         for (let j = 0; j < width; j++) {
//             // Print '*' on the borders of the rectangle
//             if (i === 0 || i === height - 1 || j === 0 || j === width - 1) {
//                 row += '*';
//             } else {
//                 row += ' ';
//             }
//         }
//         console.log(row);
//     }
// }

// // Example usage
// drawHollowRectangle(7, 5);

//7)cross 
// function drawHollowDiamond(size) {
//     if (size % 2 === 0) {
//         console.log("Size must be an odd number.");
//         return;
//     }

//     const half = Math.floor(size / 2);

//     for (let i = 0; i < size; i++) {
//         let row = '';

//         for (let j = 0; j < size; j++) {
//             // Calculate the distance from the center row
//             let distance = Math.abs(i - half);

//             // Print '*' at the positions forming the diamond
//             if (j === half - distance || j === half + distance) {
//                 row += '*';
//             } else {
//                 row += ' ';
//             }
//         }
//         console.log(row);
//     }
// }

// // Example usage
// drawHollowDiamond(5);

//8)
function drawHollowDiamond(size) {
    const half = Math.floor(size / 2);

    for (let i = 0; i < size; i++) {
        let row = '';

        for (let j = 0; j < size; j++) {
            // Calculate the distance from the center row
            let distance = Math.abs(i - half);

            // Print '*' at the positions forming the diamond
            if (j === half - distance || j === half + distance) {
                row += '*';
            } else {
                row += ' ';
            }
        }
        console.log(row);
    }
}

// Example usage
drawHollowDiamond(5);

//9) number pattern
// function drawNumberPattern(rows) {
//     for (let i = 1; i <= rows; i++) {
//         let row = '';

//         for (let j = 1; j <= i; j++) {
//             row += j;
//         }

//         console.log(row);
//     }
// }

// // Example usage
// drawNumberPattern(5);

//10)repeated no pattern 
// function drawRepeatedNumberPattern(rows) {
//     for (let i = 1; i <= rows; i++) {
//         let row = '';

//         for (let j = 1; j <= i; j++) {
//             row += i;  // Append the current row number
//         }

//         console.log(row);
//     }
// }

// // Example usage
// drawRepeatedNumberPattern(5);

//11) inverted number pattern
// function drawDecreasingNumberPattern(rows) {
//     for (let i = rows; i >= 1; i--) {
//         let row = '';

//         for (let j = 1; j <= i; j++) {
//             row += j;
//         }

//         console.log(row);
//     }
// }

// // Example usage
// drawDecreasingNumberPattern(5);

// //12)inverted no square
// function drawDecreasingPattern(rows) {
//     for (let i = 0; i < rows; i++) {
//         let row = '';

//         for (let j = 5; j >= 1; j--) {
//             row += j;
//         }

//         console.log(row);
//     }
// }

// // Example usage
// drawDecreasingPattern(5);

//13)inverted no ladder
// function drawDecreasingNumberPattern(rows) {
//     for (let i = rows; i >= 1; i--) {
//         let row = '';

//         for (let j = 1; j <= i; j++) {
//             row += j;
//         }

//         console.log(row);
//     }
// }

// // Example usage
// drawDecreasingNumberPattern(5);

//15)) alphabet triangle
function drawAlphabetPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let row = '';

        for (let j = 1; j <= i; j++) {
            row += String.fromCharCode(64 + j); // 64 + 1 = 65 which is 'A'
        }

        console.log(row);
    }
}

// Example usage
drawAlphabetPattern(5);
