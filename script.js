// reference to grid
const grid = document.querySelector('.grid')
const h1 = document.querySelector('h1')
// generate a 3x3 grid 
// creating 9 cells to go inside the grid
let isXCurrentPlayer = true

// create an array tracking the 9 squares
let trackingArray = [null, null, null, null, null, null, null, null, null]
// let trackedArray = []
// create one cell with a function
let counter = 0

function reload(){
   setTimeout(function(){
        location.reload()
      }, 2000)
}

function createCell(){
  counter = counter + 1
  const cellCount = counter
  // create an element to be the cell
  const cell = document.createElement('div')
  // setting the content
  // cell.textContent = counter
  // setting the class
  cell.className='cell'
  // handle cell click
  function handleCellClick(){
    // conditional flow
    if(isXCurrentPlayer){
      cell.textContent = ''
      cell.classList.add("zelda")
      trackingArray[cellCount - 1] = 'zelda'
      // change turn to 'O'
      isXCurrentPlayer = false
      cell.removeEventListener('click', handleCellClick)
      
    } else {
    cell.textContent = ''
      cell.classList.add("goku")
      trackingArray[cellCount - 1] = 'goku'
      // change turn to 'X'
      isXCurrentPlayer = true
      cell.removeEventListener('click', handleCellClick)
    } 
//    console.log(trackingArray);
    if(trackingArray[0] === 'zelda' && trackingArray[1] === 'zelda' && trackingArray[2] === 'zelda') {
      h1.textContent = 'You Win Zelda!'
      reload()
    } else if (trackingArray[0] === 'goku' && trackingArray[1] === 'goku' && trackingArray[2] === 'goku') {
      h1.textContent = 'You Win Goku!'
      reload()
    } else if (trackingArray[3] === 'zelda' && trackingArray[4] === 'zelda' && trackingArray[5] === 'zelda') {
      h1.textContent = 'You Win Zelda!'
      reload()
    } else if (trackingArray[3] === 'goku' && trackingArray[4] === 'goku' && trackingArray[5] === 'goku') {
      h1.textContent = 'You Win Goku!'
      reload()
    } else if (trackingArray[6] === 'zelda' && trackingArray[7] === 'zelda' && trackingArray[8] === 'zelda') {
      h1.textContent = 'You Win Zelda!'
      reload()
    } else if (trackingArray[6] === 'goku' && trackingArray[7] === 'goku' && trackingArray[8] === 'goku') {
      h1.textContent = 'You Win Goku!'
      reload()
    } else if (trackingArray[0] === 'zelda' && trackingArray[3] === 'zelda' && trackingArray[6] === 'zelda') {
      h1.textContent = 'You Win Zelda!'
      reload()
    } else if (trackingArray[0] === 'goku' && trackingArray[3] === 'goku' && trackingArray[6] === 'goku') {
      h1.textContent = 'You Win Goku!'
      reload()
    } else if (trackingArray[1] === 'zelda' && trackingArray[4] === 'zelda' && trackingArray[7] === 'zelda') {
      h1.textContent = 'You Win Zelda!'
      reload()
    } else if (trackingArray[1] === 'goku' && trackingArray[4] === 'goku' && trackingArray[7] === 'goku') {
      h1.textContent = 'You Win Goku!'
      reload()
    } else if (trackingArray[2] === 'zelda' && trackingArray[5] === 'zelda' && trackingArray[8] === 'zelda') {
      h1.textContent = 'You Win Zelda!'
      reload()
    } else if (trackingArray[2] === 'goku' && trackingArray[5] === 'goku' && trackingArray[8] === 'goku') {
      h1.textContent = 'You Win Goku!'
      reload()
    } else if (trackingArray[0] === 'zelda' && trackingArray[4] === 'zelda' && trackingArray[8] === 'zelda') {
      h1.textContent = 'You Win Zelda!'
      reload()
    } else if (trackingArray[0] === 'goku' && trackingArray[4] === 'goku' && trackingArray[8] === 'goku') {
      h1.textContent = 'You Win Goku!'
      reload()
    } else if (trackingArray[2] === 'zelda' && trackingArray[4] === 'zelda' && trackingArray[6] === 'zelda') {
      h1.textContent = 'You Win Zelda!'
      reload()
    } else if (trackingArray[2] === 'goku' && trackingArray[4] === 'goku' && trackingArray[6] === 'goku') {
      h1.textContent = 'You Win Goku!'
      reload()
    } else {
     const checkForDraw = trackingArray.every(function(value) {
         return value !== null
      })

      if(checkForDraw === true){
        h1.textContent = 'Draw you peasants!'
      } else {
        h1
      }
    }
} 
  cell.addEventListener('click', handleCellClick)
  // appending into grid element
  grid.append(cell)
}
// cell createCell 9 times

for (let i = 1; i <= 9; i++) {
  createCell()
}
