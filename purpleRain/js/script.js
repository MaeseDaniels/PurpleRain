let canvas= document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let renderInterval = undefined;

const depthOptions = [0, 1, 2];

const sizesAndSpeed = {
  0: {
    size: 6,
    speed: 13
  },
  1: {
    size: 5,
    speed: 15
  },
  2: {
    size: 4,
    speed: 18
  }
};

let drops = [];



let x = 0;
let render = () => {
  for(let i = 0; i < 10; i++) {
    generateDrop();
  }
  
  ctx.clearRect(0, 0, 800, 600);
  
  ctx.fillStyle = 'purple';
  for(let i = 0; i < drops.length; i++) {
    let drop = drops[i];
    ctx.fillRect(drop.position.x, drop.position.y, drop.size.w, drop.size.h);
    if(drops[i].position.y >= 600) {
      drops.splice(i, 1);
    }else {
      drops[i].position.y += drops[i].speed;
    }
    
    
  }

  ctx.fillStyle = 'brown';
  ctx.fillRect(385, 0, 30, 600);
  ctx.fillRect(0, 285, 800, 30);
  ctx.fillRect(0, 0, 800, 20);
  ctx.fillRect(780, 0, 20, 600);
  ctx.fillRect(0, 580, 800, 20);
  ctx.fillRect(0, 0, 20, 600);
  
  // console.log(drops.length);
  // console.log(sizesAndSpeed[Math.trunc(Math.random() * 3)].size);
  if(x >= 800) {
    clearInterval(renderInterval);
  }
}

renderInterval = setInterval(render, 16);


let generateDrop = () => {
  let dropOpt = sizesAndSpeed[Math.trunc(Math.random() * 3)];
  drops.push({
    size: {h: dropOpt.size * 5, w: dropOpt.size / (Math.trunc(Math.random() * 3) + 2)},
    speed: dropOpt.speed,
    position: {x: Math.trunc(Math.random() * 800), y: -dropOpt.size}
  })
}