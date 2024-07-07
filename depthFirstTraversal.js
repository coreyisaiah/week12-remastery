function printDepthFirst(start) {
    let stack = [start]
    let visited = new Set()
  
    while(stack.length){
      let current = stack.pop()
      
      if(!visited.has(current)){
        visited.add(current)
        console.log(current)
  
        for(let neighbor of adjList[current]){
          stack.push(neighbor)
        }
      }
    }
  }