const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
 //throw new CustomError('Not implemented');
  // remove line with error and write your code here

  if (date === undefined){
    return 'Unable to determine the time of year!';
  }
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error('Error');
  }

  if (date.getMonth() > 10 || date.getMonth() < 2) {
    return 'winter';
  }
  if (date.getMonth() > 1 && date.getMonth() < 5) {
    return 'spring';
  }
  if (date.getMonth() > 4 && date.getMonth() < 8) {
    return 'summer';
  }
  if (date.getMonth() > 7 && date.getMonth() < 11) {
    return 'autumn';
  }


};
