let gridContainer = document.createElement('div')
gridContainer.className = 'container'

let gridRow = document.createElement('div')
gridRow.className = 'row'

let gridColumn = document.createElement('div')
gridColumn.className = 'column'


let fragment = new DocumentFragment()
for (i = 0; i < 16; i++)
{
    fragment.appendChild(gridColumn.cloneNode(true))
}

gridRow.appendChild(fragment)

for (i = 0; i < 16; i++)
{
    fragment.appendChild(gridRow.cloneNode(true))
}

gridContainer.appendChild(fragment)

let body = document.querySelector('#body')
body.appendChild(gridContainer)

function promptMe(){
    let gridSize = prompt('Provide a number for the height and width of your grid. The maximum is 100. Make sure to only input one number. The height and width will be the same length')
    alert(newGrid(gridSize))
}

function newGrid(gridSize){
    if(gridSize > 100){
        return "Your number was over 100 pick a smaller one."
    }
    let newGridRow = document.createElement('div')
    newGridRow.className = 'row'

    let newGridColumn = document.createElement('div')
    newGridColumn.className = 'column'

    let newFragment = new DocumentFragment()

    for (i = 0; i < gridSize; i++)
{

    newFragment.appendChild(newGridColumn.cloneNode(true))
}

newGridRow.appendChild(newFragment)

for (i = 0; i < gridSize; i++)
{
    newFragment.appendChild(newGridRow.cloneNode(true))
}

let oldContainer = document.querySelector('.container')
let newGridContainer = document.createElement('div')
newGridContainer.className = 'container'
newGridContainer.appendChild(newFragment)

body.replaceChild(newGridContainer, oldContainer)
let columnElements = document.querySelectorAll('.column')
for(i = 0; i < columnElements.length; i++)
{
    columnElements[i].id = 'column' + i
}

columnElements.forEach(column => column.addEventListener('mouseover', hover))

return gridSize
}

let columnElements = document.querySelectorAll('.column')
for(i = 0; i < columnElements.length; i++)
{
    columnElements[i].id = 'column' + i
}


function hover(e){
    if (e.fromElement.classList[0] != 'column')
    return

    let thisElement = document.getElementById(`${e.fromElement.id}`)
    thisElement.classList.add('hovered')
}


columnElements.forEach(column => column.addEventListener('mouseenter', hover))

/* 
    let thisId = e.fromElement.id
    let thisColumn = document.querySelector(`#${thisId}`)
    thisColumn.className = 'hovered'

*/