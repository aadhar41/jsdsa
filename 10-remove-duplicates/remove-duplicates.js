function removeDuplicates(array) {
    const uniqueArr = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (!uniqueArr.includes(element)) {
            uniqueArr.push(element);
        }
    }
    return uniqueArr;
}

module.exports = removeDuplicates;