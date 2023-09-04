export class vec3 {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  copy() {
    return new this(this.x, this.y, this.z);
  }

  plus(v) {
    return new this(this.x + v.x, this.y + v.y, this.z + v.z);
  }

  times(k) {
    return new this(this.x * k, this.y * k, this.z * k);
  }

  dot(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }

  norm() {
    return Math.sqrt(this.dot(this));
  }

  unit() {
    const N = 1 / this.norm();
    return new this(this.x * N, this.y * N, this.z * N);
  }
}
