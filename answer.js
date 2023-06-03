function sumTwoSmallestNumbers(numbers){  
  numbers = numbers.sort(function(a, b){return a - b; });
  return numbers[0] + numbers[1];
};

function sumTwoSmallestNumbers(numbers) {  
  var [ a, b ] = numbers.sort((a, b) => a - b)
  return a + b
}

function sumTwoSmallestNumbers(numbers) {  
  return numbers.sort((a,b)=> a-b).slice(0,2).reduce((x,e)=>x+e)
}
