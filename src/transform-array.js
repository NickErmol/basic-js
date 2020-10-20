const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  if (!Array.isArray(arr)){
    throw Error;
  }
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  // return arr.map((num, index, arr) =>{
  //   if (num == '--discard-next' && arr[index + 1] !== undefined)
  //   {
  //     arr.splice(index+1, 1);
  //   }
  //   if (num == '--discard-prev' && arr[index - 1] !== undefined && arr[index-2] !== "--discard-next")
  //   {
  //     arr.splice(index-1, 1);
  //   }
  //   if (num == '--double-next' && arr[index + 1] !== undefined)
  //   {
  //     arr.splice(index+1, 0, arr[index+1], arr[index+1]);
  //   }
  //   if (num == '--double-prev' && arr[index - 1] !== undefined && arr[index-2] !== "--discard-next")
  //   {
  //     arr.splice(index-1, 0, arr[index-1], arr[index-1]);
  //   }
  // }
  // );

 let newArr = [];
 for (let index = 0; index < arr.length; index++){
  if (arr[index] !== '--discard-next' && arr[index] !== '--discard-prev' && arr[index] !== '--double-next' && arr[index] !== '--double-prev') {
    newArr.push(arr[index]);
  }else
  if (arr[index] == '--discard-next' && arr[index + 1] !== undefined)
    {
      index++
    }else
  if (arr[index] == '--discard-prev' && arr[index - 1] !== undefined && arr[index-2] !== '--discard-next')
    {
      newArr.pop();
    }else
  if ((arr[index] == '--double-next' && arr[index + 1] !== undefined))
    {
      newArr.push(arr[index + 1]);
    }else
    if ((arr[index] == '--double-prev' && arr[index - 1] !== undefined && arr[index-2] !== '--discard-next'))
      {
        newArr.push(arr[index-1]);
      }
 }
 return newArr;
};
