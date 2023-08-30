import { vec3 } from "./vec3.js";

console.log("Hello world!");

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

console.log("canvasW: " + canvas.width);
console.log("canvasH: " + canvas.height);

function rgb(r, g, b)
{
  return `rgb(${r}, ${g}, ${b})`;
}

function draw()
{
  let W = canvas.width;
  let H = canvas.height;
  for (let i = 0; i < W; ++i) {
    for (let j = 0; j < H; ++j) {
      let x = i / (W - 1);
      let y = (H - 1 - j) / (H - 1);
      let ray = new vec3(2 * x - 1, 2 * y - 1, -0.1).unit();
      context.fillStyle = rgb(
        Math.abs(ray.x) * 255,
        Math.abs(ray.y) * 255,
        Math.abs(ray.z) * 255,
      );
      context.fillRect(i, j, 1, 1);
    }
  }
}

draw();
