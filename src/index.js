module.exports = function check(str, bracketsConfig) {
  const equalSymbols = [];
  const startingSymbols = [];
  const endingSymbols = [];

  for (let arr of bracketsConfig) {
    startingSymbols.push(arr[0]);
    endingSymbols.push(arr[1]);

    if (arr[0] === arr[1]) {
      equalSymbols.push(arr[0]);
    }
  }

  const stack = [];

  for (let sym of str) {
    
    if (equalSymbols.includes(sym)) {

      if (stack.length === 0) {
        stack.push(sym);
        continue;
      }

      let lastChar = stack[stack.length - 1];

      if (lastChar === sym) {
        stack.pop();
      } else {
        stack.push(sym);
      }

      continue;
    }

    if (startingSymbols.includes(sym)) {
      stack.push(sym);
      continue;
    }

    if (stack.length === 0) {
      return false;
    }

    if (endingSymbols.includes(sym)) {
      let lastChar = stack[stack.length - 1];
      let index = endingSymbols.indexOf(sym);
      let symStart = startingSymbols[index];

      if (lastChar === symStart) {
        stack.pop();
      } else {
        return false
      }
    }

  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }

}