import { mat3 } from "./mat3.js";
import { vec3 } from "./vec3.js";
import { angle } from "./angle.js";

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

function euler(X, Y, Z)
{
  return mat3.rotz(angle.degrees(Z)).dot(
           mat3.roty(angle.degrees(Y)).dot(
             mat3.rotx(angle.degrees(X)).dot(
               new vec3(0, 0, -1)
             )
           )
         );
}

console.log(euler(75.5, 0.0, 66.0));
