import { mat3 } from "./mat3.js";
import { vec3 } from "./vec3.js";
import { angle } from "./angle.js";

console.log("Hello world!");

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function draw()
{
  let W = canvas.width;
  let H = canvas.height;
  for (let i = 0; i < W; ++i) {
    for (let j = 0; j < H; ++j) {
      let x = i / (W - 1);
      let y = (H - 1 - j) / (H - 1);
    }
  }
}

// draw();

let Q = mat3.rotx(angle.degrees(30))
let R = mat3.rotz(angle.degrees(66.0)).mul(
        mat3.rotx(angle.degrees(75.5)));

console.log(mat3.rotx(angle.degrees(75.5)));
console.log(mat3.rotz(angle.degrees(66.0)));
console.log(R.dot(new vec3(0, 0, -1)));
