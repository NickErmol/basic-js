const CustomError = require("../extensions/custom-error");

 module.exports = function repeater(str, options) {
  let finalString = '';
  if (options.separator === undefined){
    options.separator = '+';
  }
  if (options.additionSeparator === undefined){
    options.additionSeparator = '|';
  }
  // options.separator === undefined ? '+': options.separator;
  // options.additionSeparator === undefined ? '|': options.additionSeparator;
  let additionalRepeater = options.additionRepeatTimes;
  if (str === null){
    str = 'null';
  }else{
    str = str.toString();
  }
  if (options.repeatTimes === undefined){
    options.repeatTimes = 1;
  }
  if (options.addition === undefined){
    options.addition = '';
  }else{
    if (options.addition === null){
      options.addition = 'null';
    }else{
      options.addition = options.addition.toString();
    }
  }
  
  if (options.additionRepeatTimes === undefined){
    options.additionRepeatTimes = 1;
  }
    while (options.repeatTimes > 0) {
      finalString = finalString + str;
      if (options.additionRepeatTimes !== undefined){
        while (options.additionRepeatTimes > 0) {
          
          if (options.additionRepeatTimes > 1)
          {
            finalString = finalString + options.addition + options.additionSeparator;
          }else{
            finalString = finalString + options.addition;
          }
          options.additionRepeatTimes--;
        }
        options.additionRepeatTimes = additionalRepeater;
      }
      if (options.repeatTimes > 1){
        finalString = finalString + options.separator;
      }
      options.repeatTimes--;
    }
    return finalString;
};
  