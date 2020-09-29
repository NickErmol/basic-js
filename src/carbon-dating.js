const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const CONST_FROM_ARTICLE = 0.693;

module.exports = function dateSample(sampleActivity) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  const k = CONST_FROM_ARTICLE / HALF_LIFE_PERIOD;
  const sampleFloat = parseFloat(sampleActivity);

  if(typeof(sampleActivity) !== 'string' || sampleFloat <= 0 || sampleFloat > 15 || isNaN(sampleFloat)){
    return false;
  } 

 return Math.ceil(Math.log(MODERN_ACTIVITY / sampleFloat) / k );
}
