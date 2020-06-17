

const body= document.querySelector("body");



body.classList.add("body");

const container=document.createElement('div');

body.appendChild(container);

container.classList.add("container");


const gridContainer= document.createElement('div');

container.appendChild(gridContainer);

gridContainer.classList.add("gridContainer");



for(let i=1;i<=256;i++){
    const div=document.createElement('div');
    gridContainer.appendChild(div);    
    div.classList.add("square");
    
}

const squares= Array.from(document.querySelectorAll(".square"));

squares.forEach(square=>square.addEventListener("mouseover",()=>{
    square.style.backgroundColor="black";
}))


const button=document.createElement('button');

container.prepend(button);

button.classList.add("clearBtn");

button.textContent="Clear";

button.addEventListener("click",()=>{
    const squaresPerSideRequested=prompt("enter how many squares per side for the new grid:");
    
    squares.forEach(square=>{
        square.style.backgroundColor="white";
    })

    console.log(squaresPerSideRequested)

    container.removeChild(container.lastElementChild);

    const newGridContainer= document.createElement('div');

    container.appendChild(newGridContainer);

    newGridContainer.classList.add("newGridContainer");

    newGridContainer.style.fontSize="8px";

    const squareWidth= (100/squaresPerSideRequested);

    console.log(squareWidth);

    newGridContainer.style.gridTemplateColumns=`repeat(${squaresPerSideRequested},${squareWidth}%)`;
    newGridContainer.style.gridTemplateRows=`repeat(${squaresPerSideRequested},${squareWidth}%)`;

    for(let i=1;i<=squaresPerSideRequested*squaresPerSideRequested;i++){
        const div=document.createElement('div');
        newGridContainer.appendChild(div); 
       // div.textContent=i;   
        div.classList.add("square");
        
    }

    const newSquares= Array.from(document.querySelectorAll(".square"));
    console.log(newSquares)
    
    newSquares.forEach(square=>square.addEventListener("mouseover",()=>{
        const randomColor= function(){
            let result="";
            let r = Math.floor(Math.random()*256);          // Random between 0-255
            let g = Math.floor(Math.random()*256);          // Random between 0-255
            let b = Math.floor(Math.random()*256);
            result = 'rgb(' + r + ',' + g + ',' + b + ')';
            return result;
        }
        square.style.backgroundColor=randomColor();
        
    }));



})