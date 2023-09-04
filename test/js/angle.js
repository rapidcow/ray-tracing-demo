export class angle
{
  constructor(theta) {
    this._radians = theta;
  }

  static degrees(theta) {
    let ang = new this();
    ang._degrees = theta;
    return ang;
  }

  radians() {
    if (this._radians === undefined) {
      this._radians = this._degrees * Math.PI / 180.0;
    }
    return this._radians;
  }

  degrees() {
    if (this._degrees === undefined) {
      this._degrees = this._radians / Math.PI * 180.0;
    }
    return this._degrees;
  }

  cos() {
    if (this._cos === undefined) {
      this._cos = Math.cos(this.radians());
    }
    return this._cos;
  }

  sin() {
    if (this._sin === undefined) {
      this._sin = Math.sin(this.radians());
    }
    return this._sin;
  }
}
