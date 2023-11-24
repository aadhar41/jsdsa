// function countOccurrences(str, char) {
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         const element = str[i];
//         if (element === char) {
//             count++;
//         }
//     }

//     return count;
// }

const countOccurrences = (str, char) => (str.split(char).length - 1);

module.exports = countOccurrences;