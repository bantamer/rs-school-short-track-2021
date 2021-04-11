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
function renamefileLists(/* names */) {
  throw new Error('Not implemented');
}

// console.log(renamefileLists(['fileList', 'fileList', 'image', 'fileList(1)', 'fileList']));

module.exports = renamefileLists;
