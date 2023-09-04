import { vec3 } from "./vec3.js";

export class rgb extends vec3 {
  constructor(r, g, b) {
    super(rectify(r), rectify(g), rectify(b));
  }

  // conversion https://stackoverflow.com/a/5624139
  static fromHex(hex) {
    function hexToRgb(hex) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      console.assert(result !== null);
      return new this(
        alphaFrom8Bit(parseInt(result[1], 16)),
        alphaFrom8Bit(parseInt(result[2], 16)),
        alphaFrom8Bit(parseInt(result[3], 16)),
      );
    }
  }

  // https://stackoverflow.com/a/5624139
  hex() {
    return "#" + (1 << 24 |
                  alphaTo8Bit(this.r) << 16 |
                  alphaTo8Bit(this.g) << 8 |
                  alphaTo8Bit(this.b)
                 ).toString(16).slice(1);
  }
}

function rectify(x) {
  return Math.max(0.0, Math.min(x, 1.0));
}

// https://stackoverflow.com/a/1914172
function alphaTo8Bit(f) {
  return Math.floor(f >= 1.0 ? 255 : f * 256.0);
}

function alphaFrom8Bit(b) {
  return b / 255.0;
}
