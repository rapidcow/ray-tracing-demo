import { vec3 } from "./vec3.js";

export class mat3 {
  constructor( a11 = 1, a12 = 0, a13 = 0,
               a21 = 0, a22 = 1, a23 = 0,
               a31 = 0, a32 = 0, a33 = 1 )
  {
    this.elem = [
      a11, a12, a13,
      a21, a22, a23,
      a31, a32, a33,
    ];
  }

  at(r, c) {
    console.assert(1 <= r && r <= 3);
    console.assert(1 <= c && c <= 3);
    --r, --c;
    return this.elem[3*r + c];
  }

  columns() {
    return [
      new vec3( this.at(1,1), this.at(2,1), this.at(3,1) ),
      new vec3( this.at(1,2), this.at(2,2), this.at(3,2) ),
      new vec3( this.at(1,3), this.at(2,3), this.at(3,3) ),
    ];
  }

  static combine(i, j, k) {
    return new mat3( i.x, j.x, k.x,
                     i.y, j.y, k.y,
                     i.z, j.z, k.z );
  }

  T() {
    return new mat3( this.at(1,1), this.at(2,1), this.at(3,1),
                     this.at(1,2), this.at(2,2), this.at(3,2),
                     this.at(1,3), this.at(2,3), this.at(3,3) );
  }

  dot(v) {
    return new vec3( this.at(1,1) * v.x + this.at(1,2) * v.y + this.at(1,3) * v.z,
                     this.at(2,1) * v.x + this.at(2,2) * v.y + this.at(2,3) * v.z,
                     this.at(3,1) * v.x + this.at(3,2) * v.y + this.at(3,3) * v.z );
  }

  mul(m) {
    let [u, v, w] = m.columns();
    return mat3.combine(this.dot(u), this.dot(v), this.dot(w));
  }

  static rotx(theta) {
    const c = theta.cos();
    const s = theta.sin();
    return new mat3( 1,  0,  0,
                     0,  c, -s,
                     0,  s,  c );
  }

  static roty(theta) {
    const c = theta.cos();
    const s = theta.sin();
    return new mat3( c,  0,  s,
                     0,  1,  0,
                    -s,  0,  c );
  }

  static rotz(theta) {
    const c = theta.cos();
    const s = theta.sin();
    return new mat3( c, -s,  0,
                     s,  c,  0,
                     0,  0,  1 );
  }
}
