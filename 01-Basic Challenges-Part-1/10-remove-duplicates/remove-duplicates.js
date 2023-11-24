// function removeDuplicates(array) {
//     const uniqueArr = [];

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (!uniqueArr.includes(element)) {
//             uniqueArr.push(element);
//         }
//     }
//     return uniqueArr;
// }


function removeDuplicates(array) {
    return Array.from(new Set(array));
}

module.exports = removeDuplicates;