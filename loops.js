function forLoop(array) {
  for(let i = 0; i < 25; i++) {
         if (i===1) { array[array.length]=`I am ${i} strange loop.` }
          else  { array[array.length]=`I am ${i} strange loops.` }
  }
  
  return array
}


function whileLoop(n) {
  while (n > -1) { 
    console.log(n) 
    n--
  }
  console.log("done")
}

whileLoop(5)