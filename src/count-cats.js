const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let counter = 0;
  const cat = '^^';
  backyard.forEach(element => {
    element.forEach(elem => {
      if (elem == cat) {
        counter++;
      }
    })
      });
      return counter;
};
