const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor')
// const colors = document.querySelectorAll('jsColor')
const fill = document.getElementById("fill")
const save = document.getElementById("save")

canvas.width = 700;
canvas.height = 700;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// defualt값으로 초기화
ctx.strokeStyle = "black"
ctx.fillStyle = "black"
ctx.lineWidth =2.5;

let painting = false;
let filling = false;

startPainting = () =>{
  painting = true;
}

stopPainting = () => {
  painting = false;
}

function onMouseMove(event) {
  const x = event.offsetX
  const y = event.offsetY
  if(!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  }else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function handleModeClick(){
  if(filling === true) {
    filling = false;
    fill.innerText = "Fill";
  }else{
    filling = true;
    fill.innerText="Paint";
  }
}

// onMouseDown = (event) => {
//   painting = true;
//   console.log(event)
// }

// onMouseUp = (event) => {
//   stopPainting();
// }

// onMouseLeave = (event) => {
//   stopPainting();
// }

changeColor = (e) => {
  const bgColor = e.target.style.backgroundColor
  // console.log(bgColor);
  ctx.strokeStyle = bgColor;
  ctx.fillStyle=ctx.strokeStyle;
}

handleCanvasClick = () => {
  if(filling){
    ctx.fillRect(0,0,canvas.width,canvas.height);
  }
}

handleCM = (e) => {
  // console.log(e)
  e.preventDefault();
}

//save
handleSaveClick = () => {
  // const image = canvas.toDataURL("image/jpeg"); //jpeg로 저장
  const image = canvas.toDataURL();                //png로 저장
  const link = document.createElement("a");
  link.href = image;
  link.download = "PainJS[EXPORT]";
  // console.log(link);
  link.click();
}

// fillCanvas = (e) => {
// // ctx.fillRect(e.offsetX, e.offsetY);
// console.log(e)
// }

if(canvas){
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click",handleCanvasClick);
  canvas.addEventListener("contextmenu", handleCM);
}

// console.log(Array.from(colors));
Array.from(colors).forEach(color => color.addEventListener("click",changeColor))
fill.addEventListener("click",handleModeClick)

if(save){
  save.addEventListener("click",handleSaveClick)
}