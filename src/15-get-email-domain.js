/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const idx = email.lastIndexOf('@');
  if (idx !== -1) {
    return email.slice(idx + 1);
  }
  return false;
}

// console.log(getEmailDomain('asdsafas@gmain.com'));

module.exports = getEmailDomain;
