const scaler =document.querySelector('#scaler');
const sizeValueText =document.querySelector('#sizeValueText');
const colorModeBtn =document.querySelector('.colorModeBtn');
const rainbowModeBtn=document.querySelector('.rainbowModeBtn');
const eraserBtn =document.querySelector('.eraserBtn');
const clearBtn = document.querySelector('.clearBtn');
const settings = document.querySelector('.settings');
const colorSelector = document.querySelector('#colorSelector'); 
const grid =document.querySelector('.grid');

const defaultColor ='#000000';
const defaultSize = 16;
const defaultMode = colorModeBtn;

 let currentColor = defaultColor;
 let currentSize = defaultSize;
 let currentMode = defaultMode;

 function setCurrentSize(newSize){
   currentSize=newSize;
}
function setCurrentColor(newColor){
   currentColor = newColor;
}
function setCurrentMode(newMode){
  activeButton(newMode);
   currentMode = newMode;
}
function updateSize() {
   const value = scaler.value;
   sizeValueText.innerText = `${value}x${value}`;
}

 colorSelector.oninput =(e)=> setCurrentColor(e.target.value);
 colorModeBtn.addEventListener('click',() =>setCurrentMode(colorModeBtn));
 rainbowModeBtn.addEventListener('click',() => setCurrentMode(rainbowModeBtn));
 eraserBtn.addEventListener('click',()=>setCurrentMode(eraserBtn));
 clearBtn.addEventListener('click',()=>clearGrid());
 scaler.addEventListener('input',updateSize);
 scaler.onchange =(e)=> changeSize(e.target.value);


 console.log( clearBtn.addEventListener('click',()=>clearGrid()));
 console.log(scaler.onchange =(e)=> changeSize(e.target.value));

 let mouseDown = false;
 document.body.onmousedown = () => (mouseDown = true);
 document.body.onmouseup = () => (mouseDown = false);

 function changeSize(value){
    setCurrentSize(value);
    updateSize(value);
    reloadGrid();
 }
 
scaler.onmouseup = (e) => updateSize(e.target.value);

 function reloadGrid(){
clearGrid()
setGridSize(currentSize)
 }
function clearGrid(){
   grid.children
   for(let i=0; i<grid.children.length; i++){
      grid.children[i].style.backgroundColor="#ffffff";

   }
}
console.log(grid.children)


function setGridSize(size){
grid.style.gridTemplateRows = `repeat(${size},1fr)`
grid.style.gridTemplateColumns =`repeat(${size},1fr)`;
for(let i=0; i<size * size; i++){
       const gridItem = document.createElement('div');
       gridItem.className = 'gridItems';
       gridItem.addEventListener('mouseover',changeColour);
       gridItem.addEventListener('mousedown',changeColour);
       grid.appendChild(gridItem);
   }
}
   function changeColour(e){
      if(currentMode === rainbowModeBtn){
         const colorR = Math.floor(Math.random() * 256); 
         const colorG = Math.floor(Math.random() * 256);
         const colorB = Math.floor(Math.random() * 256);
      e.target.style.backgroundColor =`rgb(${colorR},${colorG},${colorB})`
   }
   else if(currentMode === colorModeBtn){
      e.target.style.backgroundColor = currentColor;
   }
   else if(currentMode === eraserBtn){
      e.target.style.backgroundColor ='#ffffff';
   }
   }
   

    function activeButton(newMode){
      if(currentMode === rainbowModeBtn){
         rainbowModeBtn.classList.remove('active')
      }
      else if(currentMode === colorModeBtn){
         colorModeBtn.classList.remove('active')
      }
      else if(currentMode === eraserBtn){
         eraserBtn.classList.remove('active')
      }
      if (newMode === rainbowModeBtn){
         rainbowModeBtn.classList.add('active')
      }
      else if(newMode === colorModeBtn){
         colorModeBtn.classList.add('active')
      }
      else if(newMode === eraserBtn){
         eraserBtn.classList.add('active')
      }
   }
   window.onload =() =>{
      activeButton(defaultMode);
      setGridSize(defaultSize);
   }