const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(members))return false;
  let dreamTeamArray = [];
  let dreamTeamName ='';
  members.forEach(element => {
    if (typeof element === 'string') {
      element = element.trim();
      dreamTeamArray.push(element[0].toUpperCase());
    }
  });
  dreamTeamArray.sort();
  dreamTeamArray.forEach(element => {
    dreamTeamName = dreamTeamName + element;
  });
  
  return dreamTeamName;
};
