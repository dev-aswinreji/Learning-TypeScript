

function makeTwo (n:number):number{
  
  if(n < 2){
    return makeTwo(n + 1)
  }if(n> 2){
    return makeTwo(n - 1)
  }
  return n
}

const num = makeTwo(1000000000000000)
console.log(num,'num is showing');

