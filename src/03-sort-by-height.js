/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const idx = [];
  const newArr = arr.filter((element, index) => {
    if (element !== -1) {
      return true;
    }
    idx.push(index);
    return false;
  });
  newArr.sort((a, b) => a - b);
  idx.forEach((index) => {
    newArr.splice(index, 0, -1);
  });
  return newArr;
}

module.exports = sortByHeight;
