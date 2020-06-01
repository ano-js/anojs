// aditya1rawat

const $ = Sketch.create({ autoclear: false });
const { hypot } = Math;
let objs = [];
let hue = 200;

$.mouse.x = $.width/5;
$.mouse.y = $.height/5;

document.body.style.backgroundColor = "black";
document.body.style.overflow = "hidden";
document.body.style.cursor = "none";

class O {
  constructor(){
    this.init();
  }
  init(){
    this.x = random(0, $.width);
    this.y = 0;
    this.size = random(1, 10);
    this.a = .3;
    this.vx = random(-3, 3);
    this.vy = this.size;
    this.hue = hue;
    return this;
  }
  draw(){
    $.fillStyle = `hsla(${this.hue}, 100%, 50%, ${this.a})`;
    $.fillRect(this.x, this.y, this.size, this.size);
    this.update();
  }
  update(){
    
    if(Math.hypot(this.x - $.mouse.x, this.y - $.mouse.y) <= 200) {
      this.x += (this.vx * random() * .1);
      this.y += (this.vy * random() * .2);
      this.a = 1;
      $.globalCompositeOperation = "lighter";
    } else {
      this.y += this.vy;
      $.globalCompositeOperation = "source-over";
    }
    
    if(this.y > $.height){
      this.init();
    }
  }
}

$.draw = () => {
  $.fillStyle = "rgba(0, 0, 0, .15)";
  $.fillRect(1, 1, $.width, $.height);
  
  objs.forEach((o) => {
    o.draw();
  });
  
  $.globalCompositeOperation = "source-over";
  
  hue += .1;
}

for(let i = 0; i < 1000; i++){
  setTimeout(() => objs.push(new O()), i * 5);
}