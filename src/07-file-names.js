/**
 * There's a list of fileList, since two fileLists cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the fileLists.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["fileList", "fileList", "image", "fileList(1)", "fileList"],
 * the output should be ["fileList", "fileList(1)", "image", "fileList(1)(1)", "fileList(2)"]
 *
 */
function renamefileLists(names) {
  const listFiles = {};
  const result = [];
  for (let i = 0; i < names.length; i++) {
    if (listFiles[names[i]] === undefined) {
      listFiles[names[i]] = 1;
      result.push(names[i]);
    } else {
      listFiles[names[i]] += 1;
      listFiles[`${names[i]}(${listFiles[names[i]] - 1})`] = 1;
      result.push(`${names[i]}(${listFiles[names[i]] - 1})`);
    }
  }
  return result;
}

module.exports = renamefileLists;
