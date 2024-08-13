
const array: number[] = new Array(100)


let count = 0
function insert(array: number[]){
  if(array[count] != null){
    array[count] = count + 1
    insert(array)
  }
  
}
