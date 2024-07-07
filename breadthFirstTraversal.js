function printBreadthFirst(start) {
    // Your code here 
    let queue = [start]
    let visited = new Set([start])
  
    while(queue.length){
      let current = queue.shift()
      console.log(current)
  
      for(let neighbor of adjList[current]){
        if(!visited.has(neighbor)){
          visited.add(neighbor)
          queue.push(neighbor)
        }
      }
    }
  }