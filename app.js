const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 700;
canvas.height = 700;

let painting = false;

ctx.strokeStyle = "black"
ctx.lineWidth =2.5;

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

onMouseDown = (event) => {
  painting = true;
  console.log(event)
}

// onMouseUp = (event) => {
//   stopPainting();
// }

// onMouseLeave = (event) => {
//   stopPainting();
// }

if(canvas){
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}